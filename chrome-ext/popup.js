'use strict';


document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.getSelected(null, function(tab) {
    console.log(tab.url);
    const analyzeUrl = `https://morejust.media/read?url=${tab.url}`;
    window.open(analyzeUrl);
  });
}, false);
