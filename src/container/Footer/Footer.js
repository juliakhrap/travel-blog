import { Container } from '@material-ui/core'
import React from 'react'
import './FooterStyle.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import CloudIcon from '@material-ui/icons/Cloud'
import InstagramIcon from '@material-ui/icons/Instagram'
import '../../container/Grid.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Container className="container">
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
                                    <FacebookIcon className="fab fa-facebook-square" />
                                </a>
                                <a href="" className="icons">
                                    <TwitterIcon className="fab fa-twitter" />
                                </a>
                                <a href="" className="icons">
                                    <PlayCircleFilledIcon className="fas fa-play" />
                                </a>
                                <a href="" className="icons">
                                    <CloudIcon className="fab fa-flickr" />
                                </a>
                                <a href="" className="icons">
                                    <InstagramIcon className="fab fa-instagram" />
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
