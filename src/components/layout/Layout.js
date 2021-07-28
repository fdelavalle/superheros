import React from 'react';

import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
