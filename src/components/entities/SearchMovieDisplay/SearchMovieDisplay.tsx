import { RatingDisplay } from "@/components/ui/RatingDisplay/RatingDisplay";
import { MovieType } from "@/types/movieSchema";
import { formatRuntime } from "@/utils/helpers";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchMovieDisplay.scss";

interface ResultMovieProps {
  movieData: MovieType;
  onSelect: () => void;
}

const MovieDisplay: React.FC<ResultMovieProps> = ({ movieData, onSelect }) => {
  const navigate = useNavigate();

  const handleResultClick = () => {
    onSelect();
    navigate(`/movie/${movieData.id}`);
  };

  return (
    <li className="result-movie" onClick={handleResultClick}>
      {movieData.posterUrl && (
        <img
          className="result-movie__poster"
          src={movieData.posterUrl}
          alt={movieData.title}
        />
      )}

      <div className="result-movie__description">
        <div className="result-movie__top">
          <RatingDisplay rating={movieData.tmdbRating} />
          {movieData.releaseYear}
          {movieData.genres?.slice(0, 2).map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
          {formatRuntime(movieData.runtime)}
        </div>
        <h4>{movieData.title}</h4>
      </div>
    </li>
  );
};

export default MovieDisplay;
