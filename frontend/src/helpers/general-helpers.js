export const isHeroInTeam = (enteredHero, team) => {
  return team.includes(enteredHero);
};

export const getTeamSummary = (team) => {
  const powerstatsSummary = [
    { powerstat: 'Intelligence', value: 0 },
    { powerstat: 'Strength', value: 0 },
    { powerstat: 'Speed', value: 0 },
    { powerstat: 'Durability', value: 0 },
    { powerstat: 'Power', value: 0 },
    { powerstat: 'Combat', value: 0 },
  ];

  team.forEach((hero) => {
    if (hero.powerstats.intelligence === 'null') {
      powerstatsSummary[0].value += 0;
    } else {
      powerstatsSummary[0].value += parseInt(hero.powerstats.intelligence);
    }
    if (hero.powerstats.strength === 'null') {
      powerstatsSummary[1].value += 0;
    } else {
      powerstatsSummary[1].value += parseInt(hero.powerstats.strength);
    }
    if (hero.powerstats.speed === 'null') {
      powerstatsSummary[2].value += 0;
    } else {
      powerstatsSummary[2].value += parseInt(hero.powerstats.speed);
    }
    if (hero.powerstats.durability === 'null') {
      powerstatsSummary[3].value += 0;
    } else {
      powerstatsSummary[3].value += parseInt(hero.powerstats.durability);
    }
    if (hero.powerstats.power === 'null') {
      powerstatsSummary[4].value += 0;
    } else {
      powerstatsSummary[4].value += parseInt(hero.powerstats.power);
    }
    if (hero.powerstats.combat === 'null') {
      powerstatsSummary[5].value += 0;
    } else {
      powerstatsSummary[5].value += parseInt(hero.powerstats.combat);
    }
  });

  return powerstatsSummary;
};
