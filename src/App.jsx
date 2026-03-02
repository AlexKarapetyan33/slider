import { useState } from 'react'
import './App.css'
import { Slider } from './components/Slider/Slider'



function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slider sliderPictures={props.sliderPictures}/>
    </>
  )
}

export default App
