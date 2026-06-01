window.dailyRiskPageData = {
  reportDate: "June 1, 2026",
  updateTimeUtc: "20:30 UTC",

  overallScore: 84,
  previousOverallScore: 82,
  overallLabel: "High / Elevated",
  overallTrend: "+2 vs previous update",
  confidence: "High",

  heroSummary:
    "Global risk conditions moved higher again as fresh energy-route and public-health signals outweighed the earlier slight easing. The most important new driver is renewed pressure around the Strait of Hormuz after Iran signaled a pause in indirect U.S. message exchanges and warned of possible further blockade pressure. Oil prices rose sharply, which increases the economic transmission channel through energy, shipping insurance and inflation expectations. The Bundibugyo Ebola outbreak also remains a serious regional health emergency, with confirmed cases rising in DRC and travel restrictions beginning to affect Uganda-linked routes. Ukraine and Black Sea maritime risk remain important but are not double-counted as a fresh daily shock unless new incidents appear. The overall environment is high and fragile, but still below an extreme global-crisis threshold.",

  overallExplainer:
    "The composite global risk score rises from 82 to 84. This increase is not based on old headlines being repeated; it reflects fresh pressure in two active channels. First, Hormuz risk is no longer only a background concern: renewed Iranian signaling around message exchanges and possible blockade pressure pushed oil higher and increased shipping-confidence risk. Second, the Bundibugyo Ebola outbreak remains active, with DRC reporting a larger confirmed case count and Uganda-facing restrictions affecting regional travel and surveillance confidence. Conflict risk rises moderately because energy-route threats and Ukraine-related maritime exposure both remain active, although no confirmed full global shipping shutdown is established. Economic risk rises more clearly because oil, freight, insurance and inflation channels are now more sensitive again. Health risk also rises because the outbreak response remains under pressure. Climate risk remains high but unchanged because there is no new short-term climate shock in this cycle.",

  overview: [
    {
      label: "Report Date",
      value: "June 1, 2026",
      sub: "UTC daily update"
    },
    {
      label: "Top Driver",
      value: "Hormuz Pressure + Ebola Response",
      sub: "Energy-route and health risks are both active"
    },
    {
      label: "Country Layer",
      value: "12 Countries Monitored",
      sub: "DRC remains the main country-level mover"
    },
    {
      label: "What Changed",
      value: "Risk moved higher again",
      sub: "Hormuz pressure and Ebola response risk both increased"
    },
    {
      label: "Watch Next 48h",
      value: "Hormuz blockade risk + oil prices + Ebola containment + Ukraine shipping",
      sub: "Key swing factors"
    }
  ],

  glanceSummary:
    "Global risk increased to 84/100 as renewed Hormuz blockade pressure, higher oil prices and continued Ebola containment stress outweighed the earlier easing in conflict and energy-market risk.",

  glanceBullets: [
    "Hormuz moved back to the top of the risk board after renewed Iranian signaling increased oil and shipping-confidence pressure.",
    "Oil prices rose sharply, making the economic transmission channel more important than in the previous update.",
    "Bundibugyo Ebola remains a serious regional health emergency, with DRC case growth and Uganda-linked travel restrictions requiring close monitoring.",
    "Ukraine and Black Sea maritime risk remain high, but older vessel-attack signals are treated as continuing exposure rather than a new daily shock.",
    "Climate risk remains structurally high, but no additional short-term climate shock is added in this cycle."
  ],

  dailyComparison: [
    { label: "Previous", value: "82" },
    { label: "Current", value: "84" },
    { label: "Trend", value: "Increase" },
    { label: "Tracked Countries", value: "12" }
  ],

  riskData: [
    {
      title: "🌍 Global Conflict Risk",
      subtitle: "Hormuz escalation signals, Ukraine war, Black Sea corridor risk",
      score: 87,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Very High / Fragile",
      directionClass: "pill-danger",
      description:
        "Conflict risk rises because Hormuz moved from a mostly persistent background risk back into an active escalation channel. Iran-related messaging, possible blockade threats and the risk of wider regional signaling add pressure to global energy-route security. Ukraine remains under sustained war pressure, and the Black Sea export corridor remains vulnerable, but those older maritime incidents are not counted again as new escalation unless fresh attacks occur. The category remains below extreme because no confirmed full global shipping shutdown is established.",
      drivers: [
        "Hormuz blockade and escalation signaling",
        "Ukraine war and infrastructure pressure",
        "Black Sea maritime-corridor vulnerability",
        "Middle East deterrence and sanctions risk"
      ],
      sources: ["Reuters", "UN monitoring", "Maritime and defense briefings"],
      trend: [85, 85, 86, 86, 87, 87, 87]
    },

    {
      title: "📉 Global Economic Risk",
      subtitle: "Energy-route confidence, freight insurance, inflation transmission",
      score: 82,
      changeText: "+4",
      changeClass: "pill-danger",
      direction: "High",
      directionClass: "pill-warning",
      description:
        "Economic risk rises because oil and shipping channels are again reacting to fresh Hormuz uncertainty. A sharp move higher in crude prices shows that markets are pricing a renewed blockade and supply-route risk premium. The main transmission channels are fuel prices, LNG routing, tanker availability, marine insurance, freight costs and inflation expectations. The score is not pushed into the extreme range because a confirmed full-scale global supply shock is not established, but the economic layer is clearly more stressed than in the previous update.",
      drivers: [
        "Oil price jump",
        "Hormuz blockade risk premium",
        "Marine insurance sensitivity",
        "Freight and LNG routing uncertainty",
        "Inflation pass-through risk"
      ],
      sources: ["Reuters", "IEA", "EIA", "Shipping market data"],
      trend: [78, 78, 79, 80, 81, 82, 82]
    },

    {
      title: "🏥 Global Health Risk",
      subtitle: "Bundibugyo Ebola emergency and containment pressure",
      score: 77,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Elevated / Regional Emergency",
      directionClass: "pill-warning",
      description:
        "Health risk increases because the Bundibugyo Ebola outbreak continues to expand in operational importance. DRC remains the center of the outbreak, with confirmed cases and deaths rising, while Uganda remains exposed through cross-border surveillance and travel-related restrictions. The emergence of airline and entry restrictions linked to Uganda shows that the outbreak is beginning to affect regional mobility confidence. The score remains below pandemic-level risk because the available evidence still points to a serious regional emergency rather than uncontrolled global spread.",
      drivers: [
        "Rising confirmed Ebola burden in DRC",
        "Health-worker exposure and response pressure",
        "Cross-border surveillance in Uganda",
        "Travel and airline restriction effects",
        "Community trust and contact tracing challenges"
      ],
      sources: ["WHO", "AP", "Reuters", "National health authorities"],
      trend: [75, 75, 76, 76, 77, 77, 77]
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
        "Climate risk remains high but unchanged. The latest 2026–2030 outlook continues to support a structurally elevated baseline, including heat, drought, flood and food-system stress. However, today's daily model does not add a fresh short-term climate shock. Climate remains a background multiplier that reduces system resilience rather than the main reason for the latest composite-score movement.",
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
      score: "87 / 100",
      direction: "Very High",
      watch:
        "Ukraine strikes, Black Sea export corridor, maritime insurance, Hormuz security, Middle East military and sanctions signals",
      why:
        "Conflict remains the strongest structural risk category. Ukraine continues to face sustained war conditions, and the Black Sea maritime corridor remains exposed after recent attacks on foreign-flagged merchant vessels. This keeps commercial-shipping confidence and export-route security under pressure. Hormuz also remains a systemic risk node because even partial traffic disruption can affect oil, LNG, insurance and shipping decisions.",
      moved:
        "The conflict score increases because Hormuz-related messaging and possible blockade pressure returned as a fresh escalation channel. Older Black Sea vessel attacks are not double-counted, but the wider energy-route security environment is more fragile than in the previous update.",
      matters:
        "Conflict risk matters because it can transmit quickly into shipping routes, energy costs, food logistics, defense posture and investor behavior. The current environment is fragile, but today's movement is more about persistence than acceleration."
    },

    {
      title: "📉 Global Economic Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "82 / 100",
      direction: "High",
      watch:
        "Brent oil, Hormuz traffic, LNG flows, marine insurance, Black Sea freight, inflation expectations",
      why:
        "Economic risk remains high because energy and shipping channels are still sensitive. Hormuz traffic remains below normal, Black Sea shipping risk has not fully cleared, and insurance or freight costs can still transmit geopolitical risk into prices. However, ceasefire and negotiation signals have reduced some market pressure, and there is no confirmed full-scale global supply shock.",
      moved:
        "The score rises because crude prices moved sharply higher and markets are again pricing a Hormuz risk premium. This does not mean a full supply shock is confirmed, but it does mean economic transmission is more active than in the previous update.",
      matters:
        "Economic risk is the channel through which geopolitical shocks reach households and businesses. If shipping confidence improves, the score can ease further. If Hormuz or Black Sea routes deteriorate again, the score can rise quickly."
    },

    {
      title: "🏥 Global Health Report",
      tag: "Elevated Risk",
      tagClass: "pill-warning",
      score: "77 / 100",
      direction: "Elevated / Regional Emergency",
      watch:
        "DRC suspected cases, confirmed deaths, Uganda surveillance, contact tracing, healthcare-worker infections, community trust and safe burials",
      why:
        "Health risk is the clearest active deterioration. The Bundibugyo Ebola outbreak remains serious, with DRC carrying the main burden and Uganda requiring continued surveillance. The response environment is difficult because testing, isolation, safe burials, community trust, protective equipment, healthcare-worker safety and cross-border coordination all matter at the same time.",
      moved:
        "The score increases because the outbreak response remains under pressure, DRC case counts continue to rise, and Uganda-linked travel restrictions show wider regional effects. The model still avoids pandemic-level scoring because the risk remains primarily regional.",
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
      score: 87,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Ukraine remains one of the highest-risk countries in the model due to active war conditions and maritime-corridor vulnerability. The score rises slightly because Hormuz and Black Sea route risk now overlap with the existing Ukraine-war exposure, even though older vessel attacks are not double-counted as new incidents.",
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
      score: 83,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "High / Very High",
      directionClass: "pill-danger",
      summary:
        "Israel remains highly exposed to regional deterrence dynamics, missile and drone threats, and Iran-linked security uncertainty. The score rises because renewed Hormuz and Iran-related signaling increases the broader Middle East risk layer, even without a fresh Israel-specific incident.",
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
      score: 88,
      changeText: "+4",
      changeClass: "pill-warning",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Iran moves higher because Hormuz-related escalation signals are again an active global risk driver. Possible blockade pressure, halted or uncertain U.S. message exchanges and energy-route sensitivity make Iran the main geopolitical mover in this update.",
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
      score: 75,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "High",
      directionClass: "pill-warning",
      summary:
        "Russia remains in a prolonged high-risk condition due to sustained war operations, sanctions pressure and its role in Ukraine-linked maritime and infrastructure risk. The score rises slightly because Black Sea and energy-route uncertainty remain linked to the wider conflict environment.",
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
      score: 89,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "DRC is the main health-risk country in the model. The Bundibugyo Ebola outbreak remains severe, with confirmed cases, deaths, health-worker exposure, community-trust challenges and insecurity keeping containment pressure high.",
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
      score: 73,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Elevated",
      directionClass: "pill-warning",
      summary:
        "Uganda rises because confirmed Ebola exposure and cross-border surveillance needs are now affecting travel and airline confidence. The score remains below DRC because the heavier outbreak burden is still centered in DRC.",
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
      score: 61,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "Türkiye remains moderately elevated because of imported energy exposure, inflation sensitivity, Black Sea logistics and proximity to Middle East energy-route risk. The score rises slightly because renewed oil and Hormuz pressure can transmit through fuel and currency channels.",
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
      score: 60,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "The United States rises because Iran-related diplomacy, sanctions and security posture are again central to Hormuz and oil-market expectations. Domestic stability remains strong, but external strategic exposure is more active in this update.",
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
      score: 59,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "China rises because Gulf energy imports and Hormuz-linked shipping confidence are directly relevant to refinery, manufacturing and import-cost exposure. The move is moderate because the risk is external rather than domestic.",
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
      score: 60,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "India rises because imported oil exposure makes it sensitive to a renewed Hormuz risk premium and higher crude prices. The domestic risk profile remains moderate, but energy and inflation channels are more active today.",
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
      score: "87 / 100",
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
      score: "83 / 100",
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
      score: "88 / 100",
      direction: "Very High",
      watch:
        "Hormuz maritime flows, sanctions enforcement, shipping confidence, US-Iran diplomacy, tanker insurance",
      why:
        "Iran remains a major systemic risk node because Hormuz links regional security directly to global oil, LNG and shipping confidence. Sanctions and military signaling remain important, but ceasefire-related signals reduce the case for a higher score today.",
      moved:
        "The score rises because Hormuz-related pressure is again an active risk channel. The risk remains below maximum because no confirmed full global supply shutdown is established.",
      matters:
        "Iran matters because even limited disruption or uncertainty around Hormuz can influence energy prices, insurance, Asian import routes, inflation expectations and investor sentiment."
    },

    {
      title: "🇷🇺 Russia Country Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "75 / 100",
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
      score: "89 / 100",
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
      score: "73 / 100",
      direction: "Elevated",
      watch:
        "Confirmed Ebola cases, DRC border movement, Kampala surveillance, contact tracing, hospital preparedness",
      why:
        "Uganda remains elevated due to confirmed cases and cross-border exposure from DRC. The current risk is mainly surveillance and containment rather than confirmed broad domestic spread.",
      moved:
        "The score rises because travel and surveillance effects are more visible. Uganda remains below DRC because the heavier outbreak burden is still centered in DRC.",
      matters:
        "Uganda matters because cross-border surveillance is essential for preventing wider regional spread. Early detection and hospital readiness are the key stabilizers."
    },

    {
      title: "🇹🇷 Türkiye Country Report",
      tag: "Moderate-Elevated Risk",
      tagClass: "pill-warning",
      score: "61 / 100",
      direction: "Moderate / Elevated",
      watch:
        "Black Sea shipping security, fuel prices, inflation trajectory, energy imports, regional logistics",
      why:
        "Türkiye remains exposed to imported energy costs, inflation pass-through and regional logistics. Black Sea maritime risk is relevant, but the latest signal is no longer treated as a fresh escalation today.",
      moved:
        "The score rises slightly because renewed Hormuz and oil pressure can transmit into energy costs, inflation expectations and regional logistics.",
      matters:
        "Türkiye matters because it sits between European, Black Sea, Middle East and Asian trade routes. External shocks can pass through shipping, fuel, inflation and currency channels."
    },

    {
      title: "🇺🇸 United States Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "60 / 100",
      direction: "Moderate / Elevated",
      watch:
        "Iran sanctions, US-Iran diplomacy, defense posture, oil prices, inflation expectations",
      why:
        "The United States remains a central actor in Iran-related sanctions, diplomacy and security posture. Ceasefire-related signals reduce some immediate market-stress transmission, while strategic exposure remains meaningful.",
      moved:
        "The score rises because U.S.-Iran messaging, sanctions and security posture are again central to energy-route confidence and oil-market expectations.",
      matters:
        "The US matters because its sanctions, military posture and diplomatic decisions can stabilize or intensify expectations around Hormuz, Iran and global energy security."
    },

    {
      title: "🇨🇳 China Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "59 / 100",
      direction: "Moderate",
      watch:
        "Gulf energy imports, Hormuz traffic, manufacturing demand, shipping lane stability, import costs",
      why:
        "China remains exposed through energy imports, Gulf shipping lanes and global manufacturing sensitivity. Hormuz uncertainty matters, but today's update does not add a new China-specific escalation.",
      moved:
        "The score rises because renewed Hormuz pressure makes external energy-route risk more active than in the previous update.",
      matters:
        "China matters because it is central to global manufacturing, commodity demand, shipping volumes and supply-chain pricing."
    },

    {
      title: "🇮🇳 India Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "60 / 100",
      direction: "Moderate",
      watch:
        "Oil import costs, Gulf cargo arrivals, inflation transmission, currency sensitivity, fuel price pass-through",
      why:
        "India remains sensitive to Gulf shipping risk and global oil prices because of imported energy exposure. The risk remains moderate because the latest update does not show a fresh India-specific shock.",
      moved:
        "The score rises because renewed crude-price pressure increases import-cost and inflation sensitivity.",
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
