import MovieCard from "@/components/entities/MovieCard/MovieCard";
import { MovieType } from "@/types/movieSchema";
import React from "react";
import "./MovieList.scss";

interface MovieListProps {
  movies: MovieType[];
  onRemoveMovie: (id: number) => void;
}

const MoviesList: React.FC<MovieListProps> = ({ movies, onRemoveMovie }) => {
  return (
    <ul className="movie-list">
      {!!movies ? (
        movies.map((movie) => (
          <li className="movie-list__item" key={movie.id}>
            <MovieCard movieData={movie} onRemoveClick={onRemoveMovie} />
          </li>
        ))
      ) : (
        <>Отсутствубт данные для отображения</>
      )}
    </ul>
  );
};

export default MoviesList;
