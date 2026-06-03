window.dailyRiskPageData = {
  reportDate: "June 3, 2026",
  updateTimeUtc: "13:20 UTC",

  overallScore: 85,
  previousOverallScore: 84,
  overallLabel: "High / Elevated",
  overallTrend: "+1 vs previous update",
  confidence: "High",

  heroSummary:
    "Global risk conditions remain high and edge slightly higher in this update. The increase is driven by active, current signals rather than older headlines being recycled. Energy-route risk remains the main near-term transmission channel as uncertainty around U.S.-Iran contacts, possible Strait of Hormuz disruption and higher crude prices keeps shipping, insurance and inflation expectations sensitive. Health risk remains elevated because the Bundibugyo Ebola outbreak continues in DRC and Uganda, although the latest reporting also narrows part of the suspected-case uncertainty. Climate risk moves higher because WMO-linked outlooks now point to a stronger El Niño risk window, above-average June-August temperatures and a higher probability of heat, drought, flood and food-price stress. Ukraine and Black Sea maritime risk remain important, but older vessel-attack signals are treated as continuing exposure rather than a new daily shock unless fresh attacks are confirmed.",

  overallExplainer:
    "The composite global risk score rises from 84 to 85. The model adds weight only where current evidence indicates an active or renewed risk channel. Economic risk rises because oil markets and shipping confidence remain sensitive to Hormuz and U.S.-Iran uncertainty, with analysts warning that markets may still be underpricing some escalation risk. Climate risk also rises because the emerging El Niño outlook is no longer a distant background issue; it has near-term implications for heat, water stress, agriculture, power demand and food prices. Health risk is adjusted slightly lower from the previous reading because suspected Ebola cases were reduced after many were ruled out, but the category remains elevated because confirmed DRC cases and Uganda surveillance pressure are still serious. Conflict risk remains very high and moves modestly higher because Hormuz, Ukraine's long-range energy attacks and Black Sea export-route vulnerability overlap. The update therefore reflects a high but still non-extreme global risk environment, with the strongest pressure coming from energy markets, climate stress and regional public-health containment.",

  overview: [
    {
      label: "Report Date",
      value: "June 3, 2026",
      sub: "UTC daily update"
    },
    {
      label: "Top Driver",
      value: "Hormuz Risk + Climate Heat + Ebola",
      sub: "Energy, climate and health layers are active"
    },
    {
      label: "Country Layer",
      value: "12 Countries Monitored",
      sub: "Iran, DRC and climate-exposed economies lead the watchlist"
    },
    {
      label: "What Changed",
      value: "Risk remains high and edges higher",
      sub: "Energy, climate and health pressures remain active"
    },
    {
      label: "Watch Next 48h",
      value: "Hormuz risk + oil prices + Ebola containment + El Niño heat risk",
      sub: "Key swing factors"
    }
  ],

  glanceSummary:
    "Global risk increased to 85/100 as energy-route uncertainty, oil-market sensitivity and rising climate stress outweighed partial improvement in Ebola suspected-case uncertainty.",

  glanceBullets: [
    "Hormuz and U.S.-Iran uncertainty remain the main near-term market driver, keeping oil, LNG and shipping insurance sensitive.",
    "Economic risk rises because crude prices and freight confidence are reacting to renewed supply-route risk rather than a confirmed full shutdown.",
    "Bundibugyo Ebola remains a serious regional emergency, but suspected-case uncertainty has narrowed after many suspected cases were ruled out.",
    "Climate risk rises as WMO-linked outlooks warn of a possible strong El Niño, above-average summer temperatures and higher food-price stress.",
    "Ukraine and Black Sea maritime risk remain important, but older vessel-attack signals are not counted again as fresh daily escalation."
  ],

  dailyComparison: [
    {
      label: "Previous",
      value: "84"
    },
    {
      label: "Current",
      value: "85"
    },
    {
      label: "Trend",
      value: "Slight Increase"
    },
    {
      label: "Tracked Countries",
      value: "12"
    }
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
        "Conflict risk remains very high and rises slightly. The key current driver is the overlap between Hormuz escalation risk, U.S.-Iran uncertainty and ongoing Ukraine-related energy pressure. Ukraine's long-range strikes on Russian energy infrastructure continue to keep energy and logistics assets inside the conflict risk map, while Black Sea export-route vulnerability remains a persistent commercial concern. Older Black Sea vessel attacks are not re-counted as a new shock, but the broader maritime-security environment remains fragile. The score stays below extreme because there is no confirmed full closure of Hormuz and no confirmed global shipping shutdown.",
      drivers: [
        "Hormuz escalation and blockade signaling",
        "Ukraine long-range energy attacks",
        "Black Sea maritime-corridor vulnerability",
        "Middle East deterrence and sanctions risk"
      ],
      sources: [
        "Reuters",
        "UN monitoring",
        "Maritime and defense briefings"
      ],
      trend: [86, 86, 87, 87, 88, 88, 88]
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
        "Economic risk increases because energy and shipping markets remain highly sensitive to Hormuz and U.S.-Iran uncertainty. Oil prices have moved higher, and market commentary suggests some escalation risk may still be underpriced. The main transmission channels are crude prices, LNG routing, marine insurance, tanker availability, freight costs and inflation expectations. The score remains below extreme because a full-scale global supply shock is not confirmed, but the direction is clearly upward because energy-route confidence is weaker than in a normal market environment.",
      drivers: [
        "Oil price and supply-risk premium",
        "Hormuz shipping uncertainty",
        "Marine insurance sensitivity",
        "LNG and freight rerouting risk",
        "Inflation pass-through risk"
      ],
      sources: [
        "Reuters",
        "IEA",
        "EIA",
        "Shipping market data"
      ],
      trend: [80, 81, 82, 82, 83, 84, 84]
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
        "Health risk remains elevated but eases slightly from the previous reading. Bundibugyo Ebola is still a serious regional emergency, with confirmed DRC cases and deaths increasing and Uganda requiring continued surveillance. However, the latest reporting also reduced the suspected-case burden after many suspected cases were ruled out, which lowers uncertainty compared with earlier updates. The model therefore keeps health risk high, but does not raise it further today. The score remains below pandemic-level risk because the evidence still points to a severe regional outbreak rather than uncontrolled global spread.",
      drivers: [
        "Confirmed Ebola burden in DRC",
        "Reduced suspected-case uncertainty",
        "Uganda surveillance and contact tracing",
        "Health-worker exposure and response pressure",
        "Community trust and safe-burial challenges"
      ],
      sources: [
        "WHO",
        "AP",
        "Reuters",
        "National health authorities"
      ],
      trend: [77, 77, 76, 76, 76, 76, 76]
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
        "Climate risk rises because the El Niño outlook is becoming more immediate. Current WMO-linked reporting points to above-average temperatures across much of the world from June to August and warns that a strong El Niño could combine with climate change to increase the probability of extreme heat and possible food-price pressure. This is not a sudden single-day disaster event, but it meaningfully raises the near-term risk baseline for heat stress, drought, flooding, electricity demand, agriculture, insurance and public health. The climate layer is now a more active multiplier in the global risk model.",
      drivers: [
        "Possible strong El Niño",
        "Above-average June-August temperatures",
        "Food-price and crop-stress risk",
        "Heat, drought and flood exposure",
        "Water and electricity demand stress"
      ],
      sources: [
        "WMO",
        "Copernicus",
        "Climate monitoring"
      ],
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
        "Hormuz military signaling, U.S.-Iran communication, Ukraine energy strikes, Black Sea export routes, maritime insurance and regional deterrence signals",
      why:
        "Conflict risk remains very high because several security channels overlap rather than moving in isolation. Hormuz-related signaling keeps the Middle East energy corridor sensitive, while Ukraine continues to attack Russian energy and logistics assets as part of its long-range campaign. The Black Sea export corridor remains exposed, but older vessel attacks are treated as continuing operational risk rather than a fresh daily shock. This distinction is important for the index: the model raises the score because current Hormuz and Ukraine-energy pressure are active, not because it is reusing older headlines.",
      moved:
        "The score rises from 87 to 88. The increase is modest because no confirmed full closure of Hormuz, no NATO-Russia direct escalation and no global shipping shutdown are established. However, conflict risk is still moving upward at the margin because energy-route security is now more fragile and the Ukraine war continues to reach energy infrastructure beyond the frontline.",
      matters:
        "Conflict risk matters because it is the fastest pathway from political tension to real economic cost. Shipping delays, higher insurance, energy-price spikes, export-route disruption and defense-policy reactions can appear quickly even before a full military escalation occurs. This section frames conflict as a live transmission risk across energy, maritime security and geopolitical confidence."
    },

    {
      title: "📉 Global Economic Report",
      tag: "High Risk",
      tagClass: "pill-warning",
      score: "84 / 100",
      direction: "High",
      watch:
        "Brent and WTI oil, Hormuz tanker traffic, LNG routes, marine insurance, freight costs, inflation expectations and central-bank response risk",
      why:
        "Economic risk is now the strongest short-term transmission layer. Oil markets remain sensitive to Hormuz disruption risk, and commentary from major market participants suggests that supply-route risk may still be underpriced. This does not mean a full global supply shock is confirmed, but it does mean energy prices, LNG routing, tanker availability, marine insurance and inflation expectations are all more sensitive than in a stable environment. Import-dependent economies are especially exposed because higher crude and freight costs can pass into fuel prices, food prices and currency pressure.",
      moved:
        "The score rises from 82 to 84 because the economic channel is more active than in the previous update. The model does not treat this as an extreme economic crisis, since markets are still functioning and no full Hormuz closure is confirmed. The score rises because the risk premium is broader: crude prices, shipping confidence and inflation expectations are all being pulled in the same direction.",
      matters:
        "Economic risk matters because it is the bridge between global events and everyday impact. A conflict headline can become a household cost through fuel, transport, food, electricity and borrowing conditions. This report explains why energy-route uncertainty, oil prices and shipping insurance are central to the daily global risk index."
    },

    {
      title: "🏥 Global Health Report",
      tag: "Elevated Risk",
      tagClass: "pill-warning",
      score: "76 / 100",
      direction: "Elevated / Regional Emergency",
      watch:
        "DRC confirmed Ebola cases, suspected-case revisions, Uganda contact tracing, healthcare-worker infections, cross-border surveillance and safe-burial capacity",
      why:
        "Health risk remains elevated because Bundibugyo Ebola is still a serious regional emergency in DRC and Uganda. Confirmed cases in DRC have increased and Uganda continues to require contact tracing and surveillance. At the same time, the latest update reduced the suspected-case count after many suspected cases were ruled out. That lowers uncertainty compared with earlier reporting and prevents the model from pushing health risk higher today. The result is a high but slightly more precise health-risk assessment.",
      moved:
        "The score eases from 77 to 76. This is not because the outbreak is resolved; it is because suspected-case uncertainty has narrowed while confirmed-case pressure remains manageable within a regional emergency framework. The index keeps health risk elevated, but avoids pandemic-level scoring because there is no evidence of uncontrolled global spread.",
      matters:
        "Health risk matters because outbreak response depends on speed and trust. Testing, isolation, safe burials, healthcare-worker protection, contact tracing and transparent public communication determine whether a regional emergency stays contained. This section clearly explains the difference between confirmed cases, suspected cases and pandemic-level risk."
    },

    {
      title: "🌡️ Climate Risk Report",
      tag: "High Structural Risk",
      tagClass: "pill-danger",
      score: "76 / 100",
      direction: "Persistent",
      watch:
        "El Niño development, June-August heat outlook, drought-sensitive regions, flood risk, food-price stress, water demand and electricity demand",
      why:
        "Climate risk rises because the El Niño outlook is becoming a near-term operational concern rather than only a long-term background issue. WMO-linked reporting points to a possible strong El Niño, above-average temperatures in many regions from June to August and higher risk of extreme heat. The risk is not limited to temperature: heat can affect crops, water systems, electricity demand, labor productivity, insurance costs, public health and food prices. This makes climate a stronger multiplier across economic and health categories.",
      moved:
        "The score rises from 73 to 76. The move reflects new near-term climate probability rather than a single disaster event. No individual global climate shock is added today, but the baseline for heat, drought, flood and food-system stress is high enough to justify a stronger climate reading.",
      matters:
        "Climate risk matters because it weakens resilience across the whole system. When heat, drought or floods hit at the same time as energy-price stress or disease outbreaks, governments and markets have less room to absorb shocks. This report is expanded around global climate risk, El Niño, extreme heat and food-price pressure."
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
        "Ukraine remains one of the highest-risk countries in the model. The score rises because active war conditions, long-range strikes on Russian energy assets and Black Sea export-route exposure continue to overlap with wider energy-market stress.",
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
      score: 89,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "Iran remains the main geopolitical mover. The score rises because Hormuz and U.S.-Iran uncertainty directly affect global oil, LNG, tanker insurance and shipping confidence.",
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
      score: 88,
      changeText: "-1",
      changeClass: "pill-neutral",
      direction: "Very High",
      directionClass: "pill-danger",
      summary:
        "DRC remains the main health-risk country. Confirmed Ebola cases and deaths remain serious, but the score eases slightly because suspected-case uncertainty has narrowed after many suspected cases were ruled out.",
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
        "Uganda remains elevated because confirmed Ebola exposure and cross-border surveillance needs continue. The score eases slightly because the heavier outbreak burden remains centered in DRC and current reporting does not indicate uncontrolled domestic spread.",
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
        "Türkiye rises slightly because imported energy exposure, Black Sea logistics and renewed oil-price pressure can transmit through fuel, inflation and currency channels.",
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
        "The United States rises because U.S.-Iran diplomacy, sanctions and security posture remain central to Hormuz confidence and global oil-market expectations.",
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
      score: 60,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "China rises because Gulf energy imports and Hormuz-linked shipping confidence are directly relevant to refinery, manufacturing and import-cost exposure.",
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
      score: 61,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Moderate",
      directionClass: "pill-warning",
      summary:
        "India rises because imported oil exposure makes it sensitive to renewed crude-price pressure and Gulf shipping uncertainty.",
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
      score: 48,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "Germany remains structurally stable but rises slightly because energy prices, export demand and industrial cost sensitivity are more exposed when global oil and freight pressure increase.",
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
      score: 49,
      changeText: "+1",
      changeClass: "pill-warning",
      direction: "Low-Moderate",
      directionClass: "pill-neutral",
      summary:
        "Japan remains stable but rises slightly because imported energy dependence and maritime route security become more relevant when Hormuz risk increases.",
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
        "Ukraine remains the central active-war theater in Europe. Maritime-corridor risk remains relevant because attacks on foreign-flagged merchant vessels can affect export-route security, shipping insurance and commercial confidence. The land-war layer also remains active through drone, missile and infrastructure pressure.",
      moved:
        "The score rises because Ukraine-war pressure is still active and energy infrastructure remains part of the wider conflict map. Older Black Sea vessel attacks are not re-counted as a fresh daily event, but the route remains exposed.",
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
        "The score is high because broader regional risk remains elevated even without a fresh Israel-specific incident. The main channel is wider Middle East deterrence and Iran-linked signaling.",
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
        "Iran remains a major systemic risk node because Hormuz links regional security directly to global oil, LNG and shipping confidence. Sanctions, military signaling and U.S.-Iran communication all matter for energy-market expectations.",
      moved:
        "The score rises because Hormuz-related uncertainty is again the most important geopolitical transmission channel for global oil, LNG and shipping confidence.",
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
        "The score remains high because the underlying conflict risk is persistent, even if no fresh wider escalation is confirmed today.",
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
        "DRC remains the main health-risk country. The Bundibugyo Ebola outbreak has a serious confirmed case and death burden, and the response environment is complicated by healthcare-worker exposure, insecurity, community-trust issues and contact-tracing pressure.",
      moved:
        "The score eases slightly because suspected-case uncertainty narrowed, while confirmed cases and health-system pressure remain very serious.",
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
        "The score eases slightly because current reporting still points to surveillance and containment risk rather than broad domestic spread.",
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
        "Türkiye remains exposed to imported energy costs, inflation pass-through and regional logistics. Black Sea maritime risk is relevant, while Hormuz-linked oil pressure can transmit through fuel and currency channels.",
      moved:
        "The score rises because renewed oil and Hormuz pressure can transmit into imported energy costs, inflation expectations and regional logistics.",
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
        "The United States remains a central actor in Iran-related sanctions, diplomacy and security posture. External strategic exposure is meaningful because U.S.-Iran signaling affects Hormuz confidence and oil-market expectations.",
      moved:
        "The score rises because U.S.-Iran diplomacy and security posture are central to oil-market and Hormuz expectations.",
      matters:
        "The US matters because its sanctions, military posture and diplomatic decisions can stabilize or intensify expectations around Hormuz, Iran and global energy security."
    },

    {
      title: "🇨🇳 China Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "60 / 100",
      direction: "Moderate",
      watch:
        "Gulf energy imports, Hormuz traffic, manufacturing demand, shipping lane stability, import costs",
      why:
        "China remains exposed through energy imports, Gulf shipping lanes and global manufacturing sensitivity. Hormuz uncertainty matters because it can affect refinery demand, freight timing and industrial input costs.",
      moved:
        "The score rises because external energy-route risk is more active, especially for Gulf crude flows and manufacturing import costs.",
      matters:
        "China matters because it is central to global manufacturing, commodity demand, shipping volumes and supply-chain pricing."
    },

    {
      title: "🇮🇳 India Country Report",
      tag: "Moderate Risk",
      tagClass: "pill-warning",
      score: "61 / 100",
      direction: "Moderate",
      watch:
        "Oil import costs, Gulf cargo arrivals, inflation transmission, currency sensitivity, fuel price pass-through",
      why:
        "India remains sensitive to Gulf shipping risk and global oil prices because of imported energy exposure. The risk remains moderate but more active because crude-price pressure can affect import costs and inflation expectations.",
      moved:
        "The score rises because crude-price pressure increases import-cost, fuel-price and inflation sensitivity.",
      matters:
        "India matters because its energy import bill, inflation path and currency stability are closely tied to global oil and shipping conditions."
    },

    {
      title: "🇩🇪 Germany Country Report",
      tag: "Low-Moderate Risk",
      tagClass: "pill-neutral",
      score: "48 / 100",
      direction: "Low-Moderate",
      watch:
        "Industrial output, energy pricing, EU coordination, export demand, external shock transmission",
      why:
        "Germany remains structurally stable but exposed to energy, trade and industrial-cost pressures. Higher energy and freight costs can transmit into industry and export demand even without a Germany-specific crisis.",
      moved:
        "The score rises slightly because higher energy and freight costs can transmit into industrial costs and export demand.",
      matters:
        "Germany matters because it is a core European industrial economy. External energy and trade shocks can affect the wider European outlook."
    },

    {
      title: "🇯🇵 Japan Country Report",
      tag: "Low-Moderate Risk",
      tagClass: "pill-neutral",
      score: "49 / 100",
      direction: "Low-Moderate",
      watch:
        "Maritime security, LNG and oil imports, currency stability, Asian shipping routes, industrial demand",
      why:
        "Japan remains institutionally stable but exposed to imported energy costs and secure maritime routes. Hormuz uncertainty remains relevant because Japan depends on reliable seaborne energy flows.",
      moved:
        "The score rises slightly because imported energy dependence and maritime route security become more relevant when Hormuz risk increases.",
      matters:
        "Japan matters because it is a major technology, shipping and supply-chain economy. Maritime disruptions and imported fuel costs can influence inflation, currency policy and industrial competitiveness."
    }
  ]
};
