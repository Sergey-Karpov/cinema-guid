import { getRandomMovie, getTopTenMovies } from "@/api/api";
import Hero from "@/components/sections/Hero/Hero";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import TopTenMovies from "@/components/sections/TopTenMovies/TopTenMovies";

const HomePage: React.FC = () => {
  const {
    data: randomMovieData,
    isLoading: randomMovieIsLoading,
    isError: randomMovieIsError,
    error: randomMovieError,
    refetch,
  } = useQuery({
    queryKey: ["fetchMovieData"],
    queryFn: getRandomMovie,
  });

  const {
    data: topTenData,
    isLoading: topTenIsLoading,
    isError: topTenIsError,
    error: topTenError,
  } = useQuery({
    queryKey: ["fetchTopTenMovies"],
    queryFn: getTopTenMovies,
  });

  const startTrailer = () => {
    console.log("start trailer");
  };

  const refetchMovie = () => {
    refetch();
  };

  return (
    <div className="content">
      <Hero
        movieData={randomMovieData}
        onRestart={refetchMovie}
        page={"home"}
        isLoading={randomMovieIsLoading}
      />
      {topTenData ? (
        <TopTenMovies topTenData={topTenData} />
      ) : (
        <div>Loading movie data...</div>
      )}
    </div>
  );
};

export default HomePage;
