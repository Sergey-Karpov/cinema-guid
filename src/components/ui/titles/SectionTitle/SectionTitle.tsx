import { FormateData } from "@/utils/helpers";
import React from "react";
import "./SectionTitle.scss";

interface SectionTitleProp {
  text?: string;
}

const SectionTitle: React.FC<SectionTitleProp> = ({ text = "не указан" }) => {
  const formattedText =
    text.trim() === "" ? "не указан" : FormateData.firstLetterToUpperCase(text);
  return <h3 className="section-title">{formattedText}</h3>;
};

export default SectionTitle;
