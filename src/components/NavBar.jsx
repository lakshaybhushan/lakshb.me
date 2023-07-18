import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-scroll'

export const NavBar = () => {
    return (
        <BrowserRouter>
            <div className='flex items-center mt-6 justify-end font-Outfit text-[1.25rem] mr-8 fixed right-0 w-[40rem]'>
                <ul className='flex mx-8 gap-20'>
                    <li className='hover:text-highlight-blue transition-colors duration-500'>
                        {/* <a href="/">Home</a> */}
                        <Link to='home' spy={true} smooth={true} duration={800}>
                            <a href='home'>Home</a>
                        </Link>
                    </li>
                    <li className='hover:text-highlight-blue transition-colors duration-500'>
                        <Link to='projects' spy={true} smooth={true} duration={800}>
                            <a href='projects'>Projects</a>
                        </Link>
                    </li>
                    <li className='hover:text-highlight-blue transition-colors duration-500'>
                        <Link to='explore' spy={true} smooth={true} duration={800}>
                            <a href='explore'>Explore</a>
                        </Link>
                    </li>
                    <li className='hover:text-highlight-blue transition-colors duration-500'>
                        <Link to='contact' spy={true} smooth={true} duration={800}>
                            <a href='contact'>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </BrowserRouter>
    )
}

export default NavBar