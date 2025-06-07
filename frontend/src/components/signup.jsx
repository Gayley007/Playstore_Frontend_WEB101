import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password || !confirm) {
      setError('All fields are required');
      return;
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address (e.g. example@gmail.com)');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Signup successful (demo only)');
    }, 1500);
  };

  return (
    <div className="simple-login-outer">
      <div className="simple-login-container">
        <div className="login-title">Sign up</div>
        <p className="login-desc">Create your account to get started</p>
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
              placeholder="Password (min 6 chars)"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
            />
          </div>
          {error && <div className="login-error">{error}</div>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
        <div className="login-bottom-row">
          Already have an account?{' '}
          <Link to="/login" className="signup-link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
