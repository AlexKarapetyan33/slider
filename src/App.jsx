import './App.css'
import { Slider } from './components/Slider/Slider'



function App({sliderPictures}) {

  return (
    <>
      <Slider sliderPictures={sliderPictures}/>
    </>
  )
}

export default App
