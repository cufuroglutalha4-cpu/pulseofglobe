window.dailyRiskPageData = {
  reportDate: "May 23, 2026",
  updateTimeUtc: "23:05 UTC",

  overallScore: 73,
  previousOverallScore: 74,
  overallLabel: "Elevated",
  overallTrend: "-1 vs previous update",
  confidence: "Moderate-High",

  heroSummary:
    "Global risk conditions remain elevated but slightly eased as short-term volatility in energy and maritime markets cooled. However, geopolitical stress remains structurally high due to ongoing Ukraine conflict pressure, persistent Middle East instability, and continued sensitivity in global oil and shipping routes. The system is stable but fragile, with reduced panic intensity compared to prior peaks.",

  overallExplainer:
    "The global composite score declined slightly from 74 to 73 due to stabilization in short-term volatility indicators across energy and maritime channels. While Hormuz-related shipping sensitivity remains a key systemic risk, no major disruption event materialized in the latest cycle. Oil markets remain reactive but less disorderly compared to earlier escalation phases. Ukraine continues to experience sustained drone warfare and infrastructure pressure, maintaining elevated European security risk. Middle East geopolitical conditions remain unstable but not rapidly deteriorating. Economic transmission through freight, shipping insurance, and inflation expectations remains active but controlled. Humanitarian pressure persists in conflict zones through displacement and infrastructure strain. Climate risk remains structurally high, acting as a persistent background stress factor rather than a short-term driver.",

  overview: [
    {
      label: "Report Date",
      value: "May 22, 2026",
      sub: "UTC daily update"
    },
    {
      label: "Top Driver",
      value: "Ukraine Pressure + Maritime Sensitivity",
      sub: "Conflict-energy linkage remains dominant"
    },
    {
      label: "Country Layer",
      value: "10 Countries Monitored",
      sub: "Exposure model active"
    },
    {
      label: "What Changed",
      value: "Slight easing in volatility",
      sub: "Energy + shipping stress cooled marginally"
    },
    {
      label: "Next 48h Watch",
      value: "Oil flows + Ukraine strikes + Hormuz transit + diplomacy",
      sub: "Key swing variables"
    }
  ],

  glanceSummary:
    "Global risk eased slightly to 73/100, reflecting reduced short-term volatility while underlying geopolitical tensions remain structurally elevated.",

  glanceBullets: [
    "Ukraine remains the core conflict driver with sustained infrastructure and drone pressure.",
    "Maritime and energy systems remain sensitive but stable compared to earlier peaks.",
    "Economic risk remains elevated due to inflation transmission and freight sensitivity.",
    "Humanitarian pressure continues in active conflict zones due to displacement and infrastructure damage.",
    "Climate risk remains structurally persistent but not a short-term shock driver."
  ],

  dailyComparison: [
    { label: "Previous", value: "74" },
    { label: "Current", value: "73" },
    { label: "Trend", value: "Slight Decrease" },
    { label: "Tracked Countries", value: "10" }
  ],

  riskData: [
    {
      title: "🌍 Global Conflict Risk",
      subtitle: "Ukraine pressure, regional instability, maritime sensitivity",
      score: 77,
      changeText: "-2",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-danger",
      description:
        "Conflict risk remains elevated due to sustained Ukraine battlefield pressure and ongoing regional instability. Maritime sensitivity around key shipping corridors continues to act as a latent escalation channel, although immediate escalation intensity has slightly eased.",
      drivers: [
        "Ukraine drone + missile pressure",
        "Middle East instability",
        "Hormuz maritime sensitivity"
      ],
      sources: ["Reuters", "UN monitoring", "Defense briefings"],
      trend: [79, 79, 78, 78, 78, 77, 77]
    },

    {
      title: "📉 Global Economic Risk",
      subtitle: "Energy volatility, freight pressure, inflation transmission",
      score: 70,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Elevated",
      directionClass: "pill-warning",
      description:
        "Economic risk remains elevated as oil markets remain sensitive to geopolitical developments. Freight costs and shipping insurance remain reactive to perceived risk in maritime corridors, though volatility is less disorderly than earlier cycles.",
      drivers: [
        "Oil price sensitivity",
        "Freight + shipping insurance",
        "Inflation pass-through effects"
      ],
      sources: ["IEA", "EIA", "Market data"],
      trend: [71, 71, 71, 70, 70, 70, 70]
    },

    {
      title: "🏥 Global Health Risk",
      subtitle: "Humanitarian pressure and displacement effects",
      score: 54,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-warning",
      description:
        "Health and humanitarian risk remains stable but elevated due to ongoing displacement in conflict zones and strain on emergency response systems. No major deterioration or improvement was observed in the latest cycle.",
      drivers: [
        "Displacement flows",
        "Aid delivery constraints",
        "Healthcare system strain"
      ],
      sources: ["WHO", "UNHCR", "NGO reports"],
      trend: [53, 53, 53, 54, 54, 54, 54]
    },

    {
      title: "🌡️ Climate Risk",
      subtitle: "Structural heat stress and hydrological instability",
      score: 65,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "High Structural",
      directionClass: "pill-danger",
      description:
        "Climate risk remains structurally high due to persistent global heat anomalies and water-system instability. While not a short-term escalation driver, it contributes continuously to agricultural, infrastructure, and insurance stress globally.",
      drivers: [
        "Heat anomalies",
        "Flooding exposure",
        "Water scarcity stress"
      ],
      sources: ["Copernicus", "IPCC frameworks", "Climate monitoring"],
      trend: [64, 64, 64, 65, 65, 65, 65]
    }
  ],

  reportData: [
    {
      title: "🌍 Global Conflict Report",
      tag: "High Risk",
      score: "77/100",
      tagClass: "pill-danger",
      direction: "High",
      watch:
        "Ukraine frontline dynamics, drone warfare intensity, Middle East tensions, maritime signals",
      why:
        "Conflict remains the dominant global risk driver due to sustained Ukraine war pressure and persistent regional instability across the Middle East.",
      moved:
        "Risk eased slightly due to reduced immediate escalation signals in maritime and regional conflict indicators.",
      matters:
        "Conflict risk remains the primary transmission channel into energy markets, shipping security, and geopolitical stability."
    },

    {
      title: "📉 Global Economic Report",
      tag: "Elevated Risk",
      score: "70/100",
      tagClass: "pill-warning",
      direction: "Elevated",
      watch:
        "Oil pricing, LNG flows, freight costs, insurance premiums, inflation trends",
      why:
        "Economic risk remains elevated due to continued sensitivity in energy markets and logistics systems tied to geopolitical developments.",
      moved:
        "Slight easing due to reduced volatility in oil and freight pricing.",
      matters:
        "Economic risk translates geopolitical tension into inflation, supply chain costs, and industrial pressure."
    },

    {
      title: "🏥 Global Health Report",
      tag: "Moderate Risk",
      score: "54/100",
      tagClass: "pill-warning",
      direction: "Moderate",
      watch:
        "Humanitarian corridors, displacement regions, emergency healthcare access",
      why:
        "Humanitarian systems remain strained in conflict zones but without systemic global deterioration.",
      moved:
        "No major change observed; conditions remain structurally stable but stressed.",
      matters:
        "Humanitarian stress increases long-term fragility in affected regions."
    },

    {
      title: "🌡️ Climate Risk Report",
      tag: "High Structural Risk",
      score: "65/100",
      tagClass: "pill-danger",
      direction: "Persistent",
      watch:
        "Flood risks, heat anomalies, agricultural pressure, water systems",
      why:
        "Climate risk remains structurally elevated due to persistent global environmental stress patterns.",
      moved:
        "Stable structural condition with no short-term escalation.",
      matters:
        "Climate risk amplifies long-term systemic pressure across economies and infrastructure."
    }
  ],

  countryRiskData: [
    {
      country: "Ukraine",
      region: "Eastern Europe",
      score: 83,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Ukraine remains under sustained military pressure with ongoing drone strikes, infrastructure targeting, and frontline instability affecting both civilian and energy systems.",
      drivers: [
        "Drone warfare intensity",
        "Energy infrastructure targeting",
        "Frontline pressure stability"
      ],
      watchItems: [
        "Power grid resilience",
        "Air defense load",
        "Frontline shifts"
      ],
      trend: [84, 84, 84, 84, 83, 83, 83]
    },

    {
      country: "Israel",
      region: "Middle East",
      score: 77,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-danger",
      summary:
        "Israel remains exposed to regional security instability, missile risk, and broader geopolitical tension across multiple neighboring fronts.",
      drivers: [
        "Regional escalation risk",
        "Missile and drone threat environment",
        "Multi-front security pressure"
      ],
      watchItems: [
        "Border security dynamics",
        "Regional retaliation cycles",
        "Diplomatic stabilization efforts"
      ],
      trend: [78, 78, 78, 77, 77, 77, 77]
    },

    {
      country: "Iran",
      region: "Middle East",
      score: 77,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-danger",
      summary:
        "Iran remains central to maritime and regional risk dynamics due to its strategic position in Hormuz and ongoing geopolitical tensions.",
      drivers: [
        "Hormuz strategic leverage",
        "Regional geopolitical pressure",
        "Security signaling uncertainty"
      ],
      watchItems: [
        "Maritime corridor activity",
        "Regional diplomacy signals",
        "Military posture adjustments"
      ],
      trend: [78, 78, 78, 77, 77, 77, 77]
    },

    {
      country: "Russia",
      region: "Eastern Europe / Eurasia",
      score: 68,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-warning",
      summary:
        "Russia remains engaged in prolonged conflict conditions with continued economic pressure and military operational strain.",
      drivers: [
        "War-related fiscal pressure",
        "Sanctions impact adaptation",
        "Operational military costs"
      ],
      watchItems: [
        "Energy export flows",
        "Military activity tempo",
        "Economic resilience indicators"
      ],
      trend: [69, 69, 69, 68, 68, 68, 68]
    },

    {
      country: "Türkiye",
      region: "Eastern Mediterranean",
      score: 54,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "Türkiye remains exposed through energy import dependency, inflation sensitivity, and regional logistics exposure linked to global oil and shipping conditions.",
      drivers: [
        "Imported energy sensitivity",
        "Inflation transmission effects",
        "Regional logistics corridor exposure"
      ],
      watchItems: [
        "Fuel pricing trends",
        "Inflation trajectory",
        "Trade corridor stability"
      ],
      trend: [55, 55, 55, 54, 54, 54, 54]
    },

    {
      country: "United States",
      region: "North America",
      score: 46,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "The United States remains indirectly exposed through global energy markets, strategic military positioning, and financial system sensitivity to geopolitical shocks.",
      drivers: [
        "Global energy market exposure",
        "Strategic defense commitments",
        "Financial market transmission risk"
      ],
      watchItems: [
        "Oil price volatility",
        "Military deployment posture",
        "Inflation indicators"
      ],
      trend: [47, 47, 47, 46, 46, 46, 46]
    },

    {
      country: "China",
      region: "East Asia",
      score: 46,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "China remains exposed through energy import dependency and global trade sensitivity under persistent maritime uncertainty.",
      drivers: [
        "Energy import reliance",
        "Global trade exposure",
        "Industrial demand sensitivity"
      ],
      watchItems: [
        "Shipping lane stability",
        "Manufacturing demand",
        "Energy import costs"
      ],
      trend: [47, 47, 47, 46, 46, 46, 46]
    },

    {
      country: "India",
      region: "South Asia",
      score: 47,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-neutral",
      summary:
        "India remains sensitive to global oil price fluctuations due to import dependence and inflation transmission channels affecting macroeconomic stability.",
      drivers: [
        "Oil import dependency",
        "Inflation transmission",
        "Currency sensitivity to energy prices"
      ],
      watchItems: [
        "Brent oil correlation",
        "Currency stability",
        "Fiscal import burden"
      ],
      trend: [48, 48, 48, 47, 47, 47, 47]
    },

    {
      country: "Germany",
      region: "Western Europe",
      score: 38,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Low",
      directionClass: "pill-neutral",
      summary:
        "Germany remains exposed primarily through industrial energy sensitivity and broader European security spillover risks.",
      drivers: [
        "Industrial energy costs",
        "EU security exposure",
        "Manufacturing sensitivity"
      ],
      watchItems: [
        "Industrial output trends",
        "Energy pricing",
        "EU coordination stability"
      ],
      trend: [39, 39, 39, 38, 38, 38, 38]
    },

    {
      country: "Japan",
      region: "East Asia",
      score: 39,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Low",
      directionClass: "pill-neutral",
      summary:
        "Japan remains exposed to maritime supply chain risks and imported energy dependency, though strong institutional buffers limit systemic instability.",
      drivers: [
        "Maritime supply chain exposure",
        "Energy import dependence",
        "Currency stability mechanisms"
      ],
      watchItems: [
        "Shipping lane security",
        "Energy import costs",
        "Currency stabilization policy"
      ],
      trend: [40, 40, 40, 39, 39, 39, 39]
    }
  ],

  countryReportData: [
    {
      title: "🇺🇦 Ukraine Country Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "83 / 100",
      direction: "Very High",
      watch:
        "Frontline dynamics, drone warfare intensity, energy infrastructure resilience, air defense capacity",
      why:
        "Ukraine remains in the highest risk category due to sustained battlefield pressure and continued targeting of critical infrastructure.",
      moved:
        "Risk remains stable with slight easing as escalation intensity did not increase further in the latest cycle.",
      matters:
        "Ukraine continues to be the central geopolitical risk anchor affecting European security and global energy sentiment."
    },

    {
      title: "🇮🇱 Israel Country Report",
      tag: "High Risk",
      tagClass: "pill-danger",
      score: "77 / 100",
      direction: "High",
      watch:
        "Regional military tensions, missile threats, diplomatic stabilization efforts",
      why:
        "Israel remains exposed to multi-front regional security instability and ongoing geopolitical friction.",
      moved:
        "No major escalation observed, but risk remains structurally elevated.",
      matters:
        "Regional instability around Israel continues to influence broader Middle East risk pricing."
    },

    {
      title: "🇮🇷 Iran Country Report",
      tag: "High Risk",
      tagClass: "pill-danger",
      score: "77 / 100",
      direction: "High",
      watch:
        "Hormuz shipping security, regional diplomacy, military posture signals",
      why:
        "Iran remains central to maritime energy risk due to its strategic position in global oil transit routes.",
      moved:
        "Risk remains stable with continued sensitivity in maritime corridors.",
      matters:
        "Iran’s position directly affects global energy pricing and shipping insurance dynamics."
    },

    {
      title: "🇷🇺 Russia Country Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "68 / 100",
      direction: "High",
      watch:
        "Military operations tempo, sanctions adaptation, energy export flows",
      why:
        "Russia remains in prolonged conflict conditions with sustained economic and military pressure.",
      moved:
        "No major directional change; conditions remain structurally tense.",
      matters:
        "Russia remains a key driver of European security and global commodity markets."
    },

    {
      title: "🇹🇷 Türkiye Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "54 / 100",
      direction: "Moderate",
      watch:
        "Inflation trajectory, energy imports, regional logistics corridor stability",
      why:
        "Türkiye remains sensitive to global energy prices and regional geopolitical spillovers.",
      moved:
        "Slight easing aligned with global oil volatility stabilization.",
      matters:
        "Türkiye acts as a regional logistics and energy corridor between Europe and the Middle East."
    },

    {
      title: "🇺🇸 United States Country Report",
      tag: "Low-Moderate Risk",
      tagClass: "pill-neutral",
      score: "46 / 100",
      direction: "Low-Moderate",
      watch:
        "Energy market volatility, military deployment posture, inflation sensitivity",
      why:
        "The US remains indirectly exposed through global market and strategic commitments.",
      moved:
        "Slight decrease due to marginal easing in global volatility.",
      matters:
        "US policy remains a primary stabilizer of global financial and security systems."
    },

    {
      title: "🇨🇳 China Country Report",
      tag: "Low-Moderate Risk",
      tagClass: "pill-neutral",
      score: "46 / 100",
      direction: "Low-Moderate",
      watch:
        "Energy imports, industrial demand, maritime supply chain stability",
      why:
        "China remains exposed through global trade dependency and energy import sensitivity.",
      moved:
        "Slight easing aligned with global energy stabilization.",
      matters:
        "China remains central to global manufacturing and supply chain stability."
    },

    {
      title: "🇮🇳 India Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-neutral",
      score: "47 / 100",
      direction: "Moderate",
      watch:
        "Oil import costs, inflation transmission, currency stability",
      why:
        "India remains sensitive to global oil fluctuations and inflation transmission effects.",
      moved:
        "Slight easing consistent with global commodity stabilization.",
      matters:
        "India’s economic stability is highly dependent on global energy pricing trends."
    },

    {
      title: "🇩🇪 Germany Country Report",
      tag: "Low Risk",
      tagClass: "pill-neutral",
      score: "38 / 100",
      direction: "Low",
      watch:
        "Industrial output, energy pricing, EU economic coordination",
      why:
        "Germany remains structurally stable but sensitive to energy and industrial cycles.",
      moved:
        "Slight easing due to reduced energy volatility.",
      matters:
        "Germany remains a core industrial engine of Europe."
    },

    {
      title: "🇯🇵 Japan Country Report",
      tag: "Low Risk",
      tagClass: "pill-neutral",
      score: "39 / 100",
      direction: "Low",
      watch:
        "Maritime security, energy imports, currency stability",
      why:
        "Japan remains exposed to maritime trade risks but maintains strong institutional buffers.",
      moved:
        "Slight easing aligned with global shipping stabilization.",
      matters:
        "Japan remains a key node in global technology and supply chains."
    }
  ]
};
