import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Page2 from './page2'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userstatus, setUserstatus] = useState('None')

console.log({email, password})

const handleEmail = (event) => {
  setEmail(event.target.value)
}

const handleApi = () => {
    const randomThreeDigitNumber = Math.floor(Math.random() * 900) + 100;

  axios.post('http://api.qinsx.de/user', { 
    username: email,
    password: 'xyz',
  })
    .then(result => {
        console.log(result.data)
        console.log(randomThreeDigitNumber)
        setUserstatus('Create')
        setPassword('xyz')
        alert('User is not exist and created redirect to insurance page')
    })
    .catch(err => {
        console.log(err)
        setUserstatus('Present')
        alert('User is exist redirect to ask password page')
    })
}

  return (
   <div>
         {userstatus === 'None' && (
        <div>    
        <h1>QlsnX</h1>
          <label>Username:</label><input value={email} onChange={handleEmail} type='text'></input>
        <div>
          <button onClick={handleApi}>Continue</button>
        </div>
        </div>    
      )}

    {userstatus === 'Present' && (
        <div>    
           <Page2 email={email}/>
        </div>    
      )}
    {userstatus === 'Create' && (
        <div>    
           <Page3 email={email} password={password} />
        </div>    
      )}

    </div>
  )
}



export default LoginPage
