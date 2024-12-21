import "./Header.scss";
import logo from "/images/logo.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderSearch from "@/components/ui/HeaderSearch/HeaderSearch";
import MainModal from "@/components/ui/Modals/MainModal/MainModal";
import AuthForm from "@/components/ui/forms/AuthForm/AuthForm";
import { useModal } from "@/components/ui/Modals/ModalContext";

const Header: React.FC = () => {
  const { openModal } = useModal();

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
                    <li>
                      <Link to={"/"}>Главная</Link>
                    </li>
                    <li>
                      <Link to={"/genres"}>Жанры</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header__search">
                  <HeaderSearch />
                </div>
              </div>
            </div>
            <div className="header__enter">
              <button onClick={openModal}>Войти</button>
            </div>
          </div>
        </div>
      </header>
      <MainModal>
        <AuthForm />
      </MainModal>
    </>
  );
};

export default Header;
