import React, {useEffect, useRef, useState} from "react";
import './Header.scss';
import Logo from "../../assets/logo.svg";
import Phone from "../../assets/telephone.svg";
import {useClickOutside} from "../../hooks/useClickOutside.js";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";

const Header = () => {
    const [isOpen, setOpen] = useState();
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(false), 50);
    });

    useEffect(() => {
        let startTouchX = 0;
        let endTouchX = 0;
        let startTouchY = 0;
        let endTouchY = 0;

        document.addEventListener("touchstart", (event) => {
            startTouchX = event.changedTouches[0].pageX;
            startTouchY = event.changedTouches[0].pageY;
        });

        document.addEventListener("touchend", (event) => {
            endTouchX = event.changedTouches[0].pageX;
            endTouchY = event.changedTouches[0].pageY;
            if (
                startTouchX < 100 &&
                Math.abs(endTouchY - startTouchY) < 40 &&
                endTouchX > startTouchX
            )
                setOpen(true);
            if (
                startTouchX < 240 &&
                Math.abs(endTouchY - startTouchY) < 40 &&
                endTouchX < startTouchX
            )
                setOpen(false);
        });
    }, []);
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="/sterh" className="header__logo-link">
                        <img src={Logo} alt="logo" width={200}/>
                    </a>
                </div>
                    <div className="">
                        <nav className={`header__nav ${isOpen ? "active" : ""}`} ref={menuRef}>
                            <ul className="header__nav-list">
                                <li className="header__nav-item">
                                    <a href="/sterh/info" className="header__nav-link">
                                        О компании
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="/sterh/objects" className="header__nav-link">
                                        Объекты
                                    </a>
                                </li>
                                <li className="header__nav-item">
                                    <a href="/sterh/contacts" className="header__nav-link">
                                        Контакты
                                    </a>
                                </li>
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