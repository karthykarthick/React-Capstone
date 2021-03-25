import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="content-container">
      <Link
        className="header__link"
        to="/"
      >
        <h1 className="header__title">Meals Book</h1>
      </Link>
    </div>
  </div>
);

export default Header;
