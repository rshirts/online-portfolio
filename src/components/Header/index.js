import React from 'react';
import './Header.scss';
import MenuButton from './MenuButton';
import Nav from './Nav'

const Header = (props) => {
  return (
    <header>
      <MenuButton showMenu={props.showMenu} click={props.click} />
      <Nav showMenu={props.showMenu} click={props.click} />
    </header>
  )
};

export default Header;
