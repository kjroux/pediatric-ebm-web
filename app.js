// Pediatric Journal Article Repository - Main Application

// State Management
let currentView = 'home';
let currentSpecialty = null;
let currentIssue = null;
let isDirectNavigation = false; // Track if navigating directly from search/index

// Helper function to extract journal name from citation
function extractJournalName(citation) {
    // Extract journal name between author list and year
    // Common patterns: "Author. Journal. Year" or "Author, et al. Journal. Year"
    const match = citation.match(/\.\s+([A-Z][^.]+?)\.\s+\d{4}/);
    if (match) {
        return match[1].trim();
    }
    // Fallback for citations without clear pattern
    return 'DOI';
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderSpecialties();
    setupNavigation();
    setupTopNav();
    setupSearch();
    setupHeaderHomeLink();
});

// Render the specialty grid on homepage
function renderSpecialties() {
    const specialtyList = document.getElementById('specialty-list');
    specialtyList.innerHTML = '';

    // Sort specialties alphabetically by name
    const sortedKeys = Object.keys(specialtiesData).sort((a, b) => {
        return specialtiesData[a].name.localeCompare(specialtiesData[b].name);
    });

    sortedKeys.forEach(specialtyKey => {
        const specialty = specialtiesData[specialtyKey];
        const card = createSpecialtyCard(specialtyKey, specialty);
        specialtyList.appendChild(card);
    });
}

// Create a specialty card element
function createSpecialtyCard(key, specialty) {
    const card = document.createElement('div');
    card.className = 'specialty-card';
    const icon = specialty.icon || '📋';
    card.innerHTML = `
        <div class="specialty-icon">${icon}</div>
        <h3>${specialty.name}</h3>
    `;
    card.addEventListener('click', () => showIssues(key));
    return card;
}

// Show issues for a selected specialty
function showIssues(specialtyKey) {
    currentSpecialty = specialtyKey;
    currentIssue = null;
    const specialty = specialtiesData[specialtyKey];

    document.getElementById('specialty-title').textContent = specialty.name;
    const issuesList = document.getElementById('issues-list');
    issuesList.innerHTML = '';

    // Sort issues: populated pages first (alphabetically), then empty pages (alphabetically)
    const sortedIssues = [...specialty.issues].sort((a, b) => {
        const aHasData = !!articlesData[a];
        const bHasData = !!articlesData[b];

        // If one has data and the other doesn't, prioritize the one with data
        if (aHasData && !bHasData) return -1;
        if (!aHasData && bHasData) return 1;

        // Otherwise sort alphabetically
        return a.localeCompare(b);
    });

    sortedIssues.forEach(issue => {
        const card = createIssueCard(issue, specialtyKey);
        issuesList.appendChild(card);
    });

    switchView('issues');
    updateBreadcrumb();
}

// Show index view with all topics
function showIndex() {
    currentSpecialty = null;
    currentIssue = null;

    const indexList = document.getElementById('index-list');
    indexList.innerHTML = '';

    // Collect all unique topics from all specialties
    const allTopics = new Set();
    Object.keys(specialtiesData).forEach(specialtyKey => {
        const specialty = specialtiesData[specialtyKey];
        specialty.issues.forEach(issue => {
            allTopics.add(issue);
        });
    });

    // Convert to array and sort: populated first (alphabetically), then empty (alphabetically)
    const sortedTopics = Array.from(allTopics).sort((a, b) => {
        const aHasData = !!articlesData[a];
        const bHasData = !!articlesData[b];

        // If one has data and the other doesn't, prioritize the one with data
        if (aHasData && !bHasData) return -1;
        if (!aHasData && bHasData) return 1;

        // Otherwise sort alphabetically
        return a.localeCompare(b);
    });

    // Create cards for each topic
    sortedTopics.forEach(topic => {
        const card = createIssueCard(topic, null);
        indexList.appendChild(card);
    });

    switchView('index');
    updateBreadcrumb();
}

