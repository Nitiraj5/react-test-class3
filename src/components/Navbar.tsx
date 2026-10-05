import React from 'react'
import"./Navbar.css"

const navbar = () => {
    return (
        <div  className='menu'><ul>

            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#service">Service</a></li>
            <li></li>
        </ul></div>
    )
}

export default navbar