import React from 'react';
import './Nav.scss';
import Branding from './Branding';
import Menu from './Menu';
import {show, hide} from './Nav.scss'

const Nav = (props) => {

  return (
    <nav className={props.showMenu ? show : hide} onClick={props.click}>
      <Branding showMenu={props.showMenu} />
      <Menu showMenu={props.showMenu} />
    </nav>
  )
};

export default Nav;
