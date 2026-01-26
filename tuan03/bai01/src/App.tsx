import React, { useState } from 'react'
import type { Form } from './types/form'

const App = () => {
  
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    age: 10,
  })

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

    console.log(form)
  } 

  return (
    <div>
      <div>
      <h3>Name</h3>
      <input onChange={(e) => handleOnChange(e)} type="text" name="name" id="" />
    </div>
    <div>
      <h3>email</h3>
      <input onChange={(e) => handleOnChange(e)} type="text" name="email" id="" />
    </div>
    <div>
      <h3>age</h3>
      <input onChange={(e) => handleOnChange(e)} type="text" name="age" id="" />
    </div>
    </div>
  )
}

export default App