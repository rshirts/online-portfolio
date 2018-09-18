import React from 'react';
import './Header.scss';
import MenuButton from './MenuButton';
import Nav from './Nav'

const Header = (props) => {
  return (
    <header>
      <MenuButton />
      <Nav />
    </header>
  )
};

export default Header;
