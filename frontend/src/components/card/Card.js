import React, { useState, useContext } from 'react';
import TeamMembersContext from '../../store/teamMembers-context';
import HeroModal from '../modal/HeroModal';

import './Card.css';

const Card = (props) => {
  const { image, name } = props.hero;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addHero, removeHero } = useContext(TeamMembersContext);

  let buttonClasses;
  let buttonText;
  let functionality;

  if (props.inHome) {
    buttonClasses = 'btn btn-danger';
    buttonText = 'Delete Hero';
    functionality = removeHero;
  } else {
    buttonClasses = 'btn btn-success';
    buttonText = 'Add Hero';
    functionality = addHero;
  }

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const updateTeamHandler = () => {
    functionality(props.hero);
  };

  return (
    <React.Fragment>
      {isModalOpen && (
        <HeroModal
          inHome={props.inHome}
          hero={props.hero}
          show={isModalOpen}
          setShow={setIsModalOpen}
        />
      )}
      <div className='card bg-dark text-white mt-2 h-500'>
        <img
          loading='lazy'
          decoding='async'
          src={image.url}
          className='card-img h-500'
          alt={`${name} card`}
        />
        <div className='card-img-overlay d-flex flex-column justify-content-between p-0'>
          <div className='p-3 mt-2 opacity h-4r'>
            <h3 className='card-title text-center'>{name}</h3>
          </div>

          <div className='d-flex justify-content-around mb-5'>
            <button
              onClick={updateTeamHandler}
              type='button'
              className={buttonClasses}
            >
              {buttonText}
            </button>
            <button
              onClick={openModalHandler}
              type='button'
              className='btn btn-primary'
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
