import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Page2 from './page2'
import Page3 from './Page3'
import './LoginPage.css' ;


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userstatus, setUserstatus] = useState('None')
    const [emailvalid, setEmailValid] = useState(false)

console.log({email, password})

const handleEmail = (event) => {
  setEmail(event.target.value)
}

const handleApi = () => {
// POST request
if(email === '') {
  alert('Please enter email address');
  return;
}
  axios.post('http://api.qinsx.de/user', { 
    username: email,
    password: 'xyz',
  })
    // Handle the response data
    .then(result => {
        console.log(result.data)
        setUserstatus('Create')
        setPassword('xyz')
        alert('User is not exist and created redirect to insurance page')
    })
    // Handle errors
    .catch(err => {
        console.log(err)
        setUserstatus('Present')
        alert('User is exist redirect to ask password page')
    });
  } 


  return (
   <div className='MainPage'>
         {userstatus === 'None' && (
        <div>    
        <h1 className='logo'>QlsnX</h1>
          <input 
            value={email} 
            onChange={handleEmail} 
            placeholder="email"
            type='text'
            className='inputField'
            required></input>
        <div>
          <button 
            className='button' 
            onClick={handleApi}
            >Continue</button>
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



export default LoginPage;
