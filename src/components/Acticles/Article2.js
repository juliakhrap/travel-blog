import { Container, Button } from '@material-ui/core'
import React from 'react'
import './ArticleStyle.css'
import PersonIcon from '@material-ui/icons/Person'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import DescriptionIcon from '@material-ui/icons/Description'
import '../../container/Grid.css'

const Article2 = () => {
    return (
        <>
            <Container className="container">
                <article>
                    <div className="news-img">
                        <Button>
                            <div className="news-image">
                                <img
                                    src="images/home_behind_blog2-960x720.jpg"
                                    alt=""
                                    width="375px"
                                    height="280px"
                                    className="news-image"
                                />
                            </div>
                        </Button>
                    </div>
                    <div className="user-data">
                        <PersonIcon className="user-icon" />
                        <Button className="user"> Muffin Group</Button>{' '}
                        <span className="data">
                            {' '}
                            at <AccessTimeIcon /> {''}
                            December 20, 2017
                        </span>
                    </div>
                    <div className="news-text">
                        <div className="article-title">
                            Nulla ipsum dolor lacus
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
                            Suspendisse a pellentesque dui, non felis. Maecenas
                            malesuada elit lectus felis, malesuada ultricies.
                            Curabitur et ligula. Ut molestie a, ultricies porta
                            urna. Vestibulum commodo volutpat dolor.
                        </p>
                    </div>
                    <div className="like-row">
                        <div className="likes-number">
                            <FavoriteBorderIcon className="far fa-heart" />
                            <span className="number">60</span>
                        </div>
                        <div className="read-mr">
                            <DescriptionIcon className="far fa-file-alt" />
                            <Button className="button-read">Read more</Button>
                        </div>
                    </div>
                </article>
            </Container>
        </>
    )
}

export default Article2
