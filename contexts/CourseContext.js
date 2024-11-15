import React, { createContext, useState } from "react";
import { courseData } from "@/data/courseData";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses] = useState(courseData);
  return (
    <CourseContext.Provider value={{ courses }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
