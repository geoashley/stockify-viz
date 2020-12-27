import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

function Header() {
  return (
    <div className="app-header">
      <div className="header-contents">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">stockify</div>
        </Link>
        <Link to="/login"><button className="login">login</button></Link>
      </div>
    </div>
  );
}

export default Header;

