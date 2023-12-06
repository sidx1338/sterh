import React from "react";
import './BurgerMenu.scss';

const BurgerMenu = ({ isActive, onClick }) => {
    return (
            <div
                onClick={() => onClick()}
                className={`burger
                ${isActive === true ? "burger_active" : ""}
                ${isActive === false ? "burger" : ""}
                `}
                 >
                <span className="burger__line burger__line_first"></span>
                <span className="burger__line burger__line_second"></span>
                <span className="burger__line burger__line_third"></span>
                <span className="burger__line burger__line_fourth"></span>
            </div>

            // <button onClick={() => onClick()}
            //      className="burger"
            //      {active ? "modal active" : "modal"}
            // >
            //     <span className="burger__line burger__line_first"></span>
            //     <span className="burger__line burger__line_second"></span>
            //     <span className="burger__line burger__line_third"></span>
            //     <span className="burger__line burger__line_fourth"></span>
            // </button>
            )
}


export default BurgerMenu;