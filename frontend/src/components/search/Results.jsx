import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CardGrid from '../card/CardGrid';

const Results = () => {
  const [herosList, setHerosList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const heroName = queryParams.get('heroName');

  const endpoint = `http://localhost:5000/getHeros/?heroName=${heroName}`;

  useEffect(() => {
    setIsLoading(true);
    const fetchHeroes = async () => {
      const response = await axios.get(endpoint);
      setIsLoading(false);
      response.data.response === 'success'
        ? setHerosList(response.data.results)
        : console.log('error');
    };

    fetchHeroes();
  }, [endpoint]);

  return (
    <section>
      <div className='container mt-5 pb-5'>
        {isLoading && (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border text-primary' role='status'></div>
          </div>
        )}
        {Boolean(herosList.length === 0) && !isLoading && (
          <p className='text-center pt-5 h1 text-light'>No results found</p>
        )}
        {Boolean(herosList.length > 0) && !isLoading && (
          <CardGrid herosList={herosList} inHome={false} />
        )}
      </div>
    </section>
  );
};

export default Results;
