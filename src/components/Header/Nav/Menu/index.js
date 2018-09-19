import React from 'react'
import {menu, item, link} from './Menu.scss';

const Menu = () => {



  return (
    <div className={menu}>
      <ul>
        <li className={item}>
          <a href="" class={link}>HOME</a>
        </li>
        <li className={item}>
          <a href="about.html" class={link}>ABOUT</a>
        </li>
        <li className={item}>
          <a href="work.html" class={link}>MY WORK</a>
        </li>
        <li className={item}>
          <a href="contact.html" class={link}>HOW TO REACH ME</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
