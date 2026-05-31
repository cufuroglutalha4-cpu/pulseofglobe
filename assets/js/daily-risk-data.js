window.dailyRiskPageData = {
  reportDate: "May 31, 2026",
  updateTimeUtc: "20:45 UTC",

  overallScore: 82,
  previousOverallScore: 83,
  overallLabel: "High / Elevated",
  overallTrend: "-1 vs previous update",
  confidence: "High",

  heroSummary:
    "Global risk conditions remain high but eased slightly versus the previous update. The model removes incremental weight from older shock signals unless they are still generating fresh operational disruption. Bundibugyo Ebola remains the clearest active health-risk driver, especially in the Democratic Republic of the Congo, while Uganda requires continued surveillance. Ukraine and Black Sea maritime risk remain important but are now treated as continuing corridor exposure rather than a new daily escalation. Hormuz remains a major energy chokepoint, but oil-market behavior and Iran-U.S. diplomacy uncertainty point to elevated risk rather than a new full-scale supply shock. Climate risk remains structurally high but unchanged.",

  overallExplainer:
    "The composite global risk score declines from 83 to 82. This is an objective adjustment rather than a de-escalation call: the global environment remains high-risk, but the latest evidence does not justify adding new weight to already-counted Black Sea, Hormuz, or broader Middle East stress. Health risk remains the main active concern because the Bundibugyo Ebola outbreak continues to place heavy pressure on response capacity in DRC, with Uganda still exposed through cross-border surveillance needs. Conflict risk remains very high due to the Ukraine war and maritime-corridor vulnerability, but no new wider shipping shutdown is confirmed today. Economic risk remains high but slightly less disorderly because oil-market stress is being partly offset by ceasefire and negotiation signals, even though Hormuz traffic confidence has not fully normalized. Climate risk remains high as a structural background multiplier, with no fresh short-term shock added in this cycle.",

  overview: [
    {
      label: "Report Date",
      value: "May 31, 2026",
      sub: "UTC daily update"
    },
    {
      label: "Top Driver",
      value: "Ebola Response Pressure",
      sub: "Health risk is the clearest active deterioration"
    },
    {
      label: "Country Layer",
      value: "12 Countries Monitored",
      sub: "DRC remains the main country-level mover"
    },
    {
      label: "What Changed",
      value: "Slight easing, still high",
      sub: "Older shock effects reduced; health remains the main active driver"
    },
    {
      label: "Watch Next 48h",
      value: "DRC outbreak trajectory + Ukraine shipping + Hormuz traffic + oil prices",
      sub: "Key swing factors"
    }
  ],

  glanceSummary:
    "Global risk eased slightly to 82/100. Ebola containment remains the clearest active concern, but older conflict and energy shocks were not double-counted and market/diplomatic signals partially reduced economic pressure.",

  glanceBullets: [
    "Bundibugyo Ebola remains the clearest active health driver, especially in DRC where response pressure remains high.",
    "Ukraine and Black Sea shipping risk remain important, but the latest vessel attacks are now treated as continuing corridor risk rather than a new escalation spike.",
    "Hormuz remains a major energy chokepoint, but no confirmed full reopening or full closure means the risk is elevated rather than newly extreme.",
    "Economic risk remains high but slightly less disorderly because oil markets are reacting to both disruption risk and possible diplomatic progress.",
    "Climate risk remains structurally high, but no additional short-term climate shock is added in this cycle."
  ],

  dailyComparison: [
    { label: "Previous", value: "83" },
    { label: "Current", value: "82" },
    { label: "Trend", value: "Slight Decrease" },
    { label: "Tracked Countries", value: "12" }
  ],

  riskData: [
    {
      title: "🌍 Global Conflict Risk",
      subtitle: "Ukraine war, Black Sea corridor risk, Hormuz sensitivity",
      score: 85,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Very High / Fragile",
      directionClass: "pill-danger",
      description:
        "Conflict risk remains very high but eases slightly because older Black Sea and Hormuz signals are no longer counted as new daily escalation. Ukraine remains under sustained war pressure, and maritime-corridor vulnerability remains real, but there is no confirmed wider shipping shutdown in this update. Hormuz remains a separate systemic chokepoint risk, yet today’s assessment treats it as persistent sensitivity rather than a fresh military escalation.",
      drivers: [
        "Ukraine war and infrastructure pressure",
        "Black Sea maritime-corridor vulnerability",
        "Hormuz security sensitivity",
        "Middle East deterrence and sanctions signaling"
      ],
      sources: ["Reuters", "UN monitoring", "Maritime and defense briefings"],
      trend: [87, 86, 86, 86, 85, 85, 85]
    },

    {
      title: "📉 Global Economic Risk",
      subtitle: "Energy-route confidence, freight insurance, inflation transmission",
      score: 78,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-warning",
      description:
        "Economic risk remains high but eases slightly. Hormuz traffic confidence is still fragile and energy-route risk has not fully normalized, but oil-market behavior and diplomacy signals provide a modest stabilizing offset. The category remains elevated through freight, insurance, fuel prices and inflation pass-through, but it is not assessed as a disorderly global economic shock today.",
      drivers: [
        "Hormuz traffic impairment",
        "Oil and LNG shipping confidence",
        "Marine insurance sensitivity",
        "Inflation pass-through risk",
        "Ceasefire and diplomacy signals"
      ],
      sources: ["Reuters", "IEA", "EIA", "Shipping market data"],
      trend: [80, 79, 79, 79, 78, 78, 78]
    },

    {
      title: "🏥 Global Health Risk",
      subtitle: "Bundibugyo Ebola emergency and containment pressure",
      score: 75,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Elevated / Regional Emergency",
      directionClass: "pill-warning",
      description:
        "Health risk increases slightly because Bundibugyo Ebola remains the clearest active deterioration in the global model. The outbreak remains concentrated in DRC and Uganda, with DRC carrying the heavier burden due to suspected cases, deaths, health-worker exposure, contact-tracing pressure and community-trust challenges. The score remains below pandemic-level risk because the available evidence still points to a serious regional emergency rather than uncontrolled global spread.",
      drivers: [
        "Bundibugyo Ebola response pressure",
        "High suspected case and death burden in DRC",
        "Health-worker exposure",
        "Contact tracing and community trust challenges",
        "Cross-border surveillance in Uganda"
      ],
      sources: ["WHO", "AP", "Reuters", "National health authorities"],
      trend: [72, 73, 73, 74, 74, 75, 75]
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
        "Climate risk remains high but unchanged. The 2026–2030 temperature outlook continues to support a structurally elevated baseline, including heat, drought, flood and food-system stress. However, today's daily model does not add a fresh short-term climate shock. Climate remains a background multiplier that reduces system resilience, rather than the main reason for the latest composite score.",
      drivers: [
        "Near-record temperature outlook",
        "Heat and drought exposure",
        "Flood-risk sensitivity",
        "Agricultural and water-system stress"
      ],
      sources: ["WMO", "Copernicus", "Climate monitoring"],
      trend: [73, 73, 73, 73, 73, 73, 73]
    }
  ],

  reportData: [
    {
      title: "🌍 Global Conflict Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "85 / 100",
      direction: "Very High",
      watch:
        "Ukraine strikes, Black Sea export corridor, maritime insurance, Hormuz security, Middle East military and sanctions signals",
      why:
        "Conflict remains the strongest structural risk category. Ukraine continues to face sustained war conditions, and the Black Sea maritime corridor remains exposed after recent attacks on foreign-flagged merchant vessels. This keeps commercial-shipping confidence and export-route security under pressure. Hormuz also remains a systemic risk node because even partial traffic disruption can affect oil, LNG, insurance and shipping decisions.",
      moved:
        "The conflict score is reduced by one point because older Black Sea and Hormuz signals are now counted as continuing exposure rather than new daily escalation. The risk remains very high, but no new wider military escalation or broader shipping shutdown is confirmed today.",
      matters:
        "Conflict risk matters because it can transmit quickly into shipping routes, energy costs, food logistics, defense posture and investor behavior. The current environment is fragile, but today's movement is more about persistence than acceleration."
    },

    {
      title: "📉 Global Economic Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "78 / 100",
      direction: "High",
      watch:
        "Brent oil, Hormuz traffic, LNG flows, marine insurance, Black Sea freight, inflation expectations",
      why:
        "Economic risk remains high because energy and shipping channels are still sensitive. Hormuz traffic remains below normal, Black Sea shipping risk has not fully cleared, and insurance or freight costs can still transmit geopolitical risk into prices. However, ceasefire and negotiation signals have reduced some market pressure, and there is no confirmed full-scale global supply shock.",
      moved:
        "The score falls by one point because oil-market behavior and diplomacy signals provide a modest stabilizing offset. This does not mean the economic risk is gone; it means the latest evidence points to high but less disorderly transmission.",
      matters:
        "Economic risk is the channel through which geopolitical shocks reach households and businesses. If shipping confidence improves, the score can ease further. If Hormuz or Black Sea routes deteriorate again, the score can rise quickly."
    },

    {
      title: "🏥 Global Health Report",
      tag: "Elevated Risk",
      tagClass: "pill-warning",
      score: "75 / 100",
      direction: "Elevated / Regional Emergency",
      watch:
        "DRC suspected cases, confirmed deaths, Uganda surveillance, contact tracing, healthcare-worker infections, community trust and safe burials",
      why:
        "Health risk is the clearest active deterioration. The Bundibugyo Ebola outbreak remains serious, with DRC carrying the main burden and Uganda requiring continued surveillance. The response environment is difficult because testing, isolation, safe burials, community trust, protective equipment, healthcare-worker safety and cross-border coordination all matter at the same time.",
      moved:
        "The score increases from 74 to 75 because the outbreak response is still under pressure and the situation has not shown enough stabilization to justify holding the health category flat. The model still avoids pandemic-level scoring because the risk remains primarily regional.",
      matters:
        "Health risk matters because outbreak control is time-sensitive. Delays in testing, isolation or contact tracing can turn a contained regional emergency into a broader humanitarian and governance crisis."
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
        "Climate risk remains structurally high. Current outlooks support a high baseline for heat, hydrological instability and extreme-weather probability through the coming years. However, no additional short-term climate shock is added today.",
      moved:
        "The score is unchanged because climate remains a persistent multiplier rather than the main daily mover.",
      matters:
        "Climate matters because it reduces resilience across other categories. Heat, drought, floods and water stress can worsen health, migration, food prices, insurance costs and infrastructure damage over time."
    }
  ],

  countryRiskData: [
    {
      country: "Ukraine",
      region: "Eastern Europe",
      score: 86,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Ukraine remains one of the highest-risk countries in the model due to active war conditions and maritime-corridor vulnerability. The score eases slightly because the Black Sea vessel attacks are now treated as continuing operational risk rather than a new daily escalation spike.",
      drivers: [
        "Active war conditions",
        "Black Sea export-corridor risk",
        "Drone and missile warfare",
        "Infrastructure targeting"
      ],
      watchItems: [
        "Black Sea shipping security",
        "Air defense capacity",
        "Energy grid resilience",
        "Frontline dynamics"
      ],
      trend: [88, 87, 87, 86, 86, 86, 86]
    },

    {
      country: "Israel",
      region: "Middle East",
      score: 81,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High / Very High",
      directionClass: "pill-danger",
      summary:
        "Israel remains highly exposed to regional deterrence dynamics, missile and drone threats, and Iran-linked security uncertainty. The score is reduced slightly because no fresh Israel-specific escalation is added in this update.",
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
      trend: [83, 82, 82, 81, 81, 81, 81]
    },

    {
      country: "Iran",
      region: "Middle East",
      score: 84,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Iran remains a core systemic risk node because Hormuz, sanctions and regional military signaling affect global oil, LNG and shipping confidence. The score is reduced slightly because ceasefire and negotiation signals partially offset the absence of a new full disruption.",
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
      trend: [86, 85, 85, 84, 84, 84, 84]
    },

    {
      country: "Russia",
      region: "Eastern Europe / Eurasia",
      score: 74,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "High",
      directionClass: "pill-warning",
      summary:
        "Russia remains in a prolonged high-risk condition due to sustained war operations, sanctions pressure and its role in Ukraine-linked maritime and infrastructure risk. The score is trimmed slightly because no new broader escalation is confirmed today.",
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
      trend: [76, 75, 75, 74, 74, 74, 74]
    },

    {
      country: "Democratic Republic of the Congo",
      region: "Central Africa",
      score: 88,
      changeText: "+1",
      changeClass: "pill-danger",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "DRC is the main upward country-level mover. The Bundibugyo Ebola outbreak remains severe, with suspected cases, confirmed deaths, health-worker exposure, community-trust challenges and insecurity keeping containment pressure high.",
      drivers: [
        "Bundibugyo Ebola outbreak",
        "High suspected case and death burden",
        "Health-worker exposure",
        "Contact-tracing pressure",
        "Insecurity and community trust challenges"
      ],
      watchItems: [
        "Confirmed and suspected case trend",
        "Contact tracing coverage",
        "Health worker infections",
        "Isolation and referral capacity"
      ],
      trend: [85, 86, 87, 87, 88, 88, 88]
    },

    {
      country: "Uganda",
      region: "East Africa",
      score: 71,
      changeText: "0",
      changeClass: "pill-warning",
      direction: "Elevated",
      directionClass: "pill-warning",
      summary:
        "Uganda remains elevated because confirmed cases and cross-border exposure require continued surveillance. The score is held stable because the heavier outbreak burden remains centered in DRC, while Uganda’s main current risk is surveillance and containment.",
      drivers: [
        "Cross-border Ebola exposure",
        "Confirmed cases",
        "Border health surveillance",
        "Regional mobility"
      ],
      watchItems: [
        "New confirmed cases",
        "Contact tracing results",
        "Kampala surveillance",
        "DRC border movement"
      ],
      trend: [70, 71, 71, 71, 71, 71, 71]
    },

    {
      country: "Türkiye",
      region: "Eastern Mediterranean",
      score: 60,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "Türkiye remains moderately elevated because of imported energy exposure, inflation sensitivity and relevance to Black Sea and Middle East logistics. The score is trimmed slightly because the latest Black Sea signal is no longer treated as a fresh daily escalation.",
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
      trend: [62, 61, 61, 60, 60, 60, 60]
    },

    {
      country: "United States",
      region: "North America",
      score: 58,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "The United States remains moderately elevated due to sanctions, diplomacy and security exposure linked to Iran and Hormuz. The score eases slightly because negotiation and ceasefire signals reduce immediate market-stress transmission.",
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
      trend: [60, 59, 59, 58, 58, 58, 58]
    },

    {
      country: "China",
      region: "East Asia",
      score: 57,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "China remains exposed through energy imports, Gulf shipping lanes and manufacturing sensitivity. The score is reduced slightly because Hormuz risk remains persistent but is not newly escalated today.",
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
      trend: [58, 58, 58, 57, 57, 57, 57]
    },

    {
      country: "India",
      region: "South Asia",
      score: 58,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "India remains sensitive to Gulf shipping risk and global oil prices because of imported energy exposure. The score eases slightly because no fresh India-specific shock is added and ceasefire-related signals reduce immediate energy-market stress.",
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
      trend: [59, 59, 59, 58, 58, 58, 58]
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
        "Germany remains structurally stable but exposed to external energy, trade and industrial-cost pressures. The score is unchanged because there is no fresh Germany-specific escalation today.",
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
        "Japan remains institutionally stable but exposed to imported energy costs and secure maritime routes. The score is unchanged because the risk is still external route sensitivity rather than domestic instability.",
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
      score: "86 / 100",
      direction: "Very High",
      watch:
        "Black Sea export corridor, merchant-vessel security, drone warfare, infrastructure resilience, frontline dynamics",
      why:
        "Ukraine remains the central active-war theater in Europe. Maritime-corridor risk remains relevant because recent attacks on foreign-flagged merchant vessels affect export-route security, shipping insurance and commercial confidence. The land-war layer also remains active through drone, missile and infrastructure pressure.",
      moved:
        "The score eases by one point because the Black Sea incident is now treated as continuing operational risk rather than a fresh daily escalation, while the underlying war risk remains very high.",
      matters:
        "Ukraine matters because its war environment affects European security, commodity routes, export corridors, sanctions policy, defense planning and global risk sentiment."
    },

    {
      title: "🇮🇱 Israel Country Report",
      tag: "High / Very High Risk",
      tagClass: "pill-danger",
      score: "81 / 100",
      direction: "High / Very High",
      watch:
        "Regional tensions, Iran-linked signaling, border incidents, missile and drone threats, diplomatic stabilization",
      why:
        "Israel remains exposed to a fragile regional security environment, especially through Iran-linked deterrence, missile and drone threats, and broader Middle East military posture. Today's update does not add a fresh Israel-specific escalation.",
      moved:
        "The score eases by one point to avoid over-counting older regional stress. Israel remains high risk, but the latest daily movement is not centered on Israel itself.",
      matters:
        "Israel matters because regional escalation around it can quickly affect energy markets, air defense posture, US policy, diplomatic channels and broader Middle East risk pricing."
    },

    {
      title: "🇮🇷 Iran Country Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "84 / 100",
      direction: "Very High",
      watch:
        "Hormuz maritime flows, sanctions enforcement, shipping confidence, US-Iran diplomacy, tanker insurance",
      why:
        "Iran remains a major systemic risk node because Hormuz links regional security directly to global oil, LNG and shipping confidence. Sanctions and military signaling remain important, but ceasefire-related signals reduce the case for a higher score today.",
      moved:
        "The score falls by one point. Risk remains very high, but older Hormuz pressure is not double-counted unless it creates a new disruption event.",
      matters:
        "Iran matters because even limited disruption or uncertainty around Hormuz can influence energy prices, insurance, Asian import routes, inflation expectations and investor sentiment."
    },

    {
      title: "🇷🇺 Russia Country Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "74 / 100",
      direction: "High",
      watch:
        "Ukraine strike activity, Black Sea shipping incidents, sanctions pressure, energy exports, military operations tempo",
      why:
        "Russia remains in a prolonged high-risk condition due to its ongoing war posture, sanctions exposure and role in Ukraine-linked infrastructure and maritime risk.",
      moved:
        "The score is trimmed by one point because no fresh wider escalation is confirmed today, even though the underlying conflict risk remains high.",
      matters:
        "Russia matters because its military posture shapes European security, shipping risk, commodity markets, sanctions policy and diplomatic alignment."
    },

    {
      title: "🇨🇩 Democratic Republic of the Congo Country Report",
      tag: "Very High Health Risk",
      tagClass: "pill-danger",
      score: "88 / 100",
      direction: "Very High",
      watch:
        "Bundibugyo Ebola suspected cases, confirmed deaths, contact tracing, healthcare-worker infections, isolation capacity, community trust",
      why:
        "DRC is the main upward country-level risk driver. The Bundibugyo Ebola outbreak has a serious suspected case and death burden, and the response environment is complicated by healthcare-worker exposure, insecurity, community-trust issues and contact-tracing pressure.",
      moved:
        "The score rises from 87 to 88 because the latest assessment shows outbreak response remains under pressure. The increase is significant but still regional, not global-pandemic scoring.",
      matters:
        "DRC matters because outbreak control depends on surveillance, isolation, contact tracing, safe burials, treatment access, community trust and secure humanitarian operations."
    },

    {
      title: "🇺🇬 Uganda Country Report",
      tag: "Elevated Health Risk",
      tagClass: "pill-warning",
      score: "71 / 100",
      direction: "Elevated",
      watch:
        "Confirmed Ebola cases, DRC border movement, Kampala surveillance, contact tracing, hospital preparedness",
      why:
        "Uganda remains elevated due to confirmed cases and cross-border exposure from DRC. The current risk is mainly surveillance and containment rather than confirmed broad domestic spread.",
      moved:
        "The score is held stable because DRC's outbreak pressure keeps Uganda exposed, but the heavier burden remains centered in DRC. It remains below DRC because the heavier outbreak burden is still centered in DRC.",
      matters:
        "Uganda matters because cross-border surveillance is essential for preventing wider regional spread. Early detection and hospital readiness are the key stabilizers."
    },

    {
      title: "🇹🇷 Türkiye Country Report",
      tag: "Moderate-Elevated Risk",
      tagClass: "pill-warning",
      score: "60 / 100",
      direction: "Moderate / Elevated",
      watch:
        "Black Sea shipping security, fuel prices, inflation trajectory, energy imports, regional logistics",
      why:
        "Türkiye remains exposed to imported energy costs, inflation pass-through and regional logistics. Black Sea maritime risk is relevant, but the latest signal is no longer treated as a fresh escalation today.",
      moved:
        "The score eases by one point because the prior Black Sea shock is now counted as continuing risk rather than a new daily driver.",
      matters:
        "Türkiye matters because it sits between European, Black Sea, Middle East and Asian trade routes. External shocks can pass through shipping, fuel, inflation and currency channels."
    },

    {
      title: "🇺🇸 United States Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "58 / 100",
      direction: "Moderate / Elevated",
      watch:
        "Iran sanctions, US-Iran diplomacy, defense posture, oil prices, inflation expectations",
      why:
        "The United States remains a central actor in Iran-related sanctions, diplomacy and security posture. Ceasefire-related signals reduce some immediate market-stress transmission, while strategic exposure remains meaningful.",
      moved:
        "The score falls by one point because the latest economic and diplomacy signals are slightly more stabilizing than destabilizing.",
      matters:
        "The US matters because its sanctions, military posture and diplomatic decisions can stabilize or intensify expectations around Hormuz, Iran and global energy security."
    },

    {
      title: "🇨🇳 China Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "57 / 100",
      direction: "Moderate",
      watch:
        "Gulf energy imports, Hormuz traffic, manufacturing demand, shipping lane stability, import costs",
      why:
        "China remains exposed through energy imports, Gulf shipping lanes and global manufacturing sensitivity. Hormuz uncertainty matters, but today's update does not add a new China-specific escalation.",
      moved:
        "The score eases by one point because the relevant risk channel remains persistent rather than newly intensified.",
      matters:
        "China matters because it is central to global manufacturing, commodity demand, shipping volumes and supply-chain pricing."
    },

    {
      title: "🇮🇳 India Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "58 / 100",
      direction: "Moderate",
      watch:
        "Oil import costs, Gulf cargo arrivals, inflation transmission, currency sensitivity, fuel price pass-through",
      why:
        "India remains sensitive to Gulf shipping risk and global oil prices because of imported energy exposure. The risk remains moderate because the latest update does not show a fresh India-specific shock.",
      moved:
        "The score eases by one point because energy-route sensitivity remains important but is not newly escalated today.",
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
