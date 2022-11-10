codes = [
    "AA", "AB", "AC", "AD",
    "ADM", "AEA", "AEY", "AIDO",
    "ALT", "AMP", "AMT", "AOS", "APL",
    "APP", "APR", "APS", "ASD", "ATC",
    "ATN", "AU", "AVN", "B", "BED", "BID",
    "BM", "BP", "BRE", "C", "CS", "CFL", 
    "CNC", "CNTS", "COG", "CONS", "COU",
    "CRU", "CSW", "D", "DAPP", "DH", "DID",
    "DIS", "DNC", "DNT", "DPS", "DR", "DRK",
    "DRP", "EC", "EVE", "EXT", "FEV", "FEVP",
    "FID", "FPD", "FRI", "G", "GEF", "GEQ", 
    "GF", "GSM", "GTB", "GTS", "GTT", "H", "HA",
    "HS", "I", "IEN", "IM", "IMM", "INJ", "INL",
    "INT", "IVB", "IVS", "JTB", "LEA", "LEY", "LOZ",
    "LQ", "MCD", "MDD", "MIN", "MON", "MWF", "MX",
    "MXC", "N", "NEB", "NER", "NGTB", "NM3", "NM4",
    "NOS", "NTS", "NV", "OC", "OD", "OES", "OS",
    "OU", "P", "PA", "PC", "PFS", "PO", "PRA", "PRF",
    "PRN", "Q", "QAF", "QAM", "QD", "QDW", "QHS", "QID",
    "QOD", "QPM", "R", "REA", "REC", "REY", "RF",
    "RVN", "SAS", "SAT", "SC", "SLP", "SML", "SND", "SOA",
    "SOB", "SPR", "SPS", "SQ", "SS", "SUP", "SW", "SWR",
    "T", "TS", "TAT", "TAY", "TBL", "TDW", "TEA", "TES",
    "THUR", "TID", "TK", "TLS", "TNT", "TUE", "TW", "U",
    "UNI", "UNT", "UNW", "UTD", "VA", "VAG", "VOM", "VVN",
    "WA", "WC", "WED", "WF", "WFJ", "WHZ", "WKS", "WOJ", "XD" 
]

trans = [ 
    "To the affected area", "Both", "Before a meal", "Right ear",
    "Administer", "In affected ear(s)", "In affected eye(s)",
    "After initial dose", "Alternate", "Ampule", "Amount", 
    "At onset", "Applicatorsful", "Apply", "Apply to rash", "Applicatorsful", "Apply sparingly with each diaper change",
    "Around the clock", "At night", "Both ears", "Use 1 ampule via nebulizer",
    "Before", "Bedtime", "Twice daily", "Bowel movement", "Blood pressure",
    "Breakfast", "Capsule", "Capsules", "Capful", "Cough and congestion",
    "Contents of 1 packet", "Congestion", "Consecutive", "For cough", "Crush",
    "Chew and swallow", "Daily", "Dental appointment", "Diarrhea",
    "Two or three times daily for weight loss", "Dissolve", "Take four capsules 1 hour before dental appointment",
    "Take four tablets 1 hour before dental appointment", "Droppersful", "Discard remainder",
    "Drink", "Dropperful", "Each cheek", "Evening", "Externally", "As needed for fever",
    "As needed for fever and pain", "Five times daily", "Follow package directions",
    "Friday", "Give", "Generic equivalent for", "Generic equivalent to", "Generic for",
    "Generic substitution made", "Gtube", "Drops", "Drop", "Hours", "Headache", "At bedtime",
    "Insert", "In each nostril", "In the muscle", "Immediately", "Inject", "Inhale", "Instill",
    "Insert one applicatorful vaginally at bedtime", "Insert one suppository vaginally at bedtime",
    "Jtube", "In the left ear", "In the left eye", "Lozenge", "Liquid", "May cause drowsiness",
    "Maximum daily dose is", "Minutes", "Monday", "Monday, Wednesday, Friday", "Mix",
    "Mix 1 capful", "For nausea", "Nebulizer", "For nerves", "Ng-tube",
    "No more than 3,000mg of acetaminophen daily", "No more than 4,000mg of acetaminophen daily",
    "Nostril", "Nights", "For nausea and vomiting", "1 d for a full cycle. Stop for 1 week, then repeat",
    "Right eye", "On an empty stomach", "Left Eye", "Both eyes", "For pain", "Patch", "After a meal",
    "Puffs", "By mouth", "As needed for anxiety", "As needed for", "As needed", "Every",
    "Every afternoon", "Every Morning", "Every Day", "4 days a week", "Every night at bedtime",
    "Four times daily", "Every other day", "Every evening", "Rectal", "In the right ear", 
    "Rectally", "In the right eye", "Refrigerate", "Use 1 respule via nebulizer", "Swish and Swallow",
    "Saturday", "Under the skin", "Sleep", "Small", "Sunday", "Soak", "Shortness of breath", "Spray",
    "Suppositories", "Subcutcaneous", "ONE-Half", "Suppository", "Shake liquid well", "Shake well and refrigerate",
    "Tablet", "Tablets", "Until all taken", "Today", "Tablespoonful", "3 days a week", "Teaspoonful",
    "Teaspoonsful", "Thursday", "Three times daily", "Take", "Tablespoonsful", "One tablet under tongue as needed for chest pain",
    "Tuesday", "One tablet in water", "Use", "Units", "Under the tongue", "Unwrap", "As directed", "Vaginal",
    "In the vagina", "Vomiting", "Use 1 vial via nebulizer", "While awake", "With meals", "Wednesday", "With food",
    "With fruit juice", "Wheezing", "Weeks", "With orange juice", "Times daily"
]
print(len(codes))
print(len(trans))
length = len(codes)
with open ('inserts.txt', 'w') as file:
    for i in range(length):
        file.write(f"INSERT INTO Codes (code) VALUES ('{codes[i]}');\n")
        file.write(f"INSERT INTO Translations (trans) VALUES ('{trans[i]}');\n")
