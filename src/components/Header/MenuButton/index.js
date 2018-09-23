import React from 'react'
import {line, button, close} from './MenuButton.scss'

const MenuButton = (props) => {

  //Configure Menu to be open or closed.
  const attachedClasses = props.showNavMenu ? [button, close] : [button];

  return (
    <div onClick={props.click} className={attachedClasses.join(' ')}>
      <div className={line}></div>
      <div className={line}></div>
      <div className={line}></div>
    </div>
  )
}

export default MenuButton
