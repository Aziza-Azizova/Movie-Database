import { useEffect, useState } from 'react'
import useApi from '../hooks/useApi';
import { Link } from 'react-router-dom';

function Search() {
  const [search, setSearch] = useState('');
  const { getData, data } = useApi();

  useEffect(() => {
    // if(){
      getData(`/search/multi?query=${search}`)
    // }
  }, [search])

  return (
    <div className='container search'>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="movie__content">
        {
          data.map((film:IMovieTv, index:number) => {
            return (
              <Link to={`/watch/movie/${film.id}`} key={index} className="movie__item">
                <img className="movie__img" src={import.meta.env.VITE_IMG + film.poster_path} alt="image" />
                <h2 className="movie__name">{film.title}</h2>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Search