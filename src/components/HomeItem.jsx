import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
const HomeItem = ({ link, color, name, title, author, date }) => {
    const navigate = useNavigate();
    const changeRoute = useCallback(() => navigate(`${link}`))
    return (
        <div onClick={changeRoute} className='home-el' style={{ borderColor: color }}>
            <h2 style={{ color: color }} className='h2-home'>{name}: {title}</h2>
            <span>{author}, Dodano: {date}</span>
        </div>
    )
}

export default HomeItem
