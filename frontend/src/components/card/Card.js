import React, { useState } from 'react';
import HeroModal from '../modal/HeroModal';

import './Card.css';

const Card = ({ hero }) => {
  const { image, name } = hero;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <React.Fragment>
      {isModalOpen} ?{' '}
      <HeroModal
        imageUrl={image.url}
        show={isModalOpen}
        setShow={setIsModalOpen}
      />{' '}
      (
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
            <button type='button' className='btn btn-success'>
              Add Hero
            </button>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              type='button'
              className='btn btn-primary'
            >
              Details
            </button>
          </div>
        </div>
      </div>
      )
    </React.Fragment>
  );
};

export default Card;
