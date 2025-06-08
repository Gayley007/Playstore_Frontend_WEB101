import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Email regex for basic validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address (e.g. example@gmail.com)');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful (demo only)');
    }, 1500);
  };

  return (
    <div className="simple-login-outer">
      <div className="simple-login-container">
        <div className="login-title">Log in</div>
        <p className="login-desc">Enter your credentials to access your account</p>
        <form className="simple-login-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address (e.g. example@gmail.com)"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="login-error">{error}</div>}
          <div className="login-forgot">
            <Link to="/reset-password" className="forgot-link">
              Forgot password?
            </Link>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        <div className="login-bottom-row">
          Don't have an account?{' '}
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
