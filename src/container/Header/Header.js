import { Button, Container } from '@material-ui/core'
import React from 'react'
import Menu from '../../components/Menu/Menu'
import './HeaderStyle.css'
import '../../container/Grid.css'
import CssBaseline from '@material-ui/core/CssBaseline'

const Header = () => {
    return (
        <>
            <CssBaseline />
            <div className="body">
                <Container maxWidth="lg">
                    <div className="row header-row">
                        <div className="col-xs-12 col-sm-4">
                            <div className="logo">
                                <Button>
                                    <img
                                        src="../../images/logo.png"
                                        alt=""
                                        width="160px"
                                    ></img>
                                </Button>
                            </div>
                        </div>
                        <Menu />
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Header