// Create an issue card element
function createIssueCard(issue, specialtyKey) {
    const card = document.createElement('div');
    card.className = 'issue-card';

    // Check if articles exist for this issue (data is indexed by topic name)
    const hasArticles = articlesData[issue];

    card.innerHTML = `
        <h4>${issue}</h4>
        ${!hasArticles ? '<p style="color: #6b7280; font-size: 0.875rem; margin-top: 0.5rem;">Articles coming soon</p>' : ''}
    `;

    if (hasArticles) {
        card.addEventListener('click', () => {
            // For index view, pass true for direct navigation to show simplified breadcrumb
            showArticles(specialtyKey, issue, true);
        });
    } else {
        card.style.cursor = 'default';
        card.style.opacity = '0.7';
    }

    return card;
}

// Show articles for a selected issue
function showArticles(specialtyKey, issue, fromDirectNavigation = false) {
    currentIssue = issue;
    isDirectNavigation = fromDirectNavigation;

    // Look up articles by topic name directly (not nested under specialty)
    const articleData = articlesData[issue];

    if (!articleData) {
        alert('Articles for this topic are coming soon.');
        return;
    }

    document.getElementById('issue-title').textContent = issue;

    // Check if this is the new comprehensive format
    if (articleData.orientationReview) {
        renderComprehensiveArticles(articleData);
    } else {
        // Use old rendering for backward compatibility
        renderLegacyArticles(articleData);
    }

    switchView('articles');
    updateBreadcrumb();
}

