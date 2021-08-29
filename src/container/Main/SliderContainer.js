import { Container } from '@material-ui/core'
import React from 'react'
import './SliderContainerStyle.css'

const SliderContainer = () => {
    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="title-video">Video</div>
                    </div>
                    <div className="col-xs-12">
                        <a href="" class="video-link">
                            <img
                                src="images/home_behind_pic6.jpg"
                                alt=""
                                width="700px"
                                height="430px"
                                class="video-img"
                            />
                        </a>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default SliderContainer
