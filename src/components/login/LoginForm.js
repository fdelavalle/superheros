import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import { loginUser, checkTokenValidity } from '../../services/login';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';
import Alert from './Alert';

const LoginForm = () => {
  const authCtx = useContext(AuthContext);
  const [tokenValidity, setTokenValidity] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const validate = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={async (credentials) => {
        setIsLoading(true);
        const token = await loginUser(credentials);
        const isTokenValid = checkTokenValidity(token);
        setIsLoading(false);
        if (!isTokenValid) {
          setTokenValidity(false);
          return;
        }
        authCtx.login(token);
        history.replace('/home');
      }}
    >
      {
        <div>
          <h1 className='text-primary'>Sign In</h1>
          <Form>
            <TextField label='Email' name='email' type='email' />
            <TextField label='Password' name='password' type='password' />
            {!isLoading && (
              <button type='submit' className='btn btn-primary mt-3'>
                Login
              </button>
            )}

            {isLoading && (
              <div className='text-center'>
                <div
                  className='spinner-border text-primary'
                  role='status'
                ></div>
              </div>
            )}

            {!tokenValidity && !isLoading && <Alert />}
          </Form>
        </div>
      }
    </Formik>
  );
};

export default LoginForm;
