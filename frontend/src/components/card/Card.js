import React from 'react';

const Card = ({ hero }) => {
  const { image, name } = hero;

  return (
    <div className='card bg-dark text-white'>
      <img src={image.url} className='card-img' alt={`${name} card`} />
      <div className='card-img-overlay'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>HOLA</p>
        <button type='button' className='btn btn-outline-success'>
          ADD
        </button>
        <button type='button' className='btn btn-outline-primary'>
          Display
        </button>
      </div>
    </div>
  );
};

export default Card;
