import React from "react";
import './Footer.scss'
import Logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__container">
                <div className="footer__info">
                <div className="footer__logo">
                    <a href="/" className="footer__logo-link">
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
                    <div>
                        Строительство жилых и коммерческих зданий
                        <ul>
                            <li>Строительство домов и коттеджей</li>
                            <li>Строительство многоквартирных домов</li>
                            <li>Реконструкция и ремонт существующих зданий</li>
                        </ul>
                    </div>
                    <div>
                        Отделочные работы
                        <ul>
                            <li>Внутренняя отделка помещений</li>
                            <li>Наружная отделка фасадов зданий</li>
                        </ul>
                    </div>

                <div className="footer__links">
                    <a href="/info" className="footer__link">
                        О компании
                    </a>
                    <a href="/advantages" className="footer__link">
                        Преимущества
                    </a>
                    <a href="/objects" className="footer__link">
                        Объекты
                    </a>
                    <a href="/services" className="footer__link">
                        Услуги
                    </a>
                    <a href="/contacts" className="footer__link">
                        Контакты
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer