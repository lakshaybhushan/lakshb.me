import React from 'react'

export const Hero = () => {
    return (
        <section id='home'>
        <div className='ml-8 font-Outfit flex-col h-screen pt-12'>
            <h1 className='font-Bebas-Neue m-0 text-[13rem] leading-[90.5%] w-[38rem] h-[23rem]'>Lakshay <br></br> Bhushan</h1>
            <h2 className='text-[4.65rem]'>Designer & Developer</h2>
            {/* <div className="bgshapes absolute bottom-20 right-8 w-96 h-96 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full filter blur-3xl opacity-50"/> */}
            <p className='text-[2.75rem] w-[60rem] leading-tight bottom-5 absolute'>hey!! I’m lakshay, a 19 yr old cs student at <a href='https://www.iiitd.ac.in/' target='_blank' rel="noopener noreferrer" className='underline decoration-solid hover:text-highlight-blue transition-colors duration-500'>iiit delhi</a> who likes to build websites & other dev stuff with minimal user interfaces.</p>
        </div>
        </section>
    )
}

export default Hero