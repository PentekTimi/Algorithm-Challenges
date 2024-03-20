function likes(names) {
  let result = "";
  switch (true) {
    case names.length === 0:
      result = "no one likes this";
      return result;
    case names.length === 1:
      result = `${names[0]} likes this`;
      return result;
    case names.length === 2:
      result = `${names[0]} and ${names[1]} like this`;
      return result;
    case names.length === 3:
      result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      return result;
    case names.length > 3:
      result = `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
      return result;
  }
}

// or

function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return names[0] + " likes this";
    case 2:
      return names[0] + " and " + names[1] + " like this";
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}
