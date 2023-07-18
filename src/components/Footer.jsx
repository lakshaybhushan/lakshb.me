import React from 'react'
import { FaGithub, FaInstagram, FaBehance, FaLinkedinIn, FaSpotify, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='Footer font-Outfit'>
            <div className="bg-box-gray py-5 px-7 rounded-xl mx-8 mb-10">

                <div className="flex flex-row items-center justify-between">

                    <div>
                        <h1 className='font-Bebas-Neue text-[2rem] h-[2.75rem]'>About This Website</h1>

                        <p className="text-[1.5rem]">this website is designed in Figma, built with React, Tailwind CSS, and Vite.</p>
                    </div>

                    <div className='flex flex-row space-x-8 ml-10 mr-10'>
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
        </div>
    )
}

export default Footer
