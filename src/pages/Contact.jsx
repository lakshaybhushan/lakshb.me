import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { BsArrowUp } from "react-icons/bs";
import { animateScroll } from "react-scroll";

export const Contact = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const [state, handleSubmit] = useForm("mpzgwqaz"); // ENDPOINT
  if (state.succeeded) {
    return (
      <div className="Form Submission mx-10 mt-10 rounded-xl bg-box-gray  px-5 py-2 text-center leading-tight md:mx-0 md:my-10 md:ml-8 md:w-[54rem] md:px-8 md:py-6 md:text-left md:text-[1.5rem] md:leading-normal">
        <p className="font-Outfit text-[1.3rem] md:text-2xl">
          thank you for reaching out! I have received your message and will get
          back to you asap.
        </p>
      </div>
    );
  }
  return (
    <section id="contact">
      <div className="contact mt-5 md:mt-10 md:h-screen">
        <div className="pt-10 font-Outfit md:ml-8">
          <h1 className="text-center font-Bebas-Neue text-[4rem] md:h-[6.5rem] md:text-left md:text-[4.65rem]">
            Connect with me
          </h1>
          <p className="px-10 text-center text-[1.6rem] leading-tight md:w-[60rem] md:px-0 md:text-left md:text-[2.75rem]">
            want to get in touch? just say hi!
          </p>
        </div>

        <div className="FORM">
          <form
            className="formbox mx-10 mt-10 flex flex-col rounded-xl bg-background-black px-8 py-8 font-Outfit md:mx-0 md:ml-8 md:w-[54rem]"
            onSubmit={handleSubmit}
          >
            <label className="mb-2 text-[1.2rem] md:text-[1.5rem]">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mb-4 rounded-md bg-box-gray px-4 py-2 placeholder-holder-color md:px-7 md:py-5"
            />

            <label
              htmlFor="email"
              className="mb-2 text-[1.2rem] md:text-[1.5rem]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="mb-4 rounded-md bg-box-gray px-4 py-2 placeholder-holder-color md:px-7 md:py-5"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label className="mb-2 text-[1.2rem] md:text-[1.5rem]">
              Message
            </label>
            <textarea
              type="text"
              name="messgage"
              placeholder="Type Your Message Here"
              className="mb-5 max-h-[11rem] min-h-[9rem] rounded-md bg-box-gray px-4 py-2 placeholder-holder-color md:mb-6  md:px-7 md:py-5"
              id="message"
            ></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              className="rounded-md bg-lakshay-blue py-2 text-[1.2rem] text-background-black transition-all duration-500 hover:ease-in md:rounded-xl md:py-5 md:text-[1.5rem] md:hover:bg-highlight-blue"
              type="submit"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-row justify-center md:mr-16 md:justify-end">
          <div
            className="UpperArrow flex items-center justify-center rounded-full bg-lakshay-blue transition-all duration-500 hover:bg-highlight-blue md:-my-64 md:mr-8 md:h-[12rem] md:w-[12rem] md:hover:scale-150 "
            onClick={scrollToTop}
          >
            <BsArrowUp size={100} className="text-background-black" />
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Contact;
