# Content Generation Guide — Pediatric EBM Web (Minimal Entry Version)

Copy this entire file into a Claude conversation (claude.ai) to generate a new
topic page. Replace the placeholder at the bottom with the topic you want, and
Claude will return a JavaScript object you paste into `data.js`.

---

## PROJECT BRIEF

**Pediatric EBM Web** is a static reference website that organizes curated
evidence-based medicine for pediatric subspecialties. It is built with plain
HTML/CSS/JavaScript — no framework, no build step. All content lives in
`data.js`.

The audience is **clinicians and trainees** (residents, fellows, attendings)
practicing primarily in **US settings**. Content should be concise, clinical,
and assume medical literacy. The goal is a fast orientation to the best
evidence on a clinical topic: the landmark trials, the guidelines, what works,
what doesn't, and what's still uncertain.

**How the data is structured:**

- `specialtiesData` — 23 subspecialties, each listing its clinical topics ("issues").
- `articlesData` — the article content, keyed by **topic name**. A topic page
  appears as soon as an entry exists in `articlesData` whose key exactly matches
  the topic string in `specialtiesData`.

**Hard rules for generated content:**

1. **Only cite real, verifiable studies.** Every PMID and DOI must be accurate
   and resolve to the cited paper. Do not invent trials, authors, or identifiers.
   If you are not confident a reference is real, leave it out.
2. **Prefer US guidelines.** When choosing the single guideline for a minimum
   viable entry, default to US-issued guidance — AAP, AAFP, ACOG (where
   relevant), CDC, NIH/NHLBI, IDSA, ACR, AHA, etc. Fall back to international
   bodies (NICE, GINA, GOLD, ERS, WHO) only when no US guideline exists, when
   the US guideline is materially out of date, or when the international
   guideline is clearly the global reference standard for the topic. If
   including additional guidelines beyond the minimum, list the US one first.
3. **Prefer top-tier journals for `orientationReview`.** The single anchor
   review should come from NEJM, Lancet (or Lancet Child & Adolescent Health),
   Pediatrics, or JAMA Pediatrics whenever a high-quality review exists in
   those venues. Specialty journals (e.g. Pediatric Pulmonology, J Pediatr,
   Pediatr Crit Care Med) are acceptable only when no recent top-tier review
   is available. Recency matters — favor reviews from the last ~5 years unless
   an older landmark review remains the definitive synthesis.
4. **The `articlesData` key must exactly match** the topic string as it appears
   in `specialtiesData` (including capitalization and punctuation, e.g.
   `"Asthma: chronic management"`).
5. **`n` in `landmarkRCTs` must be a number**, not a string (e.g. `n: 800`).
6. `orientationReview` is required — its presence is what tells the app to use
   the rich layout. All other sections are optional; omit any section you don't
   have solid evidence for, don't pad.
7. `landmarkRCTs` subsection keys are **camelCase** and auto-render as Title Case
   (e.g. `maintenanceTherapy` → "Maintenance Therapy"). Name them by clinical
   theme.
8. `keyTeachingPoints` strings may use `**bold**` markdown; no other fields do.
9. Keep `finding` / `conclusion` / `contribution` text to roughly one sentence —
   these render inside table cells.

---

## MINIMUM VIABLE ENTRY

**This is what to generate by default.** It's a focused starter entry that
gives a usable topic page with low token cost. The remaining sections in the
full template (below) can be added later when fleshing the topic out.

A minimum viable entry contains exactly these sections:

- `orientationReview` — **1** authoritative review (required). Prefer NEJM,
  Lancet, Pediatrics, or JAMA Pediatrics.
- `guidelines` — **1** practice guideline. Prefer a US source.
- `landmarkRCTs` — **1–2** key trials, grouped under one clinical theme.
- `bottomLine` — the three-column at-a-glance verdict.
- `keyTeachingPoints` — 3–5 numbered teaching points.

That's it. Skip `additionalReviews`, `negativeTrials`, `systematicReviews`,
`observationalStudies`, `qualityImprovement`, `outcomes`, and `globalHealth`
unless explicitly asked.

---

## DATA TEMPLATE (FULL)

The template below shows every supported section. For a minimum viable entry,
fill in only the sections marked in the list above and delete the rest. Section
order below matches the order they render on the page.

```javascript
"EXACT TOPIC NAME": {
    // REQUIRED — triggers the rich layout. One authoritative review/seminar.
    // PREFER top-tier journals: NEJM, Lancet (incl. Lancet Child & Adolescent
    // Health), Pediatrics, JAMA Pediatrics. Drop to a specialty journal only
    // if no high-quality top-tier review exists.
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

    // MINIMUM VIABLE — include 1. PREFER a US guideline (AAP, AAFP, CDC,
    // NIH/NHLBI, IDSA, ACR, AHA, etc.). Use international guidance (NICE,
    // GINA, GOLD, ERS, WHO) only when no US equivalent exists or it is the
    // accepted global standard. If listing several, put the US one first.
    // Use `url` for org websites without a PMID/DOI.
    guidelines: [
        {
            organization: "AAP",                 // prefer US: AAP, AAFP, CDC, NIH, IDSA, AHA, ACR
            citation: "Author. Journal. Year;Vol:Pages",
            pmid: "",
            doi: "",
            url: "",                             // optional, for guideline websites
            keyRecommendations: "The key actionable recommendations, semicolon-separated."
        }
    ],

    // MINIMUM VIABLE — include 1-2 key trials grouped by clinical theme.
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

    // MINIMUM VIABLE — the at-a-glance verdict, three columns.
    bottomLine: {
        effective:   ["", ""],   // interventions with solid evidence of benefit
        uncertain:   ["", ""],   // promising or conflicting evidence
        ineffective: ["", ""]    // shown not to work (or to harm)
    },

    // MINIMUM VIABLE — 3-5 numbered teaching points. `**bold**` supported here.
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

Generate a **minimum viable entry** for the topic below, following the brief,
rules, and the "Minimum Viable Entry" section above. Include only:
`orientationReview`, `guidelines` (1), `landmarkRCTs` (1–2 trials),
`bottomLine`, and `keyTeachingPoints`.

For the `orientationReview`, prefer a recent review from NEJM, Lancet (or
Lancet Child & Adolescent Health), Pediatrics, or JAMA Pediatrics. For the
`guidelines` entry, prefer a US guideline (AAP, AAFP, CDC, NIH/NHLBI, IDSA,
ACR, AHA, etc.) and fall back to international guidance only when no US
equivalent exists or it is the accepted global standard.

**Topic:** `<PUT THE EXACT TOPIC NAME HERE>`
**Subspecialty:** `<e.g. Pediatric Pulmonology>`

Return only the JavaScript object, ready to paste into `data.js`. For every
study include a real PMID and DOI; omit any reference you cannot verify.
