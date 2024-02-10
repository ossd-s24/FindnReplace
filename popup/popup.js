document.addEventListener('DOMContentLoaded', function() {
  var replaceButton = document.getElementById('replacebutton');

  if (replaceButton) {
    replaceButton.addEventListener('click', function() {
      var findText = document.getElementById('findInput').value;
      var replaceText = document.getElementById('replaceInput').value;

      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: function() {
            var textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            var node;

            while (node = textNodes.nextNode()) {
              node.nodeValue = node.nodeValue.replace(new RegExp(findText, 'gi'), replaceText);
            }
          }
        });
      });
    });
  } else {
    console.error("Unable to find the replaceButton element.");
  }
});
