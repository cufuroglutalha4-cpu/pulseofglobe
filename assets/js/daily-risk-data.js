window.dailyRiskPageData = {
  reportDate: "May 26, 2026",
  updateTimeUtc: "21:40 UTC",

  overallScore: 78,
  previousOverallScore: 79,
  overallLabel: "Elevated",
  overallTrend: "-1 vs previous update",
  confidence: "High",

  heroSummary:
    "Global risk conditions remain elevated but slightly eased at the margin. The system continues to be driven by persistent geopolitical friction, particularly in Ukraine, the wider Middle East security environment, and maritime/energy corridor sensitivity. However, short-term volatility in energy and shipping markets has cooled compared to prior stress peaks, indicating a controlled but fragile equilibrium rather than escalation acceleration.",

  overallExplainer:
    "The composite global risk score declined slightly due to marginal stabilization in energy markets, freight pricing, and short-term geopolitical escalation signals. Ukraine remains the primary active war risk driver with sustained infrastructure pressure and asymmetric drone warfare shaping regional security expectations. Middle East risk remains structurally high, with maritime security and regional deterrence dynamics continuing to influence oil and LNG pricing sensitivity. The Strait of Hormuz remains a latent systemic risk node for global energy flows, though no immediate disruption escalation is currently confirmed. Economic transmission channels remain active but less disorderly, with inflation expectations stabilizing compared to earlier volatility phases. Humanitarian and displacement pressures persist across conflict zones. Climate risk remains structurally elevated but continues to act as a background systemic stressor rather than a short-term shock driver.",

  overview: [
    {
      label: "Report Date",
      value: "May 27, 2026",
      sub: "UTC daily update"
    },
    {
      label: "Top Driver",
      value: "Ukraine War + Middle East Maritime Sensitivity",
      sub: "Geopolitical core remains dominant"
    },
    {
      label: "Country Layer",
      value: "10 Countries Monitored",
      sub: "Exposure model active"
    },
    {
      label: "What Changed",
      value: "Slight de-escalation in volatility",
      sub: "Energy and shipping stress marginally stabilized"
    },
    {
      label: "Watch Next 48h",
      value: "Hormuz signals + Ukraine strikes + oil flows + diplomacy",
      sub: "Key swing factors"
    }
  ],

  glanceSummary:
    "Global risk eased slightly to 78/100, reflecting reduced short-term volatility while underlying geopolitical tensions remain structurally elevated.",

  glanceBullets: [
    "Ukraine remains the primary conflict driver due to sustained war and infrastructure pressure.",
    "Middle East and Hormuz maritime sensitivity continues to anchor energy-market risk.",
    "Economic risk remains elevated but less volatile compared to prior peaks.",
    "Humanitarian pressure persists in conflict zones with ongoing displacement stress.",
    "Climate risk remains structurally high and persistent in the background."
  ],

  dailyComparison: [
    { label: "Previous", value: "79" },
    { label: "Current", value: "78" },
    { label: "Trend", value: "Slight Decrease" },
    { label: "Tracked Countries", value: "10" }
  ],

  riskData: [
    {
      title: "🌍 Global Conflict Risk",
      subtitle: "Ukraine war, Middle East instability, maritime sensitivity",
      score: 81,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Very High / Fragile",
      directionClass: "pill-danger",
      description:
        "Conflict risk remains very high due to sustained Ukraine war pressure and persistent Middle East instability. Maritime corridors remain sensitive, particularly around Hormuz, where strategic deterrence dynamics continue to influence global energy expectations without immediate disruption escalation.",
      drivers: [
        "Ukraine drone warfare",
        "Infrastructure targeting pressure",
        "Middle East security instability"
      ],
      sources: ["Reuters", "UN monitoring", "Defense briefings"],
      trend: [82, 82, 82, 81, 81, 81, 81]
    },

    {
      title: "📉 Global Economic Risk",
      subtitle: "Energy pricing sensitivity, freight stabilization, inflation moderation",
      score: 74,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-warning",
      description:
        "Economic risk remains elevated but shows reduced volatility as energy and freight markets stabilize relative to prior stress peaks. Inflation transmission remains active but is less disorderly than earlier escalation phases.",
      drivers: [
        "Oil price sensitivity",
        "Freight normalization trends",
        "Inflation transmission lag"
      ],
      sources: ["IEA", "EIA", "Market data"],
      trend: [75, 75, 75, 74, 74, 74, 74]
    },

    {
      title: "🏥 Global Health Risk",
      subtitle: "Humanitarian strain and displacement pressure",
      score: 56,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-warning",
      description:
        "Humanitarian risk remains stable but elevated due to continued displacement in active conflict zones and pressure on emergency response systems.",
      drivers: [
        "Displacement flows",
        "Healthcare access constraints",
        "Aid logistics pressure"
      ],
      sources: ["WHO", "UNHCR", "NGO reports"],
      trend: [55, 55, 55, 56, 56, 56, 56]
    },

    {
      title: "🌡️ Climate Risk",
      subtitle: "Structural heat and hydrological stress",
      score: 66,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "High Structural",
      directionClass: "pill-danger",
      description:
        "Climate risk remains structurally elevated due to persistent global heat anomalies and hydrological instability affecting agriculture, infrastructure, and insurance systems.",
      drivers: [
        "Heat anomalies",
        "Flood risk exposure",
        "Water stress accumulation"
      ],
      sources: ["Copernicus", "IPCC frameworks", "Climate monitoring"],
      trend: [65, 65, 65, 66, 66, 66, 66]
    }
  ],

  reportData: [
    {
      title: "🌍 Global Conflict Report",
      tag: "High Risk",
      tagClass: "pill-danger",
      score: "81 / 100",
      direction: "Very High",
      watch:
        "Ukraine frontline dynamics, drone warfare, Middle East tensions, Hormuz signals",
      why:
        "Conflict remains the dominant global risk driver due to sustained war conditions in Ukraine and ongoing instability across the Middle East.",
      moved:
        "Risk slightly eased due to absence of new escalation shocks in maritime or regional conflict zones.",
      matters:
        "Conflict risk continues to transmit into global energy pricing, shipping security, and geopolitical stability."
    },

    {
      title: "📉 Global Economic Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "74 / 100",
      direction: "High",
      watch:
        "Oil pricing, freight costs, LNG flows, inflation trends",
      why:
        "Economic risk remains elevated but less volatile as energy markets stabilize relative to prior peaks.",
      moved:
        "Slight easing due to reduced shipping and energy volatility.",
      matters:
        "Economic risk remains the main transmission channel from geopolitics into global inflation and industrial cost structures."
    },

    {
      title: "🏥 Global Health Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "56 / 100",
      direction: "Moderate",
      watch:
        "Humanitarian corridors, displacement zones, emergency healthcare systems",
      why:
        "Health risk remains stable but elevated due to ongoing displacement and healthcare system pressure.",
      moved:
        "No meaningful change in structural humanitarian conditions.",
      matters:
        "Humanitarian stress increases long-term fragility in conflict-affected regions."
    },

    {
      title: "🌡️ Climate Risk Report",
      tag: "High Structural Risk",
      tagClass: "pill-danger",
      score: "66 / 100",
      direction: "Persistent",
      watch:
        "Flood risks, heat anomalies, agricultural pressure",
      why:
        "Climate risk remains structurally elevated due to persistent global environmental stress.",
      moved:
        "Stable structural conditions with no short-term escalation.",
      matters:
        "Climate risk acts as a continuous background multiplier of systemic global stress."
    }
  ],

  countryRiskData: [
    {
      country: "Ukraine",
      region: "Eastern Europe",
      score: 85,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Ukraine continues to experience sustained warfare pressure with ongoing drone strikes, infrastructure targeting, and systemic strain on energy and civilian networks.",
      drivers: [
        "Drone warfare intensity",
        "Infrastructure targeting",
        "Frontline stability pressure"
      ],
      watchItems: [
        "Energy grid resilience",
        "Air defense capacity",
        "Frontline dynamics"
      ],
      trend: [86, 86, 86, 85, 85, 85, 85]
    },

    {
      country: "Israel",
      region: "Middle East",
      score: 79,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-danger",
      summary:
        "Israel remains exposed to persistent regional instability, multi-front security pressure, and periodic escalation risk across neighboring theaters.",
      drivers: [
        "Regional security tension",
        "Missile/drone threat environment",
        "Multi-front deterrence dynamics"
      ],
      watchItems: [
        "Border escalation signals",
        "Regional diplomatic stability",
        "Security incidents"
      ],
      trend: [80, 80, 80, 79, 79, 79, 79]
    },

    {
      country: "Iran",
      region: "Middle East",
      score: 78,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-danger",
      summary:
        "Iran remains a central node in global maritime and regional risk dynamics due to its strategic position in Hormuz and ongoing geopolitical friction.",
      drivers: [
        "Hormuz strategic leverage",
        "Regional geopolitical tension",
        "Security signaling uncertainty"
      ],
      watchItems: [
        "Maritime corridor activity",
        "Regional diplomacy signals",
        "Military posture shifts"
      ],
      trend: [79, 79, 79, 78, 78, 78, 78]
    },

    {
      country: "Russia",
      region: "Eastern Europe / Eurasia",
      score: 70,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-warning",
      summary:
        "Russia remains in prolonged conflict conditions with sustained military operations and economic pressure under sanctions environment.",
      drivers: [
        "War-related economic strain",
        "Military operational costs",
        "Sanctions adaptation pressure"
      ],
      watchItems: [
        "Energy export flows",
        "Military activity tempo",
        "Fiscal resilience"
      ],
      trend: [71, 71, 71, 70, 70, 70, 70]
    },

    {
      country: "Türkiye",
      region: "Eastern Mediterranean",
      score: 56,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "Türkiye remains exposed to global energy price fluctuations, inflation transmission, and regional logistics corridor sensitivity.",
      drivers: [
        "Imported energy dependency",
        "Inflation pass-through",
        "Regional trade corridor exposure"
      ],
      watchItems: [
        "Fuel price trends",
        "Inflation data",
        "Trade flow stability"
      ],
      trend: [57, 57, 57, 56, 56, 56, 56]
    },

    {
      country: "United States",
      region: "North America",
      score: 48,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "The United States remains indirectly exposed to global geopolitical risk through energy markets, strategic military posture, and financial transmission channels.",
      drivers: [
        "Global energy exposure",
        "Defense commitments",
        "Financial system sensitivity"
      ],
      watchItems: [
        "Oil price volatility",
        "Military posture updates",
        "Inflation signals"
      ],
      trend: [49, 49, 49, 48, 48, 48, 48]
    },

    {
      country: "China",
      region: "East Asia",
      score: 49,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "China remains exposed through energy import dependence and global trade sensitivity under ongoing maritime uncertainty.",
      drivers: [
        "Energy import reliance",
        "Trade system exposure",
        "Industrial demand sensitivity"
      ],
      watchItems: [
        "Shipping lane stability",
        "Manufacturing demand",
        "Import cost trends"
      ],
      trend: [50, 50, 50, 49, 49, 49, 49]
    },

    {
      country: "India",
      region: "South Asia",
      score: 50,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-neutral",
      summary:
        "India remains sensitive to global oil price fluctuations due to import dependency and inflation transmission effects.",
      drivers: [
        "Oil import dependence",
        "Inflation transmission",
        "Currency sensitivity"
      ],
      watchItems: [
        "Brent oil correlation",
        "Currency stability",
        "Fiscal import burden"
      ],
      trend: [51, 51, 51, 50, 50, 50, 50]
    },

    {
      country: "Germany",
      region: "Western Europe",
      score: 40,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Low",
      directionClass: "pill-neutral",
      summary:
        "Germany remains structurally stable but exposed to industrial energy sensitivity and broader European economic conditions.",
      drivers: [
        "Industrial energy costs",
        "EU economic exposure",
        "Manufacturing cycle sensitivity"
      ],
      watchItems: [
        "Industrial output",
        "Energy pricing trends",
        "EU coordination stability"
      ],
      trend: [41, 41, 41, 40, 40, 40, 40]
    },

    {
      country: "Japan",
      region: "East Asia",
      score: 41,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Low",
      directionClass: "pill-neutral",
      summary:
        "Japan remains exposed to maritime trade risks and imported energy dependency, though strong institutional buffers limit systemic instability.",
      drivers: [
        "Maritime supply chain exposure",
        "Energy import dependency",
        "Currency stabilization framework"
      ],
      watchItems: [
        "Shipping security",
        "Energy import costs",
        "Currency policy response"
      ],
      trend: [42, 42, 42, 41, 41, 41, 41]
    }
  ],

  countryReportData: [
    {
      title: "🇺🇦 Ukraine Country Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "85 / 100",
      direction: "Very High",
      watch:
        "Frontline dynamics, drone warfare, infrastructure resilience, energy grid stability",
      why:
        "Ukraine remains the central active war theater in Europe with sustained military pressure and infrastructure targeting.",
      moved:
        "Risk remains structurally stable with no major escalation spike in the latest cycle.",
      matters:
        "Ukraine continues to shape European security expectations and global energy risk sentiment."
    },

    {
      title: "🇮🇱 Israel Country Report",
      tag: "High Risk",
      tagClass: "pill-danger",
      score: "79 / 100",
      direction: "High",
      watch:
        "Regional tensions, security incidents, diplomatic stabilization",
      why:
        "Israel remains exposed to multi-front regional instability and security escalation risk.",
      moved:
        "No structural change, risk remains persistent.",
      matters:
        "Regional instability around Israel continues to influence Middle East risk pricing."
    },

    {
      title: "🇮🇷 Iran Country Report",
      tag: "High Risk",
      tagClass: "pill-danger",
      score: "78 / 100",
      direction: "High",
      watch:
        "Hormuz maritime flows, regional diplomacy, security posture signals",
      why:
        "Iran remains central to global energy security dynamics due to Hormuz corridor sensitivity.",
      moved:
        "Stable but elevated risk conditions continue.",
      matters:
        "Iran remains a systemic factor in global oil and shipping risk models."
    },

    {
      title: "🇷🇺 Russia Country Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "70 / 100",
      direction: "High",
      watch:
        "Military operations tempo, sanctions pressure, energy export flows",
      why:
        "Russia remains in prolonged conflict conditions with sustained geopolitical and economic pressure.",
      moved:
        "No significant directional shift.",
      matters:
        "Russia remains a key driver of European security and global commodity markets."
    },

    {
      title: "🇹🇷 Türkiye Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "56 / 100",
      direction: "Moderate",
      watch:
        "Inflation trajectory, energy imports, trade corridor stability",
      why:
        "Türkiye remains sensitive to global energy pricing and regional spillover dynamics.",
      moved:
        "Slight easing in line with global volatility reduction.",
      matters:
        "Türkiye functions as a critical logistics and energy bridge economy."
    },

    {
      title: "🇺🇸 United States Country Report",
      tag: "Low-Moderate Risk",
      tagClass: "pill-neutral",
      score: "48 / 100",
      direction: "Low-Moderate",
      watch:
        "Energy market volatility, defense posture, financial system sensitivity",
      why:
        "The US remains indirectly exposed to global geopolitical risk through markets and strategic commitments.",
      moved:
        "Slight easing due to reduced volatility.",
      matters:
        "US policy remains central to global financial and security stabilization."
    },

    {
      title: "🇨🇳 China Country Report",
      tag: "Low-Moderate Risk",
      tagClass: "pill-neutral",
      score: "49 / 100",
      direction: "Low-Moderate",
      watch:
        "Energy imports, trade flows, maritime stability",
      why:
        "China remains exposed through global trade and energy dependency channels.",
      moved:
        "Stable with slight easing.",
      matters:
        "China remains central to global manufacturing and supply chains."
    },

    {
      title: "🇮🇳 India Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-neutral",
      score: "50 / 100",
      direction: "Moderate",
      watch:
        "Oil import costs, inflation transmission, currency sensitivity",
      why:
        "India remains sensitive to global energy price fluctuations and macro transmission effects.",
      moved:
        "Stable risk profile with slight easing.",
      matters:
        "India’s macro stability remains closely linked to global energy markets."
    },

    {
      title: "🇩🇪 Germany Country Report",
      tag: "Low Risk",
      tagClass: "pill-neutral",
      score: "40 / 100",
      direction: "Low",
      watch:
        "Industrial output, energy pricing, EU coordination",
      why:
        "Germany remains structurally stable but exposed to industrial energy sensitivity.",
      moved:
        "Slight easing due to reduced energy volatility.",
      matters:
        "Germany remains a core industrial engine of Europe."
    },

    {
      title: "🇯🇵 Japan Country Report",
      tag: "Low Risk",
      tagClass: "pill-neutral",
      score: "41 / 100",
      direction: "Low",
      watch:
        "Maritime security, energy imports, currency stability",
      why:
        "Japan remains exposed to maritime trade risk but maintains strong institutional buffers.",
      moved:
        "Stable with slight easing.",
      matters:
        "Japan remains a key technology and supply chain hub."
    }
  ]
};
