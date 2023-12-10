import * as React from 'react';
import { useInView } from "react-intersection-observer";
import './ObjectList.scss';
import {objects} from "../../objects.jsx";
import Object from "../Object/Object.jsx";


export default function ObjectList() {

    const {ref:ref1, inView:inView1} = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    return (
       <div className="objects">
           <div ref={ref1} className={`objects__container-title ${inView1 ? 'active' : ''}`}>Наши работы</div>
        <div className="objects__container">

            {objects.map((object) => (
                <Object className="object" key={object.id} object={object} />
            ))}
        </div>
       </div>
    );
}

export {ObjectList};

