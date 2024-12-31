import SectionTitle from "@/components/ui/titles/SectionTitle/SectionTitle";
import MainTabs from "@/components/ui/tubs/MainTabs/MainTabs";
import React, { useEffect, useState } from "react";
import "./UserData.scss";
import UserIcon from "@/assets/icons/user-light.svg?react";
import FavoriteIcon from "@/assets/icons/favorite-light.svg?react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/index";
import { getFavoriteMovies, removeMovieFromFavorites } from "@/api/api";
import MoviesList from "@/components/entities/MovieList/MovieList";
import { MovieType } from "@/types/movieSchema";
import SettingUserData from "@/components/entities/SettingUserData/SettingUserData";

const UserData: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const [favoriteMovies, setFavoriteMovies] = useState<MovieType[] | null>(
    null
  );

  useEffect(() => {
    if (user) {
      getFavoriteMovies()
        .then((moviesData) => setFavoriteMovies(moviesData))
        .catch((error) =>
          console.error("Ошибка загрузки избранных фильмов:", error)
        );
    }
  }, [user]);

  const handleRemoveClick = (id: number) => {
    removeMovieFromFavorites(id)
      .then(() => {
        setFavoriteMovies((prevMovies) =>
          prevMovies ? prevMovies.filter((movie) => movie.id !== id) : null
        );
      })

      .catch((error) => {
        console.error("Ошибка при удалении фильма:", error);
      });
  };

  return (
    <section className="user-data">
      <div className="user-data__container">
        <div className="user-data__inner">
          <SectionTitle text="Мой аккаунт" />
          {user && (
            <MainTabs
              tabs={[
                {
                  name: "user-data",
                  title: "Избранные фимльмы",
                  icon: <FavoriteIcon />,
                  children: (
                    <MoviesList
                      movies={!!favoriteMovies ? favoriteMovies : []}
                      onRemoveMovie={handleRemoveClick}
                    />
                  ),
                },
                {
                  name: "user-data",
                  title: "Настройка аккаунта",
                  icon: <UserIcon />,
                  children: <SettingUserData userData={user} />,
                },
              ]}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default UserData;
