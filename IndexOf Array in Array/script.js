var searchArray = function (arrayToSearch, query) {
  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i].length !== 2) {
      throw new Error("error");
    }
  }

  if (!Array.isArray(query) || query.length !== 2) {
    throw new Error("error");
  }

  for (let i = 0; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i][0] == query[0] && arrayToSearch[i][1] == query[1]) {
      return i;
    }
  }
  return -1;
};
