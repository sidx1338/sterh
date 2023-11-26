import React from 'react';
import '/src/index.scss'
import '/src/App.scss'
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ObjectList from "./components/ObjectList/ObjectList.jsx";
import ImageSlider from "./components/ImageSlider/ImageSlider.jsx";



function App() {

    const images = [
        '/src/assets/genesis.jpg',
        '/src/assets/genesis.jpg',
        '/src/assets/genesis.jpg',
        // Добавьте больше изображений, по мере необходимости
    ];

  return (
      <>
        <div className="App">
            <Header/>
            <MainVideo/>
                <div className="project__container">
                    <h2 className="project__title">Наши проекты</h2>
                    <p className="project__subtitle">Мы нацелены на достижение результата, который приносит удовлетворение нашим клиентам. Доверие заказчиков и высокая репутация вдохновляют нас реализовывать проекты с выдающимся качеством. Мы постоянно ищем новые, максимально эффективные подходы в области строительства.</p>
                </div>
            <ImageSlider images={images} />
                <a href="/objects">
                    <button>Смотреть все объекты</button>
                </a>
            <div className="project__container">
                <h2 className="project__title">Строительная компания "Стерх"</h2>
                <p className="project__subtitle">Мы стремимся к достижению результатов, которые принесут удовлетворение нашим клиентам. Поддержание доверия клиентов и превосходная репутация являются нашими мотиваторами для реализации проектов на самом высоком уровне.</p>
                <a href="/info">
                    <button>Подробнее о компании</button>
                </a>
            </div>
            <Footer/>
        </div>
      </>
  )
}

export default App
