import React from "react";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";
import { VideoProvider } from "../../contexts/VideoContext";

const CourseVideos = () => {
  return (
    <div className="flex">
      <VideoProvider>
        <Sidebar />
        <VideoPlayer />
      </VideoProvider>
    </div>
  );
};

export default CourseVideos;
