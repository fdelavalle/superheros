import React, { useState, useEffect } from 'react';
import {
  isHeroInTeam,
  checkBadHerosInTeam,
  checkGoodHerosInTeam,
} from '../helpers/team-validity';

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

  useEffect(() => {
    if (goodHerosCounter === 3) {
      setTeamFullOfGoodHeros(true);
    }
    if (badHerosCounter === 3) {
      setTeamFullOfBadHeros(true);
    }
  }, [goodHerosCounter, badHerosCounter]);

  const addHeroToTeamHandler = (hero) => {
    if (hero.biography.alignment === 'good' && teamFullOfGoodHeros) {
      return;
    }

    if (hero.biography.alignment === 'bad' && teamFullOfBadHeros) {
      return;
    }
    if (isHeroInTeam(hero, heros)) return;

    setHeros((prevHeros) => {
      if (hero.biography.alignment === 'good') {
        setGoodHerosCounter((prevCount) => prevCount + 1);
      }
      if (hero.biography.alignment === 'bad') {
        setBadHerosCounter((prevCount) => prevCount + 1);
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
