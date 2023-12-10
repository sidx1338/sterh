import React from "react";
import { useInView } from "react-intersection-observer";
import './Contacts.scss'
import Header from "../../components/Header/Header.jsx";
import Phone from "../../assets/01.svg";
import Email from "../../assets/02.svg"
import Rekvizit from "../../assets/03.svg"
import Footer from "../../components/Footer/Footer.jsx";
import {Form} from "../../components/Form/Form.jsx";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";

const Contacts = () => {

    const {ref:ref1, inView:inView1} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const {ref:ref2, inView:inView2} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const {ref:ref3, inView:inView3} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const {ref:ref4, inView:inView4} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const {ref:ref5, inView:inView5} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

     return (
     <div>
       <Header/>
         <div className="background">
         <div className="contacts">
         <div className="contacts__container">
             <div className="contacts__body">
             <h1 ref={ref1} className={`contacts__title ${inView1 ? 'active' : ''}`}>Контакты</h1>
                     <p ref={ref2} className={`contacts__adres ${inView2 ? 'active' : ''}`}>Адрес: 295047, Республика Крым, <br/>город Симферополь, ул. Героев Сталинграда, д. 21, кв. 53</p>
                     <p ref={ref3} className={`contacts__grafik ${inView3 ? 'active' : ''}`}>График работы: <br/>понедельник - суббота <br/>с <span>9:00</span> до <span>18:00</span></p>
                     <div ref={ref4} className={`contacts__obertka ${inView4 ? 'active' : ''}`}>
                     <div className="contacts__actions">
                         <a href="tel:79786883771"><img className="contacts__icon" src={Phone} alt="phone"/></a>
                         <a href="tel:79786883771" className="contacts__number">+7 978-688-37-71</a>
                     </div>
                     <div className="contacts__actions">
                         <a href="mailto:strojart@list.ru"><img className="contacts__icon" src={Email} alt="email"/></a>
                         <a href="mailto:strojart@list.ru" className="contacts__email">strojart@list.ru</a>
                     </div>
                     <div className="contacts__actions">
                         <a href="../../assets/carta_partnera.pdf"><img className="contacts__icon" src={Rekvizit} alt="rekvizit"/></a>
                         <a href="../../assets/carta_partnera.pdf" className="contacts__rekvizit">Реквизиты</a>
                     </div>
                     </div>
             </div>

             <div className="contacts__backconnection">
                 <h1 ref={ref5} className={`contacts__connection ${inView5 ? 'active' : ''}`}>Обратная связь</h1>
                 <Form/>
             </div>
         </div>
       </div>
             <div className="map__container">
                <MapComponent/>
             </div>
         </div>
         <Footer/>
     </div>
     )
}

export {Contacts}

