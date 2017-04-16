import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="ph3 mt4">
      <h1 className="f6 fw6 ttu tracked">Page not found.</h1>
      <Link to="/" className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black">Home</Link>
    </div>
  );
};

export default NotFound;
