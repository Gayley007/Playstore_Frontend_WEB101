import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import "../apps_page/apps.css"; 
import { Search, HelpCircle } from "lucide-react";
import Footer from '../components/footer.jsx'; 

const games = [
  { id: 1, image: '/mlbb.png', name: 'Mobile Legends: Bang Bang', tags: 'Action · Strategy · MOBA · Battling', rating: 4.0 },
  { id: 4, image: '/blockblast.png', name: 'Block Blast!', tags: 'Puzzle · Block · Casual · Offline', rating: 4.8 },
  { id: 7, image: '/gameworld.png', name: 'Game World: Life Story', tags: 'Educational · Simulation · Life · Casual', rating: 4.7 },
  { id: 2, image: '/superbear.png', name: 'Super Bear Adventure', tags: 'Adventure · Action · Casual · Offline', rating: 4.4 },
  { id: 5, image: '/craftsman.png', name: 'Craftsman: Building Craft', tags: 'Simulation · Sandbox · Single player', rating: 3.4 },
  { id: 8, image: '/holeio.png', name: 'Hole.io', tags: 'Arcade · Action · IO game · Casual', rating: 3.2 },
  { id: 3, image: '/iamcat.png', name: 'I Am Cat', tags: 'Simulation · Life · Casual · Offline', rating: 4.4 },
  { id: 6, image: '/pubg.png', name: 'PUBG MOBILE', tags: 'Action · Tactical shooter · Multiplayer', rating: 4.4 },
  { id: 9, image: '/stickman.png', name: 'Stickman Party 234 MiniGames', tags: 'Arcade · Board · Party · Casual', rating: 4.5 },
];

const recommended = [
  { title: 'X', rating: 3.9, img: 'recommended1.png' },
  { title: 'Emochi: Chat With Character', rating: 4.6, img: 'recommended2.png' },
  { title: 'AnkiDroid Flashcards', rating: 4.8, img: 'recommended3.png' },
  { title: 'Grammarly-AI Writing Assistant', rating: 4.2, img: 'recommended4.png' },
  { title: 'HelloTalk-Learn Languages', rating: 3.9, img: 'recommended5.png' },
  { title: 'Pinterest', rating: 4.5, img: 'recommended6.png' },
  { title: 'DramaBox-Stream Drama...', rating: 4.7, img: 'recommended7.png' },
  { title: 'Pdb App:Personality &...', rating: 4.5, img: 'recommended8.png' }
];

const Books = [
  { title: 'Dictionary-Merriam-Webster', rating: 4.4, img: 'books1.png' },
  { title: 'Writer Journal-Story,Note', rating: 4.7, img: 'books2.png' },
  { title: 'Oxford Dictionary', rating: 4.5, img: 'books3.png' },
  { title: 'Inkitt: Books, Novels, Stories', rating: 4.4, img: 'books4.png' },
  { title: 'French-English offline dict.', rating: 4.2, img: 'books5.png' },
  { title: 'MANGA Plus by SHUEISHA', rating: 3.8, img: 'books6.png' },
  { title: 'MagicWave: Spicy Audio Stories', rating: 4.3, img: 'books7.png' },
  { title: 'DailyBean: Simplest Jpounal', rating: 4.7, img: 'books8.png' }
];

const productivity = [
  { title: 'Grammarly-AI Writing Assistant', rating: 4.2, img: 'productivity1.png' },
  { title: 'DeepSeek - AI Assistant', rating: 4.4, img: 'productivity2.png' },
  { title: 'Kilonotes-Notes & PDF reading', rating: 4.6, img: 'productivity3.png' },
  { title: 'Notein: Handwriting,Notes,...', rating: 4.4, img: 'productivity4.png' },
  { title: 'Color Notes, Notebook,...', rating: 4.6, img: 'productivity5.png' },
  { title: 'todo mate:tasks & AI', rating: 4.6, img: 'productivity6.png' },
  { title: 'Microsoft Excel: Spreadsheets', rating: 4.7, img: 'productivity7.png' },
  { title: 'Jnotes: Note-Taking&Editor PDF', rating: 4.2, img: 'productivity8.png' }
];

