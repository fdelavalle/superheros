import React, { useContext } from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import TeamMembersContext from '../../store/teamMembers-context';

const TeamStats = () => {
  const { teamSummary } = useContext(TeamMembersContext);

  return (
    <div style={{ backgroundColor: '#1a2950' }} className='container rounded'>
      <div className='row pt-5 pb-5'>
        <div className='col'>
          <ul style={{ color: '#abdbe3' }} className='list-unstyled'>
            <li className='pt-1'>
              Team Intelligence:{' '}
              {teamSummary[0] !== undefined ? teamSummary[0].value : 0}
            </li>
            <li className='pt-1'>
              Team Combat:{' '}
              {teamSummary[0] !== undefined ? teamSummary[5].value : 0}
            </li>
            <li className='pt-1'>
              Team Strength:{' '}
              {teamSummary[0] !== undefined ? teamSummary[1].value : 0}
            </li>
            <li className='pt-1'>
              Team Power:{' '}
              {teamSummary[0] !== undefined ? teamSummary[4].value : 0}
            </li>
            <li className='pt-1'>
              Team Speed:{' '}
              {teamSummary[0] !== undefined ? teamSummary[2].value : 0}
            </li>
            <li className='pt-1'>
              Team Durability:{' '}
              {teamSummary[0] !== undefined ? teamSummary[3].value : 0}
            </li>
            <li className='pt-1'>Strongest Powerstat:</li>
            <li className='pt-1'>Average Weight:</li>
            <li className='pt-1'>Average Height:</li>
          </ul>
        </div>
        <div className='col'>
          <ResponsiveContainer width='100%' height='100%'>
            <RadarChart outerRadius={88} cx={140} cy={115} data={teamSummary}>
              <PolarGrid stroke='#abdbe3' />
              <PolarAngleAxis dataKey='powerstat' stroke='#abdbe3' />
              <PolarRadiusAxis angle={30} domain={[0, 150]} stroke='#abdbe3' />
              <Radar
                dataKey='value'
                stroke='#8884d8'
                fill='#8884d8'
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
