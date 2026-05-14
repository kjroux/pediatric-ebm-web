# Pediatric Journal Article Repository

A clean, professional website for organizing and accessing curated pediatric journal articles by subspecialty and clinical topic.

## Features

- **22 Pediatric Subspecialties** organized in an easy-to-navigate interface
- **Bread-and-butter clinical issues** for each subspecialty
- **Curated evidence-based articles** including:
  - 1-2 Systematic Reviews/Meta-Analyses per topic
  - 4-5 Major Randomized Controlled Trials per topic
- **Professional medical education design** optimized for readability
- **Responsive layout** works on desktop, tablet, and mobile
- **Direct links to PubMed and DOI** for each article

## Quick Start

### Option 1: Open Locally
1. Open `index.html` in any web browser
2. No server required - works directly from the file system

### Option 2: Simple Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then open your browser to `http://localhost:8000`

## Hosting Options

### GitHub Pages (Free)
1. Create a new GitHub repository
2. Upload all files (index.html, styles.css, app.js, data.js)
3. Go to Settings → Pages
4. Select "main" branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Free)
1. Go to [netlify.com](https://www.netlify.com/)
2. Drag and drop the entire folder
3. Your site is instantly live with a custom URL

### Vercel (Free)
1. Go to [vercel.com](https://vercel.com/)
2. Import the project
3. Deploy with one click

### Traditional Web Hosting
Upload all files to any web hosting service (shared hosting, VPS, etc.) via FTP/SFTP.

## File Structure

```
pediatric-journal-repository/
├── index.html          # Main HTML structure
├── styles.css          # All styling and design
├── app.js             # Application logic and navigation
├── data.js            # Subspecialties, issues, and articles database
└── README.md          # This file
```

## Adding New Articles

To add articles for additional topics, edit the `data.js` file:

```javascript
const articlesData = {
    "specialty-key": {
        "Issue Name": {
            systematicReviews: [
                {
                    title: "Article Title",
                    authors: "Author A, Author B, et al.",
                    citation: "Journal. Year;Volume(Issue):Pages",
                    pmid: "12345678",
                    doi: "10.xxxx/xxxxx",
                    keyFindings: "Summary of key findings..."
                }
            ],
            rcts: [
                {
                    title: "RCT Title",
                    authors: "Author C, Author D, et al.",
                    citation: "Journal. Year;Volume(Issue):Pages",
                    pmid: "87654321",
                    doi: "10.xxxx/xxxxx",
                    keyFindings: "Summary of key findings..."
                }
            ]
        }
    }
};
```

## Current Content

### Completed Topics
- **Pediatric Pulmonology → Bronchiolitis** (2 systematic reviews + 5 RCTs)

### Coming Soon
Articles for the remaining 100+ clinical topics across all subspecialties

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Change Colors
Edit `styles.css` and modify the color values:
- Primary blue: `#1e3a8a` and `#3b82f6`
- Success green: `#10b981`
- Background: `#f5f7fa`

### Modify Layout
All layout settings are in `styles.css`:
- Grid columns: `.specialty-grid { grid-template-columns: ... }`
- Container width: `.container { max-width: 1200px; }`
- Spacing and padding throughout

## License

For educational purposes. Article citations and data remain property of their respective publishers and authors.

## Contributing

To add articles or suggest improvements:
1. Edit `data.js` with new article information
2. Ensure proper citation format
3. Include PubMed ID (PMID) and DOI when available
4. Add concise key findings summary

## Support

For issues or questions about using this repository, please refer to the documentation in this README.
