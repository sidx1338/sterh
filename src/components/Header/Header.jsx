import React from "react";
import './Header.scss';
import Logo from "../../assets/logo.svg";
import Phone from "../../assets/telephone.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="/sterh" className="header__logo-link">
                        <img src={Logo} alt="logo" width={200}/>
                    </a>
                </div>
                    <div className="header__menu menu">
                        <nav className="menu__nav">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <a href="/sterh/info" className="menu__link">
                                        О компании
                                    </a>
                                </li>
                                {/*<li className="menu__item">*/}
                                {/*    <a href="/sterh/advantages" className="menu__link">*/}
                                {/*        Преимущества*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li className="menu__item">
                                    <a href="/sterh/objects" className="menu__link">
                                        Объекты
                                    </a>
                                </li>
                                {/*<li className="menu__item">*/}
                                {/*    <a href="/sterh/services" className="menu__link">*/}
                                {/*        Услуги*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li className="menu__item">
                                    <a href="/sterh/contacts" className="menu__link">
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