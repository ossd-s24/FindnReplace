// NEEDS WORK: Will write to replacement.txt, line 1 will be the value from fins and line 2 will be value from replcae

let form = document.getElementById("findReplaceForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
  //write document

  });



// NEEDS WORK: Will read a replacement.txt, line 1 will become "find.value" and line 2 will become "replace.value"

//document = 
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
    
