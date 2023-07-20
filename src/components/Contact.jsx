import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { BsArrowUp } from 'react-icons/bs';
import { animateScroll } from 'react-scroll';
import { motion } from 'framer-motion'

export const Contact = () => {

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }

  const [state, handleSubmit] = useForm("mpzgwqaz"); // ENDPOINT
  if (state.succeeded) {
    return (
      <div className="Form Submission bg-box-gray py-6 px-8 rounded-xl ml-8 my-10 w-[54rem]">
        <p className='font-Outfit text-2xl text-highlight-blue-2'>thank you for reaching out! I have received your message and will get back to you asap.</p>
      </div>
    );
  }
  return (
    <section id='contact'>
      <motion.div
        initial={{ opacity: 0, y: '150' }}
        animate={{ opacity: 1, y: 0, transition: { duration: 2, delay: 0.5, type: 'spring', bounce: 0.3, } }}
        className="contact md:mt-10 md:h-screen mt-5">

        <div className="md:ml-8 font-Outfit pt-10">
          <h1 className="font-Bebas-Neue md:text-[4.65rem] md:h-[6.5rem] text-[4rem] text-center md:text-left">Connect with me</h1>
          <p className="md:text-[2.75rem] md:w-[60rem] leading-tight text-center px-10 md:text-left md:px-0 text-[1.6rem]">
            want to get in touch? just say hi!</p>
        </div>

        <div className="FORM">
          <form className='formbox flex flex-col font-Outfit md:ml-8 md:w-[54rem] mt-10 bg-background-black px-8 py-8 rounded-xl mx-10 md:mx-0' onSubmit={handleSubmit}>

            <label className='md:text-[1.5rem] mb-2 text-[1.2rem]'>Name</label>
            <input type="text" name='name' placeholder='Patrick Bateman' className='bg-box-gray md:py-5 py-2 md:px-7 px-4 md:rounded-xl rounded-md placeholder-holder-color mb-4' />

            <label htmlFor='email' className='md:text-[1.5rem] mb-2 text-[1.2rem]'>Email</label>
            <input type="email" name='email' id='email' placeholder='patrick@bateman.com' className='bg-box-gray md:py-5 py-2 md:px-7 px-4 md:rounded-xl rounded-md placeholder-holder-color mb-4' />

            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label className='md:text-[1.5rem] mb-2 text-[1.2rem]'>Message</label>
            <textarea type="text" name='messgage' placeholder='Type Your Message Here' className='bg-box-gray md:py-5 py-2 md:px-7 px-4 md:rounded-xl rounded-md max-h-[15rem] min-h-[12rem] placeholder-holder-color md:mb-6 mb-5' id='message' ></textarea>

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button className='bg-lakshay-blue text-background-black md:py-5 py-2 md:rounded-xl rounded-md md:text-[1.5rem] text-[1.2rem] hover:bg-highlight-blue transition-all duration-500 hover:ease-in' type='submit' disabled={state.submitting}>Send Message</button>
          </form>
        </div>
        <div className="flex flex-row md:mr-16 md:justify-end justify-center">
          <div className='UpperArrow md:w-[12rem] md:h-[12rem] rounded-full bg-lakshay-blue md:mr-8 md:hover:scale-150 transition-all delay-100 duration-500 flex items-center justify-center hover:bg-highlight-blue md:-my-64 ' onClick={scrollToTop}>
            <BsArrowUp size={100} className='text-background-black' />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact