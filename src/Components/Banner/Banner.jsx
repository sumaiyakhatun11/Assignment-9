import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.jpg';
import img4 from '../../assets/img4.jpg';

const Banner = () => {
    return (
        <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Swiper
                navigation
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                loop
                modules={[Navigation, Autoplay, Pagination]}
                className="w-full h-full"
            >

                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={img1}
                            alt="Game 1"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={img2}
                            alt="Game 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative w-full h-full">
                        <img
                            src={img4}
                            alt="Game 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
