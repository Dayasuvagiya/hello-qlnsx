import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
console.log({email, password})
const handleEmail = (event) => {
  setEmail(event.target.value)
}

const handleApi = () => {
  axios.post('http://api.qinsx.de/user/', { 
    username: email,
    password: 'xyz',
  })
    .then(result => {
        console.log(result.data)
        alert('Sucessfully done')
    })
    .catch(err => {
        console.log(err)
        alert('Server error')
    })
}

  return (
    <div>
      <h1>QlsnX</h1>
      Username: <input value={email} onChange={handleEmail} type='text'></input>
      <div>
        <button onClick={handleApi}>Continue</button>
      </div>
    </div>
  )
}

export default LoginPage
