import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

 import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './PartnerSlider.scss';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import slide_image_1 from '../../assets/logo_genesis.png';
import slide_image_2 from '../../assets/logo_ozerniy.png';
import slide_image_3 from '../../assets/phoshan_logo.png';
import slide_image_4 from '../../assets/logo_lada.svg';
import slide_image_5 from '../../assets/logo__olegor.png';

export default function PartnerSlider() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 10,
                }}
                autoplay={{
                    delay: 3000,
                    //disableOnInteraction: true
                }}
                 loop={true}
                // pagination={{ el: '.swiper-pagination', clickable: true }}
                 modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide">
                    <a href="https://xn----7sbkiambaglcj1ag7d.xn--p1ai/" target="_blank"><img className="swiper-slide-image-genesis" src={slide_image_1} alt="logo"/></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://xn--e1adhpco2f.com/" target="_blank"><img className="swiper-slide-image-ozerniy" src={slide_image_2} alt="logo"/></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://foshan.com.ru/" target="_blank"><img className="swiper-slide-image-foshan" src={slide_image_3} alt="logo"/></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://krym.lada.ru/" target="_blank"><img className="swiper-slide-image-lada" src={slide_image_4} alt="logo"/></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://olegorrk.ru/" target="_blank"><img className="swiper-slide-image-olegor" src={slide_image_5} alt="logo"/></a>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
