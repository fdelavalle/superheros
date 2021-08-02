import React from 'react';
import './Card.css';

const Card = ({ hero }) => {
  const { image, name } = hero;

  return (
    <div className='card bg-dark text-white mt-2 h-500'>
      <img src={image.url} className='card-img h-500' alt={`${name} card`} />
      <div className='card-img-overlay d-flex flex-column justify-content-between p-0'>
        <div className='p-3 mt-2 opacity h-4r'>
          <h3 className='card-title text-center'>{name}</h3>
        </div>

        <div className='d-flex justify-content-around mb-5'>
          <button type='button' className='btn btn-success'>
            Add Hero
          </button>
          <button type='button' className='btn btn-primary'>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
