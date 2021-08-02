import React from 'react';
import Card from './Card';

const CardGrid = ({ herosList }) => {
  return (
    <div className='container'>
      <div className='row'>
        {herosList.map((hero) => {
          return (
            <div className='col-lg-4 col-md-6' key={hero.id}>
              <Card hero={hero} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardGrid;
