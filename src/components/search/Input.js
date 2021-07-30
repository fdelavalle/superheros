import React, { useState, useEffect, useContext } from 'react';
import FilteredHerosContext from '../../store/filted-heros-context';

const Input = (props) => {
  const { updateHeros } = useContext(FilteredHerosContext);
  const [enteredSuperhero, setEnteredSuperhero] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!enteredSuperhero) {
        return updateHeros('');
      }
      if (enteredSuperhero) {
        const fetchSuperHero = () => {
          updateHeros(enteredSuperhero);
        };
        try {
          fetchSuperHero();
        } catch (error) {
          console.log(error);
        }
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredSuperhero, updateHeros]);

  const superheroChangeHandler = (event) => {
    setEnteredSuperhero(event.target.value);
  };

  return (
    <React.Fragment>
      <form>
        <label htmlFor='superhero'>Superhero</label>
        <input
          type='text'
          id='superhero'
          name='superhero'
          onChange={superheroChangeHandler}
          value={enteredSuperhero}
        />
      </form>
    </React.Fragment>
  );
};

export default Input;
