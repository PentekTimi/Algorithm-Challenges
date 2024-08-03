var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head;
  }

  let listLength = 1;
  let newHead = head;
  let current = head;

  while (current.next) {
    current = current.next;
    listLength++;
  }

  current.next = head;

  for (let i = 1; i < listLength - (k % listLength); i++) {
    newHead = newHead.next;
  }

  const result = newHead.next;
  newHead.next = null;
  return result;
};
