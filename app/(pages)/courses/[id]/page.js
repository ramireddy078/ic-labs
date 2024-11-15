"use client";
import React from "react";
import ReadMore from "@/components/Home/ReadMore";
import { courseData } from "@/data/courseData";
import { useParams } from "next/navigation";

const page = () => {

  const {id} = useParams();
  console.log("personel id:",id)
  const course = courseData.find((course) => course.id.toString() === id || course.id === Number(id));
  console.log(course);
  if (!course) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ReadMore course={course} />;
    </div>
  );
};

export default page;
