// Pediatric Journal Article Repository Data

const specialtiesData = {
    "allergy-immunology": {
        name: "Allergy/Immunology",
        icon: "🤧",
        issues: [
            "Anaphylaxis",
            "Food allergies",
            "Atopic dermatitis/eczema",
            "Asthma: chronic management"
        ]
    },
    "cardiology": {
        name: "Cardiology",
        icon: "❤️",
        issues: [
            "Kawasaki disease",
            "Innocent murmurs vs pathologic murmurs",
            "Syncope evaluation",
            "Chest pain evaluation"
        ]
    },
    "critical-care": {
        name: "Critical Care",
        icon: "🚨",
        issues: [
            "Shock",
            "Acute respiratory failure/ARDS",
            "Mechanical ventilation",
            "Status epilepticus",
            "Sepsis and septic shock"
        ]
    },
    "developmental-behavioral": {
        name: "Developmental-Behavioral Pediatrics",
        icon: "🧩",
        issues: [
            "Autism spectrum disorder",
            "ADHD",
            "Developmental milestones and screening",
            "Anxiety and depression in children and adolescents"
        ]
    },
    "emergency-medicine": {
        name: "Emergency Medicine",
        icon: "🚑",
        issues: [
            "Head trauma",
            "Poisoning/ingestions",
            "Trauma management",
            "Pediatric resuscitation",
            "Procedural sedation",
            "Child abuse recognition and reporting",
            "Anaphylaxis",
            "Status epilepticus",
            "Diabetic ketoacidosis",
            "Sepsis and septic shock"
        ]
    },
    "endocrinology": {
        name: "Endocrinology",
        icon: "🩺",
        issues: [
            "Type 1 diabetes mellitus",
            "Type 2 diabetes and obesity",
            "Diabetic ketoacidosis",
            "Short stature evaluation",
            "Congenital hypothyroidism"
        ]
    },
    "ent": {
        name: "Otolaryngology (ENT)",
        icon: "👂",
        issues: [
            "Acute otitis media",
            "Obstructive sleep apnea and tonsillectomy indications",
            "Sinusitis",
            "Epistaxis",
            "Hearing loss screening"
        ]
    },
    "gastroenterology": {
        name: "Gastroenterology",
        icon: "🫄",
        issues: [
            "GERD vs physiologic reflux",
            "Failure to thrive",
            "Chronic constipation",
            "Acute abdominal pain",
            "Inflammatory bowel disease",
            "Celiac disease"
        ]
    },
    "general-surgery": {
        name: "General Surgery",
        icon: "🔪",
        issues: [
            "Appendicitis",
            "Intussusception",
            "Pyloric stenosis",
            "Inguinal hernias and hydroceles",
            "Necrotizing enterocolitis"
        ]
    },
    "hematology-oncology": {
        name: "Hematology/Oncology",
        icon: "🩸",
        issues: [
            "Sickle cell disease",
            "Iron deficiency anemia",
            "Immune thrombocytopenic purpura",
            "Bleeding disorders (hemophilia and VWD)",
            "Acute lymphoblastic leukemia",
            "Brain tumors",
            "Tumor lysis syndrome"
        ]
    },
    "hospital-medicine": {
        name: "Hospital Medicine",
        icon: "🏥",
        issues: [
            "Bronchiolitis",
            "Sepsis and septic shock",
            "Croup",
            "Community-acquired pneumonia",
            "Asthma: acute management",
            "Dehydration/gastroenteritis",
            "Fever management and workup",
            "Urinary tract infections",
            "Skin and soft tissue infections",
            "Diabetic ketoacidosis",
            "Seizures",
            "Neonatal hyperbilirubinemia",
            "Neonatal fever workup",
            "Brief resolved unexplained events",
            "Antimicrobial stewardship",
            "Pain management",
            "Child abuse recognition and reporting",
            "Observation vs inpatient status"
        ]
    },
    "infectious-diseases": {
        name: "Infectious Diseases",
        icon: "🦠",
        issues: [
            "Immunization schedules",
            "Bacterial meningitis",
            "Encephalitis",
            "Osteomyelitis",
            "Septic arthritis vs transient synovitis",
            "Lyme disease",
            "Fever without source in young infants",
            "Kawasaki disease",
            "Acute otitis media"
        ]
    },
    "neonatology": {
        name: "Neonatology",
        icon: "👶",
        issues: [
            "Respiratory distress syndrome",
            "Transient tachypnea of the newborn",
            "Neonatal jaundice/hyperbilirubinemia",
            "Neonatal sepsis",
            "Neonatal hypoglycemia",
            "Hypoxic-ischemic encephalopathy",
            "Neonatal abstinence syndrome",
            "Necrotizing enterocolitis"
        ]
    },
    "nephrology": {
        name: "Nephrology",
        icon: "🫘",
        issues: [
            "Nephrotic syndrome",
            "Acute kidney injury",
            "Pediatric hypertension",
            "Hemolytic uremic syndrome",
            "Hematuria and proteinuria evaluation",
            "Urinary tract infections"
        ]
    },
    "neurology": {
        name: "Neurology",
        icon: "🧠",
        issues: [
            "Febrile seizures",
            "Epilepsy syndromes",
            "Status epilepticus",
            "Headache/migraine",
            "Cerebral palsy",
            "Concussion/mild TBI"
        ]
    },
    "neurosurgery": {
        name: "Neurosurgery",
        icon: "🧠",
        issues: [
            "Shunt malfunction/infection"
        ]
    },
    "ophthalmology": {
        name: "Ophthalmology",
        icon: "👁️",
        issues: [
            "Vision screening abnormalities",
            "Preseptal vs orbital cellulitis"
        ]
    },
    "orthopedic-surgery": {
        name: "Orthopedic Surgery",
        icon: "🦴",
        issues: [
            "Developmental dysplasia of the hip",
            "Septic arthritis vs transient synovitis",
            "Common pediatric fractures",
            "Limp evaluation",
            "Nursemaid's elbow"
        ]
    },
    "plastic-surgery": {
        name: "Plastic Surgery",
        icon: "✨",
        issues: [
            "Infantile hemangiomas"
        ]
    },
    "pulmonology": {
        name: "Pulmonology",
        icon: "🫁",
        issues: [
            "Asthma: chronic management",
            "Bronchiolitis",
            "Cystic fibrosis",
            "Chronic cough evaluation",
            "Foreign body aspiration",
            "Community-acquired pneumonia"
        ]
    },
    "rheumatology": {
        name: "Rheumatology",
        icon: "🦵",
        issues: [
            "Juvenile idiopathic arthritis",
            "HSP / IgA vasculitis",
            "Systemic lupus erythematosus",
            "Growing pains",
            "Septic arthritis vs transient synovitis"
        ]
    },
    "urology": {
        name: "Urology",
        icon: "💧",
        issues: [
            "Urinary tract infections",
            "Vesicoureteral reflux",
            "Testicular torsion",
            "Undescended testes/cryptorchidism"
        ]
    }
};

