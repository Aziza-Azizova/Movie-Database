import { Link, useParams } from 'react-router-dom';
import useFilmById from '../store/filmById';
import { useEffect } from 'react';
import useApi from '../hooks/useApi';
import { getRunTime } from '../store/helper';
import Cast from '../components/UI/Cast';
import btnImg from '@i/body/trailer.svg';
import Recomendations from './Recomendations';
import Footer from '../components/Footer';

function CurrentFilm() {
    const { getData, data } = useApi()
    let { id, type } = useParams();
    const filmStore = useFilmById();
    const film = filmStore[type];

    console.log(film);


    useEffect(() => {
        getData(`${type}/${id}?append_to_response=credits`)
    }, [])

    useEffect(() => {
        filmStore.getMovie(data, type)
    }, [data])

    return (
        <div>
            <div className='currentFilm'>
                <img src={import.meta.env.VITE_IMG_FULL + data.backdrop_path} alt="" className="currentFilm__img" />
                <img src={import.meta.env.VITE_IMG + film.poster_path} alt="" className="currentFilm__posterImg" />


                <div className="currentFilm__content">
                    <h2 className="currentFilm__title">{film.title || film.name}</h2>
                    <p className="currentFilm__text">{film.overview || "Description not found!"}</p>
                    <ul className="currentFilm__genres">
                        <li>{film.release_date?.split("-")[0] || film.first_air_date?.split("-")[0]}</li>
                        {
                            film.genres?.map((genre: IGenres, index: number) => (
                                <li key={index}>{genre.name}</li>
                            ))
                        }
                        <li>{getRunTime(film.runtime || film.episode_run_time, type)}</li>
                    </ul>
                    <Link to={`/${type}/${film.id}/trailer`} className='btn'> <img src={btnImg} alt="" />Смотерть трейлер</Link>
                </div>
                <p className="currentFilm__heading">В главных ролях</p>
                <ul className="currentFilm__cast">
                    {
                        film.credits?.cast.map((actor: IActor, index: number) => {
                            if (index < 4) {
                                return <Cast key={index} actor={actor} />
                            }
                        })
                    }
                </ul>
            </div>
            <div className="currentFilmInfo">
                <table>
                    <tr>
                        <th>Бюджет</th>
                        <th>Сборы</th>
                        <th>Статус</th>
                        <th>Исходное название</th>
                    </tr>
                    <tr>
                        <td>${film.budget}</td>
                        <td>{film.revenue}</td>
                        <td>{film.status}</td>
                        <td>{film.original_title}</td>
                    </tr>
                </table>
            </div>
            <div className="currentFilmRecomendations">
                <Recomendations />
            </div>
            <Footer />
        </div>
    )
}

export default CurrentFilm