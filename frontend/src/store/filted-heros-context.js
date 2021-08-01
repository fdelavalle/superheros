import React, { useState, useCallback } from 'react';
import axios from '../services/axios';

const FilteredHerosContext = React.createContext({
  herosList: [],
  updateHeros: (name) => {},
});

export const FilteredHerosContextProvider = (props) => {
  const [fetchedHeroes, setFetchedHeroes] = useState([]);

  const addHeroHandler = async (name) => {
    const response = await axios.get(name);
    const responseData = await response.data.results;
    setFetchedHeroes(responseData);
  };

  const memoizedHeroHandler = useCallback((name) => {
    addHeroHandler(name);
  }, []);

  const heroListContext = {
    herosList: fetchedHeroes,
    updateHeros: memoizedHeroHandler,
  };

  return (
    <FilteredHerosContext.Provider value={heroListContext}>
      {props.children}
    </FilteredHerosContext.Provider>
  );
};

export default FilteredHerosContext;
