import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Search, HelpCircle, Share2, Bookmark } from "lucide-react";
import "./GameDetailPage.css";

const GameDetailPage = () => {
  // State for search bar expansion
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();

  // Focus the search input when expanded
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  // Handler for "See all reviews" button (can be expanded to navigate or open modal)
  const handleSeeAllReviews = () => {
    window.alert("Show all reviews (not implemented)");
  };

  // Download handler for "Install" button
  const handleInstall = () => {
    const fileUrl = "/block-blast.apk"; 
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Block-Blast.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Header/Nav */}
      <div className="game-header">
        {/* Left section: Logo and Tabs */}
        <div className="game-left-section">
          <div className="game-google-play-logo">
            <img
              src="/logo.png" 
              alt="Google Play Logo"
              className="game-google-logo-icon"
            />
            <span className="game-google-logo-text">Google Play</span>
          </div>
          <div className="game-tabs">
            <NavLink to="/games" className="game-tab" activeClassName="game-active">Games</NavLink>
            <NavLink to="/apps" className="game-tab" activeClassName="game-active">Apps</NavLink>
            <NavLink to="/kids" className="game-tab" activeClassName="game-active">Kids</NavLink>
          </div>
        </div>
        {/* Right section: Search, Help, Profile */}
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
          <div className="game-profile">S</div>
        </div>
      </div>

      {/* Main Game Detail Section */}
      <div className="game-detail-page">
        <div className="container">
          {/* Game header row: Info and App Icon */}
          <div className="game-header-main-row">
            {/* Left: Game Info */}
            <div className="game-detail-info">
              <h1 className="game-title">
                Block Blast!
              </h1>
              <div className="developer-info">
                <span className="developer-name">HungryStudio</span>
                <span className="ads-notice">Contains ads</span>
              </div>
              <div className="game-detail-stats-row">
                {/* Rating */}
                <div className="game-detail-stat">
                  <div className="game-detail-stat-value">
                    4.8<span style={{ fontSize: 18, color: "#202124" }}>★</span>
                  </div>
                  <div className="game-detail-stat-label">2.01M reviews</div>
                </div>
                {/* Downloads */}
                <div className="game-detail-stat">
                  <div className="game-detail-stat-value">500M+</div>
                  <div className="game-detail-stat-label">Downloads</div>
                </div>
                {/* Age */}
                <div className="game-detail-stat" style={{ minWidth: 80, marginRight: 0, paddingRight: 0 }}>
                  <div className="game-detail-stat-value">
                    <span className="game-detail-age-badge">3+</span>
                  </div>
                  <div className="game-detail-stat-label">Rated for 3+</div>
                </div>
              </div>
              {/* Install/Share/Wishlist Buttons */}
              <div className="game-detail-actions">
                <button className="game-detail-install-btn" onClick={handleInstall}>
                  Install
                </button>
                <button className="game-detail-secondary-btn">
                  <Share2 size={20} />
                  Share
                </button>
                <button className="game-detail-secondary-btn">
                  <Bookmark size={20} />
                  Add to wishlist
                </button>
              </div>
            </div>
            {/* Right: App Icon */}
            <div className="game-detail-app-icon">
              <img
                src="/game1-icon.jpg"
                alt="Block Blast! Game Icon"
              />
            </div>
          </div>
          {/* About this game section */}
          <div className="about-section">
            <div className="about-section-header">
              <h2 className="about-section-title">About this game</h2>
              <span className="about-section-arrow">&rarr;</span>
            </div>
            <div className="about-section-desc">
              Block Blast is a colorful, fun, and highly addictive offline block puzzle game that combines the best of casual gameplay and brain training. Designed for everyone, this relaxing game is perfect whether you're a fan of logic puzzles, match 3 challenges, or just want a few minutes of simple fun.
            </div>
            <div className="about-section-desc2">
              Drag and drop blocks on an 8x8 board to fill rows or columns and clear them for points. No timers, no pressure—just satisfying strategy. Every move is a test of your IQ, spatial thinking, and problem-solving skills, making it a true brain teaser that helps you…
            </div>
            <div className="about-section-updated-label">
              Updated on
            </div>
            <div className="about-section-updated-date">
              Jun 7, 2025
            </div>
            <div className="about-section-tags">
              <span className="about-section-tag">#1 top free puzzle</span>
              <span className="about-section-tag">Puzzle</span>
              <span className="about-section-tag">Block</span>
              <span className="about-section-tag">Casual</span>
              <span className="about-section-tag">Single player</span>
              <span className="about-section-tag">Stylized</span>
              <span className="about-section-tag">Offline</span>
            </div>
          </div>
          {/* Ratings and reviews section */}
          <div className="ratings-reviews-section">
            {/* Ratings summary */}
            <div className="ratings-reviews-header">
              <h2 className="ratings-reviews-title">Ratings and reviews</h2>
              <span className="ratings-reviews-arrow">&rarr;</span>
            </div>
            {/* Ratings breakdown */}
            <div className="ratings-reviews-content">
              {/* Left: Score and stars */}
              <div className="ratings-reviews-score">
                <div className="ratings-reviews-score-value">4.8</div>
                <div className="ratings-reviews-score-stars">
                  <span>★★★★★</span>
                </div>
                <div className="ratings-reviews-score-count">1.89M reviews</div>
              </div>
              {/* Middle: Bar chart */}
              <div className="ratings-reviews-bars">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="ratings-reviews-bar-row">
                    <span className="ratings-reviews-bar-label">{star}</span>
                    <div className="ratings-reviews-bar-bg">
                      <div
                        className="ratings-reviews-bar-fill"
                        style={{
                          width:
                            star === 5 ? "90%" :
                            star === 4 ? "15%" :
                            star === 3 ? "3%" :
                            star === 2 ? "1%" :
                            "2%"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Example review card 1 */}
            <div className="ratings-reviews-single">
              <div className="ratings-reviews-single-header">
                <img src="/user1.jpg" alt="" className="ratings-reviews-single-avatar" />
                <div>
                  <div className="ratings-reviews-single-user">UserA</div>
                  <div className="ratings-reviews-single-stars">
                    ★★★★★ <span className="ratings-reviews-single-date">April 5, 2025</span>
                  </div>
                </div>
              </div>
              <div className="ratings-reviews-single-text">
                I really enjoy playing Block Blast—it's fun<span style={{ color: "#fbbc04" }}>★★★★★</span>!
              </div>
              <div className="ratings-reviews-single-helpful">
                10,640 people found this review helpful
              </div>
              <div className="ratings-reviews-single-actions">
                <span className="ratings-reviews-single-action">Yes</span>
                <span className="ratings-reviews-single-action">No</span>
              </div>
            </div>
            {/* Example review card 2 */}
            <div className="ratings-reviews-single">
              <div className="ratings-reviews-single-header">
                <img src="/user2.jpg" alt="" className="ratings-reviews-single-avatar" />
                <div>
                  <div className="ratings-reviews-single-user">UserB</div>
                  <div className="ratings-reviews-single-stars">
                    ★★★★ <span className="ratings-reviews-single-date">April 2, 2025</span>
                  </div>
                </div>
              </div>
              <div className="ratings-reviews-single-text">
                this game is good on its on
              </div>
              <div className="ratings-reviews-single-helpful">
                9,309 people found this review helpful
              </div>
              <div className="ratings-reviews-single-actions">
                <span className="ratings-reviews-single-action">Yes</span>
                <span className="ratings-reviews-single-action">No</span>
              </div>
            </div>
            {/* Example review card 3 */}
            <div className="ratings-reviews-single">
              <div className="ratings-reviews-single-header">
                <img src="/user3.jpg" alt="" className="ratings-reviews-single-avatar" />
                <div>
                  <div className="ratings-reviews-single-user">User3</div>
                  <div className="ratings-reviews-single-stars">
                    ★★ <span className="ratings-reviews-single-date">April 1, 2025</span>
                  </div>
                </div>
              </div>
              <div className="ratings-reviews-single-text">
                It has so many ads
              </div>
              <div className="ratings-reviews-single-helpful">
                10,640 people found this review helpful
              </div>
              <div className="ratings-reviews-single-actions">
                <span className="ratings-reviews-single-action">Yes</span>
                <span className="ratings-reviews-single-action">No</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetailPage;