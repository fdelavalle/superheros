import React, { useEffect, useState } from 'react';

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <React.Fragment>
      {showAlert && (
        <div className='text-center mt-5 '>
          <div className='alert alert-danger' role='alert'>
            You have entered an invalid username or password
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Alert;
