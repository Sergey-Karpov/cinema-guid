import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import MainButton from "@/components/ui/buttons/MainButton/MainButton";
import InputField from "@/components/ui/inputs/InputField/InputField";
import "./LoginForm.scss";
import KeyIcon from "@/assets/icons/key.svg?react";
import MailIcon from "@/assets/icons/mail.svg?react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginDataType, LoginFormSchema } from "@/types/loginUserSchema";
import { login, queryClient } from "@/api/api";
import { useModal } from "@/components/ui/Modals/ModalContext";
import useFetchProfile from "@/hooks/useFetchProfile";

const LoginForm: React.FC = () => {
  const { updateProfile } = useFetchProfile();
  const { closeModal } = useModal();
  const [errorState, setErrorState] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginDataType>({
    resolver: zodResolver(LoginFormSchema),
  });

  const loginMutation = useMutation(
    {
      mutationFn: (user: LoginDataType) => login(user),
      onSuccess: async () => {
        try {
          await updateProfile();
          closeModal();
          reset();
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        }
      },
      onError: (error: any) => {
        console.error("Login failed:", error);
        setErrorState(
          "Отсутствует пользователь с данным email или password, проверте пожалуйста данные и повторите вход"
        );
      },
    },
    queryClient
  );

  const submitHandler = (data: LoginDataType) => {
    loginMutation.mutate(data);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
      <div className="login-form__inputs">
        <InputField
          className={errors.email ? "main-input--error" : ""}
          icon={<MailIcon />}
        >
          {
            <input
              type="text"
              placeholder="Электронная почта"
              {...register("email", {
                onChange: () => setErrorState(""),
              })}
            />
          }
        </InputField>
        <InputField
          className={errors.password ? "main-input--error" : ""}
          icon={<KeyIcon />}
        >
          {
            <input
              type="password"
              placeholder="Пароль"
              {...register("password", {
                onChange: () => setErrorState(""),
              })}
            />
          }
        </InputField>
        {!!errorState && <p className="login-form__error">{errorState}</p>}
      </div>
      <MainButton text="Войти" modifier="purple" />
    </form>
  );
};

export default LoginForm;
