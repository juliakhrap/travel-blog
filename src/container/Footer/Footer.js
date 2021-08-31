import { Button, Container } from '@material-ui/core'
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
                                <Button className="muffin-group">
                                    {' '}
                                    Muffin group{' '}
                                </Button>{' '}
                                | All Rights Reserved | Powered by{' '}
                                <Button className="muffin-group">
                                    {' '}
                                    WordPress{' '}
                                </Button>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="social-icons">
                                <Button className="icons">
                                    <FacebookIcon className="fab fa-facebook-square" />
                                </Button>
                                <Button className="icons">
                                    <TwitterIcon className="fab fa-twitter" />
                                </Button>
                                <Button className="icons">
                                    <PlayCircleFilledIcon className="fas fa-play" />
                                </Button>
                                <Button className="icons">
                                    <CloudIcon className="fab fa-flickr" />
                                </Button>
                                <Button className="icons">
                                    <InstagramIcon className="fab fa-instagram" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Footer
