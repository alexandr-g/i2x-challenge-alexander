import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div>
      <h2 className="tc f6 fw6 ttu tracked">Get Started</h2>
      <p className="tc">Login to <Link to="login" className="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib black">demo
        app</Link></p>
    </div>
  );
};

export default Home;
