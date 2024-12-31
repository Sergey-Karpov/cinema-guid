import GenreCard from "@/components/entities/GenreCard/GenreCard";
import SectionTitle from "@/components/ui/titles/SectionTitle/SectionTitle";
import { GenresType } from "@/types/genresShema";
import React from "react";
import "./Genres.scss";

interface GenresSectionProps {
  genresData: GenresType;
}

const Genres: React.FC<GenresSectionProps> = ({ genresData }) => {
  return (
    <section className="genres">
      <div className="genres__container">
        <div className="genres__inner">
          <SectionTitle text="Жанры фильмов" />
          {genresData && (
            <ul>
              {genresData.map((genre, index) => (
                <li key={index}>
                  <GenreCard genre={genre} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Genres;
