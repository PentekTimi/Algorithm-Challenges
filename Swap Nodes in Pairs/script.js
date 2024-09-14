var swapPairs = function (head) {
  let dummyList = new ListNode(null, head);
  let current = dummyList;

  while (current.next && current.next.next) {
    const first = current.next;
    const second = current.next.next;

    first.next = second.next;
    second.next = first;
    current.next = second;

    current = current.next.next;
  }

  return dummyList.next;
};
