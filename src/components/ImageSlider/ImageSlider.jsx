import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
    <div className="slick-next" onClick={onClick}>
        <span>&gt;</span>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="slick-prev" onClick={onClick}>
        <span>&lt;</span>
    </div>
);

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="slider-container">
            <Slider {...settings} className="slick-slider">
                {images.map((image, index) => (
                    <div key={index} className="slick-slide">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
