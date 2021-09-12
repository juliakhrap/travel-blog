import React from 'react'

import './ArticleStyle.css'
import { Container, Grid } from '@material-ui/core'
import ArticleArray from './ArticleArray'
import ArticleListItem from './ArticleListItem'

const ArticlesList = () => {
    return (
        <>
            <Container className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="news-title">Last news</div>
                    </div>
                    <div className="row">
                        {ArticleArray.map(
                            ({ id, img, data, name, description, likes }) => (
                                <Grid item xs={12} sm={6} md={4} key={id}>
                                    <ArticleListItem
                                        img={img}
                                        data={data}
                                        name={name}
                                        description={description}
                                        likes={likes}
                                    />
                                </Grid>
                            )
                        )}
                    </div>
                </div>
            </Container>
        </>
    )
}
export default ArticlesList
