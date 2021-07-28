import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const superherosList = [];

  return (
    <section style={{ height: '100vh' }}>
      <div class='alert alert-primary p-3' role='alert'>
        <p className='fs-3 text-center text-secondary'>
          Your team is empty, you can start adding superheros here
        </p>
      </div>

      {superherosList.length > 0 && (
        <div className='container bg-primary h-75 mt-5 rounded'>CARDS</div>
      )}
    </section>
  );
};

export default Home;
