import React, { useState } from 'react';
import './new.css';

export default function New(){
  const [activeTab, setActiveTab] = useState('Top free');

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

  return (
    <div className="app">
      <h2 className='h2'>Top charts</h2>
      <div className="tabs">
        <button 
          className={activeTab === 'Top free' ? 'active' : ''}
          onClick={() => setActiveTab('Top free')}
        >
          Top free
        </button>
        <button 
          className={activeTab === 'Top grossing' ? 'active' : ''}
          onClick={() => setActiveTab('Top grossing')}
        >
          Top grossing
        </button>
        <button 
          className={activeTab === 'Top paid' ? 'active' : ''}
          onClick={() => setActiveTab('Top paid')}
        >
          Top paid
        </button>
      </div>

      <div className="games-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-number">{game.id}</div>
            <img src={game.image} alt={game.name} className="game-image" />
            <div className="game-info">
              <div className="game-title">{game.name}</div>
              <div className="game-tags">{game.tags}</div>
              <div className="game-rating">{game.rating} ⭐</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

