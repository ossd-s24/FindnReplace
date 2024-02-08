
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)

while(walker.nextNode()) {
  walker.currentNode.nodeValue = walker.currentNode.nodeValue.replace("to", "dooby do!")
}