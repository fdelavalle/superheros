import React, { useContext } from 'react';
import Input from '../components/search/Input';
import TeamStats from '../components/home/TeamStats';
import CardGrid from '../components/card/CardGrid';
import TeamMembersContext from '../store/teamMembers-context';

const Home = () => {
  const { heros } = useContext(TeamMembersContext);

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
          <div>
            {heros.length > 0 ? (
              <CardGrid inHome={true} herosList={heros} />
            ) : (
              <p className='mt-5'>You don't have any heros in your team yet</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
