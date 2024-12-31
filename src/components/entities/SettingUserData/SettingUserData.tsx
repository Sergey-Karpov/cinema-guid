import MainButton from "@/components/ui/buttons/MainButton/MainButton";
import useLogoutProfile from "@/hooks/useLogoutProfile";
import { UserType } from "@/types/userSchema";
import React from "react";
import MailIcon from "@/assets/icons/mail-light.svg?react";
import "./SettingUserData.scss";
import { useNavigate } from "react-router-dom";

interface SettingUserDataProps {
  userData: UserType;
}

const SettingUserData: React.FC<SettingUserDataProps> = ({ userData }) => {
  const { logoutProfile } = useLogoutProfile();
  const navigate = useNavigate();

  const logoutBtnHandler = async () => {
    await logoutProfile();
    navigate("/");
  };

  return (
    <div className="setting-user">
      <div className="setting-user__inner">
        <ul>
          <li>
            <div className="setting-user__left">
              {userData.name[0]}
              {userData.surname[0]}
            </div>
            <div className="setting-user__right">
              <div className="setting-user__prop">Имя Фамилия</div>
              <div className="setting-user__value">
                {userData.name} {userData.surname}
              </div>
            </div>
          </li>
          <li>
            <div className="setting-user__left">
              <MailIcon />
            </div>
            <div className="setting-user__right">
              <div className="setting-user__prop">Электронная почта</div>
              <div className="setting-user__value">{userData.email}</div>
            </div>
          </li>
        </ul>
        <MainButton
          text="Выйти из аккаунта"
          modifier="purple"
          onClick={logoutBtnHandler}
        />
      </div>
    </div>
  );
};

export default SettingUserData;
