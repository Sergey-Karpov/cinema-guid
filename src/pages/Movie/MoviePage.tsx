import { getMovieById } from "@/api/api";
import Hero from "@/components/sections/Hero/Hero";
import MovieDataTable from "@/components/sections/MovieDataTable/MovieDataTable";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";

const MoviePage: React.FC = () => {
  const { movieId } = useParams();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["fetchMovieData"],
    enabled: !!movieId,
    queryFn: () =>
      movieId
        ? getMovieById(Number(movieId))
        : Promise.reject("Movie ID is not defined"),
  });

  return (
    <div className="content">
      {data && (
        <>
          <Hero movieData={data} page="movie" />
          <MovieDataTable movieData={data} />
        </>
      )}
    </div>
  );
};

export default MoviePage;
