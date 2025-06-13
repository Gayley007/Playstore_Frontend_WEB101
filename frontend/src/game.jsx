import React, { useState, useRef, useEffect } from "react";
import { Search, HelpCircle } from "lucide-react";
import "./game.css";
import { NavLink } from "react-router-dom"; 
import New from './components/new.jsx'; 
import Data from './components/data.jsx'; 
import Footer from './components/footer.jsx'; 

export default function Game() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <>
      {/* Header/Nav */}
      <div className="game-header">
        {/* Left section: Logo and Tabs */}
        <div className="game-left-section">
          <div className="game-google-play-logo">
            <img
              src="logo.png"
              alt="Google Play Logo"
              className="game-google-logo-icon"
            />
            <span className="game-google-logo-text">Google Play</span>
          </div>

          <div className="game-tabs">
            <NavLink
              to="/games"
              className={({ isActive }) => "game-tab" + (isActive ? " game-active" : "")}
            >
              Games
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) => "game-tab" + (isActive ? " game-active" : "")}
            >
              Apps
            </NavLink>
            <NavLink
              to="/kids"
              className={({ isActive }) => "game-tab" + (isActive ? " game-active" : "")}
            >
              Kids
            </NavLink>
          </div>
        </div>

        {/* Right section: Icons */}
        <div className="game-right-section">
          <div className="game-searchbar-container">
            {showSearch ? (
              <div className="game-searchbar-expanded">
                <Search className="game-searchbar-icon" />
                <input
                  ref={searchInputRef}
                  className="game-searchbar-input"
                  type="text"
                  placeholder="Search for apps & games"
                  onBlur={() => setShowSearch(false)}
                  onKeyDown={e => { if (e.key === "Escape") setShowSearch(false); }}
                />
              </div>
            ) : (
              <Search className="game-icon" onClick={() => setShowSearch(true)} />
            )}
          </div>
          <HelpCircle className="game-icon" />
          <NavLink to="/login">
            <button className="game-login-btn">Login</button>
          </NavLink>
        </div>
      </div>
      {/* Main Section Below Navbar */}
      <div className="game-main-content">
        <div className="game-feature-card">Phone</div>
        <div className="game-feature-card">Tablet</div>
        <div className="game-feature-card">Tv</div>
        <div className="game-feature-card">chromebook</div>
        <div className="game-feature-card">Watch</div>
        <div className="game-feature-card">Car</div>
      </div>

      {/* Calling Data pages */}
      <Data />
      {/* Calling Top Charts */}
      <New />
      {/* Calling Footer */}
      <Footer />
    </>
  );
}



