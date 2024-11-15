import Courses from '@/components/Home/Courses'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-200' id='courses'>
      <h1 className='text-center text-5xl p-5 text-blue-700 font-semibold'>Our Courses</h1>
      <Courses />
    </div>
  )
}

export default page
