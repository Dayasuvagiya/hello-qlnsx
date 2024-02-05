import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page3 = (props) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const username = props.email;
    const password = props.password;

    // credentials for basic authentication
    const basicAuth = btoa(`${username}:${password}`);

    // GET request
    axios.get('http://api.qinsx.de/insurance', {
      headers: {
        Authorization: `Basic ${basicAuth}`,
      },
    })
      .then(response => {
        // Handle the response data
        console.log(response.data);
        setApiData(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, [props.email, props.password]);


  return (
    <div className='insurancePage'>
      <h1>QlsnX</h1>
      <h2>API Data:</h2>
      {apiData ? (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      ) : (
        <p>Refresh page and try again</p>
      )}
    </div>
  );
};

export default Page3;
