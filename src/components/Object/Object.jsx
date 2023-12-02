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
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={object.image}
                                    />
                                        {/*<h3>{object.title}</h3>*/}
                                        {/*<p>Текст</p>*/}
                            </CardActionArea>
                        </Card>
            </Link>
        </div>
    );
};

export default Object;