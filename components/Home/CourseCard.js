import React from "react";
import Image from "next/image";
import Link from "next/link";
const CourseCard = ({course}) => {
  // console.log(course.id)
  return (
    <div className="bg-white rounded-lg overflow-hidden text-center shadow-xl">
      <div>
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={400}
          className="w-full h-full"
        />
      </div>
      <div className="text-black text-2xl">{course.title}</div>
      <div className="text-black text-lg">{course.description}</div>
      <div className="flex justify-center gap-5 p-5">
        <Link href={`/courses/learn/${course.id}`}>
          <button className="text-white bg-blue-700 text-[18px] py-2 px-5 md:text-[18px] lg:text-[15px] lg:py-2 rounded-lg">
            Buy a course
          </button>
        </Link>
        <Link href={`/courses/${course.id}`}>
          <button className="text-white bg-blue-700 text-[18px] py-2 px-5 md:text-[18px] lg:text-[15px] lg:py-2 rounded-lg">
            Readmore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
