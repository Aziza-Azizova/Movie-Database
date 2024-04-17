import { Link } from 'react-router-dom'
import btnImg from '@i/header/btnImg.svg'

function Btn() {
  return (
    <Link to='/' className='btn'> <img src={btnImg} alt="" />Подробнее</Link>
  )
}

export default Btn