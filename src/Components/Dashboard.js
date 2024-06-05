"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Cardcomponent from '../Cards/Card';
import bannerone from '../assets/bannerone.jpg'
export default function Dashboard() {
    return (
        <div>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{
                    margin: 'auto'
                }}>
                    <img style={{
                        width: '95%'
                    }} src='https://t4.ftcdn.net/jpg/06/23/35/81/360_F_623358173_0pj1QXhNXjrDvldkrBvI6Q2SwWIVeChC.webp' height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{
                        width: '95%'
                    }} src='https://t3.ftcdn.net/jpg/07/06/20/68/360_F_706206858_LvvmO3J7dJtz6y3AIuGJ2wXZ86HfLG1G.webp' height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{
                        width: '95%'
                    }} src='https://t4.ftcdn.net/jpg/07/44/72/69/240_F_744726959_dCQ1KLA4QT9fgw37uYc1INysP9LIytdI.jpg' height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{
                        width: '95%'
                    }} src='https://t3.ftcdn.net/jpg/05/26/62/34/240_F_526623406_z7tu7Srp7ZuCvYs6RzDmsrD75EUEA3tw.jpg' height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{
                        width: '95%'
                    }} src='https://t3.ftcdn.net/jpg/04/61/55/22/360_F_461552267_rL1L1a60Mrl8he5AaM0NMssL3t5BOfdf.webp' height={500} />
                </SwiperSlide>

            </Swiper>


        </div>
    );
}
