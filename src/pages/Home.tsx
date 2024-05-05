import Slider from '../components/Slider'
import UpComingSlider from '../components/UpComingSlider'

function Home() {
  return (
    <>
      <UpComingSlider />
      <Slider type="movie"/>
      <Slider type="tv"/>
    </>
  )
}

export default Home