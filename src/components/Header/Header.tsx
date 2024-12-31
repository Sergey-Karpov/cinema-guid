import "./Header.scss";
import logo from "/images/logo.svg";
import UserIcon from "@/assets/icons/user-light.svg?react";
import GenresIcon from "@/assets/icons/genres.svg?react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderSearch from "@/components/entities/HeaderSearch/HeaderSearch";
import MainModal from "@/components/ui/Modals/MainModal/MainModal";
import AuthForm from "@/components/ui/forms/AuthForm/AuthForm";
import { useModal } from "@/components/ui/Modals/ModalContext";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Header: React.FC = () => {
  const { openModal } = useModal();
  const user = useSelector((state: RootState) => state.user.user);

  const handleLoginClick = () => {
    openModal(<AuthForm />);
  };

  return (
    <>
      <header className="header static">
        <div className="header__container">
          <div className="header__inner">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <div className="header__centre">
              <div className="header__actions">
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item">
                      <NavLink
                        to={"/"}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Главная
                      </NavLink>
                    </li>
                    <li className="header__nav-item">
                      <NavLink
                        to={"/genres"}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        Жанры
                      </NavLink>
                    </li>
                    <li className="header__nav-item--mobile">
                      <NavLink
                        to={"/genres"}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        <GenresIcon />
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="header__search">
                  <HeaderSearch />
                </div>
              </div>
            </div>
            <div className="header__right">
              {user ? (
                <NavLink
                  to={"/account"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {user.name}
                </NavLink>
              ) : (
                <>
                  <div className="header__enter">
                    <button onClick={handleLoginClick}>Войти</button>
                  </div>
                  <div className="header__enter--mobile">
                    <button onClick={handleLoginClick}>
                      <UserIcon />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <MainModal />
    </>
  );
};

export default Header;
