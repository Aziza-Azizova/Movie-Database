import Footer from '../components/Footer'
import Slider from '../components/Slider'
import TopRated from '../components/TopRated'
import UpComingSlider from '../components/UpComingSlider'

function Home() {
  return (
    <>
      <UpComingSlider />
      <Slider type="movie"/>
      <Slider type="tv"/>
      <TopRated />
      <Footer/>
    </>
  )
}

export default Home