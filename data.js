// Pediatric Journal Article Repository Data

const specialtiesData = {
    "allergy-immunology": {
        name: "Allergy/Immunology",
        icon: "🤧",
        issues: [
            "Food allergies",
            "Allergic rhinitis",
            "Atopic dermatitis/eczema",
            "Anaphylaxis",
            "Urticaria and angioedema",
            "Drug allergies",
            "Asthma: chronic management",
            "Primary immunodeficiency disorders",
            "DiGeorge syndrome",
            "Wiskott-Aldrich syndrome",
            "Ataxia-telangiectasia",
            "Hyper-IgE syndrome",
            "Serum sickness",
            "Allergic bronchopulmonary aspergillosis"
        ]
    },
    "cardiology": {
        name: "Cardiology",
        icon: "❤️",
        issues: [
            "Congenital heart defects",
            "Kawasaki disease",
            "Rheumatic heart disease",
            "Arrhythmias",
            "Heart failure management",
            "Syncope evaluation",
            "Innocent murmurs vs pathologic murmurs",
            "Infective endocarditis",
            "Myocarditis and dilated cardiomyopathy",
            "Hypertrophic cardiomyopathy",
            "Chest pain evaluation",
            "Pulmonary hypertension"
        ]
    },
    "cardiothoracic-surgery": {
        name: "Cardiothoracic Surgery",
        icon: "🫀",
        issues: [
            "Tetralogy of Fallot repair",
            "Transposition of the great arteries",
            "Hypoplastic left heart syndrome",
            "Coarctation of the aorta",
            "Patent ductus arteriosus ligation",
            "Atrioventricular canal defect repair",
            "Total anomalous pulmonary venous return repair",
            "Truncus arteriosus repair",
            "Congenital lung malformations",
            "Vascular rings",
            "Pectus excavatum and carinatum"
        ]
    },
    "critical-care": {
        name: "Critical Care",
        icon: "🚨",
        issues: [
            "Acute respiratory failure/ARDS",
            "Shock",
            "Sepsis and septic shock",
            "Traumatic brain injury",
            "Multi-organ dysfunction syndrome",
            "ECMO indications",
            "Mechanical ventilation",
            "Sedation and analgesia",
            "Asthma: acute management",
            "Severe DKA",
            "Acute liver failure",
            "Post-cardiac surgery care",
            "Arrhythmia management",
            "Brain death determination",
            "Withdrawal of life support/palliative care"
        ]
    },
    "developmental-behavioral": {
        name: "Developmental-Behavioral Pediatrics",
        icon: "🧩",
        issues: [
            "Autism spectrum disorder",
            "ADHD",
            "Learning disabilities",
            "Intellectual disability",
            "Speech and language delays",
            "Developmental milestones",
            "Developmental screening tools",
            "Global developmental delay",
            "Behavioral disorders",
            "Anxiety disorders in children",
            "Depression in children and adolescents",
            "School refusal",
            "Enuresis and encopresis",
            "Sleep disorders",
            "Screen time recommendations",
            "Early intervention services",
            "IEP and 504 plans",
            "Fetal alcohol spectrum disorders",
            "Genetic syndromes with developmental impact"
        ]
    },
    "emergency-medicine": {
        name: "Emergency Medicine",
        icon: "🚑",
        issues: [
            "Trauma management",
            "Sepsis and septic shock",
            "Status epilepticus",
            "Diabetic ketoacidosis",
            "Anaphylaxis",
            "Poisoning/ingestions",
            "Respiratory emergencies",
            "Altered mental status",
            "Pediatric resuscitation",
            "Head trauma",
            "Abdominal emergencies",
            "Orthopedic emergencies",
            "Burns",
            "Drowning/submersion injuries",
            "Environmental emergencies",
            "Child abuse and neglect",
            "Procedural sedation",
            "Pain management"
        ]
    },
    "endocrinology": {
        name: "Endocrinology",
        icon: "🩺",
        issues: [
            "Type 1 diabetes mellitus",
            "Diabetic ketoacidosis",
            "Type 2 diabetes mellitus",
            "Growth disorders",
            "Short stature evaluation",
            "Growth hormone deficiency",
            "Turner syndrome",
            "Noonan syndrome",
            "Thyroid disorders",
            "Congenital hypothyroidism",
            "Hashimoto thyroiditis",
            "Graves disease",
            "Thyroid nodules",
            "Puberty disorders",
            "Precocious puberty",
            "Delayed puberty",
            "Premature adrenarche vs thelarche",
            "Adrenal disorders",
            "Congenital adrenal hyperplasia",
            "Adrenal insufficiency/Addisonian crisis",
            "Cushing syndrome",
            "Obesity and metabolic syndrome",
            "Hypoglycemia",
            "Disorders of sexual differentiation",
            "Calcium/vitamin D disorders",
            "Gynecomastia",
            "PCOS in adolescents"
        ]
    },
    "ent": {
        name: "Otolaryngology (ENT)",
        icon: "👂",
        issues: [
            "Tonsillitis/adenoiditis",
            "Tonsillectomy indications",
            "Obstructive sleep apnea",
            "Acute otitis media",
            "Otitis media with effusion",
            "Chronic otitis media/cholesteatoma",
            "Tympanostomy tube placement",
            "Thyroglossal duct cyst",
            "Branchial cleft anomalies",
            "Dermoid cysts",
            "Lymphatic malformations",
            "Laryngomalacia",
            "Subglottic stenosis",
            "Hearing loss",
            "Cochlear implants",
            "Sinusitis",
            "Epistaxis",
            "Peritonsillar abscess",
            "Retropharyngeal/parapharyngeal abscess",
            "Foreign bodies",
            "Choanal atresia",
            "Pierre Robin sequence"
        ]
    },
    "gastroenterology": {
        name: "Gastroenterology",
        icon: "🫄",
        issues: [
            "Gastroesophageal reflux vs GERD",
            "Inflammatory bowel disease",
            "Celiac disease",
            "Failure to thrive",
            "Chronic constipation/encopresis",
            "Acute abdominal pain",
            "Chronic/recurrent abdominal pain",
            "Hepatitis",
            "Biliary atresia",
            "Pancreatitis",
            "GI bleeding",
            "Eosinophilic esophagitis",
            "Food protein-induced enterocolitis syndrome",
            "Lactose intolerance vs milk protein allergy",
            "Wilson disease",
            "Alpha-1 antitrypsin deficiency"
        ]
    },
    "general-surgery": {
        name: "General Surgery",
        icon: "🔪",
        issues: [
            "Appendicitis",
            "Intussusception",
            "Pyloric stenosis",
            "Inguinal hernias",
            "Hydroceles",
            "Umbilical hernias",
            "Hirschsprung disease",
            "Congenital diaphragmatic hernia",
            "Malrotation and volvulus",
            "Meckel's diverticulum",
            "Gastroschisis vs omphalocele",
            "Esophageal atresia/tracheoesophageal fistula",
            "Imperforate anus",
            "Necrotizing enterocolitis",
            "Cholelithiasis/cholecystitis",
            "Splenic injuries"
        ]
    },
    "hematology-oncology": {
        name: "Hematology/Oncology",
        icon: "🩸",
        issues: [
            "Sickle cell disease",
            "Vaso-occlusive crises",
            "Acute chest syndrome",
            "Splenic sequestration",
            "Hemophilia A and B",
            "Von Willebrand disease",
            "Iron deficiency anemia",
            "Thalassemias",
            "Hereditary spherocytosis",
            "G6PD deficiency",
            "Immune thrombocytopenic purpura",
            "Thrombocytopenia",
            "Neutropenia",
            "Acute lymphoblastic leukemia",
            "Acute myeloid leukemia",
            "Brain tumors",
            "Neuroblastoma",
            "Wilms tumor",
            "Hodgkin lymphoma",
            "Non-Hodgkin lymphoma",
            "Osteosarcoma",
            "Ewing sarcoma",
            "Retinoblastoma",
            "Rhabdomyosarcoma",
            "Langerhans cell histiocytosis",
            "Hemophagocytic lymphohistiocytosis",
            "Tumor lysis syndrome"
        ]
    },
    "hospital-medicine": {
        name: "Hospital Medicine",
        icon: "🏥",
        issues: [
            "Bronchiolitis",
            "Community-acquired pneumonia",
            "Sepsis and septic shock",
            "Asthma: acute management",
            "Croup",
            "Dehydration/gastroenteritis",
            "Fever management and workup",
            "Urinary tract infections",
            "Skin and soft tissue infections",
            "Acute otitis media complications",
            "Diabetic ketoacidosis",
            "Seizures",
            "Sickle cell disease complications",
            "Failure to thrive",
            "Brief resolved unexplained events",
            "Apparent life-threatening events",
            "Neonatal hyperbilirubinemia",
            "Neonatal fever workup",
            "Kawasaki disease",
            "Acute chest pain evaluation",
            "Syncope workup",
            "Medication reconciliation and polypharmacy",
            "Care coordination and discharge planning",
            "Family-centered rounds",
            "Handoff communication",
            "Quality improvement and patient safety",
            "Antimicrobial stewardship",
            "Venous thromboembolism prophylaxis",
            "Pain management",
            "Nutritional support",
            "Technology-dependent children",
            "Medical complexity and care coordination",
            "Social determinants of health",
            "Child abuse recognition and reporting",
            "Observation vs inpatient status"
        ]
    },
    "infectious-diseases": {
        name: "Infectious Diseases",
        icon: "🦠",
        issues: [
            "Immunization schedules",
            "Vaccine-preventable diseases",
            "Meningitis",
            "Encephalitis",
            "Osteomyelitis",
            "Septic arthritis",
            "Congenital infections",
            "HIV/AIDS in children",
            "Tuberculosis",
            "Lyme disease",
            "Rocky Mountain spotted fever",
            "Kawasaki disease",
            "Infectious mononucleosis",
            "Group A strep infections",
            "Skin and soft tissue infections",
            "Cat scratch disease",
            "Parasitic infections",
            "Fungal infections",
            "Fever of unknown origin",
            "Fever without source in young infants",
            "Antimicrobial stewardship"
        ]
    },
    "neonatology": {
        name: "Neonatology",
        icon: "👶",
        issues: [
            "Respiratory distress syndrome",
            "Transient tachypnea of the newborn",
            "Meconium aspiration syndrome",
            "Persistent pulmonary hypertension",
            "Neonatal jaundice/hyperbilirubinemia",
            "Physiologic vs pathologic jaundice",
            "Phototherapy and exchange transfusion",
            "Necrotizing enterocolitis",
            "Intraventricular hemorrhage",
            "Periventricular leukomalacia",
            "Bronchopulmonary dysplasia",
            "Neonatal sepsis",
            "Retinopathy of prematurity",
            "Apnea of prematurity",
            "Anemia of prematurity",
            "Patent ductus arteriosus",
            "Neonatal abstinence syndrome",
            "Hypoglycemia in newborns",
            "Congenital anomalies",
            "Neonatal resuscitation",
            "Temperature regulation",
            "Feeding and nutrition",
            "Common birth injuries",
            "Neonatal seizures",
            "Hypoxic-ischemic encephalopathy"
        ]
    },
    "nephrology": {
        name: "Nephrology",
        icon: "🫘",
        issues: [
            "Nephrotic syndrome",
            "Minimal change disease",
            "Focal segmental glomerulosclerosis",
            "Glomerulonephritis",
            "Post-streptococcal glomerulonephritis",
            "IgA nephropathy",
            "Membranoproliferative glomerulonephritis",
            "Hematuria evaluation",
            "Proteinuria evaluation",
            "Hypertension",
            "Chronic kidney disease",
            "Acute kidney injury",
            "Hemolytic uremic syndrome",
            "Urinary tract infections",
            "Polycystic kidney disease",
            "Renal tubular acidosis",
            "Nephrolithiasis",
            "Alport syndrome",
            "Enuresis"
        ]
    },
    "neurology": {
        name: "Neurology",
        icon: "🧠",
        issues: [
            "Febrile seizures",
            "Epilepsy syndromes",
            "Infantile spasms/West syndrome",
            "Childhood absence epilepsy",
            "Juvenile myoclonic epilepsy",
            "Lennox-Gastaut syndrome",
            "Benign rolandic epilepsy",
            "Status epilepticus",
            "Headaches/migraines",
            "Cerebral palsy",
            "Developmental delays",
            "Tic disorders/Tourette syndrome",
            "Movement disorders",
            "Neuromuscular disorders",
            "Duchenne and Becker muscular dystrophy",
            "Spinal muscular atrophy",
            "Guillain-Barré syndrome",
            "Myasthenia gravis",
            "Stroke in children",
            "Increased intracranial pressure",
            "Pseudotumor cerebri",
            "Neurofibromatosis",
            "Tuberous sclerosis",
            "Ataxia",
            "Hypotonia",
            "Neonatal encephalopathy/HIE",
            "White matter diseases"
        ]
    },
    "neurosurgery": {
        name: "Neurosurgery",
        icon: "🧠",
        issues: [
            "Hydrocephalus",
            "Shunt malfunction/infection",
            "Brain tumors",
            "Craniosynostosis",
            "Myelomeningocele/spina bifida",
            "Tethered cord syndrome",
            "Lipomyelomeningocele",
            "Chiari malformations",
            "Traumatic brain injury",
            "Epidural hematoma",
            "Subdural hematoma",
            "Arachnoid cysts",
            "Encephalocele",
            "Dandy-Walker malformation",
            "Intracranial hemorrhage"
        ]
    },
    "ophthalmology": {
        name: "Ophthalmology",
        icon: "👁️",
        issues: [
            "Strabismus",
            "Amblyopia",
            "Retinopathy of prematurity",
            "Congenital cataracts",
            "Congenital glaucoma",
            "Nasolacrimal duct obstruction",
            "Refractive errors",
            "Leukocoria",
            "Preseptal vs orbital cellulitis",
            "Conjunctivitis",
            "Pediatric eye trauma",
            "Cortical visual impairment",
            "Nystagmus",
            "Red reflex screening"
        ]
    },
    "orthopedic-surgery": {
        name: "Orthopedic Surgery",
        icon: "🦴",
        issues: [
            "Developmental dysplasia of the hip",
            "Clubfoot/talipes equinovarus",
            "Scoliosis",
            "Slipped capital femoral epiphysis",
            "Legg-Calvé-Perthes disease",
            "Supracondylar fractures",
            "Salter-Harris classification",
            "Toddler's fracture",
            "Buckle/torus fractures",
            "Greenstick fractures",
            "Osgood-Schlatter disease",
            "Nursemaid's elbow",
            "Limb length discrepancies",
            "Osteomyelitis",
            "Septic arthritis",
            "Bone tumors",
            "Torticollis",
            "Genu varum and genu valgum",
            "In-toeing and out-toeing",
            "Flat feet"
        ]
    },
    "plastic-surgery": {
        name: "Plastic Surgery",
        icon: "✨",
        issues: [
            "Cleft lip and palate",
            "Craniosynostosis",
            "Infantile hemangiomas",
            "Vascular malformations",
            "Port wine stains",
            "Syndactyly",
            "Polydactyly",
            "Trigger thumb",
            "Constriction band syndrome",
            "Ear anomalies",
            "Burn management",
            "Traumatic injuries and reconstruction",
            "Skin lesions",
            "Breast anomalies"
        ]
    },
    "pulmonology": {
        name: "Pulmonology",
        icon: "🫁",
        issues: [
            "Asthma: chronic management",
            "Cystic fibrosis",
            "Bronchiolitis",
            "Pneumonia",
            "Chronic cough evaluation",
            "Sleep-disordered breathing/obstructive sleep apnea",
            "Foreign body aspiration",
            "Bronchopulmonary dysplasia",
            "Primary ciliary dyskinesia",
            "Apparent life-threatening events",
            "Brief resolved unexplained events",
            "Vocal cord dysfunction",
            "Interstitial lung disease",
            "Pulmonary function test interpretation"
        ]
    },
    "rheumatology": {
        name: "Rheumatology",
        icon: "🦵",
        issues: [
            "Juvenile idiopathic arthritis",
            "Systemic lupus erythematosus",
            "Henoch-Schönlein purpura/IgA vasculitis",
            "Juvenile dermatomyositis",
            "Vasculitis syndromes",
            "Scleroderma",
            "Mixed connective tissue disease",
            "Reactive arthritis",
            "Autoinflammatory diseases",
            "Familial Mediterranean fever",
            "PFAPA syndrome",
            "Macrophage activation syndrome",
            "Growing pains",
            "Transient synovitis vs septic arthritis",
            "Sarcoidosis"
        ]
    },
    "urology": {
        name: "Urology",
        icon: "💧",
        issues: [
            "Urinary tract infections",
            "Vesicoureteral reflux",
            "Hydronephrosis/ureteropelvic junction obstruction",
            "Hypospadias",
            "Undescended testes/cryptorchidism",
            "Posterior urethral valves",
            "Testicular torsion",
            "Epididymitis vs torsion",
            "Varicocele",
            "Phimosis and paraphimosis",
            "Circumcision",
            "Urolithiasis",
            "Labial adhesions",
            "Neurogenic bladder",
            "Bladder exstrophy"
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
    }
};
