import React from "react";
import "./Footer.scss";
import Logo from '../../assets/logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <div className="footer__logo">
                        <a href="/sterh" className="footer__logo-link">
                            <img src={Logo} alt="logo" width={120}/>
                        </a>
                    </div>
                    <div className="footer__actions">
                        <div className="footer__text">ООО СК "СТЕРХ"</div>
                    </div>
                    <div className="footer__actions">
                        {/*<img className="header__phone" src={Phone} alt="phone"/>*/}
                        <a href="tel:79786883771" className="footer__number">+7 978-688-37-71</a>
                    </div>
                    <div className="footer__actions">
                        <a href="#" className="footer__email">strojart@list.ru</a>
                    </div>
                    <div className="footer__actions">
                        <a href="#" className="footer__email">sk.sterh@mail.ru</a>
                    </div>
                </div>
                <div className="footer__info">
                    <ul>
                        <li className="footer__text">Строительство жилых и нежилых зданий</li>
                        <li className="footer__text">Строительство домов и коттеджей</li>
                        <li className="footer__text">Строительство многоквартирных домов</li>
                        <li className="footer__text">Реконструкция и ремонт существующих зданий</li>
                    </ul>
                </div>
                <div className="footer__info">
                    <ul>
                        <li className="footer__text">Отделочные работы</li>
                        <li className="footer__text">Внутренняя отделка помещений</li>
                        <li className="footer__text">Наружная отделка фасадов зданий</li>
                    </ul>
                </div>

                <div className="footer__menu menu">
                    <nav className="menu__nav">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <a href="/sterh/info" className="menu__link">
                                    О компании
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/sterh/advantages" className="menu__link">
                                    Преимущества
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/sterh/objects" className="menu__link">
                                    Объекты
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/sterh/services" className="menu__link">
                                    Услуги
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/sterh/contacts" className="menu__link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;