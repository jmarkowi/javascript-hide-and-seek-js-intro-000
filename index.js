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

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = lis[i] + n;
  }
}
