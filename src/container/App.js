import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import FirstContainer from './Main/FirstContainer'

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
        </>
    )
}

export default App
