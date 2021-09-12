import { Container } from '@material-ui/core'
import React from 'react'
import './WYNeedContainerStyle.css'
import '../../../container/Grid.css'

const WYNeedContainer = () => {
    return (
        <>
            <Container className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="news-title">What you need?</div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="necessery-items">
                            <img src="images/home_behind_pic2.png" alt="" />
                            <h3>Waterproof tent</h3>
                            <p>
                                Phasellus fermentum in, dolor. Pellentesque
                                facilisis. Nulla imperdiet sit amet magna
                                dapibus.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="necessery-items">
                            <img src="images/home_behind_pic3.png" alt="" />
                            <h3>Neccessary tools</h3>
                            <p>
                                Phasellus fermentum in, dolor. Pellentesque
                                facilisis. Nulla imperdiet sit amet magna
                                dapibus.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="necessery-items">
                            <img src="images/home_behind_pic4.png" alt="" />
                            <h3>Important equipment</h3>
                            <p>
                                Phasellus fermentum in, dolor. Pellentesque
                                facilisis. Nulla imperdiet sit amet magna
                                dapibus.
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3">
                        <div className="necessery-items">
                            <img src="images/home_behind_pic5.png" alt="" />
                            <h3>Compass or GPS device</h3>
                            <p>
                                Phasellus fermentum in, dolor. Pellentesque
                                facilisis. Nulla imperdiet sit amet magna
                                dapibus.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default WYNeedContainer
