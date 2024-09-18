var binaryTreePaths = function (root) {
  if (!root) {
    return [];
  }

  if (!root.left && !root.right) {
    return [root.val + ""];
  }

  return [
    ...binaryTreePaths(root.left).map((x) => root.val + "->" + x),
    ...binaryTreePaths(root.right).map((x) => root.val + "->" + x),
  ];
};
