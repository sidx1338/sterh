import React from "react";
import Header from "../../components/Header/Header.jsx";
import './Objects.scss'
import ObjectList from "../../components/ObjectList/ObjectList.jsx";
import Footer from "../../components/Footer/Footer.jsx";




const Objects = () => {
     return (
      <div>
          <Header/>
          <ObjectList/>
          <Footer/>
      </div>
     )
}

export  {Objects}
