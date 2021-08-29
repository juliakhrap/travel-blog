import { Container } from '@material-ui/core'
import React from 'react'
import './PhotoGalleryStyle.css'

const PhotoGalleryContainer = () => {
    return (
        <>
            <Container>
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
                            <button type="submit" class="btn show-photos">
                                Show photos{' '}
                                <i class="far fa-arrow-alt-circle-right"></i>
                            </button>
                            <button type="submit" class="btn instagram">
                                Instagram <i class="fab fa-instagram"></i>
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
