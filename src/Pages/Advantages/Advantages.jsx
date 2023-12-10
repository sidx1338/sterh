// import React from "react";
// import Header from "../../components/Header/Header.jsx";
// // import SwipeableTextMobileStepper from "../../components/Slider/Slider.jsx";
// import Footer from "../../components/Footer/Footer.jsx";
//
// const Advantages = () => {
//      return (
//       <div>
//           <Header/>
//           {/*<SwipeableTextMobileStepper/>*/}
//
//           <Footer/>
//       </div>
//      )
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Form} from "../../components/Form/Form.jsx";

export default function Advantages() {
     const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
          setOpen(true);
     };

     const handleClose = () => {
          setOpen(false);
     };

     return (
         <React.Fragment>
              <Button variant="outlined" onClick={handleClickOpen}>
                   Open form dialog
              </Button>
              <Dialog  open={open} onClose={handleClose}>
                   <DialogContent>
                        <Form/>
                   </DialogContent>
                   <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Subscribe</Button>
                   </DialogActions>
              </Dialog>
         </React.Fragment>
     );
}

export {Advantages}

