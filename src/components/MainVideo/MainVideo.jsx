import React from "react";
import  "./MainVideo.scss"
import test from "../../assets/test.mp4"
import {Form} from "../Form/Form.jsx";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import { useInView } from "react-intersection-observer";
import {Link} from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Slider from "../Slider/Slider.jsx";

const MainVideo = () => {

    const [modalActive, setModalActive] = React.useState(false);

    const {ref:ref, inView:inView} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

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
    const {ref:ref6, inView:inView6} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const {ref:ref7, inView:inView7} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    const {ref:ref8, inView:inView8} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
        <div className="intro">
            <div className="main__video">
            <video className="video__media" src={test} playsInline autoPlay loop muted/>
                <div className="effects"></div>
                <div className="video-bg__content">
                        <img ref={ref} className={`main__logo ${inView ? 'active' : ''}`} src={Logo} alt="logo"/>

                {/*<h1 className="content__title">Строительство жилых и не жилых зданий <br/> в <span>Республике Крым</span></h1>*/}
                {/*<p className="content__description">Оставь заявку и получи <span>скидку 10%</span> на услуги компании</p>*/}
                {/*<button className="main_btn" onClick={() => setModalActive(true)}>Оставить заявку</button>*/}
                </div>
            </div>
                     <div className="intro__container">
                         <div className="content">
                             <div ref={ref1} className={`nashi_project ${inView1 ? 'active' : ''}`}>
                                 <h2 ref={ref2} className={`project__title ${inView2 ? 'active' : ''}`}><span>Наши проекты</span></h2>
                             <p ref={ref3} className={`project__subtitle ${inView3 ? 'active' : ''}`}>Мы нацелены на достижение результата, который приносит удовлетворение нашим клиентам. Доверие заказчиков и высокая репутация вдохновляют нас реализовывать проекты с выдающимся качеством.</p>
                             </div>
                                 <Slider/>
                                 <Link to={`/sterh/objects`}>
                                     <button ref={ref4} className={`obj_btn ${inView4 ? 'active' : ''}`}>Смотреть все объекты</button>
                                 </Link>
                             {/*<div className="backcon__container">*/}
                             {/*    <h2 className="project__title"><span>Cвяжитесь с нами!</span></h2>*/}
                             {/*    <button className="main_btn" onClick={() => setModalActive(true)}>Оставить заявку</button>*/}
                             {/*    <ModalWindow active={modalActive} setActive={setModalActive}>*/}
                             {/*        <Form/>*/}
                             {/*    </ModalWindow>*/}
                             {/*</div>*/}

                             <div ref={ref5} className={`ocomp_link ${inView5 ? 'active' : ''}`}>
                                 <h2 ref={ref6} className={`project__title ${inView6 ? 'active' : ''}`}>Строительная компания <span>"СТЕРХ"</span></h2>
                                 <p ref={ref7} className={`project__subtitle ${inView7 ? 'active' : ''}`}>Мы стремимся к достижению результатов, которые принесут удовлетворение нашим клиентам. Поддержание доверия клиентов и превосходная репутация являются нашими мотиваторами для реализации проектов на самом высоком уровне.</p>
                             <Link to={`/sterh/info`}>
                                     <button ref={ref8} className={`ocomp_btn ${inView8 ? 'active' : ''}`}>Подробнее о компании</button>
                             </Link>
                             </div>
                         </div>
                     </div>

            {/*</div>*/}
        </div>
    )
}

export default MainVideo