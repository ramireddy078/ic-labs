"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import ResponsiveNav from './ResponsiveNav';
const pathname = usePathname();


const NavPath = ({course}) => {
  return (
    <div>
      {pathname !== `http://localhost:3000/courses/learn/${course.id}` && <ResponsiveNav />}
    </div>
  )
}

export default NavPath
