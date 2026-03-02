import './Slider.css'
import React, {useState} from 'react'


export function Slider(props) {

    const [slider, setSlider] = useState(0)

    return(
        <>
        <div>

            <img src={props.sliderImages} alt="bldo" />

        </div>
    </>
    )
}