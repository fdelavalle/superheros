import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
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
      <div className='container'>
        {isLoading && <h1>LOADING ...</h1>}
        {Boolean(herosList.length > 0) && (
          <ul>
            {herosList.map((hero) => {
              return (
                <li key={hero.id}>
                  <p>{hero.name}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Search;
