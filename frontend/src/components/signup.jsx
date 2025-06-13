import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import './login.css';
import { ArrowLeft } from 'lucide-react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
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
    try {
      const res = await fetch('http://localhost:4000/api/v1/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data?.error?.details?.[0] || 'Signup failed');
        setIsLoading(false);
        return;
      }
      const data = await res.json();
      login(data.user); // Save user in context
      localStorage.setItem('token', data.token); // Save JWT for future requests
      navigate('/games');
    } catch {
      setError('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="simple-login-outer">
      <div className="simple-login-container">
        {/* Back arrow icon */}
        <div style={{ width: "100%", display: "flex", alignItems: "center", marginBottom: 8 }}>
          <button
            type="button"
            onClick={() => navigate('/games')}
            className="back-arrow"
            aria-label="Back to games"
          >
            <ArrowLeft size={24} />
          </button>
        </div>
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
