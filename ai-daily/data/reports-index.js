window.AI_DAILY_DATA = window.AI_DAILY_DATA || { generated_at: null, report_count: 0, reports: [] };
(function loadAiDailyDataFromJson() {
  try {
    var request = new XMLHttpRequest();
    request.open('GET', 'data/reports-index.json?v=' + Date.now(), false);
    request.send(null);
    if (request.status >= 200 && request.status < 300 && request.responseText) {
      window.AI_DAILY_DATA = JSON.parse(request.responseText);
    }
  } catch (error) {
    console.error('Failed to load AI daily JSON data; using fallback payload.', error);
  }
})();
