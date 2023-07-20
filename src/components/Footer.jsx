import React from 'react'
import { FaGithub, FaInstagram, FaBehance, FaLinkedinIn, FaSpotify, FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion'

export const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: '150' }}
            animate={{ opacity: 1, y: 0, transition: { duration: 2, delay: 0.5, type: 'spring', bounce: 0.3, } }}
            className='Footer font-Outfit'>
            <div className="bg-box-gray md:py-5 md:px-7 md:rounded-xl md:mx-8 md:my-8 py-5 ">

                <div className="md:flex md:flex-row md:items-center md:justify-between">

                    <div className='aboutthiswebsite'>
                        <h1 className='font-Bebas-Neue md:text-[2rem] md:h-[2.75rem] text-[1.5rem]'>About This Website</h1>

                        <p className="md:text-[1.5rem]">this website is designed in Figma, built with React, Tailwind CSS, and Vite.</p>
                    </div>

                    <div className='flex flex-row md:space-x-8 md:ml-10 md:mr-10 items-center justify-center space-x-4'>
                        <a href="https://www.instagram.com/lakshaybhushan" target="_blank" rel="noopener noreferrer" className=" hover:text-highlight-blue transition-color duration-500">
                            <FaInstagram size={30} />
                        </a>

                        <a href="https://www.linkedin.com/in/lakshaybhushan/" target="_blank" rel="noopener noreferrer" className=" hover:text-highlight-blue transition-color duration-500">
                            <FaLinkedinIn size={30} />
                        </a>

                        <a href="https://www.behance.net/lakshaybhushan" target="_blank" rel="noopener noreferrer" className=" hover:text-highlight-blue transition-color duration-500">
                            <FaBehance size={30} />
                        </a>

                        <a href="https://github.com/lakshaybhushan" target="_blank" rel="noopener noreferrer" className=" hover:text-highlight-blue transition-color duration-500">
                            <FaGithub size={30} />
                        </a>

                        <a href="https://open.spotify.com/user/amcdf5xiittevf5gl1ecjqfyu" target="_blank" rel="noopener noreferrer" className=" hover:text-highlight-blue transition-color duration-500">
                            <FaSpotify size={30} />
                        </a>

                        <a href="https://twitter.com/bhushanlakshay" target="_blank" rel="noopener noreferrer" className=" hover:text-highlight-blue transition-color duration-500">
                            <FaTwitter size={30} />
                        </a>

                    </div>

                </div>



            </div>
        </motion.div>
    )
}

export default Footer
