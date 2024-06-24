function minUmbrellas(weather) {
  let umbrellas = {
    home: 0,
    office: 0,
  };

  for (let i = 0; i < weather.length; i++) {
    if (weather[i] === "rainy" || weather[i] === "thunderstorms") {
      if (i % 2 == 0) {
        //going from home
        //check if home already has umbrella or not
        if (umbrellas.home != 0) {
          umbrellas.home = umbrellas.home - 1;
          umbrellas.office = umbrellas.office + 1;
        } else {
          umbrellas.office = umbrellas.office + 1;
        }
      } else {
        //going from office
        if (umbrellas.office != 0) {
          umbrellas.office = umbrellas.office - 1;
          umbrellas.home = umbrellas.home + 1;
        } else {
          umbrellas.home = umbrellas.home + 1;
        }
      }
    }
  }

  return umbrellas.home + umbrellas.office;
}

//or

function minUmbrellas(weather) {
  let home = 0;
  let office = 0;

  for (let i = 0; i < weather.length; i++) {
    if (["thunderstorms", "rainy"].includes(weather[i])) {
      if (i % 2) {
        if (home) home--;
        office++;
      } else {
        if (office) office--;
        home++;
      }
    }
  }
  return home + office;
}
