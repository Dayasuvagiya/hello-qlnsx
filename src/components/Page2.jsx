// Page2.jsx
import React, { useState } from 'react';
import Page3 from './Page3';

const Page2 = (props) => {
  const [password, setPassword] = useState('');
  const [userSubmittedPassword, setUserSubmittedPassword] = useState(false);

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmitPassword = () => {
    setUserSubmittedPassword(true);
  };

  return (
    <div>
      {userSubmittedPassword === false && (
        <div>
          <h1 className='logo'>QlsnX</h1>
          <input value={props.email} className='inputField' type='text' placeholder='email' />
          <input value={password} onChange={handlePassword} className='inputField' type='password' placeholder='password' required />
          <div>
            <button className='button' onClick={handleSubmitPassword}>Continue</button>
          </div>
        </div>
      )}

          {userSubmittedPassword && <Page3 email={props.email} password={password} />}
    </div>
      );
}

      export default Page2;
