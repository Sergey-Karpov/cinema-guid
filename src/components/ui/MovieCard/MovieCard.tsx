import { MovieType } from "@/types/movieSchema";
import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

interface MovieCardProps {
  movieData: MovieType;
  num?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movieData, num }) => {
  return (
    <Link to={`/movie/${movieData.id}`}>
      <div className="movie-card">
        <div className="movie-card__inner">
          <img src={movieData.posterUrl} alt={movieData.title} />
        </div>
        {num && <span className="movie-card__number">{num}</span>}
      </div>
    </Link>
  );
};

export default MovieCard;
