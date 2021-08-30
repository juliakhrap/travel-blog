import { Container } from '@material-ui/core'
import React from 'react'
import './ArticleStyle.css'
import PersonIcon from '@material-ui/icons/Person'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import DescriptionIcon from '@material-ui/icons/Description'
import '../../container/Grid.css'

const Article1 = () => {
    return (
        <>
            <Container className="container">
                <article>
                    <div className="news-img">
                        <a href="">
                            <div className="news-image">
                                <img
                                    src="images/home_behind_blog1-960x720.jpg"
                                    alt=""
                                    width="375px"
                                    height="280px"
                                    className="news-image"
                                />{' '}
                            </div>
                        </a>
                    </div>
                    <div className="user-data">
                        <PersonIcon className="user-icon" />
                        <a href="" className="user">
                            {' '}
                            Muffin Group
                        </a>{' '}
                        <span className="data">
                            {' '}
                            at <AccessTimeIcon /> December 20, 2017
                        </span>
                    </div>
                    <div className="news-text">
                        <a href="" className="article-title">
                            Vestibulum dapibus mauris
                        </a>
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
                            <div className="heart-icon">
                                <FavoriteBorderIcon className="far fa-heart" />
                            </div>
                            <span className="number">60</span>
                        </div>
                        <div className="read-mr">
                            <div className="read-icon">
                                <DescriptionIcon className="far fa-file-alt" />
                            </div>
                            <a href="">Read more</a>
                        </div>
                    </div>
                </article>
            </Container>
        </>
    )
}

export default Article1