// Render comprehensive article format
function renderComprehensiveArticles(data) {
    const reviewsList = document.getElementById('systematic-reviews-list');
    const rctsList = document.getElementById('rcts-list');

    // Show the sections but hide legacy headers for comprehensive format
    document.getElementById('legacy-systematic-section').style.display = 'block';
    document.getElementById('legacy-rcts-section').style.display = 'none';

    // Hide only the h3 headers within these sections
    const systematicH3 = document.querySelector('#legacy-systematic-section h3');
    const rctsH3 = document.querySelector('#legacy-rcts-section h3');
    if (systematicH3) systematicH3.style.display = 'none';
    if (rctsH3) rctsH3.style.display = 'none';

    reviewsList.innerHTML = '';
    rctsList.innerHTML = '';

    let comprehensiveHTML = '';

    // Orientation Review
    if (data.orientationReview) {
        const pubmedLink = data.orientationReview.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${data.orientationReview.pmid}/` : '';
        const doiLink = data.orientationReview.doi ? `https://doi.org/${data.orientationReview.doi}` : '';
        const links = [];
        if (pubmedLink) links.push(`<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>`);
        if (doiLink) links.push(`<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>`);
        const linkHTML = links.length > 0 ? `<div class="review-links">${links.join(' | ')}</div>` : '';

        comprehensiveHTML += `
            <div class="article-section">
                <h3 class="section-title">Overview</h3>
                <div class="orientation-review">
                    <div class="review-citation">
                        <strong>${data.orientationReview.authors}.</strong> ${data.orientationReview.title}.
                        <em>${data.orientationReview.citation}</em>
                    </div>
                    <blockquote class="review-summary">${data.orientationReview.keyFindings}</blockquote>
                    ${linkHTML}
                </div>
        `;

        // Additional Reviews under same Overview section (if present)
        if (data.additionalReviews && data.additionalReviews.length > 0) {
            data.additionalReviews.forEach(review => {
                const pubmedLink = review.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${review.pmid}/` : '';
                const doiLink = review.doi ? `https://doi.org/${review.doi}` : '';
                const links = [];
                if (pubmedLink) links.push(`<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>`);
                if (doiLink) links.push(`<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>`);
                const linkHTML = links.length > 0 ? `<div class="review-links">${links.join(' | ')}</div>` : '';

                comprehensiveHTML += `
                    <div class="orientation-review" style="margin-top: 1.5rem;">
                        <div class="review-citation">
                            <strong>${review.authors}.</strong> ${review.title}.
                            <em>${review.citation}</em>
                        </div>
                        <blockquote class="review-summary">${review.keyFindings}</blockquote>
                        ${linkHTML}
                    </div>
                `;
            });
        }

        comprehensiveHTML += `</div>`;
    }

    // Guidelines
    if (data.guidelines && data.guidelines.length > 0) {
        comprehensiveHTML += `<div class="article-section"><h3 class="section-title">Guidelines</h3>`;
        data.guidelines.forEach(guideline => {
            const pubmedLink = guideline.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${guideline.pmid}/` : '';
            const doiLink = guideline.doi ? `https://doi.org/${guideline.doi}` : '';
            const websiteLink = guideline.url ? guideline.url : '';
            const links = [];
            if (pubmedLink) links.push(`<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>`);
            if (doiLink) links.push(`<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>`);
            if (websiteLink) links.push(`<a href="${websiteLink}" target="_blank" class="pubmed-link">Website</a>`);
            const linkHTML = links.length > 0 ? `<div class="review-links">${links.join(' | ')}</div>` : '';

            comprehensiveHTML += `
                <div class="guideline-card">
                    <div class="guideline-header">
                        <strong>${guideline.organization}</strong>
                        <span class="guideline-citation">${guideline.citation}</span>
                    </div>
                    <div class="guideline-recommendations">
                        <strong>Key recommendations:</strong> ${guideline.keyRecommendations}
                    </div>
                    ${linkHTML}
                </div>
            `;
        });
        comprehensiveHTML += `</div>`;
    }

    // Landmark RCTs
    if (data.landmarkRCTs) {
        comprehensiveHTML += `<div class="article-section"><h3 class="section-title">Landmark RCTs</h3>`;

        // Iterate over all subsections dynamically
        Object.keys(data.landmarkRCTs).forEach(subsectionKey => {
            const trials = data.landmarkRCTs[subsectionKey];
            if (trials && trials.length > 0) {
                // Convert camelCase to Title Case for display
                const subsectionTitle = subsectionKey
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase())
                    .trim();

                comprehensiveHTML += `
                    <h4 class="subsection-title">${subsectionTitle}</h4>
                    <table class="evidence-table">
                        <thead>
                            <tr>
                                <th class="study-column">Study</th>
                                <th class="citation-column">Citation</th>
                                <th class="n-column">n</th>
                                <th>Finding</th>
                                <th class="links-column">Links</th>
                            </tr>
                        </thead>
                        <tbody>
                `;
                trials.forEach(trial => {
                    const pubmedLink = trial.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${trial.pmid}/` : '';
                    const doiLink = trial.doi ? `https://doi.org/${trial.doi}` : '';
                    comprehensiveHTML += `
                        <tr>
                            <td class="study-column"><strong>${trial.study}</strong></td>
                            <td class="citation-column">${trial.citation}</td>
                            <td class="n-column">${trial.n.toLocaleString()}</td>
                            <td>${trial.finding}</td>
                            <td class="links-column">
                                ${pubmedLink ? `<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>` : ''}
                                ${pubmedLink && doiLink ? ' | ' : ''}
                                ${doiLink ? `<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>` : ''}
                            </td>
                        </tr>
                    `;
                });
                comprehensiveHTML += `</tbody></table>`;
            }
        });

        comprehensiveHTML += `</div>`;
    }

    // Negative Trials
    if (data.negativeTrials && data.negativeTrials.length > 0) {
        comprehensiveHTML += `
            <div class="article-section">
                <h3 class="section-title">Key Negative Trials</h3>
                <table class="evidence-table">
                    <thead>
                        <tr>
                            <th class="study-column">Intervention</th>
                            <th class="citation-column">Citation</th>
                            <th>Finding</th>
                            <th class="links-column">Links</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        data.negativeTrials.forEach(trial => {
            const pubmedLink = trial.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${trial.pmid}/` : '';
            const doiLink = trial.doi ? `https://doi.org/${trial.doi}` : '';
            comprehensiveHTML += `
                <tr>
                    <td class="study-column"><strong>${trial.intervention}</strong></td>
                    <td class="citation-column">${trial.citation}</td>
                    <td>${trial.finding}</td>
                    <td class="links-column">
                        ${pubmedLink ? `<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>` : ''}
                        ${pubmedLink && doiLink ? ' | ' : ''}
                        ${doiLink ? `<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>` : ''}
                    </td>
                </tr>
            `;
        });
        comprehensiveHTML += `</tbody></table></div>`;
    }

    // Systematic Reviews
    if (data.systematicReviews && data.systematicReviews.length > 0) {
        comprehensiveHTML += `
            <div class="article-section">
                <h3 class="section-title">Key Systematic Reviews</h3>
                <table class="evidence-table">
                    <thead>
                        <tr>
                            <th class="study-column">Topic</th>
                            <th class="citation-column">Citation</th>
                            <th>Conclusion</th>
                            <th class="links-column">Links</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        data.systematicReviews.forEach(review => {
            const pubmedLink = review.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${review.pmid}/` : '';
            const doiLink = review.doi ? `https://doi.org/${review.doi}` : '';
            comprehensiveHTML += `
                <tr>
                    <td class="study-column"><strong>${review.topic}</strong></td>
                    <td class="citation-column">${review.citation}</td>
                    <td>${review.conclusion}</td>
                    <td class="links-column">
                        ${pubmedLink ? `<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>` : ''}
                        ${pubmedLink && doiLink ? ' | ' : ''}
                        ${doiLink ? `<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>` : ''}
                    </td>
                </tr>
            `;
        });
        comprehensiveHTML += `</tbody></table></div>`;
    }

    // Observational Studies
    if (data.observationalStudies && data.observationalStudies.length > 0) {
        comprehensiveHTML += `
            <div class="article-section">
                <h3 class="section-title">Foundational Observational Studies</h3>
                <table class="evidence-table">
                    <thead>
                        <tr>
                            <th class="study-column">Study</th>
                            <th class="citation-column">Citation</th>
                            <th>Contribution</th>
                            <th class="links-column">Links</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        data.observationalStudies.forEach(study => {
            const pubmedLink = study.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${study.pmid}/` : '';
            const doiLink = study.doi ? `https://doi.org/${study.doi}` : '';
            comprehensiveHTML += `
                <tr>
                    <td class="study-column"><strong>${study.study}</strong></td>
                    <td class="citation-column">${study.citation}</td>
                    <td>${study.contribution}</td>
                    <td class="links-column">
                        ${pubmedLink ? `<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>` : ''}
                        ${pubmedLink && doiLink ? ' | ' : ''}
                        ${doiLink ? `<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>` : ''}
                    </td>
                </tr>
            `;
        });
        comprehensiveHTML += `</tbody></table></div>`;
    }

    // Quality Improvement
    if (data.qualityImprovement && data.qualityImprovement.length > 0) {
        comprehensiveHTML += `
            <div class="article-section">
                <h3 class="section-title">Quality Improvement</h3>
                <table class="evidence-table">
                    <thead>
                        <tr>
                            <th class="study-column">Study</th>
                            <th class="citation-column">Citation</th>
                            <th>Contribution</th>
                            <th class="links-column">Links</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        data.qualityImprovement.forEach(study => {
            const pubmedLink = study.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${study.pmid}/` : '';
            const doiLink = study.doi ? `https://doi.org/${study.doi}` : '';
            comprehensiveHTML += `
                <tr>
                    <td class="study-column"><strong>${study.study}</strong></td>
                    <td class="citation-column">${study.citation}</td>
                    <td>${study.contribution}</td>
                    <td class="links-column">
                        ${pubmedLink ? `<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>` : ''}
                        ${pubmedLink && doiLink ? ' | ' : ''}
                        ${doiLink ? `<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>` : ''}
                    </td>
                </tr>
            `;
        });
        comprehensiveHTML += `</tbody></table></div>`;
    }

    // Outcomes
    if (data.outcomes && data.outcomes.length > 0) {
        comprehensiveHTML += `
            <div class="article-section">
                <h3 class="section-title">Outcomes</h3>
                <table class="evidence-table">
                    <thead>
                        <tr>
                            <th class="study-column">Study</th>
                            <th class="citation-column">Citation</th>
                            <th>Contribution</th>
                            <th class="links-column">Links</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        data.outcomes.forEach(study => {
            const pubmedLink = study.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${study.pmid}/` : '';
            const doiLink = study.doi ? `https://doi.org/${study.doi}` : '';
            comprehensiveHTML += `
                <tr>
                    <td class="study-column"><strong>${study.study}</strong></td>
                    <td class="citation-column">${study.citation}</td>
                    <td>${study.contribution}</td>
                    <td class="links-column">
                        ${pubmedLink ? `<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>` : ''}
                        ${pubmedLink && doiLink ? ' | ' : ''}
                        ${doiLink ? `<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>` : ''}
                    </td>
                </tr>
            `;
        });
        comprehensiveHTML += `</tbody></table></div>`;
    }

    // Global Health Perspective
    if (data.globalHealth && data.globalHealth.length > 0) {
        comprehensiveHTML += `
            <div class="article-section">
                <h3 class="section-title">Global Health Perspective</h3>
                <table class="evidence-table">
                    <thead>
                        <tr>
                            <th class="study-column">Study</th>
                            <th class="citation-column">Citation</th>
                            <th>Key Findings</th>
                            <th class="links-column">Links</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        data.globalHealth.forEach(study => {
            const pubmedLink = study.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${study.pmid}/` : '';
            const doiLink = study.doi ? `https://doi.org/${study.doi}` : '';
            comprehensiveHTML += `
                <tr>
                    <td class="study-column"><strong>${study.study}</strong></td>
                    <td class="citation-column">${study.citation}</td>
                    <td>${study.keyFindings}</td>
                    <td class="links-column">
                        ${pubmedLink ? `<a href="${pubmedLink}" target="_blank" class="pubmed-link">PubMed</a>` : ''}
                        ${pubmedLink && doiLink ? ' | ' : ''}
                        ${doiLink ? `<a href="${doiLink}" target="_blank" class="pubmed-link">Journal</a>` : ''}
                    </td>
                </tr>
            `;
        });
        comprehensiveHTML += `</tbody></table>`;

        if (data.globalHealthSummary) {
            comprehensiveHTML += `
                <div class="global-health-summary">
                    <strong>Key points:</strong>
                    <p>${data.globalHealthSummary}</p>
                </div>
            `;
        }
        comprehensiveHTML += `</div>`;
    }

    // Bottom Line
    if (data.bottomLine) {
        comprehensiveHTML += `
            <div class="article-section">
                <h3 class="section-title">Bottom Line</h3>
                <div class="bottom-line-container">
                    <div class="bottom-line-column effective">
                        <h4>✓ Effective</h4>
                        <ul>
                            ${data.bottomLine.effective.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="bottom-line-column uncertain">
                        <h4>? Uncertain</h4>
                        <ul>
                            ${data.bottomLine.uncertain.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="bottom-line-column ineffective">
                        <h4>✗ Ineffective</h4>
                        <ul>
                            ${data.bottomLine.ineffective.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // Key Teaching Points (optional)
    if (data.keyTeachingPoints && data.keyTeachingPoints.length > 0) {
        comprehensiveHTML += `
            <div class="article-section">
                <h3 class="section-title">Key Teaching Points</h3>
                <ol class="key-teaching-points">
                    ${data.keyTeachingPoints.map(point => {
                        // Convert markdown bold (**text**) to HTML <strong>
                        const formattedPoint = point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        return `<li>${formattedPoint}</li>`;
                    }).join('')}
                </ol>
            </div>
        `;
    }

    reviewsList.innerHTML = comprehensiveHTML;
}

// Render legacy article format (backward compatibility)
function renderLegacyArticles(articleData) {
    const reviewsList = document.getElementById('systematic-reviews-list');
    const rctsList = document.getElementById('rcts-list');

    // Show legacy sections and headers
    document.getElementById('legacy-systematic-section').style.display = 'block';
    document.getElementById('legacy-rcts-section').style.display = 'block';

    // Show the h3 headers for legacy format
    const systematicH3 = document.querySelector('#legacy-systematic-section h3');
    const rctsH3 = document.querySelector('#legacy-rcts-section h3');
    if (systematicH3) systematicH3.style.display = 'block';
    if (rctsH3) rctsH3.style.display = 'block';

    reviewsList.innerHTML = '';
    rctsList.innerHTML = '';

    articleData.systematicReviews.forEach(article => {
        const card = createArticleCard(article, 'systematic-review');
        reviewsList.appendChild(card);
    });

    articleData.rcts.forEach(article => {
        const card = createArticleCard(article, 'rct');
        rctsList.appendChild(card);
    });
}

// Create an article card element
function createArticleCard(article, type) {
    const card = document.createElement('div');
    card.className = 'article-card';

    const badgeClass = type === 'systematic-review' ? 'badge-systematic-review' : 'badge-rct';
    const badgeText = type === 'systematic-review' ? 'Systematic Review' : 'RCT';

    const pubmedLink = article.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${article.pmid}/` : '#';
    const doiLink = article.doi ? `https://doi.org/${article.doi}` : '#';

    card.innerHTML = `
        <div class="article-title">${article.title}</div>
        <div class="article-authors">${article.authors}</div>
        <div class="article-citation">${article.citation}</div>
        <div class="article-meta">
            <span class="article-badge ${badgeClass}">${badgeText}</span>
        </div>
        ${article.keyFindings ? `
        <div class="article-key-findings">
            <h5>Key Findings</h5>
            <p>${article.keyFindings}</p>
        </div>
        ` : ''}
        <div style="margin-top: 1rem; display: flex; gap: 1rem;">
            ${article.pmid ? `<a href="${pubmedLink}" target="_blank" class="article-link">View on PubMed →</a>` : ''}
            ${article.doi ? `<a href="${doiLink}" target="_blank" class="article-link">DOI →</a>` : ''}
        </div>
    `;

    return card;
}

