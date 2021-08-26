import { Container } from '@material-ui/core'
import React from 'react'
import '../../container/Grid.css'
import './FirstContainerStyle.css'

const FirstContainer = () => {
    return (
        <>
            <Container className="get-out-container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="main-title">Get out and explore</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eveniet iusto illo laboriosam ducimus
                            mollitia, esse suscipit beatae quia rerum dolore
                            voluptate architecto perferendis eligendi quaerat
                            quam assumenda aut eius laborum.
                        </p>
                    </div>
                </div>

                <div className="col-xs-12">
                    <div className="btn-row">
                        <button type="submit" className="btn read-more">
                            Read more{' '}
                            <i class="far fa-arrow-alt-circle-right"></i>
                        </button>
                        <button type="submit" className="btn my-blog">
                            My blog <i class="fas fa-book"></i>
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default FirstContainer
