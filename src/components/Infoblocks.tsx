import closeIcon from '@i/body/close.svg';
import Cast from './UI/Cast';
import Btn from './UI/Btn';
import { useEffect } from 'react';
import useApi from '../hooks/useApi';
import useFilmById from '../store/filmById';
import { getRunTime } from '../store/helper';

function Infoblocks({ active, setInfoblock, movieTvId, type, setId }: { active: boolean, setInfoblock: (x: boolean) => void, movieTvId: number | null, type: 'movie' | 'tv', setId: (value:null) => void }) {
    const { data, getData } = useApi()
    const { getMovie } = useFilmById()

    useEffect(() => {
        getData(`${type}/${movieTvId}?append_to_response=credits`);
    }, [movieTvId]);

    useEffect(() => {
        getMovie(data, type)
    }, [data]);

    function closeInfoblock(){
        setInfoblock(false)
        setId(null)
    }

    return (
        <div className={`infoblock ${active ? 'active' : ''}`}>
            <img src={import.meta.env.VITE_IMG_FULL + data.backdrop_path} alt="" className="infoblock__img" />
            <button className="infoblock__close" onClick={() => closeInfoblock()}>
                <img src={closeIcon} alt="" />
            </button>
            <div className="infoblock__content">
                <h2 className="infoblock__title">{data.title || data.name}</h2>
                <p className="infoblock__text">{data.overview || "Description not found!"}</p>
                <ul className="infoblock__genres">
                    <li>{data.release_date?.split("-")[0] || data.first_air_date?.split("-")[0]}</li>
                    {
                        data.genres?.map((genre: IGenres, index: number) => (
                            <li key={index}>{genre.name}</li>
                        ))
                    }
                    <li>{getRunTime(data.runtime || data.episode_run_time, type)}</li>
                </ul>
                <ul className="infoblock__cast">
                    {
                        data.credits?.cast.map((actor: IActor, index: number) => {
                            if (index < 4) {
                                return <Cast key={index} actor={actor} />
                            }
                        })
                    }
                </ul>
                <Btn type={type} movieTvId={movieTvId}/>
            </div>
        </div>
    )
}

export default Infoblocks