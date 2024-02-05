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
      <h1>QlsnX</h1>
      Username: <input value={props.email} readOnly type='text' />
      Password: <input value={password} onChange={handlePassword} type='password' />
      <div>
        <button onClick={handleSubmitPassword}>Continue</button>
      </div>
      {userSubmittedPassword && <Page3 email={props.email} password={password} />}
    </div>
  );
}

export default Page2;
