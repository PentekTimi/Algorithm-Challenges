function bingo(ticket, win) {
  let counter = 0;

  for (let i = 0; i < ticket.length; i++) {
    let str = ticket[i][0];
    let num = ticket[i][1];

    str.split("").map((letter, i) => {
      if (letter.charCodeAt() == num) ++counter;
    });
  }

  return counter >= win ? "Winner!" : "Loser!";
}
