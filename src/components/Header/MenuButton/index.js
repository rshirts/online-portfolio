import React from 'react'
import {Line, Button} from './MenuButton.scss'

const MenuButton = (props) => {
  return (
    <div className={Button}>
      <div className={Line}></div>
      <div className={Line}></div>
      <div className={Line}></div>
    </div>
  )
}

export default MenuButton
