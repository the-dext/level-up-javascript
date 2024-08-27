class MyNode {
  left;
  right;
  constructor(lbl) {
    this.lbl = lbl;
  }
}

let rootNode = new MyNode(1);
rootNode.left = new MyNode(2);
rootNode.right = new MyNode(3);
rootNode.left.left = new MyNode(4);
rootNode.left.right = new MyNode(5);
rootNode.right.left = new MyNode(6);
rootNode.right.right = new MyNode(7);

function logNodes(rootNode) {
  console.log(rootNode.lbl);
  console.log(rootNode.left.lbl + " " + rootNode.right.lbl);
  console.log(
    rootNode.left.left.lbl +
      " " +
      rootNode.left.right.lbl +
      " " +
      rootNode.right.left.lbl +
      " " +
      rootNode.right.right.lbl
  );
}

function invert_with_recursion(node) {
  const tmp = node.left;
  node.left = node.right;
  node.right = tmp;
  if (node.left !== undefined) invert_with_recursion(node.left);
  if (node.right !== undefined) invert_with_recursion(node.right);
}

logNodes(rootNode);
invert_with_recursion(rootNode);
logNodes(rootNode);
