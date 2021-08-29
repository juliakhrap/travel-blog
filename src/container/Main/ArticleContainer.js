import { Container } from '@material-ui/core'
import React from 'react'
import './ArticleContainerStyle.css'
import PersonIcon from '@material-ui/icons/Person'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

const ArticleContainer = () => {
    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="news-title">Last news</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4">
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
                                        at
                                        <AccessTimeIcon /> December 20, 2017
                                    </span>
                                </div>
                                <div className="news-text">
                                    <a href="" className="article-title">
                                        Vestibulum dapibus mauris
                                    </a>
                                    <p>
                                        Lorem ipsum dolor sit amet enim. Etiam
                                        ullamcorper. Suspendisse a pellentesque
                                        dui, non felis. Maecenas malesuada elit
                                        lectus felis, malesuada ultricies.
                                        Curabitur et ligula. Ut molestie a,
                                        ultricies porta urna. Vestibulum commodo
                                        volutpat dolor.
                                    </p>
                                </div>
                                <div className="like-row">
                                    <div className="likes-number">
                                        <i className="far fa-heart"></i>
                                        <span className="number">60</span>
                                    </div>
                                    <div className="read-mr">
                                        <i class="far fa-file-alt"></i>
                                        <a href="">Read more</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <article>
                                <div className="news-img">
                                    <a href="">
                                        <div className="news-image">
                                            <img
                                                src="images/home_behind_blog2-960x720.jpg"
                                                alt=""
                                                width="375px"
                                                height="280px"
                                                className="news-image"
                                            />
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
                                        at
                                        <AccessTimeIcon /> {''}
                                        December 20, 2017
                                    </span>
                                </div>
                                <div className="news-text">
                                    <a href="" className="article-title">
                                        Nulla ipsum dolor lacus
                                    </a>
                                    <p>
                                        Lorem ipsum dolor sit amet enim. Etiam
                                        ullamcorper. Suspendisse a pellentesque
                                        dui, non felis. Maecenas malesuada elit
                                        lectus felis, malesuada ultricies.
                                        Curabitur et ligula. Ut molestie a,
                                        ultricies porta urna. Vestibulum commodo
                                        volutpat dolor.
                                    </p>
                                </div>
                                <div className="like-row">
                                    <div className="likes-number">
                                        <i className="far fa-heart"></i>
                                        <span className="number">60</span>
                                    </div>
                                    <div className="read-mr">
                                        <i className="far fa-file-alt"></i>
                                        <a href="">Read more</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <article>
                                <div className="news-img">
                                    <a href="">
                                        <div className="news-image">
                                            <img
                                                src="images/home_behind_blog3-960x720.jpg"
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
                                        at
                                        <AccessTimeIcon /> December 20, 2017
                                    </span>
                                </div>
                                <div className="news-text">
                                    <a href="" className="article-title">
                                        Cum sociis natoque penatibus et ultrices
                                        volutpat
                                    </a>
                                    <p>
                                        Lorem ipsum dolor sit amet enim. Etiam
                                        ullamcorper. Suspendisse a pellentesque
                                        dui, non felis. Maecenas malesuada elit
                                        lectus felis, malesuada ultricies.
                                        Curabitur et ligula. Ut molestie a,
                                        ultricies porta urna. Vestibulum commodo
                                        volutpat dolor.
                                    </p>
                                </div>
                                <div className="like-row">
                                    <div className="likes-number">
                                        <i className="far fa-heart"></i>
                                        <span className="number">60</span>
                                    </div>
                                    <div className="read-mr">
                                        <i className="far fa-file-alt"></i>
                                        <a href="">Read more</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ArticleContainer
