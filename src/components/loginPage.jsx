import React from 'react'
import { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const handleEmail = (event) => {
  setEmail(event.target.value)
}

const handlePassword = (event) => {
    setPassword(event.target.value)
}

  return (
    <div>
      <h1>QlsnX</h1>
      <label>Email:</label>
      <input value={email} onChange={handleEmail} type='text'></input>
      <label>Password:</label>
      <input value={email} onChange={handleEmail} type='text'></input>
      <div>
        <button>Continue</button>
      </div>
    </div>
  )
}

export default LoginPage
