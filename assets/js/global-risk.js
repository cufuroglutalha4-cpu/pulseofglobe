(function () {
  const pageData = window.dailyRiskPageData;

  if (!pageData) {
    console.error("dailyRiskPageData is missing.");
    document.documentElement.classList.add("risk-data-missing");
    return;
  }

  function $(id) {
    return document.getElementById(id);
  }

  function toArray(value) {
    return Array.isArray(value) ? value : [];
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safeClass(value, fallback = "") {
    const text = String(value ?? fallback);
    return /^[a-zA-Z0-9_\-\s]+$/.test(text) ? text : fallback;
  }

  function setText(id, value) {
    const el = $(id);
    if (el) el.textContent = value ?? "";
  }

  function setHTML(id, value) {
    const el = $(id);
    if (el) el.innerHTML = value;
  }

  function getBarClass(score) {
    if (score < 35) return "fill-low";
    if (score < 70) return "fill-medium";
    return "fill-high";
  }

  function createPill(text, className) {
    return `<span class="pill ${safeClass(className, "pill-neutral")}">${escapeHTML(text)}</span>`;
  }

  function createSparkline(values) {
    const nums = toArray(values).map(Number).filter(Number.isFinite);
    if (!nums.length) return "";

    const width = 240;
    const height = 36;
    const padding = 4;
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const range = max - min || 1;
    const stepX = (width - padding * 2) / (nums.length - 1 || 1);

    const points = nums.map((value, index) => {
      const x = padding + index * stepX;
      const y = height - padding - ((value - min) / range) * (height - padding * 2);
      return { x, y };
    });

    const line = points.map(point => `${point.x},${point.y}`).join(" ");
    const area = `${points.map(point => `${point.x},${point.y}`).join(" ")} ${points[points.length - 1].x},${height - padding} ${points[0].x},${height - padding}`;
    const lastPoint = points[points.length - 1];

    return `
      <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <polygon class="sparkline-area" points="${area}"></polygon>
        <polyline class="sparkline-line" points="${line}"></polyline>
        <circle class="sparkline-dot" cx="${lastPoint.x}" cy="${lastPoint.y}" r="3.5"></circle>
      </svg>
    `;
  }

  function updateDocumentMeta() {
    const score = Number(pageData.overallScore);
    const title = "Global Risk Index Today | Daily World Risk Report";
    const description = `Global Risk Index today: ${Number.isFinite(score) ? score + "/100" : "daily update"}. Daily geopolitical, economic, health, climate and country-level risk report from Pulse Of Globe.`;

    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute("content", description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Global Risk Index Today | Pulse Of Globe");

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", "Global Risk Index Today | Pulse Of Globe");

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", description);
  }

  function renderTopMeta() {
    setHTML("hero-eyebrow", `
      <span class="live-dot"></span>
      Daily AI-assisted global risk report · ${escapeHTML(pageData.reportDate)}
    `);

    const overallScoreEl = $("overall-score");
    if (overallScoreEl) {
      overallScoreEl.dataset.count = Number(pageData.overallScore) || 0;
      overallScoreEl.textContent = Number(pageData.overallScore) || 0;
    }

    setText("hero-summary", pageData.heroSummary);
    setText("overall-explainer", pageData.overallExplainer);

    setHTML("hero-status-pills", `
      ${createPill(pageData.overallLabel, "pill-danger")}
      ${createPill(pageData.overallTrend, "pill-warning")}
      ${createPill(`Confidence: ${pageData.confidence}`, "pill-neutral")}
    `);
  }

  function renderOverview() {
    setHTML("overview-strip", toArray(pageData.overview).map(item => `
      <div class="overview-card">
        <div class="label">${escapeHTML(item.label)}</div>
        <div class="value">${escapeHTML(item.value)}</div>
        <div class="value-sub">${escapeHTML(item.sub)}</div>
      </div>
    `).join(""));
  }

  function renderGlance() {
    setText("glance-summary", pageData.glanceSummary);

    setHTML("glance-bullets", toArray(pageData.glanceBullets).map(item => `
      <li>${escapeHTML(item)}</li>
    `).join(""));

    setHTML("daily-comparison", toArray(pageData.dailyComparison).map(item => `
      <div class="mini-box">
        <div class="mini-label">${escapeHTML(item.label)}</div>
        <div class="mini-value">${escapeHTML(item.value)}</div>
      </div>
    `).join(""));
  }

  function renderRiskCards() {
    const riskGrid = $("risk-grid");
    if (!riskGrid) return;

    riskGrid.innerHTML = toArray(pageData.riskData).map(item => {
      const score = Number(item.score) || 0;
      return `
      <article class="risk-card">
        <div class="risk-top">
          <div>
            <h3 class="risk-title">${escapeHTML(item.title)}</h3>
            <div class="risk-subtitle">${escapeHTML(item.subtitle)}</div>
          </div>

          <div class="risk-score">
            <div class="num" data-count="${score}">${score}</div>
            <div class="small">/ 100</div>
          </div>
        </div>

        <div class="bar">
          <div class="bar-fill ${getBarClass(score)}" style="width:${score}%"></div>
        </div>

        <div class="risk-pills">
          ${createPill(item.changeText, item.changeClass)}
          ${createPill(item.direction, item.directionClass)}
        </div>

        <div class="chips-block">
          <div class="chips-label">Key drivers</div>
          <div class="chips-row">
            ${toArray(item.drivers).map(driver => `<span class="chip driver">${escapeHTML(driver)}</span>`).join("")}
          </div>
        </div>

        <div class="chips-block">
          <div class="chips-label">Last 7 updates</div>
          <div class="sparkline-box">${createSparkline(item.trend)}</div>
        </div>

        <div class="chips-block">
          <div class="chips-label">Signals used</div>
          <div class="chips-row">
            ${toArray(item.sources).map(source => `<span class="chip source">${escapeHTML(source)}</span>`).join("")}
          </div>
        </div>

        <p class="risk-desc">${escapeHTML(item.description)}</p>
      </article>
    `;
    }).join("");
  }


  function renderScoreBreakdown() {
    const data = pageData.scoreBreakdown || {};
    const section = $("score-breakdown");
    if (!section) return;

    setText("score-breakdown-title", data.title || "Why the Index Is at This Level");
    setText("score-breakdown-summary", data.summary || "");
    setText("score-breakdown-method", data.methodNote || "");

    setHTML("score-breakdown-overall", toArray(data.overall).map(item => `
      <article class="score-factor">
        <div class="score-factor-top">
          <h3>${escapeHTML(item.label)}</h3>
          <span class="impact-badge ${safeClass(item.impactClass, "impact-neutral")}">${escapeHTML(item.impact)}</span>
        </div>
        <p>${escapeHTML(item.note)}</p>
      </article>
    `).join(""));

    setHTML("score-breakdown-categories", toArray(data.categories).map(category => `
      <article class="breakdown-category">
        <div class="breakdown-category-head">
          <h3>${escapeHTML(category.title)}</h3>
          <span class="pill pill-neutral">${escapeHTML(category.score)}</span>
        </div>
        <div class="breakdown-items">
          ${toArray(category.items).map(item => `
            <div class="breakdown-item">
              <div>
                <strong>${escapeHTML(item.label)}</strong>
                <p>${escapeHTML(item.note)}</p>
              </div>
              <span>${escapeHTML(item.impact)}</span>
            </div>
          `).join("")}
        </div>
      </article>
    `).join(""));
  }

  function renderReports() {
    const reportStack = $("report-stack");
    if (!reportStack) return;

    reportStack.innerHTML = toArray(pageData.reportData).map(item => `
      <article class="report-box">
        <div class="report-head">
          <h3>${escapeHTML(item.title)}</h3>
          <span class="pill ${safeClass(item.tagClass, "pill-neutral")}">${escapeHTML(item.tag)}</span>
        </div>

        <div class="report-layout">
          <div class="report-side">
            <div class="report-stat"><small>Score</small><strong>${escapeHTML(item.score)}</strong></div>
            <div class="report-stat"><small>Direction</small><strong>${escapeHTML(item.direction)}</strong></div>
            <div class="report-stat"><small>Watch Next 48h</small><strong>${escapeHTML(item.watch)}</strong></div>
          </div>

          <div class="report-body">
            <h4>Why it remains here</h4>
            <p>${escapeHTML(item.why)}</p>

            <h4>What moved the score</h4>
            <p>${escapeHTML(item.moved)}</p>

            <h4>Why it matters</h4>
            <p>${escapeHTML(item.matters)}</p>
          </div>
        </div>
      </article>
    `).join("");
  }

  function renderCountryRiskCards() {
    const countryGrid = $("country-risk-grid");
    if (!countryGrid) return;

    const countryCountPill = $("country-count-pill");
    if (countryCountPill) countryCountPill.textContent = `${toArray(pageData.countryRiskData).length} countries`;

    countryGrid.innerHTML = toArray(pageData.countryRiskData).map(item => {
      const score = Number(item.score) || 0;
      return `
      <article class="country-card">
        <div class="country-top">
          <div>
            <h3 class="country-name">${escapeHTML(item.country)}</h3>
            <div class="country-region">${escapeHTML(item.region)}</div>
          </div>

          <div class="country-score">
            <div class="num" data-count="${score}">${score}</div>
            <div class="small">/ 100</div>
          </div>
        </div>

        <div class="bar">
          <div class="bar-fill ${getBarClass(score)}" style="width:${score}%"></div>
        </div>

        <div class="country-pills">
          ${createPill(item.changeText, item.changeClass)}
          ${createPill(item.direction, item.directionClass)}
        </div>

        <div class="country-meta">
          ${toArray(item.drivers).map(driver => `<span class="meta-chip">${escapeHTML(driver)}</span>`).join("")}
        </div>

        <div class="chips-block">
          <div class="chips-label">Last 7 updates</div>
          <div class="sparkline-box">${createSparkline(item.trend)}</div>
        </div>

        <div class="country-watch-list">
          ${toArray(item.watchItems).map(watch => `<span class="chip source">${escapeHTML(watch)}</span>`).join("")}
        </div>

        <p class="country-desc">${escapeHTML(item.summary)}</p>
      </article>
    `;
    }).join("");
  }

  function renderCountryReports() {
    const countryReportStack = $("country-report-stack");
    if (!countryReportStack) return;

    countryReportStack.innerHTML = toArray(pageData.countryReportData).map(item => `
      <article class="report-box country-report-box">
        <div class="report-head">
          <h3>${escapeHTML(item.title)}</h3>
          <span class="pill ${safeClass(item.tagClass, "pill-neutral")}">${escapeHTML(item.tag)}</span>
        </div>

        <div class="report-layout">
          <div class="report-side">
            <div class="report-stat"><small>Score</small><strong>${escapeHTML(item.score)}</strong></div>
            <div class="report-stat"><small>Direction</small><strong>${escapeHTML(item.direction)}</strong></div>
            <div class="report-stat"><small>Watch Next 48h</small><strong>${escapeHTML(item.watch)}</strong></div>
          </div>

          <div class="report-body">
            <h4>Why it remains here</h4>
            <p>${escapeHTML(item.why)}</p>

            <h4>What moved the score</h4>
            <p>${escapeHTML(item.moved)}</p>

            <h4>Why it matters</h4>
            <p>${escapeHTML(item.matters)}</p>
          </div>
        </div>
      </article>
    `).join("");
  }

  function animateCounters() {
    const counters = document.querySelectorAll("[data-count]");

    counters.forEach(counter => {
      const target = Number(counter.dataset.count);
      if (!Number.isFinite(target)) return;

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

  updateDocumentMeta();
  renderTopMeta();
  renderOverview();
  renderGlance();
  renderRiskCards();
  renderScoreBreakdown();
  renderReports();
  renderCountryRiskCards();
  renderCountryReports();
  animateCounters();
})();
