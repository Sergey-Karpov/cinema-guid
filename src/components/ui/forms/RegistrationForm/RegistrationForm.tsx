import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MainButton from "@/components/ui/buttons/MainButton/MainButton";
import InputField from "@/components/ui/inputs/InputField/InputField";
import "./RegistrationForm.scss";
import KeyIcon from "@/assets/icons/key.svg?react";
import MailIcon from "@/assets/icons/mail.svg?react";
import UserIcon from "@/assets/icons/user.svg?react";
import { RegisterDataType, RegisterFormSchema } from "@/types/loginUserSchema";
import { useMutation } from "@tanstack/react-query";
import { queryClient, registerUser } from "@/api/api";
import MainLoader from "../../Loaders/MainLoader/MainLoader";

interface RegistrationFormProps {
  onSuccessReg: () => void;
}

type RegStatesType = "registration" | "loading" | "error";

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSuccessReg,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterDataType>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const [regState, setRegState] = useState<RegStatesType>("registration");

  const registerMutation = useMutation(
    {
      mutationFn: async (data: RegisterDataType) => {
        setRegState("loading");
        await registerUser(data);
        queryClient.invalidateQueries({ queryKey: ["user", "me"] });
      },

      onSuccess: () => {
        setRegState("registration");
        reset();
        onSuccessReg();
        console.log("success registration");
      },

      onError: () => {
        setRegState("error");
      },
    },
    queryClient
  );

  const submitHandler = (data: RegisterDataType) => {
    registerMutation.mutate(data);
  };

  const renderForm = () => {
    switch (regState) {
      case "registration":
        return (
          <form
            className="reg-form__inner"
            onSubmit={handleSubmit(submitHandler)}
          >
            <h3>Регистрация</h3>
            <div className="reg-form__inputs">
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
                className={errors.name ? "main-input--error" : ""}
                icon={<UserIcon />}
              >
                {<input type="text" placeholder="Имя" {...register("name")} />}
              </InputField>
              <InputField
                className={errors.surname ? "main-input--error" : ""}
                icon={<UserIcon />}
              >
                {
                  <input
                    type="text"
                    placeholder="Фамилия"
                    {...register("surname")}
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
              <InputField
                className={errors.confirmPassword ? "main-input--error" : ""}
                icon={<KeyIcon />}
              >
                {
                  <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    {...register("confirmPassword")}
                  />
                }
              </InputField>
            </div>

            <MainButton text="Создать аккаунт" modifier="purple" />
          </form>
        );

      case "loading":
        return (
          <div className="reg-form__loader">
            <MainLoader />
          </div>
        );

      case "error":
        return (
          <p className="error-text">
            Ошибка при регистрации. Такой пользователь уже существует, нажмите
            на кнопку 'У меня есть пароль' и введите свои данные
          </p>
        );
    }
  };

  return <div className="reg-form">{renderForm()}</div>;
};

export default RegistrationForm;
