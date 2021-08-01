import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <nav className='navbar navbar-dark' style={{ backgroundColor: '#081734' }}>
      <div className='container-fluid'>
        <Link to='/home' style={{ textDecoration: 'none' }}>
          <span className='navbar-brand mb-0 h1'>Superheros App</span>
        </Link>

        <button
          type='button'
          className='btn btn-outline-primary'
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
