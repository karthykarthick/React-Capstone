import React from 'react';
import loader from '../assets/images/loader.gif';
import './Loader.css';

const Loader = () => (
  <div className="loader-container">
    <img
      alt="Loader gif"
      src={loader}
    />
  </div>
);

export default Loader;
