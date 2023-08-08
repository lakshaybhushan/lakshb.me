import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="Footer font-Outfit">
      <div className="mt-10 bg-box-gray py-5 md:mx-8 md:my-8 md:rounded-xl md:px-7 md:py-5">
        <div className="md:flex md:flex-row md:items-center md:justify-between">
          <div className="aboutthiswebsite">
            <h1 className="font-Bebas-Neue text-[1.5rem] md:h-[2.75rem] md:text-[2rem]">
              About This Website
            </h1>

            <p className="md:text-[1.5rem]">
              this website is designed in Figma, built with React, Tailwind CSS,
              and Vite.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center space-x-6 md:ml-10 md:mr-10 md:space-x-8">
            <a
              href="https://www.instagram.com/lakshaybhushan"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-color duration-500 md:hover:text-highlight-blue"
            >
              <FaInstagram size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/lakshaybhushan/"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-color duration-500 md:hover:text-highlight-blue"
            >
              <FaLinkedinIn size={30} />
            </a>

            <a
              href="https://www.behance.net/lakshaybhushan"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-color duration-500 md:hover:text-highlight-blue"
            >
              <FaBehance size={30} />
            </a>

            <a
              href="https://github.com/lakshaybhushan"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-color duration-500 md:hover:text-highlight-blue"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://open.spotify.com/user/amcdf5xiittevf5gl1ecjqfyu"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-color duration-500 md:hover:text-highlight-blue"
            >
              <FaSpotify size={30} />
            </a>

            <a
              href="https://twitter.com/bhushanlakshay"
              target="_blank"
              rel="noopener noreferrer"
              className=" transition-color duration-500 md:hover:text-highlight-blue"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  );
};

export default Footer;
