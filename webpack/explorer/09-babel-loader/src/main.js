import createHeader from './heading.js'
import './main.css'
import icon from './slider-bar-home.jpg'

const heading = createHeader()

document.body.append(heading)

const img = new Image()
img.src = icon
document.body.append(img)