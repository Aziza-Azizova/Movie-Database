import { useParams } from 'react-router-dom';
import useFilmById from '../store/filmById';
import { useEffect } from 'react';
import useApi from '../hooks/useApi';

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
        <div className='currentFilm'>
            <h2 className='currentFilm__title'>{film.title || film.name}</h2>
        </div>
    )
}

export default CurrentFilm