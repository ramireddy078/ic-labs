import React from 'react'

function HeroContent() {
  return (
    <div>
        <h1 className='text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white'>1-to-1 VLSI training. Attaining skills of a 2 year professional.</h1>
        <p className='mt-6 text-sm md:text-lg text-white text-opacity-60'>Creating fearless workforce for future industry needs</p>
        <div className='mt-8 flex items-center space-x-4'>
            <button className='md:px-12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-green-700 hover:bg-green-900'>Get started</button>
            <button className='md:px-12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg hover:bg-yellow-700 bg-yellow-900'>Learn more</button>
        </div>
        <div className='flex items-center flex-wrap space-x-16 mt-8'>
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>10+</p>
                <p className='w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Mentors</p>
            </div>
            {/* <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>2260+</p>
                <p className='w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Students</p>
            </div> */}
            <div>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>6+</p>
                <p className='w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Courses</p>
            </div>
        </div>
    </div>
  )
}

export default HeroContent
