import { Container } from '@material-ui/core'
import React from 'react'
import './LastContainerStyle.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const LastContainer = () => {
    return (
        <>
            <Container className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="title-with-text">
                            <img
                                src="images/logo.png"
                                alt=""
                                class="mini-title"
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <p className="wanderer-description">
                            Phasellus fermentum in. Pellentesque facilisis.
                            Nulla imperdiet sit amet magna. Vestibulum dapibus,
                            mauris nec malesuada fames ac turpis velit.
                        </p>
                    </div>
                    <div className="col-xs-12 col-md-3">
                        <ul>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <a href="" className="list">
                                    Morbi accum
                                </a>
                            </li>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <a href="" className="list">
                                    Nam tellus
                                </a>
                            </li>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <a href="" className="list">
                                    Class taciti velit
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-md-3">
                        <ul>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <a href="" className="list">
                                    Class taciti velit
                                </a>
                            </li>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <a href="" className="list">
                                    Mauris justo
                                </a>
                            </li>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <a href="" className="list">
                                    Morbi accum
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default LastContainer
