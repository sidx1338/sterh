import * as React from 'react';
import './ObjectList.scss';
import {objects} from "../../objects.jsx";
import Object from "../Object/Object.jsx";


export default function ObjectList() {

    return (
       <div className="objects">
           <div className="objects__container-title">Наши работы</div>
        <div className="objects__container">

            {objects.map((object) => (
                <Object className="object" key={object.id} object={object} />
            ))}
        </div>
       </div>
    );
}

export {ObjectList};

