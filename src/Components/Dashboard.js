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
    // Setting all my env variables 🧑‍💻🚀
    const REACT_APP_MOVIE_URL = process.env.REACT_APP_MOVIE_URL;
    const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
    const REACT_APP_HOST_NAME = process.env.REACT_APP_HOST_NAME;
    const [movies, setMovies] = useState([]);

    const options = {
        method: 'GET',
        url: `${REACT_APP_MOVIE_URL}/movies`,
        headers: {
            'x-rapidapi-key': `${REACT_APP_API_KEY}`,
            'x-rapidapi-host': `${REACT_APP_HOST_NAME}`
        }
    };

    const getAllTheMovies = async () => {
        try {
            const response = await axios.request(options);
            console.log('API Response:', response.data); // Log the API response
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
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
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


            {/* // Mapping all the response that is coming from the api 🚀🚀  */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '20px', marginRight: '60px', gap: 20 }}>
                {movies?.map((movie, index) => (
                    // Using card to show all the movies ✅
                    <Card key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}
