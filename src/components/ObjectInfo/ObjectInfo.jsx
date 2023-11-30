import * as React from 'react';
import {useParams} from "react-router-dom";
import './ObjectInfo.scss'
import Squades from "../../assets/squades.svg";
import {objects} from "../../objects.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

const ObjectInfo = () => {

    const { title } = useParams();
    const object = objects.find(obj => obj.title === title);

    return (
        <div>
            <Header/>
                <div className="object_info">
                    <div className="object_info__container">
                        <h2 className="object__title">
                            {/*<a href="/sterh/objects">*/}
                            {/*    <img className="squades__icon" src={Squades}/>*/}
                            {/*</a>*/}
                            {object.fullname}
                        </h2>
                      <div className="object__obertka">
                            <div className="object__tabs">
                                <p className="object__tab">Заказчик: <br/><span>{object.customer}</span></p>
                                <p className="object__tab">Месторасположение объекта: <br/><span>{object.location}</span></p>
                                <p className="object__tab">Тип контракта: <br/><span>{object.contract}</span></p>
                                <p className="object__tab">Сроки: <br/><span>{object.time}</span></p>
                            </div>
                            <div className="object__card">
                                <Card className="object__image">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="310"
                                            image={object.image}
                                        />
                                        </CardActionArea>
                                </Card>
                            </div>
                      </div>
                        <div className="contacts__video">
                            <iframe
                                width="100%" height="600"
                                src={`https://www.youtube.com/embed/${object.videocode}`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default ObjectInfo