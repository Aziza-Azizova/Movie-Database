import { Link } from 'react-router-dom'
import btnImg from '@i/header/btnImg.svg'

function Btn({type, movieTvId}:{type:string, movieTvId:number | null}) {
  return (
    <Link to={`/watch/${type}/${movieTvId}`} className='btn'> <img src={btnImg} alt="" />Подробнее</Link>
  )
}

export default Btn