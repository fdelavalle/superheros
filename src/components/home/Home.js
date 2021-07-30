import React from 'react';
import EmptyTeam from './EmptyTeam';
import TeamGrid from './TeamGrid';
import SearchHero from '../search/SearchHero';
import './Home.css';

const Home = () => {
  const superherosList = [];

  let content = superherosList.length > 0 ? <TeamGrid /> : <EmptyTeam />;

  return (
    <section
      style={{ height: '100vh' }}
      className='d-flex mt-5 justify-content-center'
    >
      <div
        className='d-flex flex-column align-items-center alert alert-primary w-50 h-50 p-3'
        role='alert'
      >
        {content}
      </div>
    </section>
  );
};

export default Home;
