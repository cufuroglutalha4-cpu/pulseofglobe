window.dailyRiskPageData = {
  "reportDate": "November 3, 2026",
  "reportDateIso": "2026-11-03",
  "overallScore": 75,
  "methodVersion": "equal-domain-severity-v1",
  "categoryLevels": [
    4,
    4,
    3,
    4
  ],
  "weights": [
    0.25,
    0.25,
    0.25,
    0.25
  ],
  "sources": {
    "ukraine": [
      "UN Human Rights Monitoring Mission in Ukraine",
      "https://ukraine.un.org/en/325659-ukraine-mass-casualty-attack-zaporizhzhia-region-shows-devastating-impact-glide-bombs-un",
      "3 November 2026",
      "Attack occurred 2 November; casualty verification ongoing."
    ],
    "energy": [
      "IEA — Oil Market Report, October 2026",
      "https://www.iea.org/reports/oil-market-report-october-2026",
      "14 October 2026",
      "Market observations and projections are from the October edition, not live prices."
    ],
    "economy": [
      "IMF — World Economic Outlook, October 2026",
      "https://www.imf.org/en/Publications/WEO/Issues/2026/10/13/world-economic-outlook-october-2026",
      "13 October 2026",
      "Statistical cutoff: 1 October 2026; growth and inflation are projections."
    ],
    "health": [
      "WHO — Alert and response dashboard",
      "https://www.who.int/emergencies/alert-and-response",
      "Accessed 3 November 2026",
      "DRC as of 1 November; Kenya as of 2 November; Nigeria as of 29 October."
    ],
    "health-risk": [
      "WHO — Disease Outbreak News, Bundibugyo Ebola",
      "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON622",
      "23 October 2026",
      "Includes the 8 October risk assessment and notes that revision was underway."
    ],
    "ecdc": [
      "ECDC — Multi-country Ebola outbreak update",
      "https://www.ecdc.europa.eu/en/public-health-events/2026-eip-00026/2026-11-03",
      "3 November 2026",
      "Country narrative; event and data dates vary within the report."
    ],
    "climate": [
      "WMO — Seasonal climate update NDJ 2026–27",
      "https://wmo.int/resources/publication-series/global-seasonal-climate-updates/gscu-ndj2026",
      "21 October 2026",
      "Forecast period: November 2026–January 2027."
    ]
  },
  "categories": [
    {
      "id": "conflict",
      "title": "Conflict and civilian protection",
      "level": 4,
      "label": "Severe",
      "summary": "UN monitors reported a mass-casualty attack at an aid distribution in Komyshuvakha, Ukraine, on 2 November. Verification was continuing on 3 November.",
      "context": "The conflict assessment focuses on civilian exposure and humanitarian access. It is not an estimate of the probability of a wider war.",
      "watch": "Further UN verification, civilian protection and access to assistance.",
      "sources": [
        "ukraine"
      ]
    },
    {
      "id": "economy",
      "title": "Economy and energy",
      "level": 4,
      "label": "Severe",
      "summary": "The IMF October outlook projects 3.1% global growth and 4.7% inflation for 2026. The IEA October oil report describes fragile Gulf supply recovery and strained diesel markets.",
      "context": "These dated releases identify channels through which conflict can raise costs and constrain activity. They are not current oil-price quotes. Forecasts can be revised.",
      "watch": "Revisions to demand and supply projections, shipping disruption and inflation transmission.",
      "sources": [
        "economy",
        "energy"
      ]
    },
    {
      "id": "health",
      "title": "Public health and cross-border readiness",
      "level": 3,
      "label": "High regional pressure",
      "summary": "WHO lists 10,532 confirmed DRC cases and 5,126 confirmed deaths as of 1 November. Its dashboard lists nine cases and two deaths in Kenya as of 2 November.",
      "context": "WHO’s 23 October bulletin describes the earlier risk assessment as very high in DRC, high in neighbouring countries and low globally, with an assessment revision underway. Severity in the affected region is not equivalent to a worldwide pandemic forecast.",
      "watch": "New WHO risk assessments, contact follow-up and any newly verified transmission chains.",
      "sources": [
        "health",
        "health-risk"
      ]
    },
    {
      "id": "climate",
      "title": "Climate outlook and preparedness",
      "level": 4,
      "label": "Severe forward signal",
      "summary": "WMO’s 21 October outlook anticipates strengthening El Niño in November–January, with the seasonal Niño 3.4 anomaly around +3.8°C.",
      "context": "That number describes a forecast sea-surface temperature anomaly in a specific Pacific region, not global air-temperature warming. Local impacts require regional forecasts.",
      "watch": "Updated seasonal guidance and location-specific rainfall, heat and preparedness notices.",
      "sources": [
        "climate"
      ]
    }
  ],
  "countryNotes": [
    [
      "Ukraine",
      "Conflict / humanitarian exposure",
      "The UN’s 3 November update describes civilians gathered for aid being hit in Komyshuvakha. It notes that casualty verification is ongoing.",
      "Protection of civilians, rescue operations and humanitarian access.",
      [
        "ukraine"
      ]
    ],
    [
      "Democratic Republic of the Congo",
      "Public health / severe regional emergency",
      "WHO’s dashboard reports 10,532 confirmed cases and 5,126 confirmed deaths as of 1 November. Figures may be revised retrospectively.",
      "Detection, care capacity and follow-up of contacts.",
      [
        "health"
      ]
    ],
    [
      "Kenya",
      "Public health / identified cluster",
      "The WHO dashboard lists nine confirmed cases and two deaths as of 2 November. ECDC describes the cluster and its connection to an imported case.",
      "Contact monitoring and official confirmation of further cases.",
      [
        "health",
        "ecdc"
      ]
    ],
    [
      "Nigeria",
      "Public health / imported case follow-up",
      "WHO lists one confirmed case as of 29 October. ECDC’s 3 November update describes contact follow-up and medical evacuation of the case.",
      "Official surveillance updates; avoid inferring wider community spread from an imported case alone.",
      [
        "health",
        "ecdc"
      ]
    ]
  ]
};
