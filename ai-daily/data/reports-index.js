window.AI_DAILY_DATA = window.AI_DAILY_DATA || { generated_at: null, report_count: 0, reports: [] };
(function loadAiDailyData() {
  function fetchJson(path) {
    var request = new XMLHttpRequest();
    request.open('GET', path + '?v=' + Date.now(), false);
    request.send(null);
    if (request.status >= 200 && request.status < 300 && request.responseText) {
      return JSON.parse(request.responseText);
    }
    return null;
  }

  try {
    var payload = fetchJson('data/reports-index.json') || window.AI_DAILY_DATA;
    var reports = Array.isArray(payload.reports) ? payload.reports.slice() : [];
    var extraReports = ['data/report-2026-06-15.json'];

    extraReports.forEach(function (path) {
      try {
        var report = fetchJson(path);
        if (report && report.report_date) {
          reports.unshift(report);
        }
      } catch (error) {
        console.error('Failed to load extra AI daily report:', path, error);
      }
    });

    var seen = {};
    reports = reports.filter(function (report) {
      var key = String(report.report_date || '') + '-' + String(report.issue_number || '');
      if (seen[key]) {
        return false;
      }
      seen[key] = true;
      return true;
    }).sort(function (a, b) {
      var dateOrder = String(b.report_date || '').localeCompare(String(a.report_date || ''));
      if (dateOrder !== 0) {
        return dateOrder;
      }
      return String(b.issue_number || '').localeCompare(String(a.issue_number || ''));
    });

    window.AI_DAILY_DATA = {
      generated_at: new Date().toISOString(),
      report_count: reports.length,
      reports: reports
    };
  } catch (error) {
    console.error('Failed to load AI daily data; using fallback payload.', error);
  }
})();
