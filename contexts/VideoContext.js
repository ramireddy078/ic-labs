import React, { createContext, useState } from "react";
import { eachCourseVideosData } from "@/data/eachCourseVideosData";
const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [modules, setModules] = useState(eachCourseVideosData);
  const [currentModule, setCurrentModule] = useState(0);
  const [currentChapter, setCurrentChapter] = useState(0);

  const updateChapterStatus = (moduleIndex, chapterIndex, status) => {
    console.log("updateChapterStatus called:", {
      moduleIndex,
      chapterIndex,
      status,
    });
    setModules((prevModules) => {
      const newModules = [...prevModules];
      console.log("New-Module", newModules);

      if (status === "completed") {
        newModules[moduleIndex].chapters[chapterIndex].completed = true;
        console.log("Chapter completed:", { moduleIndex, chapterIndex });
        if (chapterIndex < newModules[moduleIndex].chapters.length - 1) {
          newModules[moduleIndex].chapters[chapterIndex + 1].unlocked = true;
          console.log("Next chapter unlocked:", {
            moduleIndex,
            chapterIndex: chapterIndex + 1,
          });
        } else if (moduleIndex < newModules.length - 1) {
          newModules[moduleIndex + 1].chapters[0].unlocked = true;
          console.log("Next module's first chapter unlocked:", {
            moduleIndex: moduleIndex + 1,
            chapterIndex: 0,
          });
        }
      } else if (status === "quizShown") {
        newModules[moduleIndex].chapters[chapterIndex].quizShown = true;
        console.log("Quiz shown for chapter:", { moduleIndex, chapterIndex });
      }
      return newModules;
    });
  };

  return (
    <VideoContext.Provider
      value={{
        modules,
        currentModule,
        currentChapter,
        setCurrentModule,
        setCurrentChapter,
        updateChapterStatus,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export { VideoContext, VideoProvider };
