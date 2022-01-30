import logo from '../../images/logo__theme_black.svg';
import React from "react";

function Header() {
  return (
    <header className="header page__header">
        <img src={logo} alt="Логотип проекта" className="header__logo" />
    </header>
  )
}

export default Header;
