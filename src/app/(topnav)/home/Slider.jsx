"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Autoplay } from "swiper";

import image from '../../../../public/media/image.webp'
import image1 from '../../../../public/media/image1.webp'
import image2 from '../../../../public/media/image2.webp'
import image3 from '../../../../public/media/image3.webp'
import image4 from '../../../../public/media/image4.webp'
import image5 from '../../../../public/media/image5.webp'
import image6 from '../../../../public/media/image6.webp'
import image7 from '../../../../public/media/image7.webp'
import image8 from '../../../../public/media/image8.webp'
import Image from "next/image";

const Slider = () => {
    return (
        <div>
            <div className='text-center mx-10'>
                <h1 className='md:text-2xl font-bold'>Top Brands on ZET</h1>
                <p className='md:text-lg'>We are trusted by best brand in the country</p>
                <div className="my-10">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1000
                        }}
                        navigation={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="rounded-lg p-2 border"> <Image src={image} alt=""></Image> </SwiperSlide>
                        <SwiperSlide className="rounded-lg p-2 border"> <Image src={image1} alt=""></Image> </SwiperSlide>
                        <SwiperSlide className="rounded-lg p-2 border"> <Image src={image2} alt=""></Image> </SwiperSlide>
                        <SwiperSlide className="rounded-lg p-2 border"> <Image src={image3} alt=""></Image> </SwiperSlide>
                        <SwiperSlide className="rounded-lg p-2 border"> <Image src={image4} alt=""></Image> </SwiperSlide>
                        <SwiperSlide className="rounded-lg p-2 border"> <Image src={image5} alt=""></Image> </SwiperSlide>
                        <SwiperSlide className="rounded-lg p-2 border"> <Image src={image6} alt=""></Image> </SwiperSlide>
                        <SwiperSlide className="rounded-lg p-2 border"> <Image src={image7} alt=""></Image> </SwiperSlide>
                        <SwiperSlide className="rounded-lg p-2 border"> <Image src={image8} alt=""></Image> </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;