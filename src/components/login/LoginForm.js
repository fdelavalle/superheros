import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';
import { loginUser } from '../../services/login';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const authCtx = useContext(AuthContext);

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
        const token = await loginUser(credentials);
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
            <button type='submit' className='btn btn-primary mt-3'>
              Login
            </button>
          </Form>
        </div>
      }
    </Formik>
  );
};

export default LoginForm;
