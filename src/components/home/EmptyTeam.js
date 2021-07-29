import React from 'react';
import { Link } from 'react-router-dom';
import addHeroLogo from '../../assets/add-hero-logo.png';

const EmptyTeam = () => {
  return (
    <div className='container d-flex flex-column'>
      <p className='fs-3 text-center text-dark mt-5'>
        Your team is empty, you can start adding superheros here
      </p>
      <div className='overflow-hidden text-center'>
        <Link to='/search' className='p-6 mt-5 mw-25'>
          <img
            alt='add a hero to the team icon'
            src={addHeroLogo}
            className='w-25'
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default EmptyTeam;
