import React from "react";
import './CompInfo.scss'
import Header from "../../components/Header/Header.jsx";
import BasicTabs from "../../components/Tabs/Tabs.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const CompInfo = () => {
    return (
      <div>
        <Header/>
          <div className="info__container">
              <div className="info__top">
                  <h1 className="info__main_title">СТРОИТЕЛЬНАЯ КОМПАНИЯ <span>"СТЕРХ"</span></h1>
                  <BasicTabs/>
              </div>
              <div className="services__container">
                  <h2 className="info__services_title">Наши услуги</h2>
                  <div>
                      <h3 className="info__services">Строительство жилых и коммерческих зданий</h3>
                      <ul className="info__services_subtitle">
                          <li>Строительство домов и коттеджей</li>
                          <li>Строительство многоквартирных домов</li>
                          <li>Реконструкция и ремонт существующих зданий</li>
                      </ul>

                      <h3 className="info__services">Отделочные работы</h3>
                      <ul className="info__services_subtitle">
                          <li>Внутренняя отделка помещений</li>
                          <li>Наружная отделка фасадов зданий</li>
                      </ul>

                      <h3 className="info__services">Ландшафтный дизайн и благоустройство</h3>
                      <ul className="info__services_subtitle">
                          <li>Создание ландшафтных элементов</li>
                          <li>Устройство дорожек, площадок</li>
                      </ul>

                      <h3 className="info__services">Работы по строительному управлению</h3>
                      <ul className="info__services_subtitle">
                          <li>Организация и управление строительным процессом</li>
                      </ul>
                  </div>
              </div>
              <div className="advantages__container">
                  <h2 className="info__services_title">Преимущества</h2>
                  <ul className="info__advantages">
                      <li className="info__advantages-li">Высокий стандарт качества</li>
                      <li className="info__advantages-li">Долгосрочные отношения с клиентами</li>
                      <li className="info__advantages-li">Благоприятная репутация</li>
                      <li className="info__advantages-li">Индивидуальные подходы</li>
                      <li className="info__advantages-li">Широкий спектр услуг</li>
                      <li className="info__advantages-li">Управление строительными процессами</li>
                      <li className="info__advantages-li">Инновации и современные технологии</li>
                      <li className="info__advantages-li">Ландшафтный дизайн и благоустройство</li>
                      <li className="info__advantages-li">Профессиональные специалисты</li>
                      <li className="info__advantages-li">Безопасность на первом месте</li>
                  </ul>
              </div>
          </div>
          <Footer/>
      </div>
    )
}

export {CompInfo}
