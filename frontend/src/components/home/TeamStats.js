import React, { useContext } from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts';
import TeamMembersContext from '../../store/teamMembers-context';

const TeamStats = () => {
  const { teamSummary, stats, heros } = useContext(TeamMembersContext);

  const data = [...teamSummary];
  data.pop();

  return (
    <div style={{ backgroundColor: '#1a2950' }} className='container rounded'>
      <div className='row pt-5 pb-5'>
        <div className='col'>
          <h4 className='text-white text-center mb-3'>Team</h4>
          <ul style={{ color: '#f8f9fa' }} className='list-unstyled'>
            <li className='pt-1'>
              Intelligence:{' '}
              {teamSummary[0] !== undefined ? teamSummary[0].value : 0}
            </li>
            <li className='pt-1'>
              Combat: {teamSummary[5] !== undefined ? teamSummary[5].value : 0}
            </li>
            <li className='pt-1'>
              Strength:{' '}
              {teamSummary[1] !== undefined ? teamSummary[1].value : 0}
            </li>
            <li className='pt-1'>
              Power: {teamSummary[4] !== undefined ? teamSummary[4].value : 0}
            </li>
            <li className='pt-1'>
              Speed: {teamSummary[2] !== undefined ? teamSummary[2].value : 0}
            </li>
            <li className='pt-1'>
              Durability:{' '}
              {teamSummary[3] !== undefined ? teamSummary[3].value : 0}
            </li>
            <li className='pt-1'>
              Strongest Powerstat:{' '}
              {teamSummary[6] !== undefined ? teamSummary[6].strongestStat : ''}
            </li>
            <li className='pt-1'>
              Average Weight:{' '}
              {heros.length === 0
                ? 0
                : (stats.weight / heros.length).toFixed(2)}{' '}
              kg
            </li>
            <li className='pt-1'>
              Average Height:{' '}
              {heros.length === 0
                ? 0
                : (stats.height / heros.length).toFixed(2)}{' '}
              cm
            </li>
          </ul>
        </div>
        <div className='col'>
          <ResponsiveContainer width='100%' height='100%'>
            <RadarChart outerRadius={88} cx={140} cy={115} data={data}>
              <PolarGrid stroke='#f8f9fa' />
              <PolarAngleAxis dataKey='powerstat' stroke='#f8f9fa' />
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
