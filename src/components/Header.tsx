import React from 'react';
import '../styles/header.scss';

const Header = () => {
  return (
    <div className="app-header">
      <div className="header-contents">
        <div className="logo">stockify</div>
        <button className="login">login</button>
      </div>
    </div>
  );
}

export default Header;

