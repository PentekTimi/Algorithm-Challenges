function friend(friends) {
  let arr = friends.filter((friend) => {
    return friend.length === 4;
  });

  return arr;
}
