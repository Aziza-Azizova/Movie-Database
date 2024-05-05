import arrowImg from '@i/body/arrow.svg';
import triangleIcon from '@i/body/triangle.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useApi from '../hooks/useApi';
import { useEffect, useState } from 'react';
import useMovieTv from '../store/MovieTv';
import { Link } from 'react-router-dom';
import Infoblocks from './Infoblocks';


function Slider({ type }: { type: string }) {
    const { data, getData }: { data: IUpcoming[], getData: (url: string) => void } = useApi();
    const { getMovieTv } = useMovieTv();
    const [infoblock, setInfoblock] = useState(false);
    const [id, setId] = useState<number | null>(null);

    function clickedSlide(id: number) {
        setInfoblock(true);
        const slideId = data.filter((item: any) => item.id === id);
        setId(slideId[0].id);
    }

    const options = {
        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 5
        },

    }

    useEffect(() => {
        getData(`${type}/popular`)
    }, [])

    useEffect(() => {
        getMovieTv(data, type)
    }, [data])

    return (
        <div className='slider'>
            <h2 className="slider__title">
                {type === 'movie' ? 'Фильмы' : 'Сериалы'} <img src={arrowImg} alt="Arrow" />
            </h2>
            <Swiper slidesPerView={5} spaceBetween={25} breakpoints={options} navigation={true} modules={[Navigation]} className="mySwiper slider__swiper">
                {
                    data.map((movie: any, index: number) => {
                        return (
                            <SwiperSlide onClick={() => clickedSlide(movie.id)} key={index} className={`${id === movie.id ? 'triangle' : ''}`}>
                                <div className="slider__slide">
                                    <img src={import.meta.env.VITE_IMG + movie.poster_path} alt="" className="slider__img" />
                                </div>
                                {id === movie.id && <img src={triangleIcon} alt="" className="triangle__icon" />}
                            </SwiperSlide>
                        )
                    })
                }
                <SwiperSlide className='slider__slide'>
                    <Link to={`/${type}`}>
                        <img src={arrowImg} alt="" className="slider__icon" />
                        Все {type === 'movie' ? 'фильмы' : 'сериалы'}
                    </Link>
                </SwiperSlide>
            </Swiper>
            {
                infoblock && <Infoblocks active={infoblock} setInfoblock={setInfoblock} movieTvId={id} type={type} setId={setId}/>
            }
        </div>
    )
}

export default Slider