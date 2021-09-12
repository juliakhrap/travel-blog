import { Container } from '@material-ui/core'
import React from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './SliderContainerStyle.css'
import '../../../container/Grid.css'

const fadeImages = [
    'images/home_behind_pic6.jpg',
    'images/home_behind_pic7.jpg',
    'images/home_behind_pic8.jpg',
]

export default function App() {
    return (
        <Container className="container">
            <div className="col-xs-12">
                <div className="title-video">Videos</div>
            </div>
            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                        <img src={fadeImages[0]} alt="" className="pic-item" />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[1]} alt="" className="pic-item" />
                    </div>
                    <div className="each-fade">
                        <img src={fadeImages[2]} alt="" className="pic-item" />
                    </div>
                </Fade>
            </div>
        </Container>
    )
}
