import React from "react";
import  "./MainVideo.scss"
import test from "../../assets/test.mp4"
import {Form} from "../Form/Form.jsx";
import {Dialog} from "@mui/material";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";

const MainVideo = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
        <div className="intro">
            <div className="video">
                <video className="video__media" src={test} autoPlay loop muted/>
                     <div className="intro__container">
                         <div className="content">
                             <h1 className="content__title">Строительство жилых и не жилых зданий <br/> в <span>Республике Крым</span></h1>
                             <p className="content__description">Оставь заявку и получи <span>скидку 10%</span> на услуги компании</p>
                             <Button className="main_btn" variant="outlined" onClick={handleClickOpen}>
                                 <div className="btn_text">Оставить заявку</div>
                             </Button>
                             <Dialog open={open} onClose={handleClose}>
                                 <DialogContent>
                                     <Form/>
                                 </DialogContent>
                             </Dialog>
                         </div>
                     </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default MainVideo