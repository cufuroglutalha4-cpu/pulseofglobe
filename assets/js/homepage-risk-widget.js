(function () {
  const fallbackData = {
    reportDate: "March 20, 2026",
    risk: {
      score: 82,
      label: "High Risk",
      secondaryBadge: "AI Updated",
      trendText: "↓ Lower than yesterday",
      trendClass: "trend-down",
      description:
        "Global risk remains high, but slightly below yesterday’s peak, as limited transit, partial rerouting, and workaround export flows offer some relief while Hormuz-linked disruption, tanker insecurity, and regional attack risk still keep the global picture under heavy pressure."
    }
  };

  function clampScore(value) {
    return Math.max(0, Math.min(100, Number(value) || 0));
  }

  function buildTrend(currentScore, previousScore, fallbackTrendText, fallbackTrendClass) {
    if (!Number.isFinite(currentScore) || !Number.isFinite(previousScore)) {
      return {
        text: fallbackTrendText || "→ Same as yesterday",
        className: fallbackTrendClass || "trend-neutral"
      };
    }

    if (currentScore > previousScore) {
      return {
        text: `↑ Higher than yesterday (+${currentScore - previousScore})`,
        className: "trend-up"
      };
    }

    if (currentScore < previousScore) {
      return {
        text: `↓ Lower than yesterday (${currentScore - previousScore})`,
        className: "trend-down"
      };
    }

    return {
      text: "→ Same as yesterday",
      className: "trend-neutral"
    };
  }

  function fromDailyRiskPageData(source) {
    if (!source || typeof source !== "object") {
      return null;
    }

    const currentScore = Number(source.overallScore);
    const previousScore = Number(source.previousOverallScore);
    const trend = buildTrend(currentScore, previousScore, source.overallTrend, "trend-neutral");
    const confidenceBadge = source.confidence ? `Confidence: ${source.confidence}` : "AI Updated";
    const description = source.glanceSummary || source.heroSummary || source.overallExplainer || fallbackData.risk.description;

    return {
      reportDate: source.reportDate || fallbackData.reportDate,
      risk: {
        score: clampScore(currentScore || fallbackData.risk.score),
        label: source.overallLabel ? `${source.overallLabel} Risk` : fallbackData.risk.label,
        secondaryBadge: confidenceBadge,
        trendText: trend.text,
        trendClass: trend.className,
        description
      }
    };
  }

  function getHomepageRiskCardData() {
    return (
      fromDailyRiskPageData(window.dailyRiskPageData) ||
      window.homepageRiskCardData ||
      fallbackData
    );
  }

  function renderHomepageRiskWidget(data) {
    const payload = data || getHomepageRiskCardData();
    const risk = payload.risk || {};

    const heroEyebrow = document.getElementById("heroEyebrow");
    const label = document.getElementById("riskWidgetLabel");
    const score = document.getElementById("riskScoreValue");
    const description = document.getElementById("riskDescription");
    const trend = document.getElementById("riskTrend");
    const fill = document.getElementById("riskFill");
    const badges = document.getElementById("riskBadges");

    if (!heroEyebrow || !label || !score || !description || !trend || !fill || !badges) {
      return;
    }

    heroEyebrow.innerHTML = `
      <span class="live-dot"></span>
      Live global counters · ${payload.reportDate}
    `;

    label.textContent = `Today’s Global Risk · ${payload.reportDate}`;
    score.textContent = `${risk.score} / 100`;
    description.textContent = risk.description || "";

    trend.textContent = risk.trendText || "";
    trend.className = risk.trendClass || "trend-neutral";

    fill.style.width = `${clampScore(risk.score)}%`;

    badges.innerHTML = `
      <span class="badge badge-high">${risk.label || "Risk Update"}</span>
      <span class="badge badge-ai">${risk.secondaryBadge || "AI Updated"}</span>
    `;
  }

  window.homepageRiskCardData = getHomepageRiskCardData();
  window.getHomepageRiskCardData = getHomepageRiskCardData;
  window.renderHomepageRiskWidget = renderHomepageRiskWidget;
})();
