import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export const NavBar = () => {
    return (
        <BrowserRouter>

            <div className='flex items-center mt-6 justify-end font-Outfit text-[1.25rem] mr-8 fixed right-0 w-[40rem]'>
            <motion.div
                initial={{ opacity: 0 , x: '50vw'}}
                animate={{ opacity: 1 , x: 0, transition: { duration: 2, delay:0.5, type: 'spring',}}}>
                <ul className='flex mx-8 gap-20'>
                    <li className='hover:text-highlight-blue transition-colors duration-500'>

                        <Link to='home' spy={true} smooth={true} duration={800}>
                            <button>Home</button>
                        </Link>
                    </li>
                    <li className='hover:text-highlight-blue transition-colors duration-500'>
                        <Link to='projects' spy={true} smooth={true} duration={800}>
                            <button>Projects</button>
                        </Link>
                    </li>
                    <li className='hover:text-highlight-blue transition-colors duration-500'>
                        <Link to='explore' spy={true} smooth={true} duration={800}>
                            <button>Explore</button>
                        </Link>
                    </li>
                    <li className='hover:text-highlight-blue transition-colors duration-500'>
                        <Link to='contact' spy={true} smooth={true} duration={800}>
                            <button>Contact</button>
                        </Link>
                    </li>
                </ul>
                </motion.div>
            </div>
        </BrowserRouter>
    )
}

export default NavBar