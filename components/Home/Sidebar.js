import React, { useContext, useState } from 'react';
import { VideoContext } from '../../contexts/VideoContext';

const Sidebar = () => {
  const { modules, setCurrentModule, setCurrentChapter } = useContext(VideoContext);
  const [expandedModules, setExpandedModules] = useState(modules.map(() => false));
  console.log(expandedModules);
  
  const [activeModule, setActiveModule] = useState(null);

  const handleModuleClick = (moduleIndex) => {
    console.log('Module clicked:', moduleIndex);
    setActiveModule(moduleIndex);
    toggleModule(moduleIndex);
  };

  const toggleModule = (index) => {
    console.log('Toggling module:', index);
    setExpandedModules((prev) => {
      const newExpandedModules = [...prev];
      newExpandedModules[index] = !newExpandedModules[index];      
      console.log(newExpandedModules);
      
      return newExpandedModules;
    });
  };

  return (
    <div className="sidebar w-1/3 p-4 bg-[#FAFAFA] max-h-screen h-full overflow-y-scroll">
      <h1 className='font-bold text-3xl capitalize font-[Poppin] border-b-[1px] border-b-gray-400 py-4'>Course Content</h1>
      {modules.map((module, moduleIndex) => (
        <div key={moduleIndex}>
          <h3
            className={`font-bold hover:cursor-pointer text-xl py-4 capitalize font-[Raleway] ${activeModule === moduleIndex ? "border-b-0" : "border-b-[1px] border-b-gray-400"}`}
            onClick={() => handleModuleClick(moduleIndex)}
          >
            {module.name}
          </h3>
          {expandedModules[moduleIndex] && (
            <ul>
              {module.chapters.map((chapter, chapterIndex) => (
                <li
                  key={chapterIndex}
                  className={`flex gap-2 font-[Inter] py-1 ${chapter.unlocked ? 'cursor-pointer font-semibold tracking-wider' : 'text-gray-400 cursor-not-allowed tracking-wide'}`}
                  onClick={() => {
                    if (chapter.unlocked) {
                      console.log('Chapter clicked:', { moduleIndex, chapterIndex });
                      setCurrentModule(moduleIndex);
                      setCurrentChapter(chapterIndex);
                    } else {
                      console.debug('Chapter locked:', { moduleIndex, chapterIndex });
                    }
                  }}
                >
                  {/* <input type="checkbox" checked={chapter.completed || chapter.quizShown} readOnly /> */}
                  <input type="checkbox" />
                  {chapter.name}
                </li>
              ))}
              <div className='border-b-gray-400 border-b-[1px] mt-5'></div>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
