import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <button className={props.style}>
        Click me
    </button>
  )
}

export default Button