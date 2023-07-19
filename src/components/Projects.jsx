import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { BsBoxArrowUpRight } from "react-icons/bs";


export const Projects = () => {

  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start((i) => ({
        x: 0,
        transition: {
          type: 'tween',
          duration: 0.8,
          delay: i * 0.2,
        },
      }));
    }
    if (!inView) {
      animation.start((i) => ({
        x: '-100vw',
        transition: {
          type: 'tween',
          duration: 0.8,
          delay: i * 0.2,
        },
      }));
    }

  }, [inView]);

  return (
    <section id='projects'>

      <div className='ml-8 font-Outfit h-screen pt-10'>

        <h1 className='font-Bebas-Neue text-[4.65rem] h-[6.5rem]'>Projects</h1>

        <p className='text-[2.75rem] w-[60rem] leading-tight'>these are some of the latest projects that I have worked on ... more on <a href='https://github.com/lakshaybhushan' target='_blank' rel="noopener noreferrer" className='underline decoration-solid hover:text-white transition-colors duration-500'>github</a></p>

        <div ref={ref} className="Reference"></div>

        <div className='container hovering mt-10 flex flex-col gap-4'>
          <motion.div animate={animation} custom={0}>
            <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem] hover:text-black transition-all duration-700 delay-100 hover:bg-pxorange'>
            <a href='https://pixelverse.lakshb.me/' target='_blank' rel="noopener noreferrer">
              <div className="flex flex-row items-center">
                <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>pixelverse</h1>
                <BsBoxArrowUpRight size={22} className='ml-3' />
              </div>
              <p className='text-[1.5rem]'>a free to use text-to-image generator</p>
            </a>
            </div>

          </motion.div>

          <motion.div animate={animation} custom={1}>
            <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem] hover:text-urlify-white transition-all duration-700 delay-100 hover:bg-urlify-green'>
              <a href='https://urlify.lakshb.me/' target='_blank' rel="noopener noreferrer">
              <div className="flex flex-row items-center">
                <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>urlify</h1>
                <BsBoxArrowUpRight size={22} className='ml-3' />
              </div>
              <p className='text-[1.5rem]'>a super simple url shortener</p>
              </a>
            </div>
          </motion.div>

          <motion.div animate={animation} custom={2}>
          <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem] hover:text-greeney-green transition-all duration-700 delay-100 hover:bg-greeney-blue'>
              <a href='https://greeney.lakshb.me/' target='_blank' rel="noopener noreferrer">
              <div className="flex flex-row items-center">
                <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Greeney</h1>
                <BsBoxArrowUpRight size={22} className='ml-3' />
              </div>
              <p className='text-[1.5rem]'>a dark greenish-blue colour theme for vscode</p>
              </a>
            </div>
          </motion.div>

          <motion.div animate={animation} custom={3}>
          <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem] hover:text-black transition-all duration-700 delay-100 hover:bg-white'>
              <a href='https://designhall.lakshb.me/' target='_blank' rel="noopener noreferrer">
              <div className="flex flex-row items-center">
                <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Design Hall</h1>
                <BsBoxArrowUpRight size={22} className='ml-3' />
              </div>
              <p className='text-[1.5rem]'>a collection of designs that I have created</p>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Projects