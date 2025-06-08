import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { games } from "./gamesData.js";
import "./GameDetails.css"; 

const GameDetails = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id === parseInt(gameId));

  if (!game) return <div>Game not found</div>;

  return (
    <div className="game-details" style={{ display: "flex", gap: "2rem" }}>
      <span
        onClick={() => navigate(-1)}
        style={{ marginBottom: "1rem", cursor: "pointer", color: "blue" }}
      >
        ←Back
      </span>
      {/* Left side: Description and Comment */}
      <div style={{ flex: 1 }}>
        <p><strong>Description:</strong> {game.description}</p>
        <p><strong>Comment:</strong> {game.comment}</p>
      </div>

      {/* Right side: Image, Title, Category, etc. */}
      <div style={{ flex: 1 }}>
        <img src={game.image} alt={game.title} style={{ width: "100%", maxWidth: "500px" }} />
        <h2>{game.title}</h2>
        <p><strong>Category:</strong> {game.category}</p>
        <p><strong>Rating:</strong> ⭐ {game.rating}</p>
        <button className="install-button">Install</button>
      </div>
    </div>
  );
};

export default GameDetails;