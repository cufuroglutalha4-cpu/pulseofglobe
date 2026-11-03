(function () {
  'use strict';
  const tool = document.querySelector('[data-tool]');
  if (!tool) return;
  const byId = id => document.getElementById(id);
  const format = n => Math.floor(Math.max(0, n)).toLocaleString('en-US');
  function yearSeconds(year) {
    return (Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)) / 1000;
  }
  // Integrate each UTC year separately so a session crossing New Year is consistent.
  function annualFraction(start, end) {
    let total = 0;
    while (start < end) {
      const year = new Date(start).getUTCFullYear();
      const stop = Math.min(end, Date.UTC(year + 1, 0, 1));
      total += (stop - start) / 1000 / yearSeconds(year);
      start = stop;
    }
    return total;
  }
  if (tool.dataset.tool === 'doubling') {
    const input = byId('growth-rate');
    function calculate() {
      const rate = Number(input.value);
      const result = byId('doubling-result');
      const rule = byId('doubling-rule');
      if (input.value.trim() === '' || !Number.isFinite(rate) || rate <= -100 || rate > 100) {
        result.textContent = 'Enter a rate greater than −100% and no higher than 100%.';
        rule.textContent = '';
      } else if (rate <= 0) {
        result.textContent = rate === 0 ? 'No finite doubling time at zero growth.' : 'A declining population does not double at this rate.';
        rule.textContent = 'The rule of 70 applies to positive growth rates.';
      } else {
        result.textContent = (Math.log(2) / Math.log1p(rate / 100)).toFixed(2) + ' years at ' + rate + '% annual growth';
        rule.textContent = 'Rule of 70: ' + (70 / rate).toFixed(2) + ' years (approximation).';
      }
    }
    input.addEventListener('input', calculate);
    calculate();
  } else if (tool.dataset.tool === 'session') {
    let running = true;
    let last = Date.now();
    let seconds = 0;
    let fraction = 0;
    function tick() {
      const now = Date.now();
      if (running && now > last) {
        seconds += (now - last) / 1000;
        fraction += annualFraction(last, now);
      }
      last = now;
      byId('session-time').textContent = seconds.toFixed(1);
      byId('session-births').textContent = format(fraction * 136000000);
      byId('session-deaths').textContent = format(fraction * 67000000);
      byId('session-growth').textContent = format(fraction * 69000000);
    }
    byId('session-toggle').addEventListener('click', function () {
      tick();
      running = !running;
      this.textContent = running ? 'Pause' : 'Resume';
      this.setAttribute('aria-pressed', String(!running));
      byId('session-status').textContent = running ? 'Timer running. Counts are model estimates.' : 'Timer paused.';
    });
    byId('session-reset').addEventListener('click', function () {
      seconds = 0; fraction = 0; last = Date.now();
      tick();
      byId('session-status').textContent = running ? 'Timer reset and running.' : 'Timer reset and paused.';
    });
    tick();
    setInterval(tick, 100);
  } else if (tool.dataset.tool === 'annual') {
    const annual = Number(tool.dataset.annual);
    function refresh() {
      const now = new Date();
      const start = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
      const value = annual * ((now.getTime() - start) / 1000) / yearSeconds(now.getUTCFullYear());
      byId('annual-counter').textContent = format(value) + ' tonnes';
    }
    refresh();
    setInterval(refresh, 1000);
  }
})();
