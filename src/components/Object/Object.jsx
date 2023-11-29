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
                <Card sx={{ maxWidth: 400 }}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={object.image}
                    />
                        <h2>{object.name}</h2>
                        <p>{object.customer}</p>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    );
};

export default Object;