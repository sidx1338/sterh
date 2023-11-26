import React from "react";
import './Header.scss';
import Logo from "../../assets/logo.svg";
import Phone from "../../assets/telephone.svg";

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');

    const iconMenuButton = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.menu__nav');

    if (iconMenuButton) {
        console.log('Button found');
        iconMenuButton.addEventListener('click', function (e) {
            console.log('Button clicked');
            iconMenuButton.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    } else {
        console.log('Button not found');
    }
});

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="/" className="header__logo-link">
                        <img src={Logo} alt="logo" width={200}/>
                    </a>
                </div>
                    <div className="header__menu menu">
                        <nav className="menu__nav">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <a href="/info" className="menu__link">
                                        О компании
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="/advantages" className="menu__link">
                                        Преимущества
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="/objects" className="menu__link">
                                        Объекты
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="/services" className="menu__link">
                                        Услуги
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a href="/contacts" className="menu__link">
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                <div className="header__actions">
                    <img className="header__phone" src={Phone} alt="phone"/>
                    <a href="tel:79786883771" className="header__number">+7 978-688-37-71</a>
                </div>
                <button className="icon-menu"><span></span></button>
            </div>
        </header>
    )
}

export default Header;