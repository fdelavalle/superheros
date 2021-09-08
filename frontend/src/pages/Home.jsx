import React, { useContext } from 'react';
import Input from '../components/search/Input';
import TeamStats from '../components/home/TeamStats';
import CardGrid from '../components/card/CardGrid';
import TeamMembersContext from '../store/teamMembers-context';

const Home = () => {
  const { heros } = useContext(TeamMembersContext);

  return (
    <section>
      <div className='container bg-light rounded p-3 mt-5'>
        <div className='row'>
          <div className='col-lg-5 p-5'>
            <h1>Your superhero team</h1>
            <div>
              <Input />
            </div>
          </div>
          <div className='col-lg-7 team-stats'>
            <TeamStats />
          </div>
          <div className='mt-3'>
            {heros.length > 0 ? (
              <CardGrid inHome={true} herosList={heros} />
            ) : (
              <React.Fragment>
                <h4 className='mt-5 text-center'>Your Team is empty</h4>
                <p className='text-center'>
                  Add heroes to your Team to form the best team of superheroes
                  ever!
                </p>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
