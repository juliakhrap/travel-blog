import React from 'react'
import './MenuStyle.css'
import '../../container/Grid.css'
import { Button } from '@material-ui/core'

const Menu = () => {
    return (
        <>
            <div className="col-xs-12 col-sm-8">
                <nav className="menu">
                    <div className="item-menu green">
                        <Button>Home</Button>
                    </div>
                    <div className="item-menu">
                        <Button>About me</Button>
                    </div>
                    <div className="item-menu">
                        <Button>Blog</Button>
                    </div>
                    <div className="item-menu">
                        <Button>Single article</Button>
                    </div>
                    <div className="item-menu">
                        <Button>Gallery</Button>
                    </div>
                    <div className="item-menu">
                        <Button>Buy now</Button>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Menu
