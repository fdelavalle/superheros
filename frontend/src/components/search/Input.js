import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Input.css';

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
    <form onSubmit={searchHeroHandler}>
      <div className='input-group'>
        <input
          className='form-control rounded-0 border-end-0 border'
          type='search'
          id='superhero'
          name='superhero'
          onChange={superheroChangeHandler}
          value={enteredSuperhero}
          placeholder='Find a hero for your team'
        />
        <span className='input-group-append'>
          <button className='btn btn-lightblue btn-outline-primary border bg-white border-start-0 rounded-0'>
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
          </button>
        </span>
      </div>
    </form>
  );
};

export default Input;
