import React from "react";
import CourseCard from "./CourseCard";
import { courseData } from "@/data/courseData";

const Courses = () => {
  return (
    <div className="bg-gray-200 py-10">
      <h1 className="text-6xl text-center text-[#0c2e8a] font-semibold">
        Our Courses
      </h1>
      <div className="md:mt-16 mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-20">
        {courseData.map((course) => {
          return (
            <div key={course.id}>
              <CourseCard key={course.id} course={course} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
