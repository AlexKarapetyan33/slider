import { sliderPictures } from '../../db/pictures'
import './Slider.css'
import React, {useState} from 'react'


export function Slider({sliderPictures}) {

    const [slider, setSlider] = useState(0)

    function increment() {
        if(sliderPictures.length -1 === slider){
            setSlider(0)
        }else {
            setSlider(slider+1)
        }
    }

    function decrement() {
        if(slider === 0){
            setSlider(sliderPictures.length -1)
        }else {
            setSlider(slider -1)
        }
    }

    return(
        <>
        <div className='slider'>
            <button onClick={increment} className='forward'>Left</button>
            <img src={sliderPictures[slider]} alt="bldo"  className='sliderImage'/>
            <button onClick={decrement} className='backward'>Right</button>

        </div>
    </>
    )
}