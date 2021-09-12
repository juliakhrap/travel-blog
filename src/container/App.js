import React from 'react'
import Header from './Header/Header'
import FirstContainer from './Main/ExploreContainer/ExploreContainer'
import AlpsContainer from './Main/AlpsContainer/AlpsContainer'
import WYNeedContainer from './Main/WYNeedContainer/WYNeedContainer'
import SliderContainer from './Main/SliderContainer/SliderContainer'
import PhotoGalleryContainer from './Main/PhotoGalleryContainer/PhotoGalleryContainer'
import LinksContainer from './Main/LinksContainer/LinksContainer'
import Footer from './Footer/Footer'
import ArticlesList from '../components/Acticles/ArticlesList'

const App = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: 'url(../../images/first-background.jpg)',
                }}
            >
                <Header />
                <FirstContainer />
            </div>

            <div
                style={{
                    backgroundImage: 'url(../../images/second-background.png)',
                    backgroundColor: 'rgba(31, 30, 28, 1)',
                }}
            >
                <AlpsContainer />
                <ArticlesList />
            </div>

            <div
                style={{
                    backgroundImage: 'url(../../images/third-background.png)',
                }}
            >
                <WYNeedContainer />
            </div>

            <div
                style={{
                    backgroundColor: 'rgba(31, 30, 28, 1)',
                }}
            >
                <SliderContainer />
                <PhotoGalleryContainer />
                <LinksContainer />
                <Footer />
            </div>
        </>
    )
}

export default App
