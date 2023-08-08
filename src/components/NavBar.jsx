import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-scroll";
export const NavBar = () => {
  return (
    <BrowserRouter>
      <div className="mt-10 flex items-center justify-center font-Outfit md:fixed md:right-0 md:mr-8 md:mt-6 md:w-[40rem] md:justify-end md:text-[1.25rem]">
        <div>
          <ul className="flex gap-10 md:mx-8 md:gap-20">
            <li className="transition-colors duration-500 hover:text-highlight-blue">
              <Link to="home" spy={true} smooth={true} duration={800}>
                <button>Home</button>
              </Link>
            </li>
            <li className="transition-colors duration-500 hover:text-highlight-blue">
              <Link to="projects" spy={true} smooth={true} duration={800}>
                <button>Projects</button>
              </Link>
            </li>
            <li className="transition-colors duration-500 hover:text-highlight-blue">
              <Link to="explore" spy={true} smooth={true} duration={800}>
                <button>Explore</button>
              </Link>
            </li>
            <li className="transition-colors duration-500 hover:text-highlight-blue">
              <Link to="contact" spy={true} smooth={true} duration={800}>
                <button>Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;
