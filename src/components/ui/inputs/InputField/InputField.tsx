import React from "react";
import "./InputField.scss";

interface InputProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const InputField: React.FC<InputProps> = ({ icon, children, className }) => {
  return (
    <label className={`main-input ${className || ""}`}>
      {icon}
      {children}
    </label>
  );
};

export default InputField;
