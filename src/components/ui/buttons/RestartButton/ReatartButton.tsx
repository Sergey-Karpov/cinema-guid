import React from "react";
import { z } from "zod";
import "./RestartButton.scss";
import RestartIcon from "@/assets/icons/restart.svg?react";

export const RestartButtonSchema = z.object({
  onClick: z.function().args().returns(z.void()),
});

export type ButtonProps = z.infer<typeof RestartButtonSchema>;

const RestartButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="restart-button" onClick={onClick}>
      <RestartIcon />
    </button>
  );
};

export default RestartButton;
