import React from 'react';
import Card from './Card';

const CardGrid = ({ herosList, inHome }) => {
  return (
    <div className='container'>
      <div className='row'>
        {herosList.map((hero) => {
          return (
            <div className='col-lg-4 col-md-6' key={hero.id}>
              <Card hero={hero} inHome={inHome} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardGrid;
