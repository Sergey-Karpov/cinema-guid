import MovieCard from "@/components/ui/MovieCard/MovieCard";
import PageTitle from "@/components/ui/titles/PageTitle/PageTitle";
import { MovieType } from "@/types/movieSchema";
import { firstLetterToUpperCase } from "@/utils/helpers";
import React, { Children } from "react";
import { Link, useParams } from "react-router-dom";
import "./MoviesByGenre.scss";
import BackIcon from "@/assets/icons/chevron-light.svg?react";

interface MoviesByGenresProps {
  movies: MovieType[];
  children: React.ReactNode;
}

const MoviesByGenres: React.FC<MoviesByGenresProps> = ({
  movies,
  children,
}) => {
  const { genre } = useParams<{ genre: string }>();

  const genreText = genre ? firstLetterToUpperCase(genre) : "Не указан";

  return (
    <section className="movies-by-genre">
      <div className="movies-by-genre__container">
        <div className="movies-by-genre__inner">
          <Link to={"/genres"} className="movies-by-genre__back">
            <BackIcon />
            <PageTitle text={firstLetterToUpperCase(genreText)} />
          </Link>
          <ul>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movieData={movie} />
            ))}
          </ul>
          {children}
        </div>
      </div>
    </section>
  );
};

export default MoviesByGenres;
