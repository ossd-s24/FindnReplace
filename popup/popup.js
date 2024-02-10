document.addEventListener("submit", (e) => {
    e.preventDefault();

    let find = document.getElementById('find');
    let replace = document.getElementById('replace');
    findText = find.value;
    replaceText = replace.value;

    browser.tabs
        .query({ active: true, currentWindow: true })
        .then(replaceFunc)
        .catch(reportError);

    function replaceFunc(tabs){
      let passVal = 'walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); while(walker.nextNode()) { walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(\'' + findText + '\',\'' + replaceText + '\');}';
      console.log(passVal);
      browser.tabs.executeScript({
        code: passVal
      })
    }
  });



