import { Container } from '@material-ui/core'
import React from 'react'
import './PhotoGalleryStyle.css'
import InstagramIcon from '@material-ui/icons/Instagram'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import '../../container/Grid.css'

const PhotoGalleryContainer = () => {
    return (
        <>
            <Container className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="title-video">Photo gallery</div>
                    </div>

                    <div className="col-xs-12">
                        <div className="gallery-text">
                            <p>
                                Phasellus fermentum in, over{' '}
                                <span> 10’000</span> photos. Pellentesque
                                facilisis. Nulla imperdiet sit amet magna.
                                Vestibulum dapibus, mauris nec malesuada fames
                                ac turpis velit.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="buttons-in-gallery">
                            <button type="submit" className="btn show-photos">
                                Show photos{' '}
                                <PhotoLibraryIcon className="far fa-arrow-alt-circle-right" />
                            </button>
                            <button type="submit" className="btn instagram">
                                Instagram{' '}
                                <InstagramIcon className="fab fa-instagram" />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="travel-photos">
                <img
                    src="images/footer-picture.jpg"
                    alt=""
                    className="travel-img"
                />
            </div>
        </>
    )
}
export default PhotoGalleryContainer
