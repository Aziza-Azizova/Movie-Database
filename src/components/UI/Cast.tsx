import castImg from '@i/body/Cast.png'
function Cast({actor}:{actor:IActor}) {
  return (
    <div className='cast'>
        <img src={import.meta.env.VITE_IMG + actor.profile_path} alt="" className="cast__img" />
        <span>{actor.name}</span>
    </div>
  )
}

export default Cast