import { firstLetterToUpperCase } from "@/utils/helpers";
import React from "react";
import "./PageTitle.scss";

interface PageTitleProp {
  text?: string;
}

const PageTitle: React.FC<PageTitleProp> = ({ text = "не указан" }) => {
  const formattedText =
    text.trim() === "" ? "не указан" : firstLetterToUpperCase(text);
  return <h1 className="page-title">{formattedText}</h1>;
};

export default PageTitle;
