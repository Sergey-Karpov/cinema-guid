import MoviePlayer from "@/components/entities/MoviePlayer/MoviePlayer";
import LikeButton from "@/components/ui/buttons/LikeButton/LikeButton";
import LinkButton from "@/components/ui/buttons/LinkButton/LinkButton";
import MainButton from "@/components/ui/buttons/MainButton/MainButton";
import RestartButton from "@/components/ui/buttons/RestartButton/ReatartButton";
import MainLoader from "@/components/ui/Loaders/MainLoader/MainLoader";
import { useModal } from "@/components/ui/Modals/ModalContext";
import { RatingDisplay } from "@/components/ui/RatingDisplay/RatingDisplay";
import PageTitle from "@/components/ui/titles/PageTitle/PageTitle";
import { MovieType } from "@/types/movieSchema";
import { formatRuntime } from "@/utils/helpers";
import React from "react";
import "./Hero.scss";

interface HeroProps {
  page: "home" | "movie";
  movieData?: MovieType;
  onRestart?: () => void;
  isLoading: boolean;
  modifierClass?: string;
}

const Hero: React.FC<HeroProps> = ({
  movieData,
  onRestart,
  page,
  isLoading,
  modifierClass,
}) => {
  const { openModal } = useModal();

  const startTrailer = () => {
    openModal(<MoviePlayer url={movieData?.trailerUrl} />);
  };

  return (
    <section
      className={`hero ${modifierClass ? `hero--${modifierClass}` : ""}`}
    >
      <div className="hero__container">
        <div className="hero__inner">
          {isLoading ? (
            <MainLoader />
          ) : (
            movieData && (
              <div className="movie-data">
                <div className="movie-data__info">
                  <RatingDisplay rating={movieData.tmdbRating} />
                  <span className="movie-data__release">
                    {movieData.releaseYear}
                  </span>
                  <ul className="movie-data__genre">
                    {movieData.genres?.map((genre, index) => (
                      <li key={index}>{genre}</li>
                    ))}
                  </ul>
                  <span className="movie-data__runtime">
                    {formatRuntime(movieData.runtime)}
                  </span>
                </div>
                <PageTitle text={movieData.originalTitle} />
                <h2 className="movie-data__description">{movieData.plot}</h2>
                <div className="movie-data__actions">
                  <MainButton
                    text="Трейлер"
                    modifier="purple"
                    onClick={startTrailer}
                  />
                  {page === "home" && (
                    <LinkButton
                      text="О фильме"
                      modifier="grey"
                      path={`/movie/${movieData.id}`}
                    />
                  )}
                  <LikeButton id={movieData.id.toString()} />
                  {onRestart && <RestartButton onClick={onRestart} />}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {movieData?.backdropUrl ? (
        <img
          className="hero__bg"
          src={movieData.backdropUrl}
          alt={movieData.originalTitle}
        />
      ) : (
        <img
          className="hero__bg"
          src="../../../../public/images/no-preview.jpg"
          alt="Изображение превью фильма"
        />
      )}
    </section>
  );
};

export default Hero;
