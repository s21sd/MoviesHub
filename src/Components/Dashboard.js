import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import axios from 'axios';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Card from '../Cards/Card'; // Ensure this path is correct

export default function Dashboard() {
    const [movies, setMovies] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://movies-api14.p.rapidapi.com/movies',
        headers: {
            'x-rapidapi-key': '720245f4bfmsha05ea578a776e3dp123fd5jsn247d215c36ba',
            'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
        }
    };

    const getAllTheMovies = async () => {
        try {
            const response = await axios.request(options);
            console.log('API Response:', response.data); // Log the API response
            // Assuming the response data structure, adjust it based on actual response
            const moviesArray = Array.isArray(response.data) ? response.data : response.data.movies || [];
            setMovies(moviesArray);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };


    useEffect(() => {
        getAllTheMovies();
    }, []);

    return (
        <div>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{ margin: 'auto' }}>
                    <img style={{ width: '95%' }} src='https://t4.ftcdn.net/jpg/06/23/35/81/360_F_623358173_0pj1QXhNXjrDvldkrBvI6Q2SwWIVeChC.webp' height={400} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ width: '95%' }} src='https://t3.ftcdn.net/jpg/07/06/20/68/360_F_706206858_LvvmO3J7dJtz6y3AIuGJ2wXZ86HfLG1G.webp' height={400} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ width: '95%' }} src='https://t4.ftcdn.net/jpg/07/44/72/69/240_F_744726959_dCQ1KLA4QT9fgw37uYc1INysP9LIytdI.jpg' height={400} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ width: '95%' }} src='https://t3.ftcdn.net/jpg/05/26/62/34/240_F_526623406_z7tu7Srp7ZuCvYs6RzDmsrD75EUEA3tw.jpg' height={400} alt='banner' />
                </SwiperSlide>
                <SwiperSlide>
                    <img style={{ width: '95%' }} src='https://t3.ftcdn.net/jpg/04/61/55/22/360_F_461552267_rL1L1a60Mrl8he5AaM0NMssL3t5BOfdf.webp' height={500} alt='banner' />
                </SwiperSlide>
            </Swiper>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px', gap: 20 }}>
                {movies?.map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}
