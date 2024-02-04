import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Page3= (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
console.log({email, password})

const handleEmail = (event) => {
  setEmail(event.target.value)
}
const handlePassword = (event) => {
    setPassword(event.target.value)
}

  return (
    <div>
      <h1>QlsnX</h1>
      Username: <input value={email} onChange={handleEmail} type='text'></input>
      Password: <input value={password} onChange={handlePassword} type='text'></input>
      <div>
        <button>Continue</button>
      </div>
    </div>
  )
}

export default Page3 ;
