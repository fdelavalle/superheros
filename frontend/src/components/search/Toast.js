import React from 'react';

const Toast = () => {
  return (
    <div className='position-fixed bottom-0 end-0 p-5' style={{ zIndex: '11' }}>
      <div className='toast-header'>
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='toast'
          aria-label='Close'
        ></button>
      </div>
      <div className='toast-body'>Hello, world! This is a toast message.</div>
    </div>
  );
};

export default Toast;
