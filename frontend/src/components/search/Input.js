import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Input = (props) => {
  const [enteredSuperhero, setEnteredSuperhero] = useState('');

  const history = useHistory();

  const superheroChangeHandler = (event) => {
    setEnteredSuperhero(event.target.value);
  };

  const searchHeroHandler = (event) => {
    event.preventDefault();
    history.push(`/search?heroName=${enteredSuperhero}`);
  };

  return (
    <React.Fragment>
      <form onSubmit={searchHeroHandler}>
        <label className='form-label' htmlFor='superhero'>
          Superhero
        </label>
        <input
          className='form-control'
          type='text'
          id='superhero'
          name='superhero'
          onChange={superheroChangeHandler}
          value={enteredSuperhero}
          placeholder='Find a hero for your team'
        />
      </form>
    </React.Fragment>
  );
};

export default Input;
