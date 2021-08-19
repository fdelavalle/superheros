import React, { useContext } from 'react';
import TeamMembersContext from '../../store/teamMembers-context';

const TeamStats = () => {
  const contexto = useContext(TeamMembersContext);

  return (
    <div className='container row'>
      STATS
      <p>BAD HEROS COUNTER: {contexto.badHerosCounter}</p>
      <p>GOOD HEROS COUNTER: {contexto.goodHerosCounter}</p>
      <p>TEAM FULL OF BAD HEROS: {contexto.teamFullOfBadHeros.toString()}</p>
      <p>TEAM FULL OF GOOD HEROS: {contexto.teamFullOfGoodHeros.toString()}</p>
    </div>
  );
};

export default TeamStats;
