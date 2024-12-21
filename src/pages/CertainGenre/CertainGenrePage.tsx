import { getMovies } from "@/api/api";
import MoviesByGenre from "@/components/sections/MoviesByGenre/MoviesByGenre";
import MainButton from "@/components/ui/buttons/MainButton/MainButton";
import { MovieListType } from "@/types/movieSchema";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type MoviesListStateType = MovieListType | [];

const CertainGenrePage: React.FC = () => {
  const [moviesList, setMoviesList] = useState<MoviesListStateType>([]);
  const [currentCount, setCurrentCount] = useState<number>(15);
  const { genre } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fetchMoviesByGenre", genre, currentCount],
    queryFn: () => getMovies({ genre, count: currentCount }),
  });

  useEffect(() => {
    if (data) {
      setMoviesList(data);
    }
  }, [data]);

  const addMoreMovies = () => {
    const newCount = currentCount + 10;
    setCurrentCount(newCount);
  };

  return (
    <div className="content">
      {moviesList.length > 0 && (
        <MoviesByGenre movies={moviesList}>
          {moviesList.length < 50 && (
            <MainButton
              text="Показать ещё"
              onClick={addMoreMovies}
              modifier="purple"
            />
          )}
        </MoviesByGenre>
      )}
      {isLoading && <p>Загрузка...</p>}
      {isError && <p>Ошибка: {error?.message}</p>}
    </div>
  );
};

export default CertainGenrePage;
