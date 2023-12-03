import React from 'react';
import '/src/index.scss'
import '/src/App.scss'
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
      <>
        <div className="App">
             <Header/>
                 <MainVideo/>
             <Footer/>
        </div>
      </>
  )
}

export default App
