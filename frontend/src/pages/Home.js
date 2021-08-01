import React from 'react';
import TeamGrid from '../components/home/TeamGrid';
import Input from '../components/search/Input';
import TeamStats from '../components/home/TeamStats';

const Home = () => {
  const superherosList = [1];

  let content =
    superherosList.length > 0 ? (
      <TeamGrid />
    ) : (
      <p> You don't have any heros in your team yet</p>
    );

  return (
    <section>
      <div className='container bg-light p-5 mt-5'>
        <div className='row'>
          <div className='col-6'>
            <h1>Say welcome to your team</h1>
            <p>Find new team members</p>
            <div>
              <Input />
            </div>
          </div>
          <div className='col-6'>
            <TeamStats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
