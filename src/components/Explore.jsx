import React from 'react'
import { BsBoxArrowUpRight } from "react-icons/bs";
import Iframe from 'react-iframe';

export const Explore = () => {
  return (
    <section id='explore'>
      <div className='ml-8 font-Outfit pt-10 h-scren'>

        <h1 className='font-Bebas-Neue text-[4.65rem] h-[6.5rem]'>Explore</h1>

        <p className='text-[2.75rem] w-[60rem] leading-tight'>more info about me</p>

        <div className='mt-5 flex flex-col gap-4'>

          <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem]'>
            <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Tech I know</h1>
            <p className='text-[1.5rem]'><span className='text-highlight-blue-2'>Programming Languages:</span> Python, C, C++, Java, JavaScript</p>
            <p className='text-[1.5rem]'><span className='text-highlight-blue-2'>Frameworks:</span> React, Tailwind CSS, Vite (JS build tool)</p>
            <p className='text-[1.5rem]'><span className='text-highlight-blue-2'>Creative Softwares:</span> Figma, Adobe Photoshop, Illustrator, Blender</p>
            <p className='text-[1.5rem]'><span className='text-highlight-blue-2'>Miscellaneous:</span> Git, Github, MySQL, LibGDX (Game Dev Framework)</p>
          </div>
          <a href='https://lakshb.me/resume' target='_blank' rel="noopener noreferrer" className='w-[54rem]'>
            <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem]'>
              <div className='flex flex-row items-center'>
                <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Resume</h1>
                <BsBoxArrowUpRight size={22} className='ml-3' />
              </div>
              <p className='text-[1.5rem]'>my iiit delhi format resume <span className='underline decoration-dotted decoration-2 '>(pdf)</span></p>
            </div>
          </a>
          <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem]'>
            <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Spotify Playlist</h1>
            <p className='text-[1.5rem]'>a currated spotify playlist that I like to listen while I’m working</p>
          </div>
          <div className='bg-box-gray rounded-xl w-[54rem]'>
          <Iframe
            style="border-radius:12px"
            src="https://open.spotify.com/embed/playlist/6bjakLyWWbXLWBKEFxOzx5?utm_source=generator"
            width="100%"
            height="420"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy" />
            </div>
        </div>

      </div>
    </section>
  )
}

export default Explore