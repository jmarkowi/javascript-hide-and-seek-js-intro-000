function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function deepestChild() {
  var grandNode = document.getElementById('grand-node');
  var deepNode = grandNode.children[0];

  while (deepNode) {
    grandNode = deepNode;
    deepNode = grandNode.children[0]
  }
  return grandNode
}