// Switch between different views
function switchView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    document.getElementById(`${viewName}-view`).classList.add('active');
    currentView = viewName;
}

// Update breadcrumb navigation
function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb-content');
    let html = '<a href="#" id="home-link">Home</a>';

    // If navigating directly from search/index, show simplified breadcrumb
    if (isDirectNavigation && currentIssue) {
        html += ` <span>›</span> <span>${currentIssue}</span>`;
    } else if (currentSpecialty) {
        const specialtyName = specialtiesData[currentSpecialty].name;
        if (currentIssue) {
            html += ` <span>›</span> <a href="#" id="specialty-link">${specialtyName}</a>`;
            html += ` <span>›</span> <span>${currentIssue}</span>`;
        } else {
            html += ` <span>›</span> <span>${specialtyName}</span>`;
        }
    }

    breadcrumb.innerHTML = html;
    setupNavigation();
}

// Setup navigation event listeners
function setupNavigation() {
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentSpecialty = null;
            currentIssue = null;
            isDirectNavigation = false;
            switchView('home');
            updateBreadcrumb();
        });
    }

    const specialtyLink = document.getElementById('specialty-link');
    if (specialtyLink) {
        specialtyLink.addEventListener('click', (e) => {
            e.preventDefault();
            showIssues(currentSpecialty);
        });
    }
}

