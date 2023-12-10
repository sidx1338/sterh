import React, {useEffect, useRef, useState} from "react";
import './Header.scss';
import Logo from "../../assets/logo.svg";
import Phone from "../../assets/telephone.svg";
import YouTube from "../../assets/youtube.svg";
import Telegram from "../../assets/telegram.svg";
import {useClickOutside} from "../../hooks/useClickOutside.js";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";
import {Link} from "react-router-dom";
import ScrollToTop from "../../../ScrollToTop";

const Header = () => {

    const [isOpen, setOpen] = useState();
    const menuRef = useRef(null);

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="/sterh" className="header__logo-link">
                        <img src={Logo} alt="logo" width={200}/>
                    </a>
                </div>
                    <div>
                        <nav className={`header__nav ${isOpen ? "active" : ""}`} ref={menuRef}>
                            <ScrollToTop/>
                            <ul className="header__nav-list">
                                <li className="header__nav-item">
                                    <Link to={`/sterh/info`} className="header__nav-link">
                                        О компании
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link to={`/sterh/objects`} className="header__nav-link">
                                        Объекты
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link to={`/sterh/contacts`} className="header__nav-link">
                                        Контакты
                                    </Link>
                                </li>
                                <div className="links__logo">
                                    <a href="#" className="nav__youtube-logo-link">
                                        <img src={YouTube} alt="logo" width={48}/>
                                    </a>
                                    <a href="https://t.me/skSterhCrimea" className="nav__telegram-logo-link">
                                        <img src={Telegram} alt="logo" width={40}/>
                                    </a>
                                </div>
                            </ul>
                        </nav>
                    </div>
                <div className="header__actions">
                    <a href="tel:79786883771">
                    <img className="header__phone" src={Phone} alt="phone"/>
                    </a>
                    <a href="tel:79786883771" className="header__number">+7 978-688-37-71</a>
                </div>
                <BurgerMenu isActive={isOpen} onClick={() => setOpen(!isOpen)} />
            </div>
        </header>
    )
}

export default Header;