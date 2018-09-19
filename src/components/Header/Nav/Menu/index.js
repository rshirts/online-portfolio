import React from 'react'
import {menu, item, link, show, showItem} from './Menu.scss';
import { navlink } from 'react-router-dom';

const Menu = (props) => {

  const attachedMenuClasses = props.showMenu ? [menu, show] : [menu];
  const attachedItemClasses = props.showMenu ? [item, showItem] : [item];

  return (
    <div className={attachedMenuClasses.join(' ')}>
      <ul>
        <li className={attachedItemClasses.join(' ')}>
          <a href="" className={link}>HOME</a>
        </li>
        <li className={attachedItemClasses.join(' ')}>
          <a href="about.html" className={link}>ABOUT</a>
        </li>
        <li className={attachedItemClasses.join(' ')}>
          <a href="work.html" className={link}>MY WORK</a>
        </li>
        <li className={attachedItemClasses.join(' ')}>
          <a href="contact.html" className={link}>HOW TO REACH ME</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
