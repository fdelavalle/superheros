export const isHeroInTeam = (enteredHero, team) => {
  return team.includes(enteredHero);
};

export const checkTeamOrientation = (goodHerosCounter, badHerosCounter) => {
  if (goodHerosCounter === 3) {
    return 1;
  } else {
    if (badHerosCounter === 3) {
      return 2;
    } else {
      return 3;
    }
  }
};
