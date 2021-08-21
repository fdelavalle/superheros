import React, { useState, useEffect } from 'react';
import {
  isHeroInTeam,
  getTeamSummary,
  getWeightAndHeight,
} from '../helpers/general-helpers';

const TeamMembersContext = React.createContext({
  heros: [],
  addHero: (hero) => {},
  removeHero: (id) => {},
  teamSummary: [],
  stats: {},
});

export const TeamMembersContextProvider = (props) => {
  const [heros, setHeros] = useState([]);
  const [goodHerosCounter, setGoodHerosCounter] = useState(0);
  const [badHerosCounter, setBadHerosCounter] = useState(0);
  const [teamFullOfGoodHeros, setTeamFullOfGoodHeros] = useState(false);
  const [teamFullOfBadHeros, setTeamFullOfBadHeros] = useState(false);
  const [teamSummary, setTeamSummary] = useState({});
  const [stats, setStats] = useState({});

  useEffect(() => {
    setTeamSummary(getTeamSummary(heros));
    setStats(getWeightAndHeight(heros));
    if (goodHerosCounter === 3) {
      setTeamFullOfGoodHeros(true);
    } else {
      if (goodHerosCounter < 3) {
        setTeamFullOfGoodHeros(false);
      }
    }
    if (badHerosCounter >= 3) {
      setTeamFullOfBadHeros(true);
    } else {
      if (badHerosCounter < 3) {
        setTeamFullOfBadHeros(false);
      }
    }
  }, [goodHerosCounter, badHerosCounter, heros]);

  console.log(stats);

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
    if (enteredHero.biography.alignment === 'good') {
      setGoodHerosCounter((prevCount) => prevCount - 1);
    }
    if (enteredHero.biography.alignment === 'bad') {
      setBadHerosCounter((prevCount) => prevCount - 1);
    }
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
    teamSummary: teamSummary,
    stats: stats,
  };

  return (
    <TeamMembersContext.Provider value={teamContextValue}>
      {props.children}
    </TeamMembersContext.Provider>
  );
};

export default TeamMembersContext;
