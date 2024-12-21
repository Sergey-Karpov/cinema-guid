import React from "react";
import MainButton from "@/components/ui/buttons/MainButton/MainButton";

interface RegSuccessProp {
  onClickHandler: () => void;
}

const RegSuccess: React.FC<RegSuccessProp> = ({ onClickHandler }) => {
  return (
    <form
      className="reg-success"
      onSubmit={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      <div className="reg-success__inner">
        <span>Регистрация завершена</span>
        <p>Используйте вашу электронную почту для входа</p>
        <MainButton text="Войти" modifier="purple" />
      </div>
    </form>
  );
};

export default RegSuccess;
