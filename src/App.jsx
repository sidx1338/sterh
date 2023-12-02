import React from 'react';
import '/src/index.scss'
import '/src/App.scss'
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ObjectList from "./components/ObjectList/ObjectList.jsx";
import ImageSlider from "./components/ImageSlider/ImageSlider.jsx";



function App() {



  return (
      <>
        <div className="App">
            <div>
            <Header/>
            <MainVideo/>
            <Footer/>
        </div>
        </div>
      </>
  )
}

export default App
