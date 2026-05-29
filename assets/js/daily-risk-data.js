window.dailyRiskPageData = {
  reportDate: "May 29, 2026",
  updateTimeUtc: "17:40 UTC",

  overallScore: 83,
  previousOverallScore: 82,
  overallLabel: "High / Elevated",
  overallTrend: "+1 vs previous update",
  confidence: "High",

  heroSummary:
    "Global risk conditions remain high and moved slightly higher, but the update does not indicate a runaway escalation phase. The main active drivers are the worsening Bundibugyo Ebola outbreak in the Democratic Republic of the Congo, continued regional health surveillance in Uganda, renewed Black Sea maritime risk after attacks on foreign-flagged merchant vessels, and persistent but uneven pressure around the Strait of Hormuz. Older shock signals that have not intensified are not double-counted in this update. The overall environment is best described as elevated systemic fragility with several active risk layers, rather than a single global crisis event.",

  overallExplainer:
    "The composite global risk score increased slightly from 82 to 83. The adjustment is driven mainly by fresh health and maritime-security signals. Health risk moved higher after the latest reporting showed a larger Bundibugyo Ebola case burden in DRC, with suspected cases and deaths rising while investigations and surveillance continue. Uganda remains elevated but is assessed below DRC because current reporting points more to imported and monitored cases rather than confirmed broad community transmission. Conflict risk remains very high because Ukraine's war environment now includes renewed pressure on maritime export corridors after attacks on foreign-flagged vessels in the Black Sea. Hormuz remains an important systemic energy chokepoint, but the risk is treated as persistent rather than newly explosive because no confirmed full closure or global supply shock is currently established. Economic risk is therefore high but not extreme. Climate remains a high structural risk, but it is not increased further today because the latest outlook acts as a background multiplier rather than a new short-term shock.",

  overview: [
    {
      label: "Report Date",
      value: "May 29, 2026",
      sub: "UTC daily update"
    },
    {
      label: "Top Driver",
      value: "Ebola Containment + Ukraine Maritime Risk",
      sub: "Fresh health and shipping signals dominate today's move"
    },
    {
      label: "Country Layer",
      value: "12 Countries Monitored",
      sub: "DRC and Uganda remain in the health-risk layer"
    },
    {
      label: "What Changed",
      value: "Slight rise, not broad escalation",
      sub: "Health risk rose; Hormuz and climate were not double-counted"
    },
    {
      label: "Watch Next 48h",
      value: "Ebola case trend + Black Sea corridor + Hormuz confidence + oil prices",
      sub: "Key swing factors"
    }
  ],

  glanceSummary:
    "Global risk edged up to 83/100 as Ebola containment pressure and Ukraine-linked maritime risk increased, while Hormuz and climate risks remained elevated but not newly explosive.",

  glanceBullets: [
    "Bundibugyo Ebola remains the clearest new health driver, with DRC risk rising as suspected cases and deaths increase.",
    "Ukraine-linked maritime risk increased after foreign-flagged merchant vessels were reportedly hit in the Black Sea export corridor.",
    "Hormuz remains a major energy chokepoint, but the update treats it as persistent risk rather than a fresh full-disruption shock.",
    "Economic risk stays high because energy, insurance and freight confidence remain sensitive, but markets are not showing full panic transmission.",
    "Climate risk remains structurally high, but no additional short-term climate shock is added in this cycle."
  ],

  dailyComparison: [
    { label: "Previous", value: "82" },
    { label: "Current", value: "83" },
    { label: "Trend", value: "Slight Increase" },
    { label: "Tracked Countries", value: "12" }
  ],

  riskData: [
    {
      title: "🌍 Global Conflict Risk",
      subtitle: "Ukraine war, Black Sea shipping risk, Hormuz sensitivity",
      score: 87,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Very High / Fragile",
      directionClass: "pill-danger",
      description:
        "Conflict risk remains very high and increased slightly. The most important fresh change is Ukraine-related maritime risk: reported drone attacks on foreign-flagged merchant vessels in the Black Sea add pressure to export-corridor security and commercial shipping confidence. Ukraine also remains under sustained missile, drone and infrastructure pressure. Hormuz remains a separate systemic risk node, but it is treated as persistent rather than newly escalating because there is no confirmed full closure or global supply disruption in this update.",
      drivers: [
        "Ukraine war and infrastructure pressure",
        "Black Sea merchant-shipping attacks",
        "Hormuz maritime corridor sensitivity",
        "Middle East security and sanctions signaling"
      ],
      sources: ["Reuters", "UN monitoring", "Maritime and defense briefings"],
      trend: [86, 86, 86, 86, 87, 87, 87]
    },

    {
      title: "📉 Global Economic Risk",
      subtitle: "Energy-route confidence, insurance risk, inflation transmission",
      score: 80,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-warning",
      description:
        "Economic risk remains high but is not raised further today. Hormuz, Black Sea shipping and oil-sanctions dynamics continue to affect energy-route confidence, tanker insurance and import-cost expectations. However, the economic layer is not assessed as extreme because there is no confirmed full-scale supply shock, and market stress remains uneven rather than disorderly. The most likely transmission channels remain fuel prices, freight costs, marine insurance, LNG routing and inflation expectations.",
      drivers: [
        "Oil and LNG shipping confidence",
        "Marine insurance sensitivity",
        "Freight and import-cost pressure",
        "Inflation pass-through risk"
      ],
      sources: ["Reuters", "IEA", "EIA", "Shipping market data"],
      trend: [79, 79, 80, 80, 80, 80, 80]
    },

    {
      title: "🏥 Global Health Risk",
      subtitle: "Bundibugyo Ebola emergency and regional containment pressure",
      score: 72,
      changeText: "+4",
      changeClass: "pill-warning",
      direction: "Elevated / Regional Emergency",
      directionClass: "pill-warning",
      description:
        "Health risk increased again, mainly because the Bundibugyo Ebola outbreak in DRC shows a larger suspected case and death burden than in the previous update. The risk is serious because containment depends on testing, isolation, contact tracing, cross-border surveillance and safe healthcare operations in difficult settings. Uganda remains part of the risk layer, but its score is kept below DRC because current reporting does not confirm broad community transmission there. The model continues to avoid pandemic-level scoring because this is still assessed as a severe regional health emergency rather than a global pandemic event.",
      drivers: [
        "Rising suspected Ebola case burden in DRC",
        "Bundibugyo strain vaccine and treatment limitations",
        "Insecurity and population movement in affected areas",
        "Cross-border surveillance pressure",
        "Hospital and contact-tracing capacity"
      ],
      sources: ["WHO", "Reuters", "CDC", "National health authorities"],
      trend: [68, 68, 69, 70, 71, 72, 72]
    },

    {
      title: "🌡️ Climate Risk",
      subtitle: "Structural heat, hydrological stress and extreme-weather probability",
      score: 73,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "High Structural",
      directionClass: "pill-danger",
      description:
        "Climate risk remains high but unchanged in this update. Recent temperature outlooks continue to support a structurally elevated climate-risk baseline, including heat, drought, flood and food-system stress. However, no new short-term climate shock is added today. The climate layer is therefore treated as a persistent risk multiplier rather than the main driver of the latest daily score movement.",
      drivers: [
        "Near-record temperature outlook",
        "Heat and drought exposure",
        "Flood-risk sensitivity",
        "Agricultural and water-system stress"
      ],
      sources: ["WMO", "Copernicus", "Climate monitoring"],
      trend: [72, 72, 73, 73, 73, 73, 73]
    }
  ],

  reportData: [
    {
      title: "🌍 Global Conflict Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "87 / 100",
      direction: "Very High",
      watch:
        "Black Sea export corridor, Ukraine drone and missile activity, Hormuz shipping confidence, sanctions signaling, Middle East military posture",
      why:
        "Conflict remains the strongest risk category. Ukraine continues to face sustained war pressure, and the latest cycle adds a sharper maritime component after reported attacks on foreign-flagged merchant vessels in the Black Sea. This matters because Ukraine's export corridor is not only a military issue; it also connects to food logistics, insurance pricing and commercial shipping confidence. Hormuz remains another major chokepoint, but it is treated as a continuing risk rather than a newly confirmed full disruption.",
      moved:
        "The conflict score moved up by one point because the Black Sea shipping signal is fresh and directly relevant to commercial risk. Older Middle East and Kyiv-related stress signals are not double-counted unless they create a new escalation channel.",
      matters:
        "Conflict risk matters because it can quickly transmit into shipping, energy, food supply, defense policy and investor behavior. The current environment is fragile because several corridors are sensitive at once, even though there is no single confirmed global escalation shock today."
    },

    {
      title: "📉 Global Economic Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "80 / 100",
      direction: "High",
      watch:
        "Brent oil, LNG flows, tanker insurance, Black Sea freight, Hormuz traffic, inflation expectations",
      why:
        "Economic risk remains high because the active geopolitical stress points are connected to shipping and energy. Hormuz affects oil and LNG confidence, while Black Sea risk can affect grain, cargo and insurance expectations. However, the score is kept stable because current evidence does not show a broad market breakdown or confirmed full-scale supply shock.",
      moved:
        "The economic score did not rise today. The model recognizes ongoing energy-route sensitivity, but avoids overreacting because risk premiums are present without a clear disorderly transmission phase.",
      matters:
        "Economic risk is the channel through which geopolitical shocks become household and business pressure. If shipping confidence improves, this score can ease; if insurance, freight or energy prices spike again, it can move higher quickly."
    },

    {
      title: "🏥 Global Health Report",
      tag: "Elevated Risk",
      tagClass: "pill-warning",
      score: "72 / 100",
      direction: "Elevated / Regional Emergency",
      watch:
        "DRC suspected cases, confirmed Ebola deaths, Uganda surveillance, contact tracing, healthcare-worker infections, border screening",
      why:
        "Health risk rose because the Bundibugyo Ebola outbreak has a larger reported suspected case and death burden. DRC remains the center of the health-risk layer due to the size of the suspected outbreak, insecurity, displacement, cross-border movement and the difficulty of contact follow-up. Uganda remains elevated because imported cases and border exposure require surveillance, but it is not scored like DRC because broad community transmission is not confirmed in the current reporting.",
      moved:
        "The score increased from 68 to 72 because the latest numbers show the outbreak is not merely a background humanitarian issue. It is a serious regional emergency. At the same time, the score remains below pandemic-level risk because the available reporting still points to a regional outbreak-management challenge rather than global uncontrolled spread.",
      matters:
        "Health risk matters because outbreak control depends on speed. Testing, isolation, safe burials, contact tracing, hospital readiness and community trust determine whether the risk remains regional or becomes harder to contain."
    },

    {
      title: "🌡️ Climate Risk Report",
      tag: "High Structural Risk",
      tagClass: "pill-danger",
      score: "73 / 100",
      direction: "Persistent",
      watch:
        "Northern Hemisphere heat season, flood risk, drought-sensitive regions, Arctic warming, food and water stress",
      why:
        "Climate risk remains structurally high. The latest outlooks support a high baseline for heat, hydrological instability and extreme-weather probability. However, the daily model does not raise the score again unless there is a fresh short-term shock, such as a major heatwave escalation, severe flood event or immediate food-system disruption.",
      moved:
        "The score is unchanged because climate remains a persistent multiplier rather than the main new driver today.",
      matters:
        "Climate matters because it reduces resilience across other categories. Heat, drought, floods and water stress can worsen health, migration, food prices, insurance costs and infrastructure damage over time."
    }
  ],

  countryRiskData: [
    {
      country: "Ukraine",
      region: "Eastern Europe",
      score: 88,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Ukraine remains one of the highest-risk countries in the model. The score rises slightly because reported attacks on foreign-flagged merchant vessels add a fresh maritime-security layer on top of existing missile, drone and infrastructure pressure.",
      drivers: [
        "Black Sea export-corridor risk",
        "Drone and missile warfare",
        "Infrastructure targeting",
        "Frontline pressure"
      ],
      watchItems: [
        "Black Sea shipping security",
        "Air defense capacity",
        "Energy grid resilience",
        "Frontline dynamics"
      ],
      trend: [87, 87, 87, 87, 88, 88, 88]
    },

    {
      country: "Israel",
      region: "Middle East",
      score: 83,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High / Very High",
      directionClass: "pill-danger",
      summary:
        "Israel remains highly exposed to regional deterrence dynamics, but the score is trimmed slightly because there is no fresh Israel-specific escalation signal in this update. Regional risk remains elevated through Iran, Hormuz and broader Middle East security uncertainty.",
      drivers: [
        "Regional security tension",
        "Iran-linked deterrence risk",
        "Missile and drone threat environment",
        "Multi-front pressure"
      ],
      watchItems: [
        "Border incidents",
        "Regional retaliation signals",
        "US-Iran diplomacy",
        "Air defense posture"
      ],
      trend: [84, 84, 84, 83, 83, 83, 83]
    },

    {
      country: "Iran",
      region: "Middle East",
      score: 86,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Iran remains a core systemic risk node because Hormuz, sanctions and regional military signaling directly affect oil, LNG and shipping confidence. The score is unchanged because risk remains high but not newly escalated into confirmed full disruption.",
      drivers: [
        "Hormuz strategic leverage",
        "Oil sanctions pressure",
        "Shipping confidence risk",
        "Regional military signaling"
      ],
      watchItems: [
        "Tanker movement through Hormuz",
        "Sanctions enforcement",
        "Negotiation signals",
        "Insurance and shipping confidence"
      ],
      trend: [86, 86, 86, 86, 86, 86, 86]
    },

    {
      country: "Russia",
      region: "Eastern Europe / Eurasia",
      score: 76,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "High",
      directionClass: "pill-warning",
      summary:
        "Russia remains in a prolonged high-risk condition due to sustained war operations, sanctions pressure and the latest Ukraine-linked maritime attacks. The move is small because Russia's risk profile was already structurally high.",
      drivers: [
        "War tempo",
        "Black Sea attack risk",
        "Sanctions adaptation pressure",
        "Energy export exposure"
      ],
      watchItems: [
        "Ukraine strike activity",
        "Black Sea shipping incidents",
        "Energy export flows",
        "Fiscal resilience"
      ],
      trend: [75, 75, 75, 76, 76, 76, 76]
    },

    {
      country: "Democratic Republic of the Congo",
      region: "Central Africa",
      score: 85,
      changeText: "+3",
      changeClass: "pill-danger",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "DRC remains the highest health-risk country in the model due to the Bundibugyo Ebola outbreak. The score rises because the reported suspected case and death burden is larger, while insecurity, displacement and contact-tracing limits complicate containment.",
      drivers: [
        "Bundibugyo Ebola outbreak",
        "Rising suspected cases and deaths",
        "Weak contact follow-up",
        "Insecurity in affected areas",
        "Healthcare system strain"
      ],
      watchItems: [
        "Confirmed and suspected case trend",
        "Contact tracing coverage",
        "Health worker infections",
        "Isolation and referral capacity"
      ],
      trend: [82, 82, 83, 84, 85, 85, 85]
    },

    {
      country: "Uganda",
      region: "East Africa",
      score: 70,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Elevated",
      directionClass: "pill-warning",
      summary:
        "Uganda remains elevated due to cross-border Ebola exposure and confirmed imported cases. The score rises slightly, but remains below DRC because broad community transmission is not confirmed in the latest reporting.",
      drivers: [
        "Cross-border Ebola exposure",
        "Imported confirmed cases",
        "Border health surveillance",
        "Regional mobility"
      ],
      watchItems: [
        "New confirmed cases",
        "Contact tracing results",
        "Kampala surveillance",
        "DRC border movement"
      ],
      trend: [69, 69, 69, 70, 70, 70, 70]
    },

    {
      country: "Türkiye",
      region: "Eastern Mediterranean",
      score: 62,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "Türkiye remains moderately elevated due to imported energy exposure, inflation sensitivity and direct relevance to Black Sea and Middle East logistics. The score rises slightly because the latest Black Sea maritime incidents include a Turkey-linked vessel.",
      drivers: [
        "Black Sea logistics exposure",
        "Imported energy dependency",
        "Inflation pass-through",
        "Regional corridor sensitivity"
      ],
      watchItems: [
        "Black Sea shipping security",
        "Fuel price trends",
        "Inflation data",
        "Regional diplomatic signals"
      ],
      trend: [61, 61, 61, 62, 62, 62, 62]
    },

    {
      country: "United States",
      region: "North America",
      score: 60,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "The United States remains moderately elevated due to sanctions, diplomacy and security exposure linked to Iran and Hormuz. The score is unchanged because the latest sanctions reinforce an existing risk channel rather than creating a new domestic instability signal.",
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
      trend: [60, 60, 60, 60, 60, 60, 60]
    },

    {
      country: "China",
      region: "East Asia",
      score: 58,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "China remains moderately exposed through energy imports, Gulf shipping lanes and manufacturing sensitivity. The score is unchanged because Hormuz risk remains persistent but not newly escalated into confirmed full disruption.",
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
      trend: [58, 58, 58, 58, 58, 58, 58]
    },

    {
      country: "India",
      region: "South Asia",
      score: 59,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "India remains moderately exposed through oil imports, Gulf cargo routes and inflation pass-through. The score is unchanged because the key risk channel remains energy-route sensitivity rather than a fresh domestic shock.",
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
      trend: [59, 59, 59, 59, 59, 59, 59]
    },

    {
      country: "Germany",
      region: "Western Europe",
      score: 47,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "Germany remains structurally stable but exposed to external energy, trade and industrial-cost pressures. The score is unchanged because there is no fresh Germany-specific escalation signal today.",
      drivers: [
        "Industrial energy sensitivity",
        "EU economic exposure",
        "Manufacturing cycle weakness",
        "External shock exposure"
      ],
      watchItems: [
        "Industrial output",
        "Energy pricing trends",
        "EU coordination",
        "Export demand"
      ],
      trend: [47, 47, 47, 47, 47, 47, 47]
    },

    {
      country: "Japan",
      region: "East Asia",
      score: 48,
      changeText: "0",
      changeClass: "pill-neutral",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "Japan remains stable but exposed to maritime trade, imported energy costs and currency sensitivity. The score is unchanged because the relevant risk is still external route sensitivity rather than domestic instability.",
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
      trend: [48, 48, 48, 48, 48, 48, 48]
    }
  ],

  countryReportData: [
    {
      title: "🇺🇦 Ukraine Country Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "88 / 100",
      direction: "Very High",
      watch:
        "Black Sea export corridor, merchant-vessel attacks, drone warfare, infrastructure resilience, frontline dynamics",
      why:
        "Ukraine remains the central active-war theater in Europe. The latest update adds a maritime dimension because reported drone attacks on foreign-flagged merchant vessels affect the security of Ukraine's Black Sea export corridor. This is important because the war is not only a land-front issue; it also affects trade, shipping insurance, food logistics and regional maritime stability.",
      moved:
        "The score rose by one point because the Black Sea shipping signal is fresh and commercially relevant. The model does not treat this as a full global escalation, but it does increase Ukraine's risk profile.",
      matters:
        "Ukraine matters because its war environment affects European security, commodity routes, export corridors, sanctions policy, defense planning and global risk sentiment."
    },

    {
      title: "🇮🇱 Israel Country Report",
      tag: "High / Very High Risk",
      tagClass: "pill-danger",
      score: "83 / 100",
      direction: "High / Very High",
      watch:
        "Regional tensions, Iran-linked signaling, border incidents, missile and drone threats, diplomatic stabilization",
      why:
        "Israel remains exposed to a fragile regional security environment, especially through Iran-linked deterrence, missile and drone threats, and broader Middle East military posture. However, today's update does not show a fresh Israel-specific escalation comparable to the new Ukraine maritime or DRC health signals.",
      moved:
        "The score eased by one point to avoid over-counting older regional stress. Israel remains high risk, but the latest daily movement is not centered on Israel itself.",
      matters:
        "Israel matters because regional escalation around it can quickly affect energy markets, air defense posture, US policy, diplomatic channels and broader Middle East risk pricing."
    },

    {
      title: "🇮🇷 Iran Country Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "86 / 100",
      direction: "Very High",
      watch:
        "Hormuz maritime flows, sanctions enforcement, shipping confidence, US-Iran diplomacy, tanker insurance",
      why:
        "Iran remains a major systemic risk node because Hormuz links regional security directly to global oil, LNG and shipping confidence. Sanctions and military signaling remain important, but the score is held steady because the latest update does not confirm a new full closure or disorderly market shock.",
      moved:
        "The score is unchanged. Risk remains very high, but older Hormuz pressure is not double-counted unless it creates a new disruption event.",
      matters:
        "Iran matters because even limited disruption or uncertainty around Hormuz can influence energy prices, insurance, Asian import routes, inflation expectations and investor sentiment."
    },

    {
      title: "🇷🇺 Russia Country Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "76 / 100",
      direction: "High",
      watch:
        "Ukraine strike activity, Black Sea shipping incidents, sanctions pressure, energy exports, military operations tempo",
      why:
        "Russia remains in a prolonged high-risk condition due to its ongoing war posture, sanctions exposure and role in attacks affecting Ukraine's infrastructure and maritime export environment. The latest Black Sea shipping incidents keep Russia's risk profile elevated.",
      moved:
        "The score rose slightly because the latest maritime incidents add a current commercial-risk channel to an already high conflict profile.",
      matters:
        "Russia matters because its military posture shapes European security, shipping risk, commodity markets, sanctions policy and diplomatic alignment."
    },

    {
      title: "🇨🇩 Democratic Republic of the Congo Country Report",
      tag: "Very High Health Risk",
      tagClass: "pill-danger",
      score: "85 / 100",
      direction: "Very High",
      watch:
        "Bundibugyo Ebola suspected cases, confirmed deaths, contact tracing, healthcare-worker infections, isolation capacity, affected provinces",
      why:
        "DRC is now one of the most important country-level risk drivers because the Bundibugyo Ebola outbreak has a larger suspected case and death burden. The country faces difficult containment conditions, including insecurity, displacement, movement across affected areas, pressure on healthcare workers and weak follow-up capacity.",
      moved:
        "The score rose from 82 to 85 because the latest reporting shows that the outbreak remains active and serious. The increase is significant but still regional, not global-pandemic scoring.",
      matters:
        "DRC matters because outbreak control depends on surveillance, isolation, contact tracing, safe burials, treatment access, community trust and secure humanitarian operations."
    },

    {
      title: "🇺🇬 Uganda Country Report",
      tag: "Elevated Health Risk",
      tagClass: "pill-warning",
      score: "70 / 100",
      direction: "Elevated",
      watch:
        "Imported Ebola cases, DRC border movement, Kampala surveillance, contact tracing, hospital preparedness",
      why:
        "Uganda remains elevated due to cross-border Ebola exposure from DRC and confirmed imported cases. The current risk is mainly surveillance and containment rather than confirmed broad domestic spread.",
      moved:
        "The score rose by one point because DRC's worsening outbreak increases Uganda's exposure. It remains below DRC because broad community transmission is not confirmed in the latest reporting.",
      matters:
        "Uganda matters because cross-border surveillance is essential for preventing wider regional spread. Early detection and hospital readiness are the key stabilizers."
    },

    {
      title: "🇹🇷 Türkiye Country Report",
      tag: "Moderate-Elevated Risk",
      tagClass: "pill-warning",
      score: "62 / 100",
      direction: "Moderate / Elevated",
      watch:
        "Black Sea shipping security, fuel prices, inflation trajectory, energy imports, regional logistics",
      why:
        "Türkiye remains exposed to imported energy costs, inflation pass-through and regional logistics. The latest Black Sea maritime incidents are relevant because they affect a corridor close to Türkiye and reportedly included a Turkey-linked vessel.",
      moved:
        "The score rose slightly because Black Sea shipping risk is more directly relevant in this cycle. The move remains controlled because Türkiye is not a primary crisis center.",
      matters:
        "Türkiye matters because it sits between European, Black Sea, Middle East and Asian trade routes. External shocks can pass through shipping, fuel, inflation and currency channels."
    },

    {
      title: "🇺🇸 United States Country Report",
      tag: "Moderate-Elevated Risk",
      tagClass: "pill-warning",
      score: "60 / 100",
      direction: "Moderate / Elevated",
      watch:
        "Iran sanctions, US-Iran diplomacy, defense posture, oil prices, inflation expectations",
      why:
        "The United States remains a central actor in Iran-related sanctions, diplomacy and security posture. However, the latest sanctions reinforce an existing external risk channel rather than creating a new domestic instability event.",
      moved:
        "The score is unchanged to avoid over-weighting policy continuity. US exposure remains meaningful through energy markets, diplomacy and defense commitments.",
      matters:
        "The US matters because its sanctions, military posture and diplomatic decisions can stabilize or intensify expectations around Hormuz, Iran and global energy security."
    },

    {
      title: "🇨🇳 China Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "58 / 100",
      direction: "Moderate",
      watch:
        "Gulf energy imports, Hormuz traffic, manufacturing demand, shipping lane stability, import costs",
      why:
        "China remains exposed through energy imports, Gulf shipping lanes and global manufacturing sensitivity. Hormuz uncertainty matters, but today's update does not add a new China-specific escalation.",
      moved:
        "The score is unchanged because the relevant risk channel remains persistent rather than newly intensified.",
      matters:
        "China matters because it is central to global manufacturing, commodity demand, shipping volumes and supply-chain pricing."
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
        "India remains sensitive to Gulf shipping risk and global oil prices because of its imported energy exposure. The risk remains moderate because the latest update does not show a fresh India-specific shock.",
      moved:
        "The score is unchanged. Energy-route sensitivity remains the key risk, but it is not newly escalated today.",
      matters:
        "India matters because its energy import bill, inflation path and currency stability are closely tied to global oil and shipping conditions."
    },

    {
      title: "🇩🇪 Germany Country Report",
      tag: "Low-Moderate Risk",
      tagClass: "pill-neutral",
      score: "47 / 100",
      direction: "Low-Moderate",
      watch:
        "Industrial output, energy pricing, EU coordination, export demand, external shock transmission",
      why:
        "Germany remains structurally stable but exposed to energy, trade and industrial-cost pressures. No fresh Germany-specific escalation is included in this update.",
      moved:
        "The score is unchanged because Germany's risk is mostly indirect and externally transmitted.",
      matters:
        "Germany matters because it is a core European industrial economy. External energy and trade shocks can affect the wider European outlook."
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
        "Japan remains institutionally stable but exposed to imported energy costs and secure maritime routes. Hormuz uncertainty remains relevant but not newly escalated for Japan today.",
      moved:
        "The score is unchanged because the risk is still external route sensitivity rather than domestic instability.",
      matters:
        "Japan matters because it is a major technology, shipping and supply-chain economy. Maritime disruptions and imported fuel costs can influence inflation, currency policy and industrial competitiveness."
    }
  ]
};
