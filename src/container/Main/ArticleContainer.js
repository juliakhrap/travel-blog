import { Container } from '@material-ui/core'
import React from 'react'
import './ArticleContainerStyle.css'
import '../../container/Grid.css'
import Article1 from '../../components/Acticles/Article1'
import Article2 from '../../components/Acticles/Article2'
import Article3 from '../../components/Acticles/Article3'

const ArticleContainer = () => {
    return (
        <>
            <Container className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="news-title">Last news</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <Article1 />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <Article2 />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <Article3 />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ArticleContainer
