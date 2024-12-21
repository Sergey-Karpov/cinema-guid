import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import RegSuccess from "../RegSuccess/RegSuccess";
import "./AuthForm.scss";
import logo from "/images/logo.svg";
import { fetchProfile } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export type LoginStateType = "login" | "registration" | "success";

const AuthForm: React.FC = () => {
  const [formState, setFormState] = useState<LoginStateType>("login");

  // Использование useQuery здесь, в React-компоненте
  const meQuery = useQuery({
    queryFn: () => fetchProfile(),
    queryKey: ["users", "me"],
    retry: false,
    enabled: false, // Отключаем автоматический запуск
  });

  const account = async () => {
    try {
      await meQuery.refetch(); // Явный вызов запроса
      if (meQuery.status === "success") {
        console.log("Профиль пользователя:", meQuery.data);
      }
    } catch (error) {
      console.error("Ошибка при получении данных профиля:", error);
    }
  };

  const handlerSwitchForm = (state: LoginStateType) => {
    setFormState(state);
  };

  const renderForm = () => {
    switch (formState) {
      case "login":
        return (
          <>
            <LoginForm onSuccessLog={account} />
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
