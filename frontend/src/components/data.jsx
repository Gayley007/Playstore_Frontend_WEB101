
import React, { useState, useEffect } from "react";
import "./data.css";

// Sample Game Data
const games = [
  {
    id: 1,
    title: "Block Blast",
    category: "Puzzle • Block",
    rating: 4.8,
    image: "/game1.jpg",
    icon: "/game1-icon.jpg",
  },
  {
    id: 2,
    title: "Stickman Party 234 MiniGames",
    category: "Arcade • Board",
    rating: 4.5,
    image: "/game2.jpg",
    icon: "/game2-icon.jpg",
  },
  {
    id: 3,
    title: "Super Bear Adventure",
    category: "Adventure • Action",
    rating: 4.4,
    image: "/game3.jpg",
    icon: "/game3-icon.jpg",
  },
  {
    id: 4,
    title: "Usagi Shima: Cute Bunny Game",
    category: "Simulation • Management",
    rating: 4.7,
    image: "/game4.jpg",
    icon: "/game4-icon.jpg",
  },
  {
    id: 5,
    title: "Honkai: Star Rail",
    category: "Adventure • RPG",
    rating: 3.4,
    image: "/game5.jpg",
    icon: "/game5-icon.jpg",
  },
  {
    id: 6,
    title: "Genshin Impact",
    category: "Adventure • Role Playing",
    rating: 3.9,
    image: "/game6.jpg",
    icon: "/game6-icon.jpg",
  },
  {
    id: 7,
    title: "Gacha Life",
    category: "Casual • Simulation",
    rating: 4.4,
    image: "/game7.jpg",
    icon: "/game7-icon.jpg",
  },
  {
    id: 8,
    title: "Alto's Adventure",
    category: "Action • Racing",
    rating: 4.5,
    image: "/game8.jpg",
    icon: "/game8-icon.jpg",
  },
  {
    id: 9,
    title: "Among Us",
    category: "Action • Strategy",
    rating: 3.8,
    image: "/game9.jpg",
    icon: "/game9-icon.jpg",
  },
  {
    id: 10,
    title: "Clusterduck",
    category: "Simulation • Idle",
    rating: 4.7,
    image: "/game10.jpg",
    icon: "/game10-icon.jpg",
  },
  {
    id: 11,
    title: "Billionaire Chef: Idle Tycoon",
    category: "Simulation • Restaurant",
    rating: 3.8,
    image: "/game11.jpg",
    icon: "/game11-icon.jpg",
  },
  {
    id: 12,
    title: "Pondlife - Relaxing Fish Game",
    category: "Simulation • Care",
    rating: 4.5,
    image: "/game12.jpg",
    icon: "/game12-icon.jpg",
  },
];

// GameCard Component
const GameCard = ({ game }) => {
  return (
    <div className="card">
      <div className="imageWrapper">
        <img src={game.image} alt={game.title} className="image" />
      </div>
      <div className="details">
        <div className="iconWrapper">
          <img src={game.icon} alt={`${game.title} icon`} className="icon" />
        </div>
        <div>
          <h3 className="title">{game.title}</h3>
          <p className="category">{game.category}</p>
          <p className="rating">⭐ {game.rating}</p>
        </div>
      </div>
    </div>
  );
};

// Main Carousel Component
const Data = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); 

  // Function to determine visible cards based on screen width
  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleCards(3); // Large screens (e.g., desktops)
    } else if (width >= 768) {
      setVisibleCards(2); // Medium screens (e.g., tablets)
    } else {
      setVisibleCards(1); // Small screens (e.g., mobile)
    }
  };

  // Use effect to update the visible cards when screen size changes
  useEffect(() => {
    updateVisibleCards(); 
    window.addEventListener("resize", updateVisibleCards); 

    return () => {
      window.removeEventListener("resize", updateVisibleCards); 
    };
  }, []);

  const handleNext = () => {
    if (startIndex + visibleCards < games.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="appContainer">
      <h2 className="sectionTitle">Popular Games</h2>
      <div className="carouselNav">
        <button onClick={handlePrev} disabled={startIndex === 0} className="navBtn">
          ❮
        </button>
        <div className="carouselWrapper">
          <div className="carousel">
            {games.slice(startIndex, startIndex + visibleCards).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCards >= games.length}
          className="navBtn"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Data;