import React from "react";
import "./SpinnerLoader.scss";

const SpinnerLoader: React.FC = () => {
  return (
    <div className="spinnerLoader">
      <span className="spinnerLoader__spinner"></span>
    </div>
  );
};

export default SpinnerLoader;
