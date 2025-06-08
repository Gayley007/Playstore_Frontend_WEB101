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
      <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>← Back</button>
      <h1>{game.title}</h1>
      <img src={game.image} alt={game.title} style={{ width: "300px" }} />
      <p><strong>Category:</strong> {game.category}</p>
      <p><strong>Rating:</strong> ⭐ {game.rating}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Game description goes here.</p>
    </div>
  );
};

export default GameDetails;
