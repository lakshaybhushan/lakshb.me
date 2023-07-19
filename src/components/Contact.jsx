import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { BsArrowUp } from 'react-icons/bs';
import { animateScroll } from 'react-scroll';

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
      <div className="contact mt-[5rem] h-screen">

        <div className="ml-8 font-Outfit pt-10">
          <h1 className="font-Bebas-Neue text-[4.65rem] h-[6.5rem]">Connect with me</h1>
          <p className="text-[2.75rem] w-[60rem] leading-tight">
            want to get in touch? just say hi!</p>
        </div>

        <div className="FORM">
          <form className='flex flex-col font-Outfit ml-8 w-[54rem] mt-10' onSubmit={handleSubmit}>

            <label className='text-[1.5rem] mb-2'>Name</label>
            <input type="text" name='name' placeholder='Patrick Bateman' className='bg-box-gray py-5 px-7 rounded-xl placeholder-holder-color mb-4' />

            <label htmlFor='email' className='text-[1.5rem] mb-2'>Email</label>
            <input type="email" name='email' id='email' placeholder='patrick@bateman.com' className='bg-box-gray py-5 px-7 rounded-xl placeholder-holder-color mb-4' />

            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label className='text-[1.5rem] mb-2'>Message</label>
            <textarea type="text" name='messgage' placeholder='Type Your Message Here' className='bg-box-gray py-5 px-7 rounded-xl max-h-[15rem] min-h-[12rem] placeholder-holder-color mb-6' id='message' ></textarea>

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button className='bg-lakshay-blue text-background-black py-5 rounded-xl text-[1.5rem] hover:bg-highlight-blue transition-all duration-500 hover:ease-in' type='submit' disabled={state.submitting}>Send Message</button>
          </form>
        </div>
        <div className="flex flex-row mr-16 justify-end">
          <div className='UpperArrow w-[12rem] h-[12rem] rounded-full bg-lakshay-blue mr-8 hover:scale-150 transition-all delay-100 duration-500 flex items-center justify-center hover:bg-highlight-blue -my-64' onClick={scrollToTop}>
            <BsArrowUp size={100} className='text-background-black' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact