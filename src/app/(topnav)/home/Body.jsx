"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./body.css";
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

const body = () => {
    return (
        <div className=''>
            <div className='text-center'>
                <h1 className='md:text-2xl font-bold'>Top Brands on ZET</h1>
                <p className='md:text-lg'>We are trusted by best brand in the country</p>
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
                    <SwiperSlide className="rounded p-2"> <Image src={image}></Image> </SwiperSlide>
                    <SwiperSlide className="rounded p-2"> <Image src={image1}></Image> </SwiperSlide>
                    <SwiperSlide className="rounded p-2"> <Image src={image2}></Image> </SwiperSlide>
                    <SwiperSlide className="rounded p-2"> <Image src={image3}></Image> </SwiperSlide>
                    <SwiperSlide className="rounded p-2"> <Image src={image4}></Image> </SwiperSlide>
                    <SwiperSlide className="rounded p-2"> <Image src={image5}></Image> </SwiperSlide>
                    <SwiperSlide className="rounded p-2"> <Image src={image6}></Image> </SwiperSlide>
                    <SwiperSlide className="rounded p-2"> <Image src={image7}></Image> </SwiperSlide>
                    <SwiperSlide className="rounded p-2"> <Image src={image8}></Image> </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default body;