import { useEffect } from "react";
import useApi from "../hooks/useApi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


function TopRated() {
    const { data, getData } = useApi()

    useEffect(() => {
        getData(`/movie/top_rated`);
    }, []);

    const options = {

        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 1
        },
        900: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
        1600: {
            slidesPerView: 4
        }
    }

    console.log("data", data);
    

    return (
        <div className="toprated">
            <h2 className="toprated__title">ТОП<span>10</span></h2>
            <Swiper spaceBetween={23} slidesPerView={4} breakpoints={options} navigation={true} modules={[Navigation]} className="mySwiper slider__swiper">
                {
                    data.map((movie: any, index: number) => {
                        if(index < 10) {
                            return (
                                <SwiperSlide key={index} >
                                    <div className="toprated__slide">
                                        <span className="toprated__slide-num">{index+1}</span>
                                        <img src={import.meta.env.VITE_IMG_FULL + movie.backdrop_path} alt="" className="toprated__img" />
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    })
                }
            </Swiper>
        </div>
    )
}

export default TopRated