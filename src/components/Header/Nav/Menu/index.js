import React from 'react'
import {menu, item, link, show} from './Menu.scss';

const Menu = (props) => {

  const attachedMenuClasses = props.showMenu ? [menu, show] : [menu]

  return (
    <div className={attachedMenuClasses.join(' ')}>
      <ul>
        <li className={item}>
          <a href="" className={link}>HOME</a>
        </li>
        <li className={item}>
          <a href="about.html" className={link}>ABOUT</a>
        </li>
        <li className={item}>
          <a href="work.html" className={link}>MY WORK</a>
        </li>
        <li className={item}>
          <a href="contact.html" className={link}>HOW TO REACH ME</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
