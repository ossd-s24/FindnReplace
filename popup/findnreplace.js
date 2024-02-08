let form = document.getElementById("findReplaceForm");

findReplaceForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let find = document.getElementById('find');
    let replace = document.getElementById('replace');

    console.log("hello");
    console.log(find.value);
    console.log(replace.value);

    alert(`You submitted ${find.value} and ${replace.value}!`);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while(walker.nextNode()) {
      walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace(find.value, replace.value);
    }

  });




