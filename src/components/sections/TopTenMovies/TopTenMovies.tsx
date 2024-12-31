import MovieCard from "@/components/entities/MovieCard/MovieCard";
import SectionTitle from "@/components/ui/titles/SectionTitle/SectionTitle";
import { MovieType } from "@/types/movieSchema";
import React from "react";
import "./TopTenMovies.scss";

interface TopTenProps {
  topTenData: MovieType[];
}

const TopTenMovies: React.FC<TopTenProps> = ({ topTenData }) => {
  return (
    <section className="top-movies">
      <div className="top-movies__container">
        <div className="top-movies__inner">
          <SectionTitle text="Топ 10 фильмов" />
          {topTenData && (
            <ul>
              {topTenData.map((movie, index) => (
                <MovieCard key={movie.id} movieData={movie} num={index + 1} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopTenMovies;
