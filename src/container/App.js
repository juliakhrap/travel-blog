import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import FirstContainer from './Main/FirstContainer'
import AlpsContainer from './Main/AlpsContainer'
import ArticleContainer from './Main/ArticleContainer'
import WYNeedContainer from './Main/WYNeedContainer'
import SliderContainer from './Main/SliderContainer'
import PhotoGalleryContainer from './Main/PhotoGalleryContainer'
import LastContainer from './Main/LastContainer'
import Footer from './Footer/Footer'

const App = () => {
    return (
        <>
            <CssBaseline />
            <div
                style={{
                    backgroundImage: 'url(../../images/first-background.jpg)',
                }}
            >
                <Header />
                <FirstContainer />
            </div>
            <CssBaseline />
            <div
                style={{
                    backgroundImage: 'url(../../images/second-background.png)',
                    backgroundColor: 'rgba(31, 30, 28, 1)',
                }}
            >
                <AlpsContainer />
                <ArticleContainer />
            </div>
            <CssBaseline />
            <div
                style={{
                    backgroundImage: 'url(../../images/third-background.png)',
                }}
            >
                <WYNeedContainer />
            </div>
            <CssBaseline />
            <div
                style={{
                    backgroundColor: 'rgba(31, 30, 28, 1)',
                }}
            >
                <SliderContainer />
                <PhotoGalleryContainer />
                <LastContainer />
                <Footer />
            </div>
        </>
    )
}

export default App
