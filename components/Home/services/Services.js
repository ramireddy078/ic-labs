import { serviceData } from '@/services/services'
import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <div className='py-24 bg-white'>
        <div className='w-[80%] mx-auto flex flex-col gap-5'>
            <h1 className='text-[#0c2e8a] text-4xl md:text-5xl font-semibold'>Training Services</h1>
            <p className='text-gray-500 text-lg md:text-xl'>ICLabs IN is the solution to all your VLSI Design questions. Start your journey with skilled VLSI professionals, We make your career successful with diligence, enthusiasm, and dedication.</p>
        </div>
        <div className='md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white w-[80%] mx-auto'>
            {serviceData.map((service)=> {
                return (
                    <div key={service.id}>
                        <ServiceCard service={service}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services
