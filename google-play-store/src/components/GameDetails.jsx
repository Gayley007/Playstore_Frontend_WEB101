import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { games } from "./gamesData.js";

const GameDetails = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id === parseInt(gameId));

  if (!game) return <div>Game not found</div>;

  return (
    <div className="game-details">
      <top onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>← </top>
      <img src={game.image} alt={game.title} style={{ width: "500px" }} />
      <h2>{game.title}</h2>
      <p><strong>Category:</strong> {game.category}</p>
      <p><strong>Rating:</strong> ⭐ {game.rating}</p>
      <button className="install-button">Install</button>
      <p>Block Blast is a colorful, fun, and highly addictive offline block puzzle game that combines
         the best of casual gameplay and brain training. Designed for everyone, this relaxing game is 
         perfect whether you're a fan of logic puzzles, match 3 challenges, or just want a few minutes of simple fun.</p>
    <p><strong>Comment:</strong> I really enjoy playing Block Blast{game.rating}</p>
    </div>
    
  );
  
};

export default GameDetails;
