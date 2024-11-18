import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loginAnimation from '../assets/lottie/login.json'; // Lottie animation for login
import loadingAnimation from '../assets/lottie/loading.json'; // Lottie animation for loading
import errorAnimation from '../assets/lottie/error.json'; // Lottie animation for error
import '../assets/css/stylee1.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Clear previous error
    setIsLoading(true); // Set loading state

    setTimeout(() => {
      setIsLoading(false); // Simulate network delay
      if (username && password) {
        if (username === 'admin') {
          if (password === 'mohanraj') {
            // Admin login
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', 'ADMIN');
            navigate('/home');
          } else {
            // Invalid password for admin
            setError('Invalid password for admin.');
          }
        } else {
          // Regular user login
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('role', 'USER');
          navigate('/home');
        }
      } else {
        // Empty fields
        setError('Please enter both username and password.');
      }
    }, 1500); // Simulate network delay
  };

  return (
    <div className="login">
      <div className="wrapper">
        {/* Login Animation */}
        <Lottie
          animationData={loginAnimation}
          loop
          className="w-24 h-24 mx-auto mb-4"
        />
        
        <form onSubmit={handleLogin} className="space-y-6">
          <h1 className="text-3xl font-bold text-center text-white animate__animated animate__fadeIn">
            Login
          </h1>
          
          {/* Display Error Message */}
          {error && (
            <div className="error-message flex items-center space-x-2 text-red-500 text-center">
              <Lottie
                animationData={errorAnimation}
                loop={false}
                className="w-6 h-6"
              />
              <p>{error}</p>
            </div>
          )}

          {/* Username Input */}
          <div className="input-box relative">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>

          {/* Password Input */}
          <div className="input-box relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>

          {/* Submit Button with Loading Animation */}
          <button
            type="submit"
            className="btn w-full py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none transition-all duration-300 transform hover:scale-105"
          >
            {isLoading ? (
              <Lottie
                animationData={loadingAnimation}
                loop
                className="w-8 h-8 mx-auto"
              />
            ) : (
              'Login'
            )}
          </button>

          {/* Register Link */}
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
