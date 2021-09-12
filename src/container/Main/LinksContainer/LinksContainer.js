import { Button, Container } from '@material-ui/core'
import React from 'react'
import './LinksContainerStyle.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import '../../../container/Grid.css'

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
                                className="mini-title"
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
                                <Button className="list">Morbi accum</Button>
                            </li>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <Button className="list">Nam tellus</Button>
                            </li>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <Button className="list">
                                    Class taciti velit
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-md-3">
                        <ul>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <Button className="list">
                                    Class taciti velit
                                </Button>
                            </li>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <Button className="list">Mauris justo</Button>
                            </li>
                            <li>
                                <ArrowForwardIosIcon className="fas fa-angle-right" />
                                <Button className="list">Morbi accum</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default LastContainer
