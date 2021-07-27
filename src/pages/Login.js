///ç7/*/7/7/878*9889-9848//*/*import React from 'react';
import LoginForm from '../components/login/LoginForm';
import LoginText from '../components/login/LoginText';
import './Login.css';

const Login = () => {
  return (
    <section className='welcome'>
      <div className='container h-50'>
        <div className='row'>
          <div className='col-5'>
            <LoginForm />
          </div>
          <div className='col-7'>
            <LoginText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
