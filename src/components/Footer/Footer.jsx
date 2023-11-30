import React from "react";
import "./Footer.scss";
import Logo from '../../assets/logo.svg';

function Footer() {
    let currentYear = new Date().getFullYear();
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
                        <div className="">ООО СК "СТЕРХ"</div>
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
                <div className="footer__services">
                        <p className="footer__text">Строительство жилых и нежилых зданий</p>
                        <p className="footer__text">Строительство коттеджей</p>
                        <p className="footer__text">Строительство многоквартирных домов</p>
                        <p className="footer__text">Реконструкция и ремонт существующих зданий</p>
                        <p className="footer__text">Отделочные работы</p>
                </div>

                <div className="footer__menu-links">
                        <ul className="footer__menu-list">
                            <li className="footer__menu-item">
                                <a href="/sterh/info" className="footer__nav-link">
                                    О компании
                                </a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="/sterh/objects" className="footer__nav-link">
                                    Объекты
                                </a>
                            </li>
                            <li className="footer__menu-item">
                                <a href="/sterh/contacts" className="footer__nav-link">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="footer__low">{currentYear} © Все права защищены</div>
        </footer>
    );
}

export default Footer;