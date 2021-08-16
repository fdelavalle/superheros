import React, { useState } from 'react';

const TeamMembersContext = React.createContext({
  heros: [],
  addHero: (hero) => {},
  removeHero: (id) => {},
});

export const TeamMembersContextProvider = (props) => {
  const [heros, setHeros] = useState([]);

  const addHeroToTeamHandler = (hero) => {
    setHeros((prevHeros) => {
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
