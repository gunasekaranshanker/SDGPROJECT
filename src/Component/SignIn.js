
import React, { useState } from 'react';
import { Element } from 'react-scroll';

const SignIn = () => {
  // State variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form after submission
    setUsername('');
    setPassword('');
  };

  return (
    <Element id="SignIn">
    <div style={{marginLeft:"20px"}}>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <label className='m-4'>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />

        {/* Password input */}
        <label className='m-4'>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />

        {/* Submit button */}
        <button type="submit" className='m-4 'style={{marginLeft:"300px"}} >Sign In</button>
      </form>
      <p style={{marginLeft:"700px"}}>Copyright &copy; FreshWater</p>
    </div>
    </Element>
  );
};

export default SignIn;

