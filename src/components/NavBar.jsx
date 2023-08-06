import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-scroll";
export const NavBar = () => {
  return (
    <BrowserRouter>
      <div className="flex items-center justify-center md:mt-6 mt-10 md:justify-end font-Outfit md:text-[1.25rem] md:mr-8 md:fixed md:right-0 md:w-[40rem]">
        {/* <motion.div
          initial={{ opacity: 0, x: "50vw" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 2, delay: 0.5, type: "spring" },
          }}> */}
        <div>
          <ul className="flex md:mx-8 md:gap-20 gap-10">
            <li className="hover:text-highlight-blue transition-colors duration-500">
              <Link to="home" spy={true} smooth={true} duration={800}>
                <button>Home</button>
              </Link>
            </li>
            <li className="hover:text-highlight-blue transition-colors duration-500">
              <Link to="projects" spy={true} smooth={true} duration={800}>
                <button>Projects</button>
              </Link>
            </li>
            <li className="hover:text-highlight-blue transition-colors duration-500">
              <Link to="explore" spy={true} smooth={true} duration={800}>
                <button>Explore</button>
              </Link>
            </li>
            <li className="hover:text-highlight-blue transition-colors duration-500">
              <Link to="contact" spy={true} smooth={true} duration={800}>
                <button>Contact</button>
              </Link>
            </li>
          </ul>
          {/* </motion.div> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;
