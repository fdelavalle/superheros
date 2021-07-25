import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const LoginForm = () => {
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
      onSubmit={(credentials) => {
        console.log(credentials);
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