// Setup top navigation menu
function setupTopNav() {
    const navSpecialties = document.getElementById('nav-specialties');
    const navIndex = document.getElementById('nav-index');
    const navFaq = document.getElementById('nav-faq');

    navSpecialties.addEventListener('click', (e) => {
        e.preventDefault();
        currentSpecialty = null;
        currentIssue = null;
        isDirectNavigation = false;
        switchView('home');
        updateBreadcrumb();
        updateActiveNav('nav-specialties');
    });

    navIndex.addEventListener('click', (e) => {
        e.preventDefault();
        showIndex();
        updateActiveNav('nav-index');
    });

    navFaq.addEventListener('click', (e) => {
        e.preventDefault();
        currentSpecialty = null;
        currentIssue = null;
        isDirectNavigation = false;
        switchView('faq');
        updateBreadcrumb();
        updateActiveNav('nav-faq');
    });
}

// Update active navigation link
function updateActiveNav(activeId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById(activeId).classList.add('active');
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('topic-search');
    const searchDropdown = document.getElementById('search-dropdown');

    // Build search index from specialties
    function buildSearchIndex() {
        const searchIndex = [];
        Object.keys(specialtiesData).forEach(specialtyKey => {
            const specialty = specialtiesData[specialtyKey];
            specialty.issues.forEach(issue => {
                searchIndex.push({
                    topic: issue,
                    specialty: specialty.name,
                    specialtyKey: specialtyKey
                });
            });
        });
        return searchIndex;
    }

    const searchIndex = buildSearchIndex();

    // Handle search input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();

        if (query.length === 0) {
            searchDropdown.classList.remove('active');
            searchDropdown.innerHTML = '';
            return;
        }

        // Filter results
        const filteredResults = searchIndex.filter(item =>
            item.topic.toLowerCase().includes(query)
        );

        // Remove duplicates by topic (keep only unique topics)
        const uniqueTopics = new Map();
        filteredResults.forEach(item => {
            if (!uniqueTopics.has(item.topic)) {
                uniqueTopics.set(item.topic, item);
            }
        });
        const results = Array.from(uniqueTopics.values());

        // Sort results: populated first (alphabetically), then unpopulated (alphabetically)
        results.sort((a, b) => {
            const aHasData = !!articlesData[a.topic];
            const bHasData = !!articlesData[b.topic];

            if (aHasData && !bHasData) return -1;
            if (!aHasData && bHasData) return 1;

            return a.topic.localeCompare(b.topic);
        });

        // Render results
        if (results.length === 0) {
            searchDropdown.innerHTML = '<div class="search-no-results">No topics found</div>';
            searchDropdown.classList.add('active');
        } else {
            searchDropdown.innerHTML = results.slice(0, 10).map(result => {
                const hasData = !!articlesData[result.topic];
                const comingSoon = !hasData ? '<span style="color: #9ca3af; font-size: 0.75rem; margin-left: 0.5rem;">Articles coming soon</span>' : '';
                return `
                    <div class="search-result-item ${!hasData ? 'search-result-disabled' : ''}"
                         data-specialty="${result.specialtyKey}"
                         data-topic="${result.topic}"
                         data-has-data="${hasData}">
                        <div class="search-result-topic">${result.topic}${comingSoon}</div>
                    </div>
                `;
            }).join('');
            searchDropdown.classList.add('active');

            // Add click handlers to results
            searchDropdown.querySelectorAll('.search-result-item').forEach(item => {
                const hasData = item.dataset.hasData === 'true';

                if (hasData) {
                    item.addEventListener('click', () => {
                        const specialty = item.dataset.specialty;
                        const topic = item.dataset.topic;

                        // Navigate to the topic with direct navigation flag
                        showArticles(specialty, topic, true);

                        // Clear search
                        searchInput.value = '';
                        searchDropdown.classList.remove('active');
                        searchDropdown.innerHTML = '';
                    });
                }
            });
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.classList.remove('active');
        }
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchDropdown.classList.remove('active');
            searchInput.blur();
        }
    });
}

// Setup header home link
function setupHeaderHomeLink() {
    const headerHomeLink = document.getElementById('header-home-link');
    if (headerHomeLink) {
        headerHomeLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentSpecialty = null;
            currentIssue = null;
            isDirectNavigation = false;
            switchView('home');
            updateBreadcrumb();
            updateActiveNav('nav-specialties');
        });
    }
}
