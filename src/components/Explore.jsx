import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs"
import Iframe from 'react-iframe'
import { motion } from 'framer-motion'

export const Explore = () => {
  return (
    <section id='explore'>
      <motion.div
        initial={{ opacity: 0, y: '150' }}
        animate={{ opacity: 1, y: 0, transition: { duration: 2, delay: 0.5, type: 'spring', bounce: 0.3, } }}
        className='md:ml-8 font-Outfit md:pt-7 pt-10'>

        <h1 className='font-Bebas-Neue md:text-[4.65rem] md:h-[6.5rem] text-[4rem] text-center md:text-left'>Explore</h1>

        <p className='md:text-[2.75rem] md:w-[60rem] leading-tight text-center px-10 md:text-left md:px-0 text-[1.6rem]'>more info about me</p>

        <div className='mt-10 flex flex-col md:gap-4 gap-5'>

          <div className='bg-box-gray py-6 px-10 rounded-xl md:w-[54rem] mx-10 md:mx-0'>
            <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Tech I know</h1>
            <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'><span className='text-highlight-blue'>Programming Languages:</span> Python, C, C++, Java, JavaScript</p>
            <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'><span className='text-highlight-blue'>Frameworks:</span> React, Tailwind CSS, Vite (JS build tool)</p>
            <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'><span className='text-highlight-blue'>Creative Softwares:</span> Figma, Adobe Photoshop, Illustrator, Blender</p>
            <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'><span className='text-highlight-blue'>Miscellaneous:</span> Git, Github, MySQL, LibGDX (Game Dev Framework)</p>
          </div>

          <div className='bg-box-gray py-6 px-10 rounded-xl md:w-[54rem] mx-10 md:mx-0 md:hover:text-white transition-all duration-700 delay-75 md:hover:bg-resume-color'>
            <a href='https://resume.lakshb.me/' target='_blank' rel="noopener noreferrer">
              <div className='flex flex-row items-center'>
              <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Resume</h1>
              <BsBoxArrowUpRight size={22} className='bsarrow ml-3' />
            </div>
            <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'>my iiit delhi format resume <span className='underline decoration-dotted decoration-2 '>(pdf)</span></p>
            </a>
          </div>

          <div className='bg-box-gray py-6 px-10 rounded-xl md:w-[54rem] mx-10 md:mx-0'>
            <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Spotify Playlist</h1>
            <p className='md:text-[1.5rem] text-[1.3rem] leading-tight md:leading-normal'>a collection of music that I like to listen while I’m working</p>
          </div>

          <div className='bg-box-gray rounded-xl md:w-[54rem] md:h-[420px] mx-10 md:mx-0'>
            <Iframe
              style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/6bjakLyWWbXLWBKEFxOzx5?utm_source=generator&theme=0"
              width="100%"
              height="420"
              allow="encrypted-media"
              loading="lazy" />
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Explore