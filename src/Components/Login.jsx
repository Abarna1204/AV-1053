import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure to create this CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Attempting login with', email, password);
    console.log('Stored credentials:', storedEmail, storedPassword);

    if (email.trim() === storedEmail && password === storedPassword) {
      setError('');
    
      alert('Login Successful!');
      setTimeout(() => {
        navigate('/Dashboard');
      }, 1000);
    } else {
      setError('Invalid Email or Password');
    }
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleLogin} className='login-form'>
        <h1>Login</h1>
        <div className='login-input'>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email' 
            className='input-field'
          /><br />
          {error && <p className="error">{error}</p>}
          <br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Password' 
            className='input-field'
          /><br />
          {error && <p className="error">{error}</p>}
          <br />
        </div>
        <Link to="/forgot-password" className='forgot-password'>Forgot Password?</Link><br />
        <button type="submit" className='login-btn'>Login</button><br />
        
        <p>--------------Or--------------</p>
        <p>Don't have an account? <Link to="/signup" className='signup-link'>Signup</Link></p>
        <button type="button" className='social-btn'>Login with Facebook</button><br /><br />
        <button type="button" className='social-btn'>Login with Google</button><br /><br />
      </form>
    </div>
  );
}

export default Login;
