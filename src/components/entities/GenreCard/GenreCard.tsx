import { GenreType } from "@/types/genresShema";
import { FormateData } from "@/utils/helpers";
import React from "react";
import { Link } from "react-router-dom";
import "./GenreCard.scss";

interface GenreCardProps {
  genre: GenreType;
}

const GenreCard: React.FC<GenreCardProps> = ({ genre }) => {
  return (
    <Link to={`/genres/${genre}`}>
      <div className="genre-card">
        <div className="genre-card__inner">
          <img src={`/images/genres/${genre}.png`} alt={`${genre} image`} />
          <div className="genre-card__title">
            <span>{FormateData.firstLetterToUpperCase(genre)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GenreCard;
