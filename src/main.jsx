import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { sliderPictures } from './db/pictures.js'

createRoot(document.getElementById('root')).render(
    <App sliderPictures={sliderPictures}/>

)
