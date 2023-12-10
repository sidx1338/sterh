import React from 'react';
import { Link } from 'react-router-dom';
import './Object.scss';
import {CardActionArea} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const Object = ({ object }) => {
    return (
        <div className="object__card">
            <Link to={`/sterh/objects/${object.title}`}>
                        <Card>
                            <CardActionArea>
                                <div className="hover-text-one">
                                    <figure className="effect-text-three">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={object.image}
                                    />
                                        <figcaption>
                                            <div className="obj_fullname-back">
                                            <h3><span>{object.fullname}</span></h3>
                                            </div>
                                            <p>{object.contract}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                                        {/*<h3>{object.title}</h3>*/}
                                        {/*<p>Текст</p>*/}
                            </CardActionArea>
                        </Card>
            </Link>
        </div>
    );
};

export default Object;