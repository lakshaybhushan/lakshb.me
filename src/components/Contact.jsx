import React from 'react'
import { useForm,ValidationError } from '@formspree/react'
import { BsArrowUp } from 'react-icons/bs';
import { animateScroll } from 'react-scroll';

export const Contact = () => {

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }

  const [state, handleSubmit] = useForm("mpzgwqaz");
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

        <form className='flex flex-col font-Outfit gap-4 ml-8 w-[54rem] mt-10' onSubmit={handleSubmit}>

        <label className='block text-[1.5rem]'>Name</label>
        <input type="text" name='name' placeholder='Patrick Bateman' className='bg-box-gray py-5 px-7 rounded-xl placeholder-holder-color'/>

        <label htmlFor='email' className='block text-[1.5rem]'>Email</label>
        <input type="email" name='email' id='email' placeholder='patrick@bateman.com' className='bg-box-gray py-5 px-7 rounded-xl placeholder-holder-color'/>

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label className='block text-[1.5rem]'>Message</label>
        <textarea type="text" name='messgage' placeholder='Type Your Message Here' className='bg-box-gray py-5 px-7 rounded-xl max-h-[15rem] min-h-[12rem] placeholder-holder-color' id='message' ></textarea>

        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button className='bg-lakshay-blue text-background-black py-5 px-7 rounded-xl text-[1.5rem] hover:bg-highlight-blue-2 transition-all duration-300 hover:ease-in delay-75' type='submit' disabled={state.submitting}>Send Message</button>
        </form>
        <div className="flex flex-row mr-16 justify-end">
                    <div className='UpperArrow w-[12rem] h-[12rem] rounded-full bg-lakshay-blue -my-40 mr-8 hover:scale-150 transition-all delay-100 duration-500 flex items-center justify-center hover:bg-highlight-blue-2' onClick={scrollToTop}>
                        <BsArrowUp size={100} className='text-background-black'/>
                    </div>
                </div>
      </div>

    </section>
  )
}

export default Contact