export default function AppSection() { 
  const [activeTab, setActiveTab] = useState('Top free');

  const games = [
    { id: 1, image: '/bhutanndi.png', name: 'Bhutan NDI', tags: 'Business', rating: 3.3 },
    { id: 4, image: '/medhey.png', name: 'Medhey', tags: 'Shopping', rating: 4.0 },
    { id: 7, image: '/whatsapp.png', name: 'WhatsApp Messenger', tags: 'Communication', rating: 4.3 },
    { id: 2, image: '/educare.png', name: 'Educare Skill', tags: 'Education', rating: 4.5 },
    { id: 5, image: '/dkbank.png', name: 'DK Bank', tags: 'Finance', rating: 4.5 },
    { id: 8, image: '/autoclicker.png', name: 'Auto Clicker', tags: 'Tools', rating: 4.1 },
    { id: 3, image: '/chatgpt.png', name: 'ChatGPT', tags: 'Productivity', rating: 4.7 },
    { id: 6, image: '/tiktok.png', name: 'TikTok', tags: 'Social', rating: 4.2 },
    { id: 9, image: '/telegram.png', name: 'Telegram', tags: 'Communication', rating: 4.1 },
  ];

  return (
    <>
      {/* Header/Nav */}
      <div className="apps-header">
        {/* Left section: Logo and Tabs */}
        <div className="apps-left-section">
          <div className="apps-google-play-logo">
            <img
              src="logo.png"
              alt="Google Play Logo"
              className="apps-google-logo-icon"
            />
            <span className="apps-google-logo-text">Google Play</span>
          </div>

          <div className="apps-tabs">
            <NavLink to="/games" className="apps-tab" activeClassName="apps-active">Games</NavLink>
            <NavLink to="/apps" className="apps-tab" activeClassName="apps-active">Apps</NavLink>
            <NavLink to="/kids" className="apps-tab" activeClassName="apps-active">Kids</NavLink>
          </div>
        </div>

        {/* Right section: Icons */}
        <div className="apps-right-section">
          <Search className="apps-icon" />
          <HelpCircle className="apps-icon" />
          <div className="apps-profile">S</div>
        </div>
      </div>

      {/* Main Section Below Navbar */}
      <div className="apps-main-content">
        <div className="apps-feature-card">Phone</div>
        <div className="apps-feature-card">Tablet</div>
        <div className="apps-feature-card">Tv</div>
        <div className="apps-feature-card">Chromebook</div>
        <div className="apps-feature-card">Watch</div>
        <div className="apps-feature-card">Car</div>
      </div>

      {/*  Top Charts */}
      <div className="apps-top-charts">
        <h2 className="apps-top-charts-title">Top charts</h2>
        <div className="apps-top-charts-tabs">
          <button 
            className={activeTab === 'Top free' ? 'apps-top-charts-active' : ''}
            onClick={() => setActiveTab('Top free')}
          >
            Top free
          </button>
          <button 
            className={activeTab === 'Top grossing' ? 'apps-top-charts-active' : ''}
            onClick={() => setActiveTab('Top grossing')}
          >
            Top grossing
          </button>
          <button 
            className={activeTab === 'Top paid' ? 'apps-top-charts-active' : ''}
            onClick={() => setActiveTab('Top paid')}
          >
            Top paid
          </button>
        </div>

        <div className="apps-top-charts-list">
          {games.map((game) => (
            <div key={game.id} className="apps-top-charts-card">
              <div className="apps-top-charts-number">{game.id}</div>
              <img src={game.image} alt={game.name} className="apps-top-charts-image" />
              <div className="apps-top-charts-info">
                <div className="apps-top-charts-title">{game.name}</div>
                <div className="apps-top-charts-tags">{game.tags}</div>
                <div className="apps-top-charts-rating">{game.rating} ⭐</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended for you Section */}
      <div className="apps-card-section1">
        <h2 className="apps-section-title">Recommended for you</h2>
        <div className="apps-card-row">
          {recommended.map((app, index) => (
            <div className="apps-card" key={index}>
              <img src={app.img} alt={app.title} className="apps-card-image" />
              <p className="apps-card-title">{app.title}</p>
              <p className="apps-card-rating">{app.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* Books & reference Section */}
      <div className="apps-card-section">
        <h2 className="apps-section-title">Books & reference</h2>
        <div className="apps-card-row">
          {Books.map((game, index) => (
            <div className="apps-card" key={index}>
              <img src={game.img} alt={game.title} className="apps-card-image" />
              <p className="apps-card-title">{game.title}</p>
              <p className="apps-card-rating">{game.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* Productivity Section */}
      <div className="apps-card-section">
        <h2 className="apps-section-title">Productivity</h2>
        <div className="apps-card-row">
          {productivity.map((game, index) => (
            <div className="apps-card" key={index}>
              <img src={game.img} alt={game.title} className="apps-card-image" />
              <p className="apps-card-title">{game.title}</p>
              <p className="apps-card-rating">{game.rating} ★</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}