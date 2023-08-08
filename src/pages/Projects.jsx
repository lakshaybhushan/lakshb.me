import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="pt-5 font-Outfit md:ml-8 md:h-screen md:pt-10">
        <h1 className="text-center font-Bebas-Neue text-[4rem] md:h-[6.5rem] md:text-left md:text-[4.65rem]">
          Projects
        </h1>
        <p className="px-10 text-center text-[1.6rem] leading-tight md:w-[60rem] md:px-0 md:text-left md:text-[2.75rem]">
          these are some of the latest projects that I have worked on ... more
          on{" "}
          <a
            href="https://github.com/lakshaybhushan/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-solid transition-colors duration-500 hover:text-highlight-blue"
          >
            github
          </a>
        </p>
        <div className="mt-10 flex flex-col gap-5 md:gap-4">
          <div className="mx-10 rounded-xl bg-box-gray px-10 py-6 transition-all duration-500 md:mx-0 md:w-[54rem] md:hover:bg-pxorange md:hover:text-black">
            <a
              href="https://pixelverse.lakshb.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center">
                <h1 className="h-[2.5rem] font-Bebas-Neue text-[2rem]">
                  pixelverse
                </h1>
                <BsBoxArrowUpRight size={22} className="bsarrow ml-3" />
              </div>
              <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
                a free to use text-to-image generator
              </p>
            </a>
          </div>

          <div className="mx-10 rounded-xl bg-box-gray px-10 py-6 transition-all duration-500 md:mx-0 md:w-[54rem] md:hover:bg-urlify-green md:hover:text-urlify-white">
            <a
              href="https://urlify.lakshb.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center">
                <h1 className="h-[2.5rem] font-Bebas-Neue text-[2rem]">
                  urlify
                </h1>
                <BsBoxArrowUpRight size={22} className="bsarrow ml-3" />
              </div>
              <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
                a super simple url shortener
              </p>
            </a>
          </div>
          <div className="mx-10 rounded-xl bg-box-gray px-10 py-6 transition-all duration-500 md:mx-0 md:w-[54rem] md:hover:bg-greeney-green md:hover:text-greeney-blue">
            <a
              href="https://greeney.lakshb.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center">
                <h1 className="h-[2.5rem] font-Bebas-Neue text-[2rem]">
                  Greeney
                </h1>
                <BsBoxArrowUpRight size={22} className="bsarrow ml-3" />
              </div>
              <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
                a dark greenish-blue colour theme for vscode
              </p>
            </a>
          </div>
          <div className="mx-10 rounded-xl bg-box-gray px-10 py-6 transition-all duration-500 md:mx-0 md:w-[54rem] md:hover:bg-designhall-green md:hover:text-designhall-black">
            <a
              href="https://designhall.lakshb.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center">
                <h1 className="h-[2.5rem] font-Bebas-Neue text-[2rem]">
                  Design Hall
                </h1>
                <BsBoxArrowUpRight size={22} className="bsarrow ml-3" />
              </div>
              <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
                a minimal - clumsy playground of my designs (16)
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
