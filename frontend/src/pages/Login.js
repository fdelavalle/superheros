import React from 'react';
import LoginForm from '../components/login/LoginForm';
import LoginText from '../components/login/LoginText';
import './Login.css';

const Login = () => {
  return (
    <section className='welcome'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 order-last order-lg-first'>
            <LoginForm />
          </div>
          <div className='col-lg-7 order-first order-lg-last'>
            <LoginText />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
