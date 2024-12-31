import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import RegSuccess from "../RegSuccess/RegSuccess";
import "./AuthForm.scss";
import logo from "/images/logo.svg";

export type LoginStateType = "login" | "registration" | "success";

const AuthForm: React.FC = () => {
  const [formState, setFormState] = useState<LoginStateType>("login");

  const handlerSwitchForm = (state: LoginStateType) => {
    setFormState(state);
  };

  const renderForm = () => {
    switch (formState) {
      case "login":
        return (
          <>
            <LoginForm />
            <button
              onClick={() => handlerSwitchForm("registration")}
              className="auth-form__change-form-btn"
            >
              {"Регистрация"}
            </button>
          </>
        );
      case "registration":
        return (
          <>
            <RegistrationForm
              onSuccessReg={() => handlerSwitchForm("success")}
            />
            <button
              onClick={() => handlerSwitchForm("login")}
              className="auth-form__change-form-btn"
            >
              {"У меня есть пароль"}
            </button>
          </>
        );
      case "success":
        return <RegSuccess onClickHandler={() => handlerSwitchForm("login")} />;
    }
  };

  return (
    <div className="auth-form">
      <div className="auth-form__inner">
        <span className="auth-form__logo">
          <img src={logo} alt="logo" />
        </span>
        {renderForm()}
      </div>
    </div>
  );
};

export default AuthForm;
