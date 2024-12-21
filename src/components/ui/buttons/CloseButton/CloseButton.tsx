import React from "react";
import "./CloseButton.scss";
import CloseIcon from "@/assets/icons/close.svg?react";

const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className="close-button" onClick={onClick}>
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
