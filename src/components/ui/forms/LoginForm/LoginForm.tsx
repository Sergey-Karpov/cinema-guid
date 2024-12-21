import React from "react";
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

interface LoginFormProps {
  onSuccessLog: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccessLog }) => {
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
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries({ queryKey: ["users", "me"] });
        onSuccessLog();
      },
      onError: (error: any) => {
        console.error("Login failed:", error);
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
              {...register("email")}
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
              {...register("password")}
            />
          }
        </InputField>
      </div>
      <MainButton text="Войти" modifier="purple" />
    </form>
  );
};

export default LoginForm;
