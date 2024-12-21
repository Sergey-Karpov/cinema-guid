import SectionTitle from "@/components/ui/titles/SectionTitle/SectionTitle";
import { MovieType } from "@/types/movieSchema";
import { formatCurrencyUSD } from "@/utils/helpers";
import React from "react";
import "./MovieDataTable.scss";

interface MovieDataProps {
  movieData: MovieType;
}

const MovieDataTable: React.FC<MovieDataProps> = ({ movieData }) => {
  return (
    <section className="movie-description">
      <div className="movie-description__container">
        <div className="movie-description__inner">
          <SectionTitle text="О фильме" />
          <ul className="movie-table">
            <li className="movie-table__item">
              <div className="movie-table__label">
                <span>Язык оригинала</span>
              </div>
              <span className="movie-table__value">
                {movieData.language || "нет информации"}
              </span>
            </li>
            <li className="movie-table__item">
              <div className="movie-table__label">
                <span>Бюджет</span>
              </div>
              <span className="movie-table__value">
                {movieData.budget !== null
                  ? formatCurrencyUSD(movieData.budget)
                  : "нет информации"}
              </span>
            </li>
            <li className="movie-table__item">
              <div className="movie-table__label">
                <span>Выручка</span>
              </div>
              <span className="movie-table__value">
                {movieData.revenue !== null
                  ? formatCurrencyUSD(movieData.revenue)
                  : "нет информации"}
              </span>
            </li>
            <li className="movie-table__item">
              <div className="movie-table__label">
                <span>Режиссёр</span>
              </div>
              <span className="movie-table__value">
                {movieData.director || "нет информации"}
              </span>
            </li>
            <li className="movie-table__item">
              <div className="movie-table__label">
                <span>Продакшен</span>
              </div>
              <span className="movie-table__value">
                {movieData.production || "нет информации"}
              </span>
            </li>
            <li className="movie-table__item">
              <div className="movie-table__label">
                <span>Награды</span>
              </div>
              <span className="movie-table__value">
                {movieData.awardsSummary || "нет информации"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieDataTable;
