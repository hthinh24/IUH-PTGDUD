import React from 'react'
import './Form.css'

const Form = (props) => {
  return (
    <div className={props.type}>
        <div>x</div>
        <div>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <button>Login</button>
        </div>
    </div>
  )
}

export default Form