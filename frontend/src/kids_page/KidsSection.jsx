import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import "../kids_page/KidsSection.css"; 
import { Search, HelpCircle } from "lucide-react";

const recommended = [
  { title: 'LEGO® Friends: Heartlake Rush', rating: 4.2, img: 'recommend1.png' },
  { title: 'CoComelon: Learn ABCs and 123s', rating: 4.3, img: 'recommend2.png' },
  { title: 'Tizi Dolls Anime Kawaii World', rating: 4.2, img: 'recommend3.png' },
  { title: 'Bubbu 2 - My pet kingdom', rating: 4.4, img: 'recommend4.png' },
  { title: 'Animal Hospital games for kids', rating: 3.9, img: 'recommend5.png' },
  { title: 'Hello Kitty: Beauty Salon', rating: 4.6, img: 'recommend6.png' },
  { title: 'Aha Makeover World: Salon Game', rating: 4.2, img: 'recommend7.png' },
  { title: 'Pizza maker Kids Cooking games', rating: 3.8, img: 'recommend8.png' }
];

const newGames = [
  { title: 'Vlinder Gacha dress up for kids', rating: 4.6, img: 'newgame1.png' },
  { title: 'strawberry shortcake Bake shop', rating: 4.4, img: 'newgame2.png' },
  { title: 'Bubbu and Mimmi World', rating: 4.4, img: 'newgame3.png' },
  { title: 'Yoya: Busy life World', rating: 3.8, img: 'newgame4.png' },
  { title: 'Barbie Dreamhouse Adventure', rating: 4.0, img: 'newgame5.png' },
  { title: 'hello Kitty Lunchbox', rating: 4.1, img: 'newgame6.png' },
  { title: 'Toca Boca world', rating: 4.2, img: 'newgame7.png' },
  { title: 'Sushi Maker kids cooking game', rating: 4.3, img: 'newgame8.png' }
];

const simulationGames = [
  { title: 'Miga Town: My world', rating: 4.1, img: 'simulation1.png' },
  { title: 'Vlogger Go Viral: Tuber life', rating: 4.5, img: 'simulation2.png' },
  { title: 'Avatar World', rating: 4.6, img: 'simulation3.png' },
  { title: 'LOL Surprise! OMG Fashion Club', rating: 3.8, img: 'simulation4.png' },
  { title: 'Tizi Modern Home & Room Design', rating: 4.4, img: 'simulation5.png' },
  { title: 'Nail Art Salon', rating: 4.2, img: 'simulation6.png' },
  { title: 'Baby Pandas fashion Dressup', rating: 4.0, img: 'simulation7.png' },
  { title: 'Burger Maker Kids Cooking Game', rating: 4.4, img: 'simulation8.png' }
];

const Footer = () => {
  return (
    <footer className="kids-footer">
      <div className="kids-footer-columns">
        <div className="kids-footer-column">
          <h3>Google Play</h3>
          <ul>
            <li>Play Pass</li>
            <li>Play Points</li>
            <li>Gift cards</li>
            <li>Redeem</li>
            <li>Refund policy</li>
          </ul>
        </div>

        <div className="kids-footer-column">
          <h3>Kids & family</h3>
          <ul>
            <li>Parent Guide</li>
            <li>Family sharing</li>
          </ul>
        </div>
      </div>

      <div className="kids-footer-bottom">
        <div className="kids-footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy</a>
          <a href="#">About Google Play</a>
          <a href="#">Developers</a>
          <a href="#">Google Store</a>
        </div>
        <div className="kids-footer-language">Bhutan (English)</div>
      </div>
    </footer>
  );
};

export default function KidsSection() {
  const [activeButton, setActiveButton] = useState("All ages up to 12");

  const handleButtonClick = (ageGroup) => {
    setActiveButton(ageGroup);
  };

  return (
    <>
      {/* Header/Nav */}
      <div className="kids-header">
        {/* Left section: Logo and Tabs */}
        <div className="kids-left-section">
          <div className="kids-google-play-logo">
            <img
              src="logo.png"
              alt="Google Play Logo"
              className="kids-google-logo-icon"
            />
            <span className="kids-google-logo-text">Google Play</span>
          </div>

          <div className="kids-tabs">
            <NavLink to="/games" className="kids-tab" activeClassName="kids-active">Games</NavLink>
            <NavLink to="/apps" className="kids-tab" activeClassName="kids-active">Apps</NavLink>
            <NavLink to="/kids" className="kids-tab" activeClassName="kids-active">Kids</NavLink>
          </div>
        </div>

        {/* Right section: Icons */}
        <div className="kids-right-section">
          <Search className="kids-icon" />
          <HelpCircle className="kids-icon" />
          <div className="kids-profile">S</div>
        </div>
      </div>

      {/* Main Section */}
      <div className="kids-Main-section">
        <img src="kidsmainsection.png"alt="image1" className="kids-main-section"/>
      </div>

      {/* Age Filter Section */}
      <div className="kids-age-filter-section">
        <h2 className="kids-age-filter-title">Teacher Approved apps & games</h2>
        <div className="kids-age-buttons">
          <button
            className={`kids-age-button ${activeButton === "All ages up to 12" ? "kids-active" : ""}`}
            onClick={() => handleButtonClick("All ages up to 12")}
          >
            All ages up to 12
          </button>
          <button
            className={`kids-age-button ${activeButton === "Ages up to 5" ? "kids-active" : ""}`}
            onClick={() => handleButtonClick("Ages up to 5")}
          >
            Ages up to 5
          </button>
          <button
            className={`kids-age-button ${activeButton === "Ages 6-8" ? "kids-active" : ""}`}
            onClick={() => handleButtonClick("Ages 6-8")}
          >
            Ages 6-8
          </button>
          <button
            className={`kids-age-button ${activeButton === "Ages 9-12" ? "kids-active" : ""}`}
            onClick={() => handleButtonClick("Ages 9-12")}
          >
            Ages 9-12
          </button>
        </div>
      </div>

      {/*Recommended Games */}
      <div className="kids-card-section">
        <h2 className="kids-section-title">Recommended for you</h2>
        <div className="kids-card-row">
          {recommended.map((app, index) => (
            <div className="kids-card" key={index}>
              <img src={app.img} alt={app.title} className="kids-card-image" />
              <p className="kids-card-title">{app.title}</p>
              <p className="kids-card-rating">{app.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Games Section */}
      <div className="kids-card-section">
        <h2 className="kids-section-title">New Games</h2>
        <div className="kids-card-row">
          {newGames.map((game, index) => (
            <div className="kids-card" key={index}>
              <img src={game.img} alt={game.title} className="kids-card-image" />
              <p className="kids-card-title">{game.title}</p>
              <p className="kids-card-rating">{game.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* Simulation Games Section */}
      <div className="kids-card-section">
        <h2 className="kids-section-title">Simulation Games</h2>
        <div className="kids-card-row">
          {simulationGames.map((game, index) => (
            <div className="kids-card" key={index}>
              <img src={game.img} alt={game.title} className="kids-card-image" />
              <p className="kids-card-title">{game.title}</p>
              <p className="kids-card-rating">{game.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}