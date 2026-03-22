(function () {
  const pageData = window.dailyRiskPageData;

  if (!pageData) {
    console.error("dailyRiskPageData is missing.");
    return;
  }

  function getBarClass(score) {
    if (score < 35) return "fill-low";
    if (score < 70) return "fill-medium";
    return "fill-high";
  }

  function createPill(text, className) {
    return `<span class="pill ${className}">${text}</span>`;
  }

  function createSparkline(values) {
    const width = 240;
    const height = 36;
    const padding = 4;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const stepX = (width - padding * 2) / (values.length - 1 || 1);

    const points = values.map((value, index) => {
      const x = padding + index * stepX;
      const y = height - padding - ((value - min) / range) * (height - padding * 2);
      return { x, y };
    });

    const line = points.map(point => `${point.x},${point.y}`).join(" ");
    const area = `${points.map(point => `${point.x},${point.y}`).join(" ")} ${points[points.length - 1].x},${height - padding} ${points[0].x},${height - padding}`;
    const lastPoint = points[points.length - 1];

    return `
      <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
        <polygon class="sparkline-area" points="${area}"></polygon>
        <polyline class="sparkline-line" points="${line}"></polyline>
        <circle class="sparkline-dot" cx="${lastPoint.x}" cy="${lastPoint.y}" r="3.5"></circle>
      </svg>
    `;
  }

  function renderTopMeta() {
    document.getElementById("hero-eyebrow").innerHTML = `
      <span class="live-dot"></span>
      Daily AI-assisted global risk report · ${pageData.reportDate}
    `;

    const overallScoreEl = document.getElementById("overall-score");
    overallScoreEl.dataset.count = pageData.overallScore;
    overallScoreEl.textContent = pageData.overallScore;

    document.getElementById("hero-summary").textContent = pageData.heroSummary;
    document.getElementById("overall-explainer").textContent = pageData.overallExplainer;

    document.getElementById("hero-status-pills").innerHTML = `
      ${createPill(pageData.overallLabel, "pill-danger")}
      ${createPill(pageData.overallTrend, "pill-warning")}
      ${createPill(`Confidence: ${pageData.confidence}`, "pill-neutral")}
    `;
  }

  function renderOverview() {
    document.getElementById("overview-strip").innerHTML = pageData.overview.map(item => `
      <div class="overview-card">
        <div class="label">${item.label}</div>
        <div class="value">${item.value}</div>
        <div class="value-sub">${item.sub}</div>
      </div>
    `).join("");
  }

  function renderGlance() {
    document.getElementById("glance-summary").textContent = pageData.glanceSummary;

    document.getElementById("glance-bullets").innerHTML = pageData.glanceBullets.map(item => `
      <li>${item}</li>
    `).join("");

    document.getElementById("daily-comparison").innerHTML = pageData.dailyComparison.map(item => `
      <div class="mini-box">
        <div class="mini-label">${item.label}</div>
        <div class="mini-value">${item.value}</div>
      </div>
    `).join("");
  }

  function renderRiskCards() {
    const riskGrid = document.getElementById("risk-grid");

    riskGrid.innerHTML = pageData.riskData.map(item => `
      <article class="risk-card">
        <div class="risk-top">
          <div>
            <div class="risk-title">${item.title}</div>
            <div class="risk-subtitle">${item.subtitle}</div>
          </div>

          <div class="risk-score">
            <div class="num" data-count="${item.score}">${item.score}</div>
            <div class="small">/ 100</div>
          </div>
        </div>

        <div class="bar">
          <div class="bar-fill ${getBarClass(item.score)}" style="width:${item.score}%"></div>
        </div>

        <div class="risk-pills">
          ${createPill(item.changeText, item.changeClass)}
          ${createPill(item.direction, item.directionClass)}
        </div>

        <div class="chips-block">
          <div class="chips-label">Key drivers</div>
          <div class="chips-row">
            ${item.drivers.map(driver => `<span class="chip driver">${driver}</span>`).join("")}
          </div>
        </div>

        <div class="chips-block">
          <div class="chips-label">Last 7 updates</div>
          <div class="sparkline-box">${createSparkline(item.trend)}</div>
        </div>

        <div class="chips-block">
          <div class="chips-label">Signals used</div>
          <div class="chips-row">
            ${item.sources.map(source => `<span class="chip source">${source}</span>`).join("")}
          </div>
        </div>

        <div class="risk-desc">${item.description}</div>
      </article>
    `).join("");
  }

  function renderReports() {
    const reportStack = document.getElementById("report-stack");

    reportStack.innerHTML = pageData.reportData.map(item => `
      <article class="report-box">
        <div class="report-head">
          <h3>${item.title}</h3>
          <span class="pill ${item.tagClass}">${item.tag}</span>
        </div>

        <div class="report-layout">
          <div class="report-side">
            <div class="report-stat">
              <small>Score</small>
              <strong>${item.score}</strong>
            </div>
            <div class="report-stat">
              <small>Direction</small>
              <strong>${item.direction}</strong>
            </div>
            <div class="report-stat">
              <small>Watch Next 48h</small>
              <strong>${item.watch}</strong>
            </div>
          </div>

          <div class="report-body">
            <h4>Why it remains here</h4>
            <p>${item.why}</p>

            <h4>What moved the score</h4>
            <p>${item.moved}</p>

            <h4>Why it matters</h4>
            <p>${item.matters}</p>
          </div>
        </div>
      </article>
    `).join("");
  }

  function renderCountryRiskCards() {
    const countryGrid = document.getElementById("country-risk-grid");
    if (!countryGrid) return;

    countryGrid.innerHTML = pageData.countryRiskData.map(item => `
      <article class="country-card">
        <div class="country-top">
          <div>
            <div class="country-name">${item.country}</div>
            <div class="country-region">${item.region}</div>
          </div>

          <div class="country-score">
            <div class="num" data-count="${item.score}">${item.score}</div>
            <div class="small">/ 100</div>
          </div>
        </div>

        <div class="bar">
          <div class="bar-fill ${getBarClass(item.score)}" style="width:${item.score}%"></div>
        </div>

        <div class="country-pills">
          ${createPill(item.changeText, item.changeClass)}
          ${createPill(item.direction, item.directionClass)}
        </div>

        <div class="country-meta">
          ${item.drivers.map(driver => `<span class="meta-chip">${driver}</span>`).join("")}
        </div>

        <div class="chips-block">
          <div class="chips-label">Last 7 updates</div>
          <div class="sparkline-box">${createSparkline(item.trend)}</div>
        </div>

        <div class="country-watch-list">
          ${item.watchItems.map(watch => `<span class="chip source">${watch}</span>`).join("")}
        </div>

        <div class="country-desc">${item.summary}</div>
      </article>
    `).join("");
  }

  function renderCountryReports() {
    const countryReportStack = document.getElementById("country-report-stack");
    if (!countryReportStack) return;

    countryReportStack.innerHTML = pageData.countryReportData.map(item => `
      <article class="report-box country-report-box">
        <div class="report-head">
          <h3>${item.title}</h3>
          <span class="pill ${item.tagClass}">${item.tag}</span>
        </div>

        <div class="report-layout">
          <div class="report-side">
            <div class="report-stat">
              <small>Score</small>
              <strong>${item.score}</strong>
            </div>
            <div class="report-stat">
              <small>Direction</small>
              <strong>${item.direction}</strong>
            </div>
            <div class="report-stat">
              <small>Watch Next 48h</small>
              <strong>${item.watch}</strong>
            </div>
          </div>

          <div class="report-body">
            <h4>Why it remains here</h4>
            <p>${item.why}</p>

            <h4>What moved the score</h4>
            <p>${item.moved}</p>

            <h4>Why it matters</h4>
            <p>${item.matters}</p>
          </div>
        </div>
      </article>
    `).join("");
  }

  function animateCounters() {
    const counters = document.querySelectorAll("[data-count]");

    counters.forEach(counter => {
      const target = Number(counter.dataset.count);
      const duration = 900;
      const start = performance.now();

      function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        counter.textContent = value;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(update);
    });
  }

  renderTopMeta();
  renderOverview();
  renderGlance();
  renderRiskCards();
  renderReports();
  renderCountryRiskCards();
  renderCountryReports();
  animateCounters();
})();
