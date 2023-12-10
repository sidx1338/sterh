import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.scss';
import Left from '../../assets/arrowleft.svg';
import Right from '../../assets/arrowright.svg';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

import slide_image_1 from '../../assets/genesis.png';
import slide_image_2 from '../../assets/locman.jpg';
import slide_image_3 from '../../assets/lada.png';
import slide_image_4 from '../../assets/ozernyi.png';
import slide_image_5 from '../../assets/genesis.png';
import slide_image_6 from '../../assets/locman.jpg';
import slide_image_7 from '../../assets/lada.png';
import slide_image_8 from '../../assets/ozernyi.png';

export default function Slider() {
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
                    modifier: 2,
                    slideShadows: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    //disableOnInteraction: true
                }}
                loop={true}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className=""
            >
                <SwiperSlide>
                    <img src={slide_image_1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_8} />
                </SwiperSlide>
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <img src={Left}/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <img src={Right}/>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </>
    );
}
