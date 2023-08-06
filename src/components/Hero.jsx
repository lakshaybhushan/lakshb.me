import React from 'react'
import { motion } from 'framer-motion'

export const Hero = () => {
    return (
        <section id='home'>
            {/* <motion.div
                initial={{ opacity: 0, y: '150' }}
                animate={{ opacity: 1, y: 0, transition: { duration: 2, delay: 0.5, type: 'spring', bounce: 0.3, } }} */}

                <div

                className='md:ml-8 font-Outfit flex-col md:h-screen md:pt-12 pt-6'>
                <h1 className='font-Bebas-Neue md:m-0 md:text-[13rem] text-[7rem] leading-[90.5%] md:w-[38rem] md:h-[22rem] text-center md:text-left'>Lakshay <br></br> Bhushan</h1>
                <h2 className='md:text-[3.8rem] text-[2rem] md:w-[38rem] text-center md:text-left'>Designer & Developer</h2>
                <p className='md:text-[2.75rem] text-[1.6rem] md:w-[60rem] leading-tight bottom-5 md:absolute text-justify md:text-left mt-10 md:mt-0 px-10 md:px-0 py-10 md:py-0'>hey!! I’m lakshay, a 19 yr old cs student at <a href='https://www.iiitd.ac.in/' target='_blank' rel="noopener noreferrer" className='underline decoration-solid hover:text-highlight-blue transition-colors duration-500'>iiit delhi</a> who likes to build websites & other dev stuff with minimal user interfaces.</p>
            {/* </motion.div> */}
            </div>
        </section>
    )
}

export default Hero