import React from "react";
import { z } from "zod";
import "./MainButton.scss";

const MainButtonSchema = z.object({
  text: z.string(),
  modifier: z.string(),
  onClick: z.function().args().returns(z.void()).optional(),
});

type ButtonProps = z.infer<typeof MainButtonSchema>;

const MainButton: React.FC<ButtonProps> = ({ text, modifier, onClick }) => {
  return (
    <button
      className={`main-button main-button--${modifier}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
