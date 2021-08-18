import React, { useState } from 'react';
import { isHeroInTeam, checkTeamOrientation } from '../helpers/team-validity';

const TeamMembersContext = React.createContext({
  heros: [],
  addHero: (hero) => {},
  removeHero: (id) => {},
});

export const TeamMembersContextProvider = (props) => {
  const [heros, setHeros] = useState([]);
  const [goodHerosCounter, setGoodHerosCounter] = useState(0);
  const [badHerosCounter, setBadHerosCounter] = useState(0);
  const [teamFullOfGoodHeros, setTeamFullOfGoodHeros] = useState(false);
  const [teamFullOfBadHeros, setTeamFullOfBadHeros] = useState(false);

  console.log('OgoodO', goodHerosCounter);
  console.log('ObadO', badHerosCounter);

  const addHeroToTeamHandler = (hero) => {
    if (isHeroInTeam(hero, heros)) return;
    if (checkTeamOrientation(goodHerosCounter, badHerosCounter) === 1)
      setTeamFullOfGoodHeros(true);
    if (checkTeamOrientation(goodHerosCounter, badHerosCounter) === 2)
      setTeamFullOfBadHeros(true);
    setHeros((prevHeros) => {
      if (hero.biography.alignment === 'good' && !teamFullOfGoodHeros) {
        setGoodHerosCounter((prevCount) => prevCount + 1);
        console.log('good', goodHerosCounter);
      } else {
        if (!teamFullOfBadHeros)
          setBadHerosCounter((prevCount) => prevCount + 1);
        console.log('bad', badHerosCounter);
      }
      const updatedHeros = [...prevHeros];
      updatedHeros.push(hero);

      return updatedHeros;
    });
  };

  const removeHeroFromTeamHandler = (enteredHero) => {
    setHeros((prevHeros) => {
      const updatedHeros = prevHeros.filter(
        (hero) => hero.id !== enteredHero.id
      );
      return updatedHeros;
    });
  };

  const teamContextValue = {
    heros: heros,
    addHero: addHeroToTeamHandler,
    removeHero: removeHeroFromTeamHandler,
  };

  return (
    <TeamMembersContext.Provider value={teamContextValue}>
      {props.children}
    </TeamMembersContext.Provider>
  );
};

export default TeamMembersContext;
