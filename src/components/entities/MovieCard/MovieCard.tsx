import { MovieType } from "@/types/movieSchema";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../ui/buttons/CloseButton/CloseButton";
import "./MovieCard.scss";

interface MovieCardProps {
  movieData: MovieType;
  num?: number;
  removeBtn?: boolean;
  onRemoveClick?: (id: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movieData,
  num,
  onRemoveClick,
}) => {
  return (
    <Link to={`/movie/${movieData.id}`}>
      <div
        className={`movie-card ${
          movieData.posterUrl ? "" : "movie-card--no-poster"
        }`}
      >
        <div className="movie-card__inner">
          {movieData.posterUrl && (
            <img src={movieData.posterUrl} alt={movieData.title} />
          )}
          <h3>{movieData.title}</h3>
        </div>
        {num && <span className="movie-card__number">{num}</span>}
        {onRemoveClick && (
          <CloseButton
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onRemoveClick(movieData.id);
            }}
          />
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
