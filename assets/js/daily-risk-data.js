window.dailyRiskPageData = {
  reportDate: "May 28, 2026",
  updateTimeUtc: "21:10 UTC",

  overallScore: 82,
  previousOverallScore: 78,
  overallLabel: "High / Elevated",
  overallTrend: "+4 vs previous update",
  confidence: "High",

  heroSummary:
    "Global risk conditions moved higher as geopolitical, health, and climate stressors converged. The primary drivers are renewed sensitivity around the Strait of Hormuz, persistent Ukraine war pressure, and the Bundibugyo Ebola outbreak in the Democratic Republic of the Congo and Uganda. The situation is serious but not uncontrolled: market stress remains uneven, diplomacy still provides a stabilizing channel, and the current health emergency does not meet the definition of a pandemic emergency. The overall environment is best described as high but contained systemic fragility.",

  overallExplainer:
    "The composite global risk score increased from 78 to 82 because several medium-to-high impact risk layers are now active at the same time. Conflict risk remains elevated due to the Ukraine war, Russia's threat of further systematic strikes on Kyiv, and continued maritime uncertainty linked to the Strait of Hormuz. Economic risk rose because energy and shipping corridors remain sensitive, although recent market behavior shows partial stabilization as investors price in possible diplomatic progress. Health risk increased materially after WHO determined that the Bundibugyo Ebola outbreak in DRC and Uganda constitutes a Public Health Emergency of International Concern. This is not classified as a pandemic emergency, but the absence of approved strain-specific vaccines or treatments, weak contact follow-up, cross-border movement, and insecurity in affected areas raise regional containment risk. Climate risk also moved higher after new global temperature outlooks pointed to near-record heat risk in the 2026–2030 period. Overall, the system is more fragile than the previous update, but not in a runaway escalation phase.",

  overview: [
    {
      label: "Report Date",
      value: "May 29, 2026",
      sub: "UTC daily update"
    },
    {
      label: "Top Driver",
      value: "Hormuz Risk + Bundibugyo Ebola + Ukraine Pressure",
      sub: "Geopolitical and health layers both active"
    },
    {
      label: "Country Layer",
      value: "12 Countries Monitored",
      sub: "DRC and Uganda added due to Ebola outbreak"
    },
    {
      label: "What Changed",
      value: "Health risk rose, maritime risk stayed sensitive",
      sub: "Global score increased but remains below extreme level"
    },
    {
      label: "Watch Next 48h",
      value: "Ebola containment + Hormuz flows + Ukraine strikes + oil prices",
      sub: "Key swing factors"
    }
  ],

  glanceSummary:
    "Global risk increased to 82/100 as a WHO-declared Ebola emergency added a new health layer on top of persistent Ukraine war pressure and Hormuz-linked energy corridor sensitivity.",

  glanceBullets: [
    "Bundibugyo Ebola in DRC and Uganda is now the main new health driver; it is serious but not classified as a pandemic emergency.",
    "Hormuz remains a systemic energy and shipping chokepoint, with limited traffic and irregular tanker movement keeping risk premiums alive.",
    "Ukraine remains the dominant active-war driver, with Kyiv strike threats and infrastructure pressure sustaining European security risk.",
    "Markets show partial resilience, with oil retreating during periods of diplomatic optimism, preventing the economic score from moving into extreme territory.",
    "Climate risk moved higher after fresh 2026–2030 temperature outlooks pointed to near-record heat and stronger extreme-weather probability."
  ],

  dailyComparison: [
    { label: "Previous", value: "78" },
    { label: "Current", value: "82" },
    { label: "Trend", value: "Increase" },
    { label: "Tracked Countries", value: "12" }
  ],

  riskData: [
    {
      title: "🌍 Global Conflict Risk",
      subtitle: "Ukraine war, Iran-Hormuz pressure, Middle East security volatility",
      score: 86,
      changeText: "+5",
      changeClass: "pill-danger",
      direction: "Very High / Fragile",
      directionClass: "pill-danger",
      description:
        "Conflict risk remains very high. Ukraine continues to face sustained military and infrastructure pressure, while the Middle East risk layer remains sensitive because Hormuz is still functioning as a global energy chokepoint. The main change is not a single dramatic escalation, but the persistence of several active conflict channels at once: Ukraine, Iran-linked maritime risk, Israel-region security tension, and energy-route uncertainty. This keeps the conflict category near the upper risk band, although the absence of a confirmed full-scale new disruption prevents an extreme score.",
      drivers: [
        "Ukraine war and Kyiv strike threats",
        "Hormuz maritime corridor sensitivity",
        "Middle East deterrence and security signaling",
        "Energy infrastructure vulnerability"
      ],
      sources: ["Reuters", "UN monitoring", "Defense and maritime briefings"],
      trend: [81, 81, 82, 83, 84, 85, 86]
    },

    {
      title: "📉 Global Economic Risk",
      subtitle: "Oil sensitivity, shipping disruption risk, inflation transmission",
      score: 80,
      changeText: "+6",
      changeClass: "pill-warning",
      direction: "High",
      directionClass: "pill-warning",
      description:
        "Economic risk moved higher because energy and shipping channels remain exposed to geopolitical disruption, particularly around the Strait of Hormuz. Oil and LNG flows are not fully normalized, and irregular tanker movement increases uncertainty for import-dependent economies. However, the category does not move into extreme territory because financial markets have shown resilience and oil has eased during periods of diplomatic optimism. The dominant economic risk is still transmission: higher insurance, freight, fuel, and import costs can feed inflation and industrial cost structures if maritime stress persists.",
      drivers: [
        "Oil and LNG supply-route sensitivity",
        "Freight and marine insurance uncertainty",
        "Inflation pass-through risk",
        "Market dependence on diplomatic progress"
      ],
      sources: ["Reuters", "IEA", "EIA", "LSEG/Kpler shipping data"],
      trend: [74, 75, 76, 77, 78, 79, 80]
    },

    {
      title: "🏥 Global Health Risk",
      subtitle: "Bundibugyo Ebola emergency, humanitarian access, hantavirus monitoring",
      score: 68,
      changeText: "+12",
      changeClass: "pill-danger",
      direction: "Elevated / Regional Emergency",
      directionClass: "pill-warning",
      description:
        "Health risk rose materially after the Bundibugyo Ebola outbreak in DRC and Uganda was classified by WHO as a Public Health Emergency of International Concern. The current event does not meet the pandemic emergency threshold, but the risk is significant because confirmed and suspected cases are rising, contact follow-up is difficult, cross-border mobility is high, and insecurity complicates response operations. A separate hantavirus cluster linked to cruise-ship travel remains under monitoring, but its global population risk is currently assessed as low. The health score therefore rises sharply, while remaining below pandemic-level risk.",
      drivers: [
        "Bundibugyo Ebola PHEIC",
        "Weak contact tracing in affected zones",
        "Cross-border movement between DRC and Uganda",
        "Limited vaccine and treatment readiness for this strain",
        "Hantavirus cruise-ship cluster monitoring"
      ],
      sources: ["WHO", "Reuters", "Africa CDC", "National health authorities"],
      trend: [56, 57, 59, 62, 65, 67, 68]
    },

    {
      title: "🌡️ Climate Risk",
      subtitle: "Near-record heat outlook, Arctic warming, hydrological stress",
      score: 73,
      changeText: "+7",
      changeClass: "pill-warning",
      direction: "High Structural",
      directionClass: "pill-danger",
      description:
        "Climate risk moved higher as new outlooks point to persistent global heat pressure through the 2026–2030 period. The risk is structural rather than sudden: near-record temperatures, Arctic amplification, sea-ice weakness, drought-sensitive regions, flood exposure, and agricultural stress all continue to act as long-term multipliers. Climate is not the main short-term shock driver today, but it is increasingly relevant to food security, insurance costs, public health, migration pressure, and infrastructure resilience.",
      drivers: [
        "Near-record global temperature outlook",
        "Arctic warming acceleration",
        "Flood and drought exposure",
        "Agricultural and water-system stress"
      ],
      sources: ["WMO", "UK Met Office", "Copernicus", "Reuters climate reporting"],
      trend: [66, 67, 68, 69, 70, 72, 73]
    }
  ],

  reportData: [
    {
      title: "🌍 Global Conflict Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "86 / 100",
      direction: "Very High",
      watch:
        "Ukraine strikes, Kyiv security warnings, Hormuz tanker traffic, Iran-linked maritime signals, Israel-region security incidents",
      why:
        "Conflict remains the strongest driver of the global risk model. Ukraine continues to shape European security risk through sustained war, drone warfare, infrastructure targeting, and the possibility of heavier strikes on Kyiv. At the same time, the Strait of Hormuz remains a systemic maritime chokepoint, meaning even limited disruptions or irregular tanker movement can affect oil, LNG, freight, and insurance expectations worldwide. Middle East deterrence dynamics also remain fragile, especially when military signaling, sanctions, and shipping risk overlap.",
      moved:
        "The conflict score increased because maritime and Ukraine-related risk stayed active at the same time rather than easing in sequence. There is no confirmed uncontrolled escalation today, but the number of active pressure points is higher than in the previous update.",
      matters:
        "Conflict risk matters because it transmits quickly into energy prices, shipping security, food and fuel costs, defense posture, humanitarian pressure, and investor behavior. Even when markets appear calm, a single incident around Hormuz or a major strike cycle in Ukraine can rapidly reprice global risk."
    },

    {
      title: "📉 Global Economic Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "80 / 100",
      direction: "High",
      watch:
        "Brent oil, LNG flows, tanker insurance, freight costs, inflation expectations, central-bank communication",
      why:
        "Economic risk is high because the main geopolitical stress channels are directly connected to energy and shipping. The Strait of Hormuz is especially important because it affects oil and LNG flows into Asia and global price expectations. Import-dependent economies are more exposed to higher freight, insurance, fuel, and currency pressure. However, the economic system is not in full shock mode because markets have shown an ability to stabilize when diplomatic signals improve.",
      moved:
        "The score increased from the previous cycle due to persistent maritime uncertainty and the possibility that supply-route stress could last longer than markets expected. It did not rise more sharply because oil has retreated during periods of peace-talk optimism and equity markets remain resilient.",
      matters:
        "Economic risk is the bridge between geopolitical events and everyday impact. Higher energy and shipping costs can feed inflation, pressure household budgets, reduce industrial margins, and increase policy uncertainty. If Hormuz flows normalize, this category can ease quickly; if disruption returns, it can move higher fast."
    },

    {
      title: "🏥 Global Health Report",
      tag: "Elevated Risk",
      tagClass: "pill-warning",
      score: "68 / 100",
      direction: "Elevated",
      watch:
        "Bundibugyo Ebola case growth, DRC contact tracing, Uganda cross-border surveillance, healthcare-worker infections, hantavirus follow-up",
      why:
        "Health risk rose because Bundibugyo Ebola is now a WHO-declared international public health emergency. The outbreak is concentrated in DRC and Uganda, but the operating environment is difficult: insecurity, population movement, humanitarian strain, weak contact follow-up, and gaps in isolation and referral systems can slow containment. The strain also has no approved vaccine or specific treatment, making early detection, isolation, supportive care, contact tracing, and community engagement especially important.",
      moved:
        "The health score increased sharply because this is a real outbreak risk, not just background humanitarian pressure. Still, the model avoids pandemic-level scoring because WHO has not classified the event as a pandemic emergency, and the hantavirus cruise-ship cluster remains limited with low assessed global risk.",
      matters:
        "Health risk matters because outbreaks can quickly become regional governance, mobility, trade, and humanitarian problems. Even when global risk remains contained, affected states can face severe local pressure on hospitals, surveillance systems, border health controls, and public trust."
    },

    {
      title: "🌡️ Climate Risk Report",
      tag: "High Structural Risk",
      tagClass: "pill-danger",
      score: "73 / 100",
      direction: "Persistent / Rising",
      watch:
        "Northern Hemisphere heat season, flood risk, drought-sensitive regions, Arctic sea ice, food and water stress",
      why:
        "Climate risk remains a high structural driver. Recent global temperature outlooks indicate that the next several years are likely to stay near record levels, with Arctic warming stronger than the global average and possible El Niño influence adding further heat pressure. This does not create a single-day shock like a conflict event, but it raises the baseline risk for heatwaves, fires, floods, droughts, agricultural stress, and public-health strain.",
      moved:
        "The score increased because the latest climate outlook reinforces that extreme-weather risk is not a distant background issue; it is becoming a near-term operational risk for governments, insurers, food systems, infrastructure, and public health.",
      matters:
        "Climate risk matters because it multiplies other categories. Heat and drought can worsen food prices, displacement, disease vulnerability, electricity demand, water stress, and infrastructure damage. It is a slower-moving risk layer, but it makes the overall system less resilient."
    }
  ],

  countryRiskData: [
    {
      country: "Ukraine",
      region: "Eastern Europe",
      score: 87,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Ukraine remains one of the highest-risk countries in the model due to sustained war, Russian strike threats, drone warfare, and ongoing pressure on energy and civilian infrastructure.",
      drivers: [
        "Kyiv strike warnings",
        "Drone and missile warfare",
        "Infrastructure targeting",
        "Frontline pressure"
      ],
      watchItems: [
        "Kyiv air defense alerts",
        "Energy grid resilience",
        "Frontline movement",
        "Western defense support"
      ],
      trend: [85, 85, 86, 86, 87, 87, 87]
    },

    {
      country: "Israel",
      region: "Middle East",
      score: 84,
      changeText: "+5",
      changeClass: "pill-warning",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Israel remains highly exposed to regional deterrence dynamics, Iran-linked escalation risk, and multi-front security pressure. The score rises because Middle East maritime and military signaling remain connected to global energy risk.",
      drivers: [
        "Regional security tension",
        "Iran-linked deterrence risk",
        "Missile and drone threat environment",
        "Multi-front pressure"
      ],
      watchItems: [
        "Regional retaliation signals",
        "Border incidents",
        "US-Iran diplomacy",
        "Air defense posture"
      ],
      trend: [79, 80, 81, 82, 83, 84, 84]
    },

    {
      country: "Iran",
      region: "Middle East",
      score: 86,
      changeText: "+8",
      changeClass: "pill-danger",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Iran is one of the core systemic risk nodes because its regional posture, sanctions exposure, and proximity to the Strait of Hormuz directly affect global oil, LNG, and maritime security expectations.",
      drivers: [
        "Hormuz strategic leverage",
        "Oil sanctions pressure",
        "Military and diplomatic signaling",
        "Regional escalation risk"
      ],
      watchItems: [
        "Tanker movement through Hormuz",
        "US sanctions enforcement",
        "Ceasefire or negotiation signals",
        "Regional military posture"
      ],
      trend: [78, 80, 82, 84, 85, 86, 86]
    },

    {
      country: "Russia",
      region: "Eastern Europe / Eurasia",
      score: 75,
      changeText: "+5",
      changeClass: "pill-warning",
      direction: "High",
      directionClass: "pill-warning",
      summary:
        "Russia remains in a prolonged high-risk condition due to sustained war operations, strike threats against Ukraine, sanctions pressure, and energy-market relevance.",
      drivers: [
        "War tempo",
        "Threats of systematic strikes",
        "Sanctions adaptation pressure",
        "Energy export exposure"
      ],
      watchItems: [
        "Military activity tempo",
        "Ukraine infrastructure attacks",
        "Energy export flows",
        "Fiscal resilience"
      ],
      trend: [70, 71, 72, 73, 74, 75, 75]
    },

    {
      country: "Democratic Republic of the Congo",
      region: "Central Africa",
      score: 82,
      changeText: "New",
      changeClass: "pill-danger",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "DRC was added to the country layer due to the Bundibugyo Ebola outbreak. Risk is very high because confirmed and suspected cases are rising in a difficult humanitarian and security environment.",
      drivers: [
        "Bundibugyo Ebola outbreak",
        "Weak contact follow-up",
        "Insecurity in affected provinces",
        "Healthcare system strain"
      ],
      watchItems: [
        "Confirmed case growth",
        "Contact tracing coverage",
        "Health worker infections",
        "Isolation and referral capacity"
      ],
      trend: [70, 73, 76, 79, 81, 82, 82]
    },

    {
      country: "Uganda",
      region: "East Africa",
      score: 69,
      changeText: "New",
      changeClass: "pill-warning",
      direction: "Elevated",
      directionClass: "pill-warning",
      summary:
        "Uganda was added because confirmed Bundibugyo Ebola cases have been reported and cross-border transmission risk requires close surveillance. The score is lower than DRC because the outbreak burden is currently smaller, but preparedness risk is elevated.",
      drivers: [
        "Cross-border Ebola exposure",
        "Confirmed cases reported",
        "Border health surveillance",
        "Regional mobility"
      ],
      watchItems: [
        "New confirmed cases",
        "Contact tracing results",
        "Kampala surveillance",
        "DRC border movement"
      ],
      trend: [58, 61, 64, 66, 68, 69, 69]
    },

    {
      country: "Türkiye",
      region: "Eastern Mediterranean",
      score: 61,
      changeText: "+5",
      changeClass: "pill-warning",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "Türkiye remains moderately elevated due to imported energy exposure, inflation sensitivity, regional logistics relevance, and proximity to Middle East and Black Sea risk corridors.",
      drivers: [
        "Imported energy dependency",
        "Inflation pass-through",
        "Regional corridor exposure",
        "Black Sea and Middle East proximity"
      ],
      watchItems: [
        "Fuel price trends",
        "Inflation data",
        "Shipping and trade flows",
        "Regional diplomatic signals"
      ],
      trend: [56, 57, 58, 59, 60, 61, 61]
    },

    {
      country: "United States",
      region: "North America",
      score: 60,
      changeText: "+12",
      changeClass: "pill-warning",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "The United States moved higher because it is more directly connected to Iran-related security, sanctions, and diplomatic dynamics. Domestic systemic stability remains strong, but external strategic exposure is elevated.",
      drivers: [
        "Iran sanctions and diplomacy",
        "Energy-market transmission",
        "Defense commitments",
        "Financial-market sensitivity"
      ],
      watchItems: [
        "US-Iran negotiation signals",
        "Oil price volatility",
        "Military posture updates",
        "Inflation expectations"
      ],
      trend: [48, 50, 53, 56, 58, 60, 60]
    },

    {
      country: "China",
      region: "East Asia",
      score: 58,
      changeText: "+9",
      changeClass: "pill-warning",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "China’s risk score rose because Hormuz-related shipping and energy flows directly affect Asian import routes. The country remains institutionally stable, but energy and trade exposure are more visible in this cycle.",
      drivers: [
        "Energy import reliance",
        "Hormuz-linked tanker flows",
        "Manufacturing demand sensitivity",
        "Trade route exposure"
      ],
      watchItems: [
        "Crude arrivals from Gulf routes",
        "Shipping lane stability",
        "Manufacturing demand",
        "Import cost trends"
      ],
      trend: [49, 50, 52, 54, 56, 58, 58]
    },

    {
      country: "India",
      region: "South Asia",
      score: 59,
      changeText: "+9",
      changeClass: "pill-warning",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "India’s score rose because its oil import dependence makes it sensitive to Gulf shipping risk and energy price swings. The domestic system remains resilient, but imported inflation and currency sensitivity are key watch points.",
      drivers: [
        "Oil import dependence",
        "Hormuz shipping exposure",
        "Inflation transmission",
        "Currency sensitivity"
      ],
      watchItems: [
        "Brent oil correlation",
        "Gulf crude arrivals",
        "Currency stability",
        "Fuel price pass-through"
      ],
      trend: [50, 51, 53, 55, 57, 59, 59]
    },

    {
      country: "Germany",
      region: "Western Europe",
      score: 47,
      changeText: "+7",
      changeClass: "pill-warning",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "Germany remains structurally stable, but the score moved higher because European industry is sensitive to energy prices, global trade conditions, and imported uncertainty from health and geopolitical risk.",
      drivers: [
        "Industrial energy sensitivity",
        "EU economic exposure",
        "Health-security monitoring",
        "Manufacturing cycle weakness"
      ],
      watchItems: [
        "Industrial output",
        "Energy pricing trends",
        "EU coordination",
        "Public health monitoring"
      ],
      trend: [40, 41, 42, 44, 46, 47, 47]
    },

    {
      country: "Japan",
      region: "East Asia",
      score: 48,
      changeText: "+7",
      changeClass: "pill-warning",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "Japan remains stable but exposed to maritime trade, imported energy costs, and currency sensitivity. Hormuz uncertainty matters because Japan relies heavily on secure seaborne energy flows.",
      drivers: [
        "Maritime supply chain exposure",
        "Energy import dependency",
        "Currency sensitivity",
        "Regional trade exposure"
      ],
      watchItems: [
        "Shipping security",
        "Energy import costs",
        "Currency policy response",
        "Asian demand signals"
      ],
      trend: [41, 42, 43, 45, 47, 48, 48]
    }
  ],

  countryReportData: [
    {
      title: "🇺🇦 Ukraine Country Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "87 / 100",
      direction: "Very High",
      watch:
        "Kyiv strike threats, frontline dynamics, drone warfare, infrastructure resilience, energy grid stability",
      why:
        "Ukraine remains the central active-war theater in Europe. The risk is driven by sustained Russian pressure, repeated infrastructure targeting, drone and missile warfare, and threats of intensified strikes against Kyiv. Civilian and energy networks remain under strain, while the frontline environment continues to influence European security expectations.",
      moved:
        "The score rose slightly because the latest cycle includes renewed strike warnings and continued pressure on urban and infrastructure targets. The move is not a panic spike, but it confirms that the war-risk layer remains highly active.",
      matters:
        "Ukraine matters because the war continues to shape European defense planning, energy resilience, food and logistics corridors, sanctions policy, and global security sentiment."
    },

    {
      title: "🇮🇱 Israel Country Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "84 / 100",
      direction: "Very High",
      watch:
        "Regional tensions, missile and drone threats, Iran-linked signaling, border security incidents, diplomatic stabilization",
      why:
        "Israel remains exposed to a fragile regional security environment. The risk is not limited to direct domestic incidents; it is also tied to broader deterrence dynamics involving Iran, maritime pressure, and US regional posture. Multi-front escalation risk remains a central concern.",
      moved:
        "The score increased because Middle East risk is again tightly connected to Hormuz, sanctions, and regional military signaling. No single uncontrolled escalation is confirmed, but the operating environment is more fragile than in the previous update.",
      matters:
        "Israel matters because regional instability around it can rapidly affect energy markets, air defense posture, diplomatic channels, and broader Middle East risk pricing."
    },

    {
      title: "🇮🇷 Iran Country Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "86 / 100",
      direction: "Very High",
      watch:
        "Hormuz maritime flows, sanctions enforcement, US-Iran diplomacy, regional security posture, tanker activity",
      why:
        "Iran is a core systemic risk node because its strategic position near the Strait of Hormuz links regional security to global oil, LNG, and shipping expectations. Sanctions, military posture, and negotiation signals all have market impact.",
      moved:
        "The score increased sharply because Hormuz-linked traffic remains limited and irregular tanker movement keeps energy-market uncertainty elevated. The risk is high, although diplomatic channels still prevent the model from assigning an extreme score.",
      matters:
        "Iran matters because even limited disruption or signaling around Hormuz can affect global energy prices, shipping insurance, Asian import routes, inflation expectations, and investor risk appetite."
    },

    {
      title: "🇷🇺 Russia Country Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "75 / 100",
      direction: "High",
      watch:
        "Military operations tempo, Ukraine strike activity, sanctions pressure, energy export flows, fiscal resilience",
      why:
        "Russia remains in prolonged conflict conditions and continues to be a major driver of European security risk. The country’s risk profile reflects military operations, sanctions adaptation, energy-export exposure, and the broader economic cost of sustained war.",
      moved:
        "The score rose because strike threats and the Ukraine war remain central to the global risk cycle. The move is moderate because Russia’s risk profile is already structurally high rather than newly emerging.",
      matters:
        "Russia matters because its war posture influences European defense spending, commodity markets, energy flows, sanctions policy, and global diplomatic alignment."
    },

    {
      title: "🇨🇩 Democratic Republic of the Congo Country Report",
      tag: "Very High Health Risk",
      tagClass: "pill-danger",
      score: "82 / 100",
      direction: "Very High",
      watch:
        "Bundibugyo Ebola case growth, contact tracing, healthcare-worker infections, isolation capacity, insecurity in affected provinces",
      why:
        "DRC was added because it is the central location of the Bundibugyo Ebola outbreak. The country faces a difficult containment environment due to humanitarian pressure, insecurity, weak follow-up capacity, and movement across affected zones. These conditions can allow localized outbreaks to become harder to control.",
      moved:
        "This is a new country-layer addition. The score begins high because confirmed and suspected cases have grown rapidly and the outbreak is serious enough to trigger international public health coordination.",
      matters:
        "DRC matters because outbreak control depends on surveillance, safe burials, community trust, treatment access, and secure humanitarian operations. Failure in these areas can increase regional health risk."
    },

    {
      title: "🇺🇬 Uganda Country Report",
      tag: "Elevated Health Risk",
      tagClass: "pill-warning",
      score: "69 / 100",
      direction: "Elevated",
      watch:
        "New confirmed Ebola cases, Kampala surveillance, DRC border movement, contact tracing, hospital preparedness",
      why:
        "Uganda was added because confirmed Bundibugyo Ebola cases have been reported and cross-border exposure from DRC requires strong surveillance. Uganda’s current burden appears lower than DRC’s, but regional mobility and urban detection risk justify a higher watch level.",
      moved:
        "This is a new country-layer addition. The score is elevated but below DRC because the outbreak center remains primarily in DRC, while Uganda’s risk is currently more tied to importation, surveillance, and containment capacity.",
      matters:
        "Uganda matters because cross-border containment is essential for preventing wider regional spread. Early detection, contact tracing, and hospital readiness are the key stabilizers."
    },

    {
      title: "🇹🇷 Türkiye Country Report",
      tag: "Moderate-Elevated Risk",
      tagClass: "pill-warning",
      score: "61 / 100",
      direction: "Moderate / Elevated",
      watch:
        "Inflation trajectory, fuel prices, energy imports, Black Sea logistics, Middle East spillover signals",
      why:
        "Türkiye remains sensitive to global energy prices and regional trade corridor stability. The country is not a primary crisis zone in this update, but imported energy costs, inflation pass-through, and proximity to both Black Sea and Middle East risk corridors keep the score elevated.",
      moved:
        "The score increased because Hormuz and broader energy-market uncertainty raise import-cost sensitivity. The move is controlled because domestic systemic stability is not the main risk driver today.",
      matters:
        "Türkiye matters because it functions as a logistics, trade, and energy bridge between Europe, the Middle East, the Black Sea, and Asia. External shocks can pass through inflation, currency, and trade channels."
    },

    {
      title: "🇺🇸 United States Country Report",
      tag: "Moderate-Elevated Risk",
      tagClass: "pill-warning",
      score: "60 / 100",
      direction: "Moderate / Elevated",
      watch:
        "US-Iran diplomacy, sanctions enforcement, defense posture, oil prices, inflation expectations",
      why:
        "The United States remains domestically resilient but externally more exposed in this cycle. Iran-related sanctions, security posture, and diplomatic signals directly influence Middle East risk and global energy-market expectations.",
      moved:
        "The score increased because the US is not merely exposed through markets; it is also a central diplomatic and security actor in the Iran-Hormuz risk layer.",
      matters:
        "The US matters because its sanctions, military posture, and diplomatic decisions can either stabilize or intensify market expectations around energy security and regional escalation."
    },

    {
      title: "🇨🇳 China Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "58 / 100",
      direction: "Moderate",
      watch:
        "Gulf energy imports, shipping lane stability, manufacturing demand, import costs, commodity flows",
      why:
        "China remains highly sensitive to secure seaborne energy flows. Hormuz uncertainty matters because oil and petrochemical cargoes from the Gulf are directly connected to Chinese industrial and refinery demand.",
      moved:
        "The score increased because recent tanker movements through Hormuz show that Asian import routes remain exposed to irregular flows and timing uncertainty.",
      matters:
        "China matters because it is central to global manufacturing, commodity demand, shipping volumes, and supply-chain pricing. Energy-route disruptions can spread through global trade."
    },

    {
      title: "🇮🇳 India Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "59 / 100",
      direction: "Moderate",
      watch:
        "Oil import costs, Gulf cargo arrivals, inflation transmission, currency sensitivity, fuel price pass-through",
      why:
        "India’s exposure is mainly macroeconomic. Its dependence on imported oil makes it sensitive to Gulf shipping risk, Brent volatility, currency pressure, and fuel-price transmission into domestic inflation.",
      moved:
        "The score increased because Hormuz-linked shipping uncertainty is directly relevant to India-bound crude and LNG flows. The risk remains moderate because India has institutional and policy buffers.",
      matters:
        "India matters because its energy import bill, inflation path, and currency stability are closely tied to global oil and shipping conditions."
    },

    {
      title: "🇩🇪 Germany Country Report",
      tag: "Low-Moderate Risk",
      tagClass: "pill-neutral",
      score: "47 / 100",
      direction: "Low-Moderate",
      watch:
        "Industrial output, energy pricing, EU coordination, health-security monitoring, export demand",
      why:
        "Germany remains structurally stable, but industrial energy sensitivity and broader EU exposure keep it vulnerable to external shocks. The country is not a primary crisis center, yet global energy, trade, and health-security uncertainty can affect business confidence and industrial costs.",
      moved:
        "The score increased moderately because the global risk mix is broader than in the previous update: energy, health, and climate stressors are all active at once.",
      matters:
        "Germany matters because it is a core European industrial economy. Changes in energy costs, trade flows, and EU coordination can affect the wider European outlook."
    },

    {
      title: "🇯🇵 Japan Country Report",
      tag: "Low-Moderate Risk",
      tagClass: "pill-neutral",
      score: "48 / 100",
      direction: "Low-Moderate",
      watch:
        "Maritime security, LNG and oil imports, currency stability, Asian shipping routes, industrial demand",
      why:
        "Japan remains institutionally stable but exposed to maritime trade and imported energy costs. Hormuz uncertainty matters because Japan depends on secure shipping routes for energy and industrial inputs.",
      moved:
        "The score increased because energy-route risk is more relevant in this cycle, even though Japan’s domestic risk profile remains relatively stable.",
      matters:
        "Japan matters because it is a major technology, shipping, and supply-chain economy. Maritime disruptions and imported fuel costs can influence inflation, currency policy, and industrial competitiveness."
    }
  ]
};
