import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
const Iframe = React.lazy(() => import("react-iframe"));

export const Explore = () => {
  return (
    <section id="explore">
      <div className="pt-10 font-Outfit md:ml-8 md:pt-7">
        <h1 className="text-center font-Bebas-Neue text-[4rem] md:h-[6.5rem] md:text-left md:text-[4.65rem]">
          Explore
        </h1>

        <p className="px-10 text-center text-[1.6rem] leading-tight md:w-[60rem] md:px-0 md:text-left md:text-[2.75rem]">
          more info about me
        </p>

        <div className="mt-10 flex flex-col gap-5 md:gap-4">
          <div className="mx-10 rounded-xl bg-box-gray px-10 py-6 md:mx-0 md:w-[54rem]">
            <h1 className="h-[2.5rem] font-Bebas-Neue text-[2rem]">
              Tech I know
            </h1>
            <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
              <span className="text-highlight-blue">
                Programming Languages:
              </span>{" "}
              Python, C, C++, Java, JavaScript
            </p>
            <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
              <span className="text-highlight-blue">Frameworks:</span> React,
              Tailwind CSS, Vite (JS build tool)
            </p>
            <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
              <span className="text-highlight-blue">Creative Softwares:</span>{" "}
              Figma, Adobe Photoshop, Illustrator, Blender
            </p>
            <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
              <span className="text-highlight-blue">Miscellaneous:</span> Git,
              Github, MySQL, LibGDX (Game Dev Framework)
            </p>
          </div>

          <div className="mx-10 rounded-xl bg-box-gray px-10 py-6 transition-all duration-500 md:mx-0 md:w-[54rem] md:hover:bg-resume-color md:hover:text-white">
            <a
              href="https://resume.lakshb.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center">
                <h1 className="h-[2.5rem] font-Bebas-Neue text-[2rem]">
                  Resume
                </h1>
                <BsBoxArrowUpRight size={22} className="bsarrow ml-3" />
              </div>
              <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
                my iiit delhi format resume{" "}
                <span className="underline decoration-dotted decoration-2 ">
                  (pdf)
                </span>
              </p>
            </a>
          </div>

          <div className="mx-10 rounded-xl bg-box-gray px-10 py-6 md:mx-0 md:w-[54rem]">
            <h1 className="h-[2.5rem] font-Bebas-Neue text-[2rem]">
              Music I listen to
            </h1>
            <p className="text-[1.3rem] leading-tight md:text-[1.5rem] md:leading-normal">
              a collection of music that I like to listen while I’m working
            </p>
          </div>
          <div className="mx-10 rounded-xl bg-box-gray md:mx-0 md:h-[420px] md:w-[54rem]">
            <Iframe
              src="https://open.spotify.com/embed/playlist/6bjakLyWWbXLWBKEFxOzx5?utm_source=generator&theme=0"
              width="100%"
              height="420"
              allow="encrypted-media"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
