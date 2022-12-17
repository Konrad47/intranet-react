import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <header>
                <Link to="/">Start</Link>
                <span className='vl'></span>
                <Link to="/announcements">Ogłoszenia</Link>
                <span className='vl'></span>
                <Link to="/tutorials">Poradniki</Link>
                <span className='vl'></span>
                <Link to="/projects">Projekty</Link>
            </header>
            <div className='horizontal-header'>
                <div className='menu-corner'></div>
            </div>
        </>
    )
}

export default Menu
