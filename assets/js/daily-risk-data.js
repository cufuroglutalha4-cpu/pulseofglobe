window.dailyRiskPageData = {
  reportDate: "June 2, 2026",
  updateTimeUtc: "21:20 UTC",

  overallScore: 85,
  previousOverallScore: 84,
  overallLabel: "High / Elevated",
  overallTrend: "+1 vs previous update",
  confidence: "High",

  heroSummary:
    "Global risk conditions moved slightly higher as energy-route pressure and climate signals outweighed a partial clarification in the Ebola data. The Strait of Hormuz remains the dominant systemic risk channel: oil prices remain elevated, traffic confidence is still impaired, and market participants continue to price uncertainty around U.S.-Iran diplomacy and regional security. The Bundibugyo Ebola outbreak remains serious, but the risk assessment is adjusted more carefully after WHO reported that many earlier suspected cases in DRC were ruled out following investigation. That reduces uncertainty, but confirmed cases and deaths still keep the health layer elevated. Ukraine and Black Sea maritime risk remain important, especially through energy infrastructure and shipping exposure, but older vessel-attack headlines are not double-counted. Climate risk increases because WMO warned of a possible strong El Niño and above-average global temperatures during the coming season. Overall risk is high and fragile, but still below an extreme global-crisis threshold.",

  overallExplainer:
    "The composite global risk score rises from 84 to 85. The increase is driven mainly by energy-market and climate signals, not by repeating older headlines. Hormuz remains a high-impact chokepoint because oil and LNG flows, tanker insurance, freight costs and inflation expectations are still sensitive to U.S.-Iran diplomacy and regional security signals. Economic risk therefore rises even though a full new supply shock is not confirmed. Climate risk also rises after fresh WMO warnings that a potentially strong El Niño could lift global temperatures and increase the probability of heatwaves, drought, heavy rain and hurricane-related disruption. Health risk remains elevated due to Bundibugyo Ebola, but is moderated slightly because the latest WHO-linked reporting revised suspected DRC cases lower after investigations ruled out many non-Ebola illnesses. The confirmed case burden is still serious and Uganda remains under surveillance pressure. Conflict risk remains very high due to Ukraine, Black Sea shipping exposure and Middle East deterrence dynamics, but older vessel attacks are treated as continuing risk rather than fresh escalation. The model therefore raises the index only modestly.",

  overview: [
    {
      label: "Report Date",
      value: "June 3, 2026",
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
      value: "Energy and climate pressure rose",
      sub: "Hormuz and heat outlook rose; Ebola suspected count was revised lower"
    },
    {
      label: "Watch Next 48h",
      value: "Hormuz traffic + oil prices + Ebola verification + El Niño heat risk",
      sub: "Key swing factors"
    }
  ],

  glanceSummary:
    "Global risk increased slightly to 85/100. Hormuz-linked energy risk and a stronger climate warning outweighed the partial reduction in Ebola uncertainty after suspected cases were revised lower.",

  glanceBullets: [
    "Hormuz remains the top systemic risk because oil prices, tanker traffic, insurance and diplomacy remain highly sensitive.",
    "Economic risk rose as energy-route uncertainty feeds directly into fuel prices, freight costs and inflation expectations.",
    "Bundibugyo Ebola remains serious, but hundreds of suspected DRC cases were ruled out, so the health score is not pushed into a pandemic-level band.",
    "Ukraine and Black Sea shipping risks remain active, but older vessel-attack signals are treated as continuing exposure rather than a new daily shock.",
    "Climate risk rose after fresh WMO warnings of possible strong El Niño conditions and above-average global temperatures."
  ],

  dailyComparison: [
    { label: "Previous", value: "84" },
    { label: "Current", value: "85" },
    { label: "Trend", value: "Slight Increase" },
    { label: "Tracked Countries", value: "12" }
  ],

  riskData: [
    {
      title: "🌍 Global Conflict Risk",
      subtitle: "Hormuz escalation signals, Ukraine war, Black Sea corridor risk",
      score: 88,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Very High / Fragile",
      directionClass: "pill-danger",
      description:
        "Conflict risk remains very high and rises slightly. Hormuz is still the most important geopolitical transmission channel because even limited disruption or uncertainty affects oil, LNG, insurance and military signaling. Ukraine remains under sustained war pressure, and attacks on Russian energy infrastructure continue to keep the Black Sea and energy-security layer active. However, older Black Sea tanker incidents are not counted again as new shocks unless fresh confirmed incidents appear. The category is high because several corridors remain fragile at the same time, but it remains below an extreme score because a new wider war or full global shipping shutdown is not confirmed.",
      drivers: [
        "Hormuz energy-route security",
        "Ukraine war and Russian energy-site attacks",
        "Black Sea maritime-corridor vulnerability",
        "Middle East deterrence and sanctions risk"
      ],
      sources: ["Reuters", "UN monitoring", "Maritime and defense briefings"],
      trend: [87, 87, 87, 88, 88, 88, 88]
    },

    {
      title: "📉 Global Economic Risk",
      subtitle: "Energy-route confidence, freight insurance, inflation transmission",
      score: 84,
      changeText: "+2",
      changeClass: "pill-danger",
      direction: "High",
      directionClass: "pill-warning",
      description:
        "Economic risk rises because energy markets remain highly sensitive to Hormuz and wider Middle East uncertainty. Brent and WTI remain elevated compared with earlier stabilization phases, and traders are still pricing risk around tanker availability, crude supply, LNG routing, insurance and physical inventory draws. The score is not moved into the extreme range because markets have not fully broken down and diplomatic channels remain active. Still, the transmission risk is stronger than in the previous update: higher fuel prices can pressure import-dependent economies, transport costs, food prices, industrial margins and inflation expectations.",
      drivers: [
        "Elevated oil prices",
        "Hormuz shipping and tanker confidence",
        "Marine insurance and freight sensitivity",
        "Inventory draw and supply-route uncertainty",
        "Inflation pass-through risk"
      ],
      sources: ["Reuters", "IEA", "EIA", "Shipping market data"],
      trend: [82, 82, 83, 83, 84, 84, 84]
    },

    {
      title: "🏥 Global Health Risk",
      subtitle: "Bundibugyo Ebola emergency and containment pressure",
      score: 76,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Elevated / Regional Emergency",
      directionClass: "pill-warning",
      description:
        "Health risk remains elevated but eases slightly after the suspected-case picture became clearer. WHO-linked reporting indicates that hundreds of previously suspected DRC cases were ruled out after investigation, reducing uncertainty around the scale of the outbreak. This does not remove the risk: confirmed Bundibugyo Ebola cases and deaths remain serious, there is no strain-specific approved vaccine or treatment, and Uganda continues to report confirmed cases requiring surveillance and contact follow-up. The score remains below pandemic-level risk because the event is still assessed as a severe regional emergency rather than uncontrolled global spread.",
      drivers: [
        "Confirmed Bundibugyo Ebola cases in DRC",
        "Suspected cases revised lower after investigation",
        "Uganda contact-linked cases and surveillance pressure",
        "No approved strain-specific vaccine or treatment",
        "Border coordination and community-trust challenges"
      ],
      sources: ["WHO", "AP", "Reuters", "National health authorities"],
      trend: [77, 77, 77, 76, 76, 76, 76]
    },

    {
      title: "🌡️ Climate Risk",
      subtitle: "Structural heat, hydrological stress and extreme-weather probability",
      score: 76,
      changeText: "+3",
      changeClass: "pill-warning",
      direction: "High Structural",
      directionClass: "pill-danger",
      description:
        "Climate risk rises because the latest WMO-linked seasonal outlook points to possible strong El Niño conditions and above-average temperatures across the coming months. This is not a sudden single-day disaster, but it increases the probability of heatwaves, drought, heavy rainfall, flood stress and hurricane-related disruption in several regions. The climate category acts as a structural multiplier: it can worsen food security, electricity demand, public health pressure, water stress, migration risk and insurance costs. The score increases because the signal is now more near-term and operationally relevant.",
      drivers: [
        "Possible strong El Niño development",
        "Above-average global temperature outlook",
        "Heatwave and drought risk",
        "Heavy rainfall and flood exposure",
        "Food, water and public-health stress"
      ],
      sources: ["WMO", "Copernicus", "Climate monitoring"],
      trend: [73, 73, 74, 75, 76, 76, 76]
    }
  ],

  reportData: [
    {
      title: "🌍 Global Conflict Report",
      tag: "Very High Risk",
      tagClass: "pill-danger",
      score: "88 / 100",
      direction: "Very High",
      watch:
        "Ukraine strikes, Black Sea export corridor, maritime insurance, Hormuz security, Middle East military and sanctions signals",
      why:
        "Conflict remains the strongest structural risk category because several high-impact corridors are fragile at the same time. Hormuz is the most important systemic node: it links military signaling, oil and LNG flows, tanker insurance, Gulf export confidence and Asian import routes. Ukraine remains the main active war theater in Europe, with continued pressure on energy infrastructure, drone warfare and Black Sea logistics. The model separates active risk from old headlines: past vessel attacks are treated as continuing corridor exposure unless new confirmed attacks occur. This keeps the score high without artificially inflating it.",
      moved:
        "The conflict score rises by one point because Hormuz remains an active security and energy-route risk, while Ukraine-linked energy infrastructure pressure continues. The increase is modest because there is still no confirmed full global shipping shutdown or new broader military escalation beyond already monitored channels.",
      matters:
        "Conflict risk matters because it is the fastest-moving transmission layer in the dashboard. A single major incident around Hormuz, the Black Sea or a Ukrainian energy target can affect oil prices, wheat and fuel logistics, freight insurance, defense posture and financial risk appetite. Even when markets appear calm, the corridor structure is fragile, which is why this category remains near the top of the index."
    },

    {
      title: "📉 Global Economic Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "84 / 100",
      direction: "High",
      watch:
        "Brent oil, Hormuz traffic, LNG flows, marine insurance, Black Sea freight, inflation expectations",
      why:
        "Economic risk is high because energy-route uncertainty is again feeding into market pricing. Oil remains sensitive to Hormuz, U.S.-Iran diplomacy, tanker movement and inventory expectations. Freight and insurance costs can move quickly when shipping lanes are perceived as unsafe, and import-dependent economies face higher exposure through fuel prices, currency pressure and inflation expectations. The model does not assume a full global supply shock, but it does recognize that market transmission is stronger than in the previous update.",
      moved:
        "The score rises because oil and shipping risk premiums remain elevated. This is a market-transmission update rather than a panic call: prices are higher, physical supply confidence is weaker, but a complete global supply breakdown is not confirmed.",
      matters:
        "Economic risk matters because it converts geopolitical stress into real-world pressure: higher diesel, gasoline, food transport costs, electricity costs, industrial input prices and central-bank uncertainty. For SEO and reader clarity, this section explains that the economic score is not only about stock markets; it is about how energy and shipping risk can reach consumers, factories and governments within days or weeks."
    },

    {
      title: "🏥 Global Health Report",
      tag: "Elevated Risk",
      tagClass: "pill-warning",
      score: "76 / 100",
      direction: "Elevated / Regional Emergency",
      watch:
        "DRC suspected cases, confirmed deaths, Uganda surveillance, contact tracing, healthcare-worker infections, community trust and safe burials",
      why:
        "Health risk remains elevated, but the latest reporting is more nuanced. The Bundibugyo Ebola outbreak remains serious because confirmed cases and deaths are still rising in DRC, Uganda has confirmed contact-linked cases, and response teams must manage surveillance, isolation, safe burials, community trust and healthcare-worker protection. However, hundreds of earlier suspected DRC cases were ruled out after investigation, which reduces the uncertainty that previously pushed the health layer higher. The result is still a severe regional emergency, but not a pandemic-level assessment.",
      moved:
        "The health score eases slightly because the suspected-case burden was revised lower after investigations. The confirmed outbreak remains serious, so the category stays elevated, but the model removes some uncertainty premium from the previous update.",
      matters:
        "Health risk matters because Ebola containment depends on speed and trust. Testing, isolation, contact tracing, safe burials, protective equipment and cross-border cooperation determine whether the outbreak remains regional or creates wider humanitarian, mobility and governance stress. This is why the category remains high even after suspected cases were revised lower."
    },

    {
      title: "🌡️ Climate Risk Report",
      tag: "High Structural Risk",
      tagClass: "pill-danger",
      score: "76 / 100",
      direction: "Persistent",
      watch:
        "Northern Hemisphere heat season, flood risk, drought-sensitive regions, Arctic warming, food and water stress",
      why:
        "Climate risk rises because the latest WMO-linked seasonal update makes the risk more immediate. Possible strong El Niño conditions can raise global temperatures and increase the probability of heatwaves, droughts, heavy rainfall, flood events and stronger storm activity. This does not mean every region will experience the same impact, but it raises the global operating risk for agriculture, water systems, electricity demand, public health and insurance markets.",
      moved:
        "The score rises because the latest climate signal is not only long-term; it has near-term seasonal implications. The model therefore moves climate higher while still treating it as a structural multiplier rather than a sudden single-day shock.",
      matters:
        "Climate matters because it reduces resilience across the whole risk system. Heat can increase electricity demand and public-health stress; drought can pressure food prices and water security; floods can damage infrastructure and disrupt logistics. Climate is slower than conflict, but it makes shocks in health, migration, agriculture and insurance harder to absorb."
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
        "Ukraine remains one of the highest-risk countries because active war, energy infrastructure attacks and Black Sea corridor exposure continue. The score rises modestly because Ukraine-linked energy pressure overlaps with the wider oil and shipping risk environment.",
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
      score: 84,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "High / Very High",
      directionClass: "pill-danger",
      summary:
        "Israel remains exposed to regional deterrence dynamics and Iran-linked security uncertainty. The score rises slightly because renewed Hormuz pressure increases the broader Middle East risk environment, even without a fresh Israel-specific shock.",
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
      score: 89,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Iran remains the main geopolitical mover because Hormuz, sanctions, U.S.-Iran diplomacy and energy-route confidence are again central to global oil and shipping risk. The score remains below maximum because no confirmed total global supply shutdown is established.",
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
      score: 76,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "High",
      directionClass: "pill-warning",
      summary:
        "Russia remains high risk due to sustained war operations, sanctions pressure and Ukraine-linked strikes on energy infrastructure. The score rises slightly because Russian energy assets and Black Sea routes remain part of the active risk map.",
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
      score: 87,
      changeText: "-2",
      changeClass: "pill-neutral",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "DRC remains the main health-risk country due to confirmed Bundibugyo Ebola cases and deaths, but the score is lowered because hundreds of earlier suspected cases were ruled out after investigation. The outbreak remains severe but the uncertainty band is narrower.",
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
      score: 72,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Elevated",
      directionClass: "pill-warning",
      summary:
        "Uganda remains elevated because confirmed contact-linked Ebola cases require surveillance and response capacity. The score eases slightly because the heavier outbreak burden remains centered in DRC and the broader suspected-case picture has become clearer.",
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
      score: 62,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "Türkiye remains moderately elevated due to imported energy exposure, inflation sensitivity, Black Sea logistics and proximity to Middle East energy-route risk. Renewed oil pressure can transmit through fuel and currency channels.",
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
      score: 61,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Moderate / Elevated",
      directionClass: "pill-warning",
      summary:
        "The United States rises slightly because Iran diplomacy, sanctions and security posture remain central to Hormuz and oil-market expectations. Domestic stability remains strong, but external strategic exposure is active.",
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
      score: 61,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "China rises because Gulf energy imports, refinery demand and manufacturing costs are exposed to Hormuz-linked shipping and oil-price risk. The move is moderate because the risk is external rather than domestic.",
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
      score: 62,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "India rises because imported oil exposure makes it sensitive to higher crude prices and Gulf shipping uncertainty. Energy costs, inflation pass-through and currency sensitivity are the main watch points.",
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
      score: 49,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "Germany remains structurally stable, but the score rises modestly because external energy, climate and industrial-cost risks are more active. The risk is indirect rather than domestic instability.",
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
      score: 50,
      changeText: "+2",
      changeClass: "pill-warning",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "Japan remains institutionally stable but exposed to imported energy costs, LNG security and maritime trade. Renewed Hormuz pressure raises external route sensitivity.",
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
      score: "84 / 100",
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
      score: "89 / 100",
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
      score: "76 / 100",
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
      score: "87 / 100",
      direction: "Very High",
      watch:
        "Bundibugyo Ebola suspected cases, confirmed deaths, contact tracing, healthcare-worker infections, isolation capacity, community trust",
      why:
        "DRC is the main upward country-level risk driver. The Bundibugyo Ebola outbreak has a serious suspected case and death burden, and the response environment is complicated by healthcare-worker exposure, insecurity, community-trust issues and contact-tracing pressure.",
      moved:
        "The score is reduced because the suspected-case count was revised lower after investigation, narrowing the uncertainty band. DRC remains very high risk because confirmed cases and deaths are still serious and containment depends on difficult field operations.",
      matters:
        "DRC matters because outbreak control depends on surveillance, isolation, contact tracing, safe burials, treatment access, community trust and secure humanitarian operations."
    },

    {
      title: "🇺🇬 Uganda Country Report",
      tag: "Elevated Health Risk",
      tagClass: "pill-warning",
      score: "72 / 100",
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
      score: "62 / 100",
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
      score: "61 / 100",
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
      score: "61 / 100",
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
      score: "62 / 100",
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
      score: "49 / 100",
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
      score: "50 / 100",
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
