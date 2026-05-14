# Content Generation Guide — Pediatric EBM Web

Copy this entire file into a Claude conversation (claude.ai) to generate a new
topic page. Replace the placeholder at the bottom with the topic you want, and
Claude will return a JavaScript object you paste into `data.js`.

---

## PROJECT BRIEF

**Pediatric EBM Web** is a static reference website that organizes curated
evidence-based medicine for pediatric subspecialties. It is built with plain
HTML/CSS/JavaScript — no framework, no build step. All content lives in
`data.js`.

The audience is **clinicians and trainees** (residents, fellows, attendings).
Content should be concise, clinical, and assume medical literacy. The goal is a
fast orientation to the best evidence on a clinical topic: the landmark trials,
the guidelines, what works, what doesn't, and what's still uncertain.

**How the data is structured:**

- `specialtiesData` — 23 subspecialties, each listing its clinical topics ("issues").
- `articlesData` — the article content, keyed by **topic name**. A topic page
  appears as soon as an entry exists in `articlesData` whose key exactly matches
  the topic string in `specialtiesData`.

**Hard rules for generated content:**

1. **Only cite real, verifiable studies.** Every PMID and DOI must be accurate
   and resolve to the cited paper. Do not invent trials, authors, or identifiers.
   If you are not confident a reference is real, leave it out.
2. **The `articlesData` key must exactly match** the topic string as it appears
   in `specialtiesData` (including capitalization and punctuation, e.g.
   `"Asthma: chronic management"`).
3. **`n` in `landmarkRCTs` must be a number**, not a string (e.g. `n: 800`).
4. All sections are **optional** except `orientationReview` — its presence is
   what tells the app to use the rich layout. Omit any section you don't have
   solid evidence for; don't pad.
5. `landmarkRCTs` subsection keys are **camelCase** and auto-render as Title Case
   (e.g. `maintenanceTherapy` → "Maintenance Therapy"). Name them by clinical
   theme.
6. `keyTeachingPoints` strings may use `**bold**` markdown; no other fields do.
7. Keep `finding` / `conclusion` / `contribution` text to roughly one sentence —
   these render inside table cells.

The site footer already states content is AI-assisted and must be independently
verified, but accuracy still matters — wrong PMIDs make the tool useless.

---

## DATA TEMPLATE

Fill in the sections you have good evidence for and delete the rest. Section
order below matches the order they render on the page.

```javascript
"EXACT TOPIC NAME": {
    // REQUIRED — triggers the rich layout. One authoritative review/seminar.
    orientationReview: {
        title: "",
        authors: "Last FM, Last FM, Last FM",   // up to ~4 names, no "et al." needed
        citation: "Journal. Year;Volume(Issue):Pages",
        pmid: "",
        doi: "",
        keyFindings: "2-3 sentences: what this review covers and why it's the best single starting point."
    },

    // OPTIONAL — extra reviews shown under the same "Overview" heading.
    additionalReviews: [
        {
            title: "",
            authors: "",
            citation: "",
            pmid: "",
            doi: "",
            keyFindings: ""
        }
    ],

    // OPTIONAL — practice guidelines. Use `url` for org websites without a PMID/DOI.
    guidelines: [
        {
            organization: "AAP",                 // e.g. AAP, GINA 2023, NICE
            citation: "Author. Journal. Year;Vol:Pages",
            pmid: "",
            doi: "",
            url: "",                             // optional, for guideline websites
            keyRecommendations: "The key actionable recommendations, semicolon-separated."
        }
    ],

    // OPTIONAL — the major RCTs, grouped by clinical theme.
    // Keys are camelCase and become section sub-headings automatically.
    landmarkRCTs: {
        therapeutics: [
            {
                study: "TRIAL ACRONYM",
                citation: "Author. Journal. Year;Vol:Pages",
                pmid: "",
                doi: "",
                n: 0,                            // NUMBER, not a string
                finding: "One-sentence result, ideally with effect size or NNT."
            }
        ],
        prevention: [
            // same shape as above
        ]
    },

    // OPTIONAL — important trials that showed NO benefit (or harm).
    negativeTrials: [
        {
            intervention: "",                    // the thing that didn't work
            citation: "",
            pmid: "",
            doi: "",
            finding: "What was tested and that it showed no benefit / harm."
        }
    ],

    // OPTIONAL — key systematic reviews / meta-analyses.
    systematicReviews: [
        {
            topic: "",                           // what the review examined
            citation: "",
            pmid: "",
            doi: "",
            conclusion: "One-sentence bottom line."
        }
    ],

    // OPTIONAL — foundational cohort / observational studies.
    observationalStudies: [
        {
            study: "",
            citation: "",
            pmid: "",
            doi: "",
            contribution: "What this study added to understanding of the topic."
        }
    ],

    // OPTIONAL — quality improvement studies.
    qualityImprovement: [
        {
            study: "",
            citation: "",
            pmid: "",
            doi: "",
            contribution: ""
        }
    ],

    // OPTIONAL — long-term outcomes studies.
    outcomes: [
        {
            study: "",
            citation: "",
            pmid: "",
            doi: "",
            contribution: ""
        }
    ],

    // OPTIONAL — global health / LMIC evidence.
    globalHealth: [
        {
            study: "",
            citation: "",
            pmid: "",
            doi: "",
            keyFindings: ""
        }
    ],
    // OPTIONAL — narrative summary shown below the globalHealth table.
    globalHealthSummary: "A paragraph on how the global/LMIC picture differs from high-income settings.",

    // OPTIONAL but recommended — the at-a-glance verdict, three columns.
    bottomLine: {
        effective:   ["", ""],   // interventions with solid evidence of benefit
        uncertain:   ["", ""],   // promising or conflicting evidence
        ineffective: ["", ""]    // shown not to work (or to harm)
    },

    // OPTIONAL — numbered teaching points. `**bold**` markdown is supported here.
    keyTeachingPoints: [
        "**Lead phrase** — the rest of the teaching point.",
        ""
    ]
}
```

---

## HOW TO USE THE RESULT

1. Open `data.js`.
2. Find the `const articlesData = {` object.
3. Paste the new topic object as a new entry inside it (mind the commas between
   entries).
4. Confirm the key string exactly matches the topic in `specialtiesData`.
5. Save, reload the site, and click through to the topic to check it renders.

---

## REQUEST TO CLAUDE

Generate a complete `articlesData` entry, following the brief, rules, and
template above, for this topic:

**Topic:** `<PUT THE EXACT TOPIC NAME HERE>`
**Subspecialty:** `<e.g. Pediatric Pulmonology>`

Return only the JavaScript object, ready to paste into `data.js`. For every
study include a real PMID and DOI; omit any reference you cannot verify.
