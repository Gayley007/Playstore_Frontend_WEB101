const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`} className="card-link">
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
            <p className="rating"> {game.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
