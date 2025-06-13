import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import './login.css';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  // Email regex for basic validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
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
    try {
      const res = await fetch('http://localhost:4000/api/v1/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data?.error?.details?.[0] || 'Invalid credentials');
        setIsLoading(false);
        return;
      }
      const data = await res.json();
      login(data.user); // Save user in context
      localStorage.setItem('token', data.token); // Save JWT for future requests
      setIsLoading(false);
      navigate('/games');
    } catch {
      setError('Network error');
      setIsLoading(false);
    }
  };

  return (
    <div className="simple-login-outer">
      <div className="simple-login-container">
        {/* Back arrow icon */}
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <button
            type="button"
            onClick={() => navigate('/games')}
            className="back-arrow"
            aria-label="Back to games"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
        <div className="login-title">Log in</div>
        <p className="login-desc">Enter your credentials to access your account</p>
        <form className="simple-login-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              title="Please enter a valid email address (e.g. example@gmail.com)"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
