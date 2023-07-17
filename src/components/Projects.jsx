import React from 'react'

export const Projects = () => {

  return (
    <section id='projects'>

      <div className='ml-8 font-Outfit h-screen pt-10'>
        <h1 className='font-Bebas-Neue text-[4.65rem] h-[6.5rem] '>Projects</h1>
        <p className='text-[2.75rem] w-[60rem] leading-tight'>these are some of the latest projects that I have worked on ... more on <a href='https://github.com/lakshaybhushan' target='_blank' rel="noopener noreferrer" className='underline decoration-solid hover:text-highlight-blue transition-colors duration-500'>github</a></p>

        <div className='mt-10 flex flex-col gap-4'>

          <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem]' data-src='/public/images/Nomad-Semaj.jpeg'>
            <h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>pixelverse</h1>
            <p className='text-[1.5rem]'>a free to use text-to-image generator</p>
          </div>

          <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem]'><h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>urlify</h1>
            <p className='text-[1.5rem]'>a super simple url shortener</p>
          </div>

          <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem]'><h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Greeney</h1>
            <p className='text-[1.5rem]'>a dark greenish-blue colour theme for vscode</p>
          </div>

          <div className='bg-box-gray py-6 px-10 rounded-xl w-[54rem]'><h1 className='text-[2rem] h-[2.5rem] font-Bebas-Neue'>Design Hall</h1>
            <p className='text-[1.5rem]'>a collection of designs that I have created</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects