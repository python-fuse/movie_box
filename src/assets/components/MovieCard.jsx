import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card rounded-t-sm" data-testid="movie-card">
      <img
        data-testid="movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full "
      />
      <p data-testid="movie-release_date" className="text-gray-500">
        {movie.release_date.slice(0, 4)}
      </p>
      <Link to={`/movie/${movie.id}`}>
        <h3
          data-testid="movie-title"
          className="text-white font-cinzel font-bold m-b-2 "
        >
          {movie.title}
        </h3>
        <p className="text-gray-300 font-roboto">
          Rating: {movie.vote_average}
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
