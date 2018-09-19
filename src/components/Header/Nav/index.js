import React from 'react';
import './Nav.scss';
import Branding from './Branding';
import Menu from './Menu';

const Nav = (props) => {
  return (
    <nav>
      <Branding />
      <Menu />
    </nav>
  )
};

export default Nav;
