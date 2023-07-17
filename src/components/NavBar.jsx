import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export const NavBar = () => {
    return (
        <BrowserRouter>
            <div className='flex items-center mt-6 justify-end font-Outfit text-[1.25rem]'>
                <ul className='flex mx-8 gap-20'>
                    <li className='hover:text-highlight-blue transition-colors duration-500'><a href="/">Home</a></li>
                    <li className='hover:text-highlight-blue transition-colors duration-500'><a href="#projects">Projects</a></li>
                    <li className='hover:text-highlight-blue transition-colors duration-500'><a href="#explore">Explore</a></li>
                    <li className='hover:text-highlight-blue transition-colors duration-500'><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </BrowserRouter>
    )
}

export default NavBar