// Articles Database - indexed by topic name for cross-specialty support
const articlesData = {
    "Bronchiolitis": {
        orientationReview: {
            title: "Viral Bronchiolitis",
            authors: "Florin TA, Plint AC, Zorc JJ",
            citation: "Lancet. 2017;389(10065):211-224",
            pmid: "27494553",
            doi: "10.1016/S0140-6736(16)30951-5",
            keyFindings: "Comprehensive seminar covering epidemiology, pathophysiology, clinical features, diagnosis, evidence-based management, and prevention. Excellent single-source overview."
        },
        guidelines: [
            {
                organization: "AAP",
                citation: "Ralston SL, et al. Pediatrics. 2014;134(5):e1474-502",
                pmid: "25349312",
                doi: "10.1542/peds.2014-2742",
                keyRecommendations: "Diagnose clinically (no routine labs/CXR); do NOT use albuterol, epinephrine, or systemic steroids; supportive care only; SpO₂ ≥90% acceptable; may consider hypertonic saline in hospitalized patients (weak)."
            }
        ],
        landmarkRCTs: {
            therapeutics: [
                {
                    study: "CanBEST",
                    citation: "Plint AC, et al. N Engl J Med. 2009;360:2079-89",
                    pmid: "19439742",
                    doi: "10.1056/NEJMoa0900544",
                    n: 800,
                    finding: "Epi + dex reduced admissions (NNT=11); neither alone effective. Awaiting confirmation (BIPED trial)."
                },
                {
                    study: "PECARN Steroids",
                    citation: "Corneli HM, et al. N Engl J Med. 2007;357:331-9",
                    pmid: "17652648",
                    doi: "10.1056/NEJMoa071255",
                    n: 600,
                    finding: "Dexamethasone alone: no effect on admission or clinical course."
                },
                {
                    study: "SABRE",
                    citation: "Everard ML, et al. Health Technol Assess. 2015;19(66)",
                    pmid: "26295732",
                    doi: "10.3310/hta19660",
                    n: 317,
                    finding: "3% hypertonic saline: no effect on LOS."
                },
                {
                    study: "PARIS",
                    citation: "Franklin D, et al. N Engl J Med. 2018;378:1121-31",
                    pmid: "29562151",
                    doi: "10.1056/NEJMoa1714855",
                    n: 1472,
                    finding: "HFNC reduced escalation of care (NNT=9); no difference in ICU/LOS."
                },
                {
                    study: "TRAMONTANE",
                    citation: "Milési C, et al. Intensive Care Med. 2017;43:209-16",
                    pmid: "27734109",
                    doi: "10.1007/s00134-016-4617-8",
                    n: 142,
                    finding: "Severe bronchiolitis: nCPAP superior to HFNC."
                }
            ],
            prevention: [
                {
                    study: "MELODY",
                    citation: "Hammitt LL, et al. N Engl J Med. 2022;386:837-46",
                    pmid: "35235726",
                    doi: "10.1056/NEJMoa2110275",
                    n: 1490,
                    finding: "Nirsevimab reduced RSV LRTI by 74.5%."
                },
                {
                    study: "HARMONIE",
                    citation: "Drysdale S, et al. N Engl J Med. 2023;389:2425-35",
                    pmid: "38157500",
                    doi: "10.1056/NEJMoa2309189",
                    n: 8058,
                    finding: "Real-world: 83% reduction in RSV hospitalizations."
                }
            ]
        },
        negativeTrials: [
            {
                intervention: "Albuterol",
                citation: "Gadomski AM. Cochrane. 2014",
                pmid: "24937099",
                doi: "10.1002/14651858.CD001266.pub4",
                finding: "No effect on any outcome (30 RCTs, n=1,992)"
            },
            {
                intervention: "Steroids alone",
                citation: "Corneli HM, et al. N Engl J Med. 2007",
                pmid: "17652648",
                doi: "10.1056/NEJMoa071255",
                finding: "No benefit (n=600)"
            },
            {
                intervention: "Chest PT",
                citation: "Roqué i Figuls M. Cochrane. 2016",
                pmid: "26833493",
                doi: "10.1002/14651858.CD004873.pub5",
                finding: "No benefit; possible harm"
            }
        ],
        systematicReviews: [
            {
                topic: "Hypertonic saline",
                citation: "Zhang L, et al. Cochrane. 2023",
                pmid: "37014057",
                doi: "10.1002/14651858.CD006458.pub5",
                conclusion: "May reduce LOS ~10 hrs; low certainty"
            },
            {
                topic: "Glucocorticoids",
                citation: "Fernandes RM, et al. Cochrane. 2013",
                pmid: "23733383",
                doi: "10.1002/14651858.CD004878.pub4",
                conclusion: "No benefit alone"
            },
            {
                topic: "Epinephrine",
                citation: "Hartling L, et al. Cochrane. 2011",
                pmid: "21678340",
                doi: "10.1002/14651858.CD003123.pub3",
                conclusion: "May reduce day-1 admits; no sustained effect"
            },
            {
                topic: "HFNC",
                citation: "Armarego M, et al. Cochrane. 2024",
                pmid: "38506440",
                doi: "10.1002/14651858.CD009609.pub3",
                conclusion: "Reduces treatment failure; no effect on LOS/ICU"
            }
        ],
        observationalStudies: [
            {
                study: "MARC-35 Cohort",
                citation: "Hasegawa K, et al. (multiple)",
                pmid: "27707873",
                doi: "10.1016/j.jaci.2016.08.048",
                contribution: "RSV vs rhinovirus are distinct phenotypes with different outcomes"
            },
            {
                study: "Bronchiolitis-Asthma",
                citation: "Muñoz-Quiles C, et al. J Infect Dis. 2023",
                pmid: "36130208",
                doi: "10.1093/infdis/jiac394",
                contribution: "Any bronchiolitis → ≥3× asthma risk"
            }
        ],
        globalHealth: [
            {
                study: "RSV Global Burden",
                citation: "Li Y, et al. Lancet. 2022;399:2047-64",
                pmid: "35598608",
                doi: "10.1016/S0140-6736(22)00478-0",
                keyFindings: "33 million RSV-ALRI episodes/year; >97% of ~101,000 deaths in children <5 occur in LMICs; 4 community deaths for every in-hospital death in low-income settings"
            },
            {
                study: "Preterm Global Burden",
                citation: "Wang X, et al. Lancet. 2024;403:1009-21",
                pmid: "38367644",
                doi: "10.1016/S0140-6736(24)00138-7",
                keyFindings: "Preterm infants: ~27,000 RSV deaths/year globally; vast majority occur outside hospitals in LMICs due to limited healthcare access"
            },
            {
                study: "LMIC Disparities",
                citation: "Stein RT, Zar HJ. Lancet. 2024",
                pmid: "38367645",
                doi: "10.1016/S0140-6736(24)00254-X",
                keyFindings: "RSV burden inequitably distributed; prevention (nirsevimab, maternal vaccines) is key since antivirals unavailable and supportive care infrastructure limited"
            }
        ],
        globalHealthSummary: "RSV is a leading cause of infant mortality globally, but >97% of deaths occur in LMICs. Most deaths in low-income settings occur in the community (limited hospital access). High-income country evidence (HFNC, monitoring thresholds) may not translate to resource-limited settings. Prevention strategies (nirsevimab, maternal RSV vaccines) offer greatest potential to reduce global mortality, but cost and cold-chain requirements remain barriers.",
        bottomLine: {
            effective: ["Supportive care", "HFNC (rescue)", "Nirsevimab (prevention)"],
            uncertain: ["Hypertonic saline (inpatient)", "Epi + dex combo"],
            ineffective: ["Albuterol", "Steroids alone", "Epinephrine alone", "Chest PT"]
        }
    },
    "Asthma: chronic management": {
        orientationReview: {
            title: "Asthma: chronic management",
            authors: "Porsbjerg C, Melén E, Lehtimäki L, Shaw D",
            citation: "Lancet. 2023;401(10379):858-873",
            pmid: "36682372",
            doi: "10.1016/S0140-6736(22)02125-0",
            keyFindings: "Comprehensive seminar covering epidemiology, pathophysiology, diagnosis, and management in children and adults. Addresses phenotypes, biologics, and the shift toward remission as a treatment goal."
        },
        guidelines: [
            {
                organization: "GINA 2023",
                citation: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2023",
                pmid: "",
                doi: "",
                url: "https://ginasthma.org/",
                keyRecommendations: "ICS-containing therapy for all patients with asthma (Track 1: ICS-formoterol as needed; Track 2: ICS whenever SABA taken); SABA-only treatment no longer recommended for adolescents/adults; Single Maintenance and Reliever Therapy (SMART) with ICS-formoterol preferred for steps 3-5; Biologics for severe type 2 asthma"
            },
            {
                organization: "NAEPP 2020",
                citation: "Expert Panel Working Group. J Allergy Clin Immunol. 2020;146(6):1217-1270",
                pmid: "33280709",
                doi: "10.1016/j.jaci.2020.10.003",
                keyRecommendations: "Intermittent ICS with as-needed SABA for mild persistent asthma (conditional); SMART with ICS-formoterol strong recommendation for ages ≥4; Add-on LAMA for uncontrolled asthma on ICS-LABA; FeNO useful for diagnosis and monitoring"
            }
        ],
        landmarkRCTs: {
            maintenanceTherapy: [
                {
                    study: "CAMP",
                    citation: "Childhood Asthma Management Program Research Group. NEJM. 2000;343:1054-63",
                    pmid: "11027739",
                    doi: "10.1056/NEJM200010123431501",
                    n: 1041,
                    finding: "ICS (budesonide) improved symptoms/exacerbations but not lung growth; ~1 cm height reduction"
                },
                {
                    study: "BADGER",
                    citation: "Lemanske RF Jr, et al. NEJM. 2010;362:975-85",
                    pmid: "20197425",
                    doi: "10.1056/NEJMoa1001278",
                    n: 182,
                    finding: "LABA step-up best for most children uncontrolled on low-dose ICS; response varies individually"
                },
                {
                    study: "TREXA",
                    citation: "Martinez FD, et al. Lancet. 2011;377:650-7",
                    pmid: "21324520",
                    doi: "10.1016/S0140-6736(10)62145-9",
                    n: 288,
                    finding: "Rescue ICS+SABA reduces exacerbations vs SABA alone; daily ICS most effective"
                }
            ],
            smartTherapy: [
                {
                    study: "SYGMA 1",
                    citation: "O'Byrne PM, et al. NEJM. 2018;378:1865-76",
                    pmid: "29768149",
                    doi: "10.1056/NEJMoa1715274",
                    n: 3849,
                    finding: "As-needed budesonide-formoterol superior to SABA for exacerbations; inferior to daily ICS for symptom control"
                },
                {
                    study: "SYGMA 2",
                    citation: "Bateman ED, et al. NEJM. 2018;378:1877-87",
                    pmid: "29768147",
                    doi: "10.1056/NEJMoa1715275",
                    n: 4215,
                    finding: "As-needed budesonide-formoterol noninferior to maintenance ICS for exacerbations; 75% less steroid exposure"
                }
            ],
            biologics: [
                {
                    study: "ICATA (omalizumab)",
                    citation: "Busse WW, et al. NEJM. 2011;364:1005-15",
                    pmid: "21410369",
                    doi: "10.1056/NEJMoa1009705",
                    n: 419,
                    finding: "Omalizumab reduced symptoms 24.5%, exacerbations 49%, hospitalizations 75% in inner-city children"
                },
                {
                    study: "VOYAGE (dupilumab)",
                    citation: "Bacharier LB, et al. NEJM. 2021;385:2230-40",
                    pmid: "34879449",
                    doi: "10.1056/NEJMoa2106567",
                    n: 408,
                    finding: "Dupilumab reduced exacerbations 59%, improved FEV1 in children 6-11 with type 2 asthma"
                }
            ]
        },
        negativeTrials: [
            {
                intervention: "Doubling ICS at exacerbation",
                citation: "Kew KM, et al. Cochrane. 2022",
                pmid: "36161875",
                doi: "10.1002/14651858.CD007524.pub5",
                finding: "No reduction in need for oral steroids (8 RCTs)"
            },
            {
                intervention: "LTRA vs ICS as first-line",
                citation: "Chauhan BF, et al. Cochrane. 2012",
                pmid: "22419337",
                doi: "10.1002/14651858.CD003137.pub4",
                finding: "ICS superior to LTRA for exacerbations and lung function"
            }
        ],
        systematicReviews: [
            {
                topic: "ICS and growth",
                citation: "Zhang L, et al. Cochrane. 2014",
                pmid: "25030198",
                doi: "10.1002/14651858.CD009471.pub2",
                conclusion: "ICS reduce growth velocity ~0.5 cm/year in first year; effect attenuates"
            },
            {
                topic: "ICS-LABA vs higher-dose ICS",
                citation: "Ducharme FM, et al. Cochrane. 2010",
                pmid: "20393942",
                doi: "10.1002/14651858.CD003135.pub4",
                conclusion: "Adding LABA superior to increasing ICS dose for exacerbation prevention"
            },
            {
                topic: "ICS-formoterol SMART",
                citation: "Kew KM, et al. Cochrane. 2013",
                pmid: "24363060",
                doi: "10.1002/14651858.CD009019.pub2",
                conclusion: "SMART reduces exacerbations vs fixed-dose ICS-LABA plus SABA reliever"
            },
            {
                topic: "Omalizumab in children",
                citation: "Normansell R, et al. Cochrane. 2014",
                pmid: "24414323",
                doi: "10.1002/14651858.CD003559.pub4",
                conclusion: "Reduces exacerbations ~25%, steroid-sparing; generally well-tolerated"
            }
        ],
        observationalStudies: [
            {
                study: "CAMP Long-term Follow-up",
                citation: "Kelly HW, et al. NEJM. 2012;367:904-12",
                pmid: "22938716",
                doi: "10.1056/NEJMoa1203229",
                contribution: "ICS-associated height deficit (1.2 cm) persists into adulthood"
            },
            {
                study: "Lung function trajectories",
                citation: "McGeachie MJ, et al. NEJM. 2016;374:1842-52",
                pmid: "27168434",
                doi: "10.1056/NEJMoa1513737",
                contribution: "4 lung function trajectories in childhood asthma; early reduced growth → COPD risk"
            },
            {
                study: "COAST (childhood origins)",
                citation: "Jackson DJ, et al. JACI. 2010;126:747-53",
                pmid: "20920764",
                doi: "10.1016/j.jaci.2010.07.025",
                contribution: "Wheezing rhinovirus illnesses strongest predictor of subsequent asthma"
            }
        ],
        globalHealth: [
            {
                study: "GBD 2021 Asthma",
                citation: "GBD Collaborators. Lancet Respir Med. 2025;13(3):267-283",
                pmid: "39920762",
                doi: "10.1016/S2213-2600(25)00003-7",
                keyFindings: "260 million with asthma globally; age-standardized prevalence declining but total cases rising"
            },
            {
                study: "GAN Phase I",
                citation: "Asher MI, et al. Lancet. 2021;398:1569-80",
                pmid: "34755628",
                doi: "10.1016/S0140-6736(21)01450-1",
                keyFindings: "Global asthma symptom prevalence varied 20-fold; 1/3 to 1/2 of symptomatic children have severe symptoms"
            },
            {
                study: "GBD Childhood Asthma",
                citation: "Zhang X, et al. Front Pediatr. 2022;10:823399",
                pmid: "",
                doi: "10.3389/fped.2022.823399",
                keyFindings: "22 million incident cases in children (2019); 65% reduction in mortality since 1990"
            }
        ],
        globalHealthSummary: "Asthma affects 260 million people globally, with age-standardized prevalence declining but total cases rising due to population growth. Global disparities are stark: symptom prevalence varies 20-fold between countries, and mortality remains concentrated in LMICs despite a 65% reduction since 1990. Access to ICS—the cornerstone of therapy—remains a critical barrier in resource-limited settings, where 1/3 to 1/2 of symptomatic children have severe symptoms.",
        bottomLine: {
            effective: ["ICS (mainstay of therapy)", "ICS-LABA for uncontrolled", "SMART (ICS-formoterol prn)", "Biologics (severe type 2)", "Written asthma action plans"],
            uncertain: ["LTRA as add-on", "Doubling ICS at exacerbation", "Allergen immunotherapy", "Azithromycin prophylaxis"],
            ineffective: ["SABA monotherapy", "LTRA as first-line monotherapy"]
        }
    },
    "Sepsis and septic shock": {
        orientationReview: {
            title: "Sepsis and septic shock",
            authors: "Watson RS, Carrol ED, Carter MJ, et al",
            citation: "Lancet Child Adolesc Health. 2024;8(9):670-681",
            pmid: "39121879",
            doi: "10.1016/S2352-4642(24)00140-8",
            keyFindings: "First paper of the 2024 Lancet Series on pediatric sepsis. Comprehensive review of global burden, incidence, pathogens, and post-sepsis syndrome. Half of 50 million global sepsis cases occur in children <19 years with 3+ million deaths annually."
        },
        additionalReviews: [
            {
                title: "Pediatric Sepsis Diagnosis, Management, and Sub-phenotypes",
                authors: "Weiss SL, Fitzgerald JC",
                citation: "Pediatrics. 2024;153(1):e2023062967",
                pmid: "38084084",
                doi: "10.1542/peds.2023-062967",
                keyFindings: "AAP state-of-the-art review covering screening, bundles, fluid resuscitation controversies, vasoactive selection, and emerging precision medicine approaches."
            }
        ],
        guidelines: [
            {
                organization: "Phoenix Criteria (Consensus)",
                citation: "Schlapbach LJ, Watson RS, Sorce LR, et al. JAMA. 2024;331(8):665-674",
                pmid: "38245889",
                doi: "10.1001/jama.2024.0196",
                keyRecommendations: "Replaces 2005 IPSCC criteria; moves from SIRS-based to organ dysfunction-based definition. Sepsis = suspected infection + Phoenix Sepsis Score ≥2 (4 organs: respiratory, cardiovascular, coagulation, neurologic). Septic Shock = sepsis + cardiovascular dysfunction (vasoactive requirement or lactate >5 mmol/L). Validated across 3+ million encounters from 10 sites on 4 continents."
            },
            {
                organization: "Phoenix Criteria (Validation)",
                citation: "Sanchez-Pinto LN, Bennett TD, DeWitt PE, et al. JAMA. 2024;331(8):675-686",
                pmid: "38245897",
                doi: "10.1001/jama.2024.0179",
                keyRecommendations: "International validation of Phoenix criteria showing superior performance compared to previous definitions for identifying sepsis and septic shock in children."
            },
            {
                organization: "Surviving Sepsis Campaign",
                citation: "Weiss SL, Peters MJ, Alhazzani W, et al. Pediatr Crit Care Med. 2020;21(2):e52-e106",
                pmid: "32032273",
                doi: "10.1097/PCC.0000000000002198",
                keyRecommendations: "Systematic screening for early recognition; Antibiotics within 1 hour (septic shock) or 3 hours (sepsis without shock); Fluids: 40-60 mL/kg in first hour for shock; avoid boluses without hypotension in resource-limited settings; Vasoactives: Epinephrine or norepinephrine preferred over dopamine; Corticosteroids: No routine use; consider if fluid/vasoactive refractory"
            }
        ],
        landmarkRCTs: {
            fluidResuscitation: [
                {
                    study: "FEAST",
                    citation: "Maitland K, et al. NEJM. 2011;364:2483-95",
                    pmid: "21615299",
                    doi: "10.1056/NEJMoa1101549",
                    n: 3141,
                    finding: "Fluid boluses increased 48-hour mortality vs. no bolus (10.5% vs 7.3%) in African children with impaired perfusion. Context: Conducted without ICU access; results challenged aggressive fluid resuscitation dogma."
                }
            ],
            vasoactiveAgents: [
                {
                    study: "Dopamine vs Epinephrine (Brazil)",
                    citation: "Ventura AM, et al. Crit Care Med. 2015;43:2292-302",
                    pmid: "26323041",
                    doi: "10.1097/CCM.0000000000001260",
                    n: 120,
                    finding: "Epinephrine reduced mortality vs dopamine (7% vs 20.6%, p=0.033)"
                },
                {
                    study: "Dopamine vs Epinephrine (India)",
                    citation: "Ramaswamy KN, et al. Pediatr Crit Care Med. 2016;17:e502-12",
                    pmid: "27673385",
                    doi: "10.1097/PCC.0000000000000954",
                    n: 60,
                    finding: "Epinephrine achieved faster shock reversal (41% vs 13% at 1 hour, p=0.019)"
                }
            ],
            earlyVasoactives: [
                {
                    study: "RESPOND ED",
                    citation: "Harley A, et al. Pediatr Crit Care Med. 2024;25:106-117",
                    pmid: "38032634",
                    doi: "10.1097/PCC.0000000000003384",
                    n: 40,
                    finding: "Early epinephrine after 20 mL/kg feasible; faster inotrope initiation, less total fluid"
                },
                {
                    study: "SQUEEZE Pilot",
                    citation: "Choong K, et al. Pilot Feasibility Stud. 2025",
                    pmid: "",
                    doi: "10.1186/s40814-025-01731-4",
                    n: 51,
                    finding: "Fluid-sparing strategy feasible; definitive trial ongoing"
                }
            ]
        },
        negativeTrials: [
            {
                intervention: "SSC Bundle Compliance",
                citation: "Workman JK, et al. Pediatr Crit Care Med. 2016;17:e451-8",
                pmid: "27500722",
                doi: "10.1097/PCC.0000000000000859",
                finding: "1-hour bundle compliance not associated with improved outcomes (36% compliance)"
            },
            {
                intervention: "Adult Restrictive Fluids (CLOVERS)",
                citation: "NHLBI PETAL Network. NEJM. 2023;388:499-510",
                pmid: "36688507",
                doi: "10.1056/NEJMoa2212663",
                finding: "No mortality difference between restrictive and liberal strategies in adults"
            }
        ],
        qualityImprovement: [
            {
                study: "IPSO Collaborative",
                citation: "Paul R, et al. Pediatrics. 2023;152:e2022059938",
                pmid: "37435672",
                doi: "10.1542/peds.2022-059938",
                contribution: "40 children's hospitals; bundle compliance reduced 30-day mortality 35% (1.4% → 0.9%); modified bundle (antibiotics <180 min) better than strict 1-hour"
            },
            {
                study: "Single-Center QI",
                citation: "Paul R, et al. Pediatrics. 2016;138:e20154153",
                pmid: "27604184",
                doi: "10.1542/peds.2015-4153",
                contribution: "Bundle compliance associated with 5-fold lower mortality (OR 0.20)"
            }
        ],
        outcomes: [
            {
                study: "LAPSE (mortality/HRQL trajectory)",
                citation: "Zimmerman JJ, et al. Crit Care Med. 2020;48:319-28",
                pmid: "32058370",
                doi: "10.1097/CCM.0000000000004123",
                contribution: "9% in-hospital mortality; 35% of survivors had significant HRQL decline at 12 months"
            },
            {
                study: "LAPSE (risk factors)",
                citation: "Zimmerman JJ, et al. Crit Care Med. 2020;48:329-37",
                pmid: "32058369",
                doi: "10.1097/CCM.0000000000004122",
                contribution: "Cumulative organ dysfunction, vasoactive intensity, and neurologic events predicted poor outcomes"
            }
        ],
        globalHealth: [
            {
                study: "GBD Sepsis 2017",
                citation: "Rudd KE, et al. Lancet. 2020;395:200-211",
                pmid: "31954465",
                doi: "10.1016/S0140-6736(19)32989-7",
                keyFindings: "48.9 million incident cases, 11 million deaths globally (19.7% of all deaths); half in children <5 years"
            },
            {
                study: "Global Pediatric/Neonatal Burden",
                citation: "Fleischmann-Struzek C, et al. Lancet Respir Med. 2018;6:223-230",
                pmid: "29508706",
                doi: "10.1016/S2213-2600(18)30063-8",
                keyFindings: "3 million neonatal and 1.2 million childhood sepsis cases; mortality 11-19% neonates, 1-20% children"
            },
            {
                study: "SPROUT",
                citation: "Weiss SL, et al. Am J Respir Crit Care Med. 2015;191:1147-57",
                pmid: "25734408",
                doi: "10.1164/rccm.201412-2323OC",
                keyFindings: "Point prevalence: 8.2% of PICU patients had severe sepsis; 25% mortality; respiratory infections most common"
            }
        ],
        globalHealthSummary: "Sepsis causes 48.9 million cases and 11 million deaths annually worldwide, with half of cases occurring in children under 5 years. The burden is overwhelmingly concentrated in low- and middle-income countries, where 3 million neonatal and 1.2 million childhood cases occur annually. Mortality rates vary dramatically by setting (11-19% in neonates, 1-20% in children), reflecting disparities in early recognition, timely antibiotics, and critical care resources. The FEAST trial demonstrated that context matters—interventions proven in high-resource settings may not translate to resource-limited environments.",
        bottomLine: {
            effective: ["Early recognition/screening", "Timely antibiotics (<3 hours)", "Epinephrine/norepinephrine for shock", "Sepsis bundles improve outcomes", "Phoenix criteria (2024)"],
            uncertain: ["Optimal fluid volume (40-60 mL/kg vs less)", "Restrictive vs liberal fluids in high-resource", "Corticosteroids (awaiting SHIPSS)", "Balanced vs unbalanced crystalloids", "Biomarker-guided therapy"],
            ineffective: ["Dopamine as first-line vasoactive", "Fluid boluses without hypotension (low-resource)", "Routine corticosteroids"]
        },
        keyTeachingPoints: [
            "**Phoenix replaces IPSCC** — 2024 criteria shift from SIRS to organ dysfunction; validated globally across resource settings",
            "**FEAST changed the conversation** — fluid boluses increased mortality in resource-limited settings; reinforces context matters",
            "**Epinephrine over dopamine** — two RCTs show faster shock reversal and/or improved survival with epinephrine",
            "**Bundles work** — IPSO showed 35% mortality reduction; key elements are recognition + timely antibiotics + fluid when indicated",
            "**Timing flexibility** — IPSO showed antibiotics within 180 minutes (not 60) may be acceptable; overly aggressive timelines may not add benefit",
            "**Post-sepsis syndrome is real** — LAPSE showed 35% of survivors have persistent HRQL impairment at 1 year",
            "**Global burden immense** — half of 50 million annual cases occur in children; majority of deaths in sub-Saharan Africa"
        ]
    },
    "Croup": {
        orientationReview: {
            title: "Croup in children",
            authors: "Bjornson CL, Johnson DW",
            citation: "CMAJ. 2013;185(15):1317-1323",
            pmid: "23939212",
            doi: "10.1503/cmaj.121645",
            keyFindings: "Concise modern overview covering epidemiology, severity assessment (Westley score), and management. Synthesizes the evidence that oral corticosteroids reduce respiratory distress severity, hospital admission, intubation, and return visits across all severities, and that most children — including many presenting with stridor at rest — can be safely discharged after dexamethasone (± epinephrine) and a few hours of observation."
        },
        guidelines: [
            {
                organization: "Canadian Paediatric Society",
                citation: "Ortiz-Alvarez O. Paediatr Child Health. 2017;22(3):166-173",
                pmid: "29532807",
                doi: "10.1093/pch/pxx019",
                url: "https://cps.ca/en/documents/position/acute-management-of-croup",
                keyRecommendations: "Single oral dose of dexamethasone 0.6 mg/kg for all severities (mild, moderate, severe); nebulized epinephrine (racemic or L-) for moderate-to-severe croup with stridor at rest or significant retractions; observe for 2–4 hours after epinephrine and discharge if no recurrent stridor; avoid routine humidified air, antibiotics, antitussives, and decongestants; consider alternative diagnoses (bacterial tracheitis, epiglottitis, foreign body) for atypical features."
            }
        ],
        landmarkRCTs: {
            corticosteroids: [
                {
                    study: "PERC dexamethasone for mild croup",
                    citation: "Bjornson CL, et al. N Engl J Med. 2004;351(13):1306-1313",
                    pmid: "15385657",
                    doi: "10.1056/NEJMoa033534",
                    n: 720,
                    finding: "Single oral dexamethasone 0.6 mg/kg in mild croup (Westley ≤2) roughly halved return visits to medical care (7.3% vs 15.3%), shortened symptom duration, and reduced parental stress — establishing steroids as standard for all severities, not just moderate-to-severe."
                }
            ]
        },
        bottomLine: {
            effective: [
                "Single-dose oral dexamethasone 0.6 mg/kg for all severities, including mild",
                "Nebulized epinephrine (racemic or L-) for moderate-to-severe croup",
                "Observation 2–4 hours post-epinephrine before discharge"
            ],
            uncertain: [
                "Lower-dose dexamethasone (0.15 mg/kg) — likely non-inferior but evidence base smaller",
                "Heliox for severe croup — limited RCT data, possible role in ICU as a bridge",
                "Multi-dose vs single-dose dexamethasone in admitted patients"
            ],
            ineffective: [
                "Humidified or 'mist' air therapy",
                "Antibiotics in routine viral croup",
                "Cough suppressants and decongestants"
            ]
        },
        keyTeachingPoints: [
            "**Steroids for everyone** — A single oral dose of dexamethasone 0.6 mg/kg benefits all severities; the Bjornson 2004 NEJM trial in mild croup yielded an NNT of ~12 to prevent a return medical visit.",
            "**Epinephrine is a bridge, not a cure** — Nebulized epinephrine acts within 10–30 minutes but wears off by ~2 hours; always pair with dexamethasone and observe 2–4 hours for recurrent stridor before discharge.",
            "**Most children go home** — Even children presenting with stridor at rest can typically be discharged safely after dexamethasone, epinephrine, and a short observation; admit for persistent stridor, repeat epinephrine doses, hypoxia, or inability to tolerate PO.",
            "**Skip the mist tent** — Despite decades of historical use, humidified air shows no benefit in RCTs.",
            "**Think alternative diagnosis when atypical** — Toxic appearance, drooling, absent barky cough, poor response to standard therapy, or age outside ~6 months–6 years should prompt consideration of bacterial tracheitis, epiglottitis, foreign body, or anatomic airway lesions."
        ]
    }
};
