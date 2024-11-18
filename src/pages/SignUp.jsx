import React, { useState } from 'react';
import '../assets/css/SignUp.css'; // Ensure this path is correct
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setMessage('Account created successfully! Redirecting to login...');
    setError('');

    setTimeout(() => {
      navigate('/login'); // Redirect to login after 2 seconds
    }, 2000);
  };

  return (
    <div className="body">
      <div className="Wrapper">
        <p style={{ fontSize: 'xx-large', marginLeft: '147px' }}>Sign Up</p>
        <div>
          <p className="p-design Hello">Hello Customer</p>
          <p className="p-design Hello1">Welcome to Our Store</p>
          <p className="p-design">
            "Where playtime dreams come true! Find the perfect toy for every age
            and stage at Our Store!"
          </p>
        </div>
        <form
          onSubmit={handleSignUp}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input
            type="text"
            placeholder="Name"
            className="search search-image"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="search"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="search"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" style={{ marginLeft: '60px' }} required />
            <p style={{ marginLeft: '10px', fontSize: '15px' }}>
              I read and agree to Terms & Conditions
            </p>
          </div>
          <button className="buttoon" type="submit">
            CREATE ACCOUNT
          </button>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
        <p style={{ marginLeft: '70px', marginTop: '10px' }}>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;