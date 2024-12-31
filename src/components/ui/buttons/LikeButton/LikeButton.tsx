import React, { useEffect, useState } from "react";
import "./LikeButton.scss";
import FavoriteIcon from "@/assets/icons/favorite-light.svg?react";
import FavoriteActiveIcon from "@/assets/icons/favorite-red.svg?react";
import { useModal } from "../../Modals/ModalContext";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import AuthForm from "../../forms/AuthForm/AuthForm";
import { addMovieToFavorites, removeMovieFromFavorites } from "@/api/api";
import useFetchProfile from "@/hooks/useFetchProfile";

interface LikeButtonProps {
  id: string;
}

type LikeBtnStateType = "default" | "active" | "enactive";

const LikeButton: React.FC<LikeButtonProps> = ({ id }) => {
  const user = useSelector((state: RootState) => state.user.user);
  const { updateProfile } = useFetchProfile();

  const setCurrentState = (): LikeBtnStateType => {
    if (!user) {
      return "default";
    }
    return user.favorites.includes(id.toString()) ? "active" : "enactive";
  };

  const [likeBtnState, setLikeBtnState] = useState<LikeBtnStateType>("default");
  const { openModal } = useModal();

  useEffect(() => {
    setLikeBtnState(setCurrentState());
  }, [user, id]);

  const openModalWithAuthForm = () => {
    openModal(<AuthForm />);
  };

  const addLike = async () => {
    await addMovieToFavorites(id);
    await updateProfile();
    setLikeBtnState("active");
  };

  const removeLike = async () => {
    await removeMovieFromFavorites(parseInt(id, 10));
    await updateProfile();
    setLikeBtnState("enactive");
  };

  const handleClick = () => {
    switch (likeBtnState) {
      case "default":
        openModalWithAuthForm();
        break;
      case "enactive":
        addLike();
        break;
      case "active":
        removeLike();
        break;
    }
  };

  return (
    <button
      className={`like-button like-button--${likeBtnState}`}
      onClick={handleClick}
    >
      {likeBtnState === "active" ? <FavoriteActiveIcon /> : <FavoriteIcon />}
    </button>
  );
};

export default LikeButton;
