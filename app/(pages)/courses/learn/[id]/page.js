"use client"
import CourseVideos from '@/components/Home/CourseVideos';
import { courseData } from '@/data/courseData';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {id} = useParams();
    console.log("is:",id)
    const course = courseData.find((course) => course.id.toString() === id || course.id === Number(id));
    console.log("course:",course)
    if(!course) {
        return <div>Loading...</div>
    }
  return (
    <div>
      <CourseVideos />
      {/* hello */}
    </div>
  )
}

export default page
