import React from 'react'

export const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact mt-[5rem] h-screen">
        <div className="ml-8 font-Outfit pt-10">
          <h1 className="font-Bebas-Neue text-[4.65rem] h-[6.5rem]">Connect with me</h1>
          <p className="text-[2.75rem] w-[60rem] leading-tight">
          want to get in touch? just say hi!</p>
        </div>

        <form className='flex flex-col font-Outfit gap-4 ml-8 w-[54rem] mt-10'>

        <label className='block text-[1.5rem]'>Name</label>
        <input type="text" name='Name' placeholder='Patrick Bateman' className='bg-box-gray py-5 px-7 rounded-xl'/>

        <label className='block text-[1.5rem]'>Email</label>
        <input type="text" name='Email' placeholder='patrick@bateman.com' className='bg-box-gray py-5 px-7 rounded-xl'/>

        <label className='block text-[1.5rem]'>Message</label>
        <textarea type="text" name='Messgage' placeholder='Type Your Message Here' className='bg-box-gray py-5 px-7 rounded-xl max-h-[20rem] min-h-[12rem]'></textarea>

        <button className='bg-lakshay-blue text-background-black py-5 px-7 rounded-xl text-[1.5rem] hover:bg-highlight-blue-2 transition-all duration-300 hover:ease-in delay-75 '>Send Message</button>
        </form>
      </div>
    </section>


  )
}

export default Contact