import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import img from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const Swiperrr = () => {
    return (
        <div className=''>
            <Swiper
                navigation={true}
                loop={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className='max-h-[500px]' // Set the maximum height
            >
                <SwiperSlide>
                    <img src={img3} alt="" className='object-cover w-full h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" className='object-cover w-full h-full' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" className='object-cover w-full h-full' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Swiperrr;
