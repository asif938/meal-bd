import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import slide1 from '../src/assets/1.png';
import slide2 from '../src/assets/2.png';
import slide3 from '../src/assets/3.png';
import slide4 from '../src/assets/4.png';
import slide9 from '../src/assets/9.png';
import slide10 from '../src/assets/10.png';

const Slider = () => {
    return (
        <div className='max-w-[1240px] mx-auto mb-28'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,  // Slide change delay in milliseconds
                    disableOnInteraction: false,  // Continue autoplay after user interaction
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='' src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide9} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide10} alt="" />
                </SwiperSlide>
                
            </Swiper>

            {/* This comment for test */}
        </div>
    );
};

export default Slider;