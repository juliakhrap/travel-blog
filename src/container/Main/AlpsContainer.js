import { Container } from '@material-ui/core'
import React from 'react'
import './AlpsContainerStyle.css'
import 'font-awesome/css/font-awesome.min.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import '../../container/Grid.css'

const AlpsContainer = () => {
    return (
        <Container className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <img
                        src="images/home_behind_pic1.jpg"
                        alt=""
                        width="580px"
                        height="430px"
                        className="img-way"
                    />
                </div>

                <div className="col-xs-12 col-md-6">
                    <div className="text">
                        <h1 className="title-alps">Swiss Alps</h1>
                        <h6>expedition</h6>
                        <p className="alps-description">
                            Phasellus fermentum in, dolor. Pellentesque
                            facilisis. Nulla imperdiet sit amet magna.
                            Vestibulum dapibus, mauris nec malesuada fames ac
                            turpis velit, rhoncus eu, luctus et interdum
                            adipiscing wisi.
                        </p>
                        <p className="alps-description">
                            <img
                                src="images/check.png"
                                alt=""
                                className="check-pic"
                            />
                            Quisque lorem tortor fringilla sed
                        </p>{' '}
                        <p className="alps-description">
                            <img
                                src="images/check.png"
                                alt=""
                                className="check-pic"
                            />
                            Vestibulum id, eleifend justo vel bibendum sapien
                            massa
                        </p>
                        <button type="submit" className="booking">
                            Book tour
                            <ArrowForwardIosIcon
                                fontSize="small"
                                className="arrow"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AlpsContainer
