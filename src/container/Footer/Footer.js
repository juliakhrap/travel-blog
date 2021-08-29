import { Container } from '@material-ui/core'
import React from 'react'
import './FooterStyle.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-md-9">
                            <div className="authors">
                                © 2021 Betheme by{' '}
                                <a href="" className="muffin-group">
                                    {' '}
                                    Muffin group{' '}
                                </a>{' '}
                                | All Rights Reserved | Powered by{' '}
                                <a href="" className="muffin-group">
                                    {' '}
                                    WordPress{' '}
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="social-icons">
                                <a href="" className="icons">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                                <a href="" className="icons">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="" className="icons">
                                    <i className="fas fa-play"></i>
                                </a>
                                <a href="" className="icons">
                                    <i className="fab fa-flickr"></i>
                                </a>
                                <a href="" className="icons">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Footer
