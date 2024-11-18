import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/stylee1.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Simple frontend validation for demo purposes
    if (username && password) {
      // Check if the user is logging in as an admin
      if (username === 'admin') {
        // Admin-specific password validation
        if (password === 'mohanraj') {
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('role', 'ADMIN');
          navigate('/home'); // Redirect to Home page
        } else {
          setError('Invalid password for admin.');
        }
      } else {
        // Users can log in with any username
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', 'USER');
        navigate('/home'); // Redirect to Home page
      }
    } else {
      setError('Please enter both username and password.');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Forgot Password feature is currently unavailable.');
  };

  return (
    <div className="login">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          {error && <p className="error-message">{error}</p>}
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <button className="link-button" onClick={handleForgotPassword}>
              Forgot Password?
            </button>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
