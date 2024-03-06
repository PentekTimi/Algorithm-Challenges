function mostWeekendBirthdays(friends, conversationDate) {
  //obj to keep track of name, birthday, and count
  var weekendBirthdayChamp = {
    name: "Nobody",
    birthday: new Date(),
    count: -1,
  };

  //for each friend in the friends arrays
  for (let f of friends) {
    // initiate a counter for the num of weekend birthdays
    let weekendBirthdays = 0;

    //set birthday
    const birthday = new Date(f[1]);
    //check if leapday
    const isLeapDayBaby = birthday.getMonth() == 1 && birthday.getDate() == 29;
    //conversation date
    const targetDate = new Date(conversationDate);

    let year = birthday.getFullYear() + 1; // start the year after they were born

    //run script below while birth date reaches conversation date
    while (
      new Date(year, birthday.getMonth(), birthday.getDate()) <= targetDate
    ) {
      // update date if year is a leap year
      let thisYearsBirthday;
      if (year % 4 != 0 && isLeapDayBaby) {
        thisYearsBirthday = new Date(year, 1, 28);
      } else {
        thisYearsBirthday = new Date(
          year,
          birthday.getMonth(),
          birthday.getDate()
        );
      }
      // if day is a weekend day increment weekendBirthdays
      const dayOfWeek = thisYearsBirthday.getDay();

      if (dayOfWeek == 0 || dayOfWeek == 6) {
        weekendBirthdays++;
      }

      //increment year
      year++;
    }

    // check if weekendBirthdays counter is greater than weekendBirthdayChamp obj's count
    if (weekendBirthdays >= weekendBirthdayChamp.count) {
      // if the counters have the same values and
      // if the 'person' in the obj is younger than the current interation's person, jump over the iteration
      if (
        weekendBirthdays == weekendBirthdayChamp.count &&
        weekendBirthdayChamp.birthday > birthday
      ) {
        continue;
      }

      //update the name, count, and birthday
      weekendBirthdayChamp.name = f[0];
      weekendBirthdayChamp.count = weekendBirthdays;
      weekendBirthdayChamp.birthday = birthday;
    }
  }

  //return name
  return weekendBirthdayChamp.name;
}
