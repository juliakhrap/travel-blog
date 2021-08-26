import React from 'react'
import './MenuStyle.css'
import '../../container/Grid.css'

const Menu = () => {
    return (
        <>
            <div className="col-xs-12 col-sm-8">
                <nav className="menu">
                    <div className="item-menu green">
                        <a href="">Home</a>
                    </div>
                    <div className="item-menu">
                        <a href="">About me</a>
                    </div>
                    <div className="item-menu">
                        <a href="">Blog</a>
                    </div>
                    <div className="item-menu">
                        <a href="">Single article</a>
                    </div>
                    <div className="item-menu">
                        <a href="">Gallery</a>
                    </div>
                    <div className="item-menu">
                        <a href="">Buy now</a>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Menu
