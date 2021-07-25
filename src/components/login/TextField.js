import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const errorStyles = {
    color: 'red',
    position: 'absolute',
    fontSize: '0.8rem',
  };

  return (
    <div className='mt-4 mb-4'>
      <label className='text-primary' htmlFor={field.name}>
        {label}
      </label>
      <input
        type='text'
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        autoComplete='off'
        {...field}
        {...props}
      />
      <ErrorMessage component='div' className={errorStyles} name={field.name} />
    </div>
  );
};

export default TextField;
