import { Button } from '@material-ui/core'
import React from 'react'
import './ArticleStyle.css'
import PersonIcon from '@material-ui/icons/Person'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import DescriptionIcon from '@material-ui/icons/Description'
import '../../container/Grid.css'
import { Link } from 'react-router-dom'

const ArticlesListItem = ({
    img,
    tag1,
    tag2,
    data,
    name,
    description,
    likes,
}) => {
    return (
        <>
            <div className="news-img">
                <Button>
                    <div className="news-image">
                        <img
                            src={img}
                            alt={name}
                            width="375px"
                            height="280px"
                            className="news-image"
                        />
                    </div>
                </Button>
                <Button>
                    {' '}
                    <div className="tag">{tag1}</div>
                </Button>
                <Button>
                    {' '}
                    <div className="tag">{tag2}</div>
                </Button>
            </div>
            <div className="user-data">
                <PersonIcon className="user-icon" />
                <Button className="user"> Muffin Group</Button>{' '}
                <span className="data">
                    {' '}
                    at <AccessTimeIcon /> {data}
                </span>
            </div>
            <div className="news-text">
                <div className="article-title">{name}</div>
                <p>{description}</p>
            </div>
            <div className="like-row">
                <div className="likes-number">
                    <div className="heart-icon">
                        <FavoriteBorderIcon className="far fa-heart" />
                    </div>
                    <span className="number">{likes}</span>
                </div>
                <div className="read-mr">
                    <div className="read-icon">
                        <DescriptionIcon className="far fa-file-alt" />
                    </div>
                    <Link to="/article" className="button-read">
                        Read more
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ArticlesListItem
