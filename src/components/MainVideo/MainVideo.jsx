import React from "react";
import  "./MainVideo.scss"
import test from "../../assets/test.mp4"
import {Form} from "../Form/Form.jsx";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.svg";

const MainVideo = () => {

    const [modalActive, setModalActive] = React.useState(false);

    return (
        <div className="intro">
            <div className="main__video">
            <video className="video__media" src={test} playsInline autoPlay loop muted/>
            <div className="first">
                <div className="content__title">
                        <img src={Logo} alt="logo" width={400}/>
                </div>
                {/*<h1 className="content__title">Строительство жилых и не жилых зданий <br/> в <span>Республике Крым</span></h1>*/}
                <p className="content__description">Оставь заявку и получи <span>скидку 10%</span> на услуги компании</p>
                <button className="main_btn" onClick={() => setModalActive(true)}>Оставить заявку</button>
                <ModalWindow active={modalActive} setActive={setModalActive}>
                    <Form/>
                </ModalWindow>
            </div>
            </div>
                     <div className="intro__container">
                         <div className="content">
                             <h2 className="project__title">Наши проекты</h2>
                             <p className="project__subtitle">Мы нацелены на достижение результата, который приносит удовлетворение нашим клиентам. Доверие заказчиков и высокая репутация вдохновляют нас реализовывать проекты с выдающимся качеством. Мы постоянно ищем новые, максимально эффективные подходы в области строительства.</p>
                             {/*<ImageSlider images={images} />*/}
                                 <Link to={`/sterh/objects`}>
                                     <button className="obj_btn">Смотреть все объекты</button>
                                 </Link>
                                 <h2 className="project__title">Строительная компания <span>"СТЕРХ"</span></h2>
                                 <p className="project__subtitle">Мы стремимся к достижению результатов, которые принесут удовлетворение нашим клиентам. Поддержание доверия клиентов и превосходная репутация являются нашими мотиваторами для реализации проектов на самом высоком уровне.</p>
                             <Link to={`/sterh/info`}>
                                     <button className="ocomp_btn">Подробнее о компании</button>
                             </Link>
                         </div>
                     </div>

            {/*</div>*/}
        </div>
    )
}

export default MainVideo