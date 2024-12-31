import React from "react";
import "./CloseButton.scss";
import CloseIcon from "@/assets/icons/close.svg?react";

interface CloseButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <>
      <button className="close-button" onClick={onClick}>
        <CloseIcon />
      </button>
    </>
  );
};

export default CloseButton;
