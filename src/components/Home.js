import React, { useContext } from 'react';
import AuthContext from '../store/auth-context';

const Home = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      HOME
      <button
        onClick={() => {
          authCtx.logout();
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Home;
