import React from "react";
import './Header.scss'
import Logo from "./logo.svg"
import Phone from "./telephone.svg"
const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="#" className="header__logo-link">
                        <img src={Logo} alt="logo" width={200}/>
                    </a>
                </div>
                <div className="header__menu menu">
                    <nav className="menu__nav">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="#" className="menu__link">
                                О компании
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">
                                Преимущества
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="#" className="menu__link">
                                Объекты
                            </a>
                        </li>
                    </ul>
                </nav>
                </div>
                <div className="header__actions">
                    <img className="header__phone" src={Phone} alt="phone"/>
                    <a href="tel:79786883771" className="header__number">+79786883771</a>
                </div>
            </div>
        </header>
    )
}
export default Header
