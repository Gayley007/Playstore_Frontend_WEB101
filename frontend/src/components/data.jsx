import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./data.css";
import axios from "axios"; // Add axios for API requests

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
  const [games, setGames] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const navigate = useNavigate();

  // Fetch games from backend API
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/games")
      .then((res) => setGames(res.data))
      .catch((err) => {
        setGames([]);
        // Optionally handle error
      });
  }, []);

  // Function to determine visible cards based on screen width
  const updateVisibleCards = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleCards(3);
    } else if (width >= 768) {
      setVisibleCards(2);
    } else {
      setVisibleCards(1);
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
              <div
                key={game.id}
                className="card"
                onClick={() => {
                  if (game.title === "Block Blast") {
                    navigate("/games/block-blast");
                  }
                }}
                style={game.title === "Block Blast" ? { cursor: "pointer" } : {}}
              >
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