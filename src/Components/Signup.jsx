import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (createPassword.length < 8) {
      newErrors.createPassword = 'Password must be at least 8 characters';
    }

    if (createPassword !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', createPassword);

      alert('Account created successfully!');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } else {
      console.log('Validation errors:', errors);
    }
  };

  return (
    <div className='signup-container'>
      <form onSubmit={handleSignup} className='signup-form'>
        <h2>Signup</h2>
        <div className='signup-input'>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='input-field'
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <br />
          <input
            type="password"
            value={createPassword}
            onChange={(e) => setCreatePassword(e.target.value)}
            placeholder='Create password'
            className='input-field'
          />
          {errors.createPassword && <p className="error">{errors.createPassword}</p>}
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm password'
            className='input-field'
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          <br />
        </div>
        <button type="submit" className='signup-btn'>Signup</button>
        <p>Already have an account? <Link to="/login" className='login-link'>Login</Link></p>
        <p>--------------Or--------------</p>
        <button type="button" className='social-btn'>Login with Facebook</button>
        <br />
        <button type="button" className='social-btn'>Login with Google</button>
      </form>
    </div>
  );
}

export default Signup;
