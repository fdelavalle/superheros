import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const superherosList = [];

  return (
    <section
      style={{ height: '100vh' }}
      className='d-flex align-items-center justify-content-center'
    >
      <div
        class='d-flex flex-column align-items-center alert alert-primary justify-content-start w-50 h-50 p-3'
        role='alert'
      >
        <p className='fs-3 text-center text-secondary mt-5'>
          Your team is empty, you can start adding superheros here
        </p>
        <Link className='p-6 text-center'>
          <img
            alt='add a hero to the team icon'
            src='https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-add-icon.png'
            className='w-25'
          ></img>
        </Link>
      </div>

      {superherosList.length > 0 && (
        <div className='container bg-primary h-75 mt-5 rounded'>CARDS</div>
      )}
    </section>
  );
};

export default Home;
