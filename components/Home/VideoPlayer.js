import React, { useContext, useEffect, useState, useRef } from "react";
import { VideoContext } from "@/contexts/VideoContext";
import Quiz from "./Quiz";
import { FaPlay, FaPauseCircle, FaVolumeMute } from "react-icons/fa";
import { MdOutlineFullscreen, MdOutlineVolumeUp } from "react-icons/md";
import { BsVolumeUpFill } from "react-icons/bs";
import { BiSolidCaptions } from "react-icons/bi";
import Footer from "./Footer/Footer";

const VideoPlayer = () => {

  const { modules, currentModule, currentChapter, updateChapterStatus } = useContext(VideoContext);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isVideoTitle,setIsVideoTitle] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setShowQuiz(false);
  }, [currentModule, currentChapter]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    // console.log('Video time update:', video.currentTime);
    setCurrentTime(videoRef.current.currentTime)
    if (video && video.duration - video.currentTime <= 30 && !showQuiz) {
      console.log('Showing quiz');
      setShowQuiz(true);
      updateChapterStatus(currentModule, currentChapter, "quizShown");
    }
  };

  const handleQuizCompletion = (passed) => {
    if (passed) {
      console.log('Quiz completed, passed:', passed);
      updateChapterStatus(currentModule, currentChapter, "completed");
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [captions, setCaptions] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [, setIsFullScreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressRef = useRef(null);

  const togglePlay = () => {
    console.log('Toggling play:', !isPlaying);
    setIsPlaying((prevState) => !prevState);
  };

  const toggleMute = () => {
    console.log('Toggling mute:', !isMuted);
    if (isMuted) {
      setVolume(previousVolume);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume) => {
    console.log('Volume change:', newVolume);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleKeyDown = (e) => {
    console.log('Key pressed: handleKeyDown Function', e.key);
    const video = videoRef.current;

    switch (e.key) {
      case " ":
        console.log('key pressed: spacebar', e.key);
      case "k":
        console.log('key pressed:', e.key);        
        togglePlay();
        break;
      case "ArrowRight":
        console.log('key pressed:', e.key);
        video.currentTime += 5;
        break;
      case "ArrowLeft":
        console.log('key pressed:', e.key);
        video.currentTime -= 5;
        break;
      case "ArrowUp":
        console.log('key pressed:', e.key);
        setVolume(Math.min(1, volume + 0.05));
        break;
      case "ArrowDown":
        console.log('key pressed:', e.key);
        setVolume(Math.max(0, volume - 0.05));
        break;
      case "m":
        console.log('key pressed:', e.key);
        toggleMute();
        break;
      case "f": 
      console.log('key pressed:', e.key);
        toggleFullScreenMode();
        break;
      case "c":
        console.log('key pressed:', e.key);
        toggleCaptions();
        break;
      case "j":
        console.log('key pressed:', e.key);
        video.currentTime -= 10;
        break;
      case "l":
        console.log('key pressed:', e.key);
        video.currentTime += 10;
        break;
      case ">":
        console.log('key pressed:', e.key);
        setPlaybackRate((prevRate) => Math.min(prevRate + 0.25, 2));
        break;
      case "<": 
      console.log('key pressed:', e.key);
        setPlaybackRate((prevRate) => Math.max(prevRate - 0.25, 0.25));
        break;
      default:
        break;
    }
  };

  const toggleFullScreenMode = () => {
    console.log('Toggling fullscreen mode');
    const videoContainer = videoRef.current.parentNode;
    if (!document.fullscreenElement) {
      console.log('Fullscreen mode');
      videoContainer.requestFullscreen();
      setIsVideoTitle(!isVideoTitle)      
    } else {
      console.log('Normal mode');      
      document.exitFullscreen();
      setIsVideoTitle(false)
    }
    setIsFullScreen((prevState) => !prevState);
  };

  const toggleCaptions = () => {
    console.log('Toggling captions:', !captions);
    setCaptions((prevState) => !prevState);
  };

  useEffect(() => {
    const video = videoRef.current;
    video.volume = volume;
    video.muted = isMuted; 
    video.playbackRate = playbackRate;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
    console.log('Video state updated:', { isPlaying, volume, isMuted, playbackRate });
  }, [isPlaying, volume, isMuted, playbackRate]);

  const handleVideoProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVideoProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newTime = (x / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVideoStart = () => {
    setIsPlaying(false)
  }

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0)
  };

  useEffect(() => {
    const video = videoRef.current;
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoRef]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [volume, isPlaying, isMuted, playbackRate,]);

  return (
    <div className="video-player w-2/3 h-screen overflow-y-scroll. relative">
      <div className="absolute top-8 left-2 font-[Poppins] tracking-wider text-white p-2">
        {/* <h2 className="text-xl font-bold">
          {modules[currentModule].chapters[currentChapter].name}
        </h2> */}
          {isVideoTitle ? (<h2 className="text-xl font-bold">
          {modules[currentModule].chapters[currentChapter].name}
        </h2>) : null}
      </div>
      <video
        ref={videoRef}
        src={modules[currentModule].chapters[currentChapter].videoUrl}
        onClick={()=>togglePlay()}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={()=>setDuration(videoRef.current.currentTime)}
        onLoadStart={handleVideoStart}
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full flex flex-col justify-end p-4">
        <input
          ref={progressRef}
          type="range"
          max={duration}
          value={currentTime}
          onChange={handleVideoProgressChange}
          onClick={handleVideoProgressClick}
          className="w-full"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 mt-2">
            <button onClick={togglePlay} title="toggle play">
              {isPlaying ? (
                <FaPauseCircle className="w-8 h-8 text-white" />
              ) : (
                <FaPlay className="w-8 h-8 text-white" />
              )}
            </button>
            <button onClick={toggleMute} title="toggle Mute">
              {isMuted || volume === 0 ? (
                <FaVolumeMute className="w-8 h-8 text-white" />
              ) : volume < 0.5 ? (
                <MdOutlineVolumeUp className="w-8 h-8 text-white" />
              ) : (
                <BsVolumeUpFill className="w-8 h-8 text-white" />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-24"
              title="volume range"
            />
            <span className="text-white">
              {new Date(currentTime * 1000).toISOString().substr(14, 5)} /{" "}
              {new Date(duration * 1000).toISOString().substr(14, 5)}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={playbackRate}
                onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                className="p-2 bg-gray-700 text-white rounded-md"
                title="playbackrate"
              >
                <option value="0.5">0.5x</option>
                <option value="1">1x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
              </select>
            </div>
            <button onClick={toggleCaptions} className="p-2" title="subtitles/captions">
              <BiSolidCaptions
                className={`w-8 h-8 ${
                  captions ? "text-yellow-300" : "text-white"
                }`}
              />
            </button>
            <button onClick={toggleFullScreenMode} className="p-2" title="toggle fullscreen">
              <MdOutlineFullscreen className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
      {showQuiz && (
        <Quiz
          moduleIndex={currentModule}
          chapterIndex={currentChapter}
          onComplete={handleQuizCompletion}
        />
      )}
      {/* <Footer /> */}
    </div>
  );
};
export default VideoPlayer;