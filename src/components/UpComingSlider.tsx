import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Btn from './UI/Btn';
import useUpcoming from '../store/upcoming';
import useApi from '../hooks/useApi';
import { useAxiosInterceptor } from '../api/ClientApi';
import Loading from './UI/Loading';

export default function UpComingSlider() {
    const [nextSlide, setNextSlide] = useState(1)
    
    const { upcoming, getUpcoming } = useUpcoming();
    const { loading } = useAxiosInterceptor()
    const { data, getData } = useApi();

    useEffect(() => {
        getData('/movie/upcoming')
    }, [])
    
  
    useEffect(() => {
      getUpcoming(data);
    }, [data]);

    const line = useRef<HTMLDivElement | null>(null);
    const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
        if (line.current) {
            line.current.style.width = `${(1 - progress) * 100}%`;
        }
    };

    function getNextSlideIndex(swiper:any){       
        if(swiper.activeIndex === 19){
            setNextSlide(0)
        } 
        else {
            setNextSlide(swiper.activeIndex + 1)
        }
    }
    
    if(loading) return <Loading />
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation={
                    { nextEl: '.upcoming__progress' }
                }
                // loop={true}
                onSlideChange={getNextSlideIndex}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper upcoming"
            >
                {
                    upcoming.map((film:IUpcoming, index:number) => (
                        <SwiperSlide key={index} className='upcoming__slide'>
                            <img src={import.meta.env.VITE_IMG_FULL + film.backdrop_path} className='upcoming__slide-img' alt="" />
                            <h2 className="upcoming__slide-title">{film.title}</h2>
                            <p className="upcoming__slide-text">{film.overview || 'Description not found'}</p>
                            <Btn type='movie' movieTvId={film.id}/>
                        </SwiperSlide>
                    ))
                }

                <div className="autoplay-progress upcoming__progress" slot="container-end">
                    <span className="upcoming__prodress-text">Следующий</span>
                    <p className="upcoming__progress-title">{upcoming[nextSlide]?.title}</p>
                    <img src={import.meta.env.VITE_IMG + upcoming[nextSlide]?.backdrop_path} alt="" className="upcoming__progress-img" />
                    <div className="line" ref={line}></div>
                </div>
            </Swiper>
        </>
    );
}
