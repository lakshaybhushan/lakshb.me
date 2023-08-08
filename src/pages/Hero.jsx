import React from "react";
export const Hero = () => {
  return (
    <section id="home">
      <div className="flex-col pt-6 font-Outfit md:ml-8 md:h-screen md:pt-12">
        <h1 className="text-center font-Bebas-Neue text-[7rem] leading-[90.5%] md:m-0 md:h-[22rem] md:w-[38rem] md:text-left md:text-[13rem]">
          Lakshay <br></br> Bhushan
        </h1>
        <h2 className="text-center text-[2rem] md:w-[38rem] md:text-left md:text-[3.8rem]">
          Designer & Developer
        </h2>
        <p className="bottom-5 mt-10 px-10 py-10 text-center text-[1.6rem] leading-tight md:absolute md:mt-0 md:w-[60rem] md:px-0 md:py-0 md:text-left md:text-[2.75rem]">
          hey!! I’m lakshay, a 19 yr old cs student at{" "}
          <a
            href="https://www.iiitd.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-solid transition-colors duration-500 hover:text-highlight-blue"
          >
            iiit delhi
          </a>{" "}
          who likes to build websites & other dev stuff with minimal user
          interfaces.
        </p>
      </div>
    </section>
  );
};

export default Hero;
