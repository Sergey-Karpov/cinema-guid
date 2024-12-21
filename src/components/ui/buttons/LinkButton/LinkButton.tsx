import React from "react";
import { Link } from "react-router-dom";
import { z } from "zod";

export const LinkButtonSchema = z.object({
  text: z.string(),
  modifier: z.string(),
  path: z.string().url(),
});

export type ButtonProps = z.infer<typeof LinkButtonSchema>;

const LinkButton: React.FC<ButtonProps> = ({ text, modifier, path }) => {
  return (
    <Link to={path} className={`main-button main-button--${modifier}`}>
      {text}
    </Link>
  );
};

export default LinkButton;
