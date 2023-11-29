import React from "react";
import './Contacts.scss'
import Header from "../../components/Header/Header.jsx";
import Phone from "../../assets/01.svg";
import Email from "../../assets/02.svg"
import Rekvizit from "../../assets/03.svg"
import Footer from "../../components/Footer/Footer.jsx";
import {Form} from "../../components/Form/Form.jsx";
// import MapComponent from "../../components/MapComponent/MapComponent.jsx";


const Contacts = () => {
     return (
     <div>
       <Header/>
         <div className="contacts">
         <div className="contacts__container">
             <div className="contacts__body">
             <h1 className="contacts__title">Контакты</h1>
             <p className="contacts__adres">Адрес: 295047, Республика Крым, <br/>город Симферополь, ул. Героев Сталинграда, д. 21, кв. 53</p>
                 <p className="contacts__grafik">График работы: <br/>понедельник - суббота <br/>с <span>9:00</span> до <span>18:00</span></p>
                 <div className="contacts__obertka">
                 <div className="contacts__actions">
                     <img className="contacts__icon" src={Phone} alt="phone"/>
                     <a href="tel:79786883771" className="contacts__number">+7 978-688-37-71</a>
                 </div>
                 <div className="contacts__actions">
                     <img className="contacts__icon" src={Email} alt="email"/>
                     <a href="email-addresses" className="contacts__email">strojart@list.ru</a>
                 </div>
                 <div className="contacts__actions">
                     <img className="contacts__icon" src={Rekvizit} alt="rekvizit"/>
                     <a href="carta_partnera.pdf" className="contacts__rekvizit">Реквизиты</a>
                 </div>
                 </div>
             </div>

             <div className="contacts__backconnection">
                 <h1 className="contacts__connection">Обратная связь</h1>
                 <Form/>
             </div>
         </div>
       </div>
             <div className="map__container">
                {/*<MapComponent/>*/}
             </div>
         <Footer/>
     </div>
     )
}

export {Contacts}

