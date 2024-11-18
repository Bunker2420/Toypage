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

    if (username && password) {
      if (username === 'admin') {
        if (password === 'mohanraj') {
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('role', 'ADMIN');
          navigate('/home');
        } else {
          setError('Invalid password for admin.');
        }
      } else {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', 'USER');
        navigate('/home');
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
        <form onSubmit={handleLogin} className="space-y-6">
          <h1 className="text-3xl font-bold text-center text-white animate__animated animate__fadeIn">Login</h1>
          {error && <p className="error-message text-red-500 text-center animate__animated animate__shakeX">{error}</p>}

          <div className="input-box relative">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
            <i className="bx bxs-user absolute left-3 top-3 text-gray-400"></i>
          </div>

          <div className="input-box relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
            <i className="bx bxs-lock-alt absolute left-3 top-3 text-gray-400"></i>
          </div>

          <div className="remember-forget flex justify-between items-center">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="focus:ring-indigo-500" />
              <span>Remember me</span>
            </label>
            <button
              className="link-button text-white hover:text-indigo-800 transition-all duration-300"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="btn w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>

          <div className="register-link text-center">
            <p className="text-white">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-white hover:text-indigo-800 transition-all duration-300"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
