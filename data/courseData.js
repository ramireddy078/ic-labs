export const courseData = [
    {  
        id: 1,  
        image: "/images/physical-design.jpg",  
        title: "Physical Design",  
        description: "VLSI Backend",  
        price: 59.99,  
        author: "Emily Johnson",  
        reviewNumber: 460,  
        lessons: 30,  
        students: 90,  
        category: "Design",  
        modules: [  
         {  
           moduleId: 1,  
           moduleName: "Module 1",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: true, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false, },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 2,  
           moduleName: "Module 2",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 3,  
           moduleName: "Module 3",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 4,  
           moduleName: "Module 4",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 5,  
           moduleName: "Module 5",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         }  
        ],  
        details: "Syntesis is the process of converting design code into logic gates...",  
        content: [  
         "Verification",  
         "Verification components",  
         "Test Plan development",  
         "Test Cases",  
         "Methodology-UVM/OVM",  
         "Coding",  
         "Verification metrics",  
         "Regression & Coverage analysis",  
         "How to debug issues",  
         "Projects"  
        ],  
        prerequisites: [  
         "Basic electronics and Linux basics",  
         "Passion for learning",  
         "Qualification: Diploma (EE, EC, EI, CS, IT), B.Tech/BE/M.Tech/ME, Any degree with Maths and Physics",  
         "Failed students with Passion"  
        ],  
        duration: "4 to 6 Months",  
        timings: "9AM to 5PM",  
        mode: "Offline/Online",  
        contact: {  
         email: "info@iclabs.in",  
         phone: "+91 8050 623065"  
        },  
        BackendCourses:{
          course1:"Physical Design",
          course2:"Power Sign-off",
          course3:"Synthesis and STA",
          course4:"Physical Verification"
        },
        FrontendCourses:{
          course1: "ASIC RTL Design",
          course2: "Design Verification - UVM/OVM"
        },
        trainer: {  
         name: "PRASAD",  
         experience: "18+ Years",  
         skillSet: "RTL to GDS II"  
        }  
       },  
       {  
        id: 2,  
        image: "/images/physical-verification-course.jpg",  
        title: "Physical Verification",  
        description: "VLSI Backend",  
        price: 55.99,  
        author: "Michael Brown",  
        reviewNumber: 440,  
        lessons: 18,  
        students: 110,  
        category: "Hacking",  
        modules: [  
         {  
           moduleId: 1,  
           moduleName: "Module 1",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: true, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false  },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false  },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false  },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false  }  
           ]  
         },  
         {  
           moduleId: 2,  
           moduleName: "Module 2",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 3,  
           moduleName: "Module 3",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 4,  
           moduleName: "Module 4",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 5,  
           moduleName: "Module 5",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false  },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false  },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false  },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false  },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false  }  
           ]  
         }  
        ],  
        details: "Physical verification is performed using various checks to ensure...",  
        content: [  
         "Verification of design",  
         "Physical layout verification",  
         "Verification constraints",  
         "Real-time checks",  
         "Debugging physical issues",  
         "Methods for ensuring consistency",  
         "Projects"  
        ],  
        prerequisites: [  
         "Basic understanding of VLSI",  
         "Qualification: B.Tech/BE/M.Tech/ME",  
         "Passion for backend design"  
        ],  
        duration: "3 to 5 Months",  
        timings: "10AM to 6PM",  
        mode: "Offline/Online",  
        contact: {  
         email: "info@iclabs.in",  
         phone: "+91 8050 623065"  
        },  
        BackendCourses:{
          course1:"Physical Design",
          course2:"Power Sign-off",
          course3:"Synthesis and STA",
          course4:"Physical Verification"
        },
        FrontendCourses:{
          course1: "ASIC RTL Design",
          course2: "Design Verification - UVM/OVM"
        },
        trainer: {  
         name: "SURESH",  
         experience: "12+ Years",  
         skillSet: "Physical Verification"  
        }  
       },  
       {  
        id: 3,  
        image: "/images/power-sign-off.jpg",  
        title: "Power Sign-off",  
        description: "VLSI Backend",  
        price: 59.99,  
        author: "Emily Johnson",  
        reviewNumber: 460,  
        lessons: 30,  
        students: 90,  
        category: "Design",  
        modules: [  
         {  
           moduleId: 1,  
           moduleName: "Module 1",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: true, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 2,  
           moduleName: "Module 2",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 3,  
           moduleName: "Module 3",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 4,  
           moduleName: "Module 4",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 5,  
           moduleName: "Module 5",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         }  
        ],  
        details: "Syntesis is the process of converting design code into logic gates...",  
        content: [  
         "Verification",  
         "Verification components",  
         "Test Plan development",  
         "Test Cases",  
         "Methodology-UVM/OVM",  
         "Coding",  
         "Verification metrics",  
         "Regression & Coverage analysis",  
         "How to debug issues",  
         "Projects"  
        ],  
        prerequisites: [  
         "Basic electronics and Linux basics",  
         "Passion for learning",  
         "Qualification: Diploma (EE, EC, EI, CS, IT), B.Tech/BE/M.Tech/ME, Any degree with Maths and Physics",  
         "Failed students with Passion"  
        ],  
        duration: "4 to 6 Months",  
        timings: "9AM to 5PM",  
        mode: "Offline/Online",  
        contact: {  
         email: "info@iclabs.in",  
         phone: "+91 8050 623065"  
        },  
        BackendCourses:{
          course1:"Physical Design",
          course2:"Power Sign-off",
          course3:"Synthesis and STA",
          course4:"Physical Verification"
        },
        FrontendCourses:{
          course1: "ASIC RTL Design",
          course2: "Design Verification - UVM/OVM"
        },
        trainer: {  
         name: "PRASAD",  
         experience: "18+ Years",  
         skillSet: "RTL to GDS II"  
        }  
       },
       {  
        id: 4,  
        image: "/images/asic-synthesis-sta.jpg",  
        title: "Synthesis & STA",  
        description: "VLSI Backend",  
        price: 59.99,  
        author: "Emily Johnson",  
        reviewNumber: 460,  
        lessons: 30,  
        students: 90,  
        category: "Design",  
        modules: [  
         {  
           moduleId: 1,  
           moduleName: "Module 1",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: true, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 2,  
           moduleName: "Module 2",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 3,  
           moduleName: "Module 3",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 4,  
           moduleName: "Module 4",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 5,  
           moduleName: "Module 5",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         }  
        ],  
        details: "Syntesis is the process of converting design code into logic gates...",  
        content: [  
         "Verification",  
         "Verification components",  
         "Test Plan development",  
         "Test Cases",  
         "Methodology-UVM/OVM",  
         "Coding",  
         "Verification metrics",  
         "Regression & Coverage analysis",  
         "How to debug issues",  
         "Projects"  
        ],  
        prerequisites: [  
         "Basic electronics and Linux basics",  
         "Passion for learning",  
         "Qualification: Diploma (EE, EC, EI, CS, IT), B.Tech/BE/M.Tech/ME, Any degree with Maths and Physics",  
         "Failed students with Passion"  
        ],  
        duration: "4 to 6 Months",  
        timings: "9AM to 5PM",  
        mode: "Offline/Online",  
        contact: {  
         email: "info@iclabs.in",  
         phone: "+91 8050 623065"  
        },  
        BackendCourses:{
          course1:"Physical Design",
          course2:"Power Sign-off",
          course3:"Synthesis and STA",
          course4:"Physical Verification"
        },
        FrontendCourses:{
          course1: "ASIC RTL Design",
          course2: "Design Verification - UVM/OVM"
        },
        trainer: {  
         name: "PRASAD",  
         experience: "18+ Years",  
         skillSet: "RTL to GDS II"  
        }  
       },  
       {  
        id: 5,  
        image: "/images/rtl-design.jpg",  
        title: "ASIC RTL Design",  
        description: "VLSI Frontend",  
        price: 55.99,  
        author: "Michael Brown",  
        reviewNumber: 440,  
        lessons: 18,  
        students: 110,  
        category: "Hacking",  
        modules: [  
         {  
           moduleId: 1,  
           moduleName: "Module 1",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: true, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 2,  
           moduleName: "Module 2",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 3,  
           moduleName: "Module 3",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 4,  
           moduleName: "Module 4",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 5,  
           moduleName: "Module 5",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false, completed: false, unlocked: false, quizShown: false }  
           ]  
         }  
        ],  
        details: "Physical verification is performed using various checks to ensure...",  
        content: [  
         "Verification of design",  
         "Physical layout verification",  
         "Verification constraints",  
         "Real-time checks",  
         "Debugging physical issues",  
         "Methods for ensuring consistency",  
         "Projects"  
        ],  
        prerequisites: [  
         "Basic understanding of VLSI",  
         "Qualification: B.Tech/BE/M.Tech/ME",  
         "Passion for backend design"  
        ],  
        duration: "3 to 5 Months",  
        timings: "10AM to 6PM",  
        mode: "Offline/Online",  
        contact: {  
         email: "info@iclabs.in",  
         phone: "+91 8050 623065"  
        },  
        BackendCourses:{
          course1:"Physical Design",
          course2:"Power Sign-off",
          course3:"Synthesis and STA",
          course4:"Physical Verification"
        },
        FrontendCourses:{
          course1: "ASIC RTL Design",
          course2: "Design Verification - UVM/OVM"
        },
        trainer: {  
         name: "SURESH",  
         experience: "12+ Years",  
         skillSet: "Physical Verification"  
        }  
       },  
       {  
        id: 6,  
        image: "/images/design-verification-in-vlsi.jpg",  
        title: "Design Verification - UVM/OVM",  
        description: "VLSI Frontend",  
        price: 59.99,  
        author: "Emily Johnson",  
        reviewNumber: 460,  
        lessons: 30,  
        students: 90,  
        category: "Design",  
        modules: [  
         {  
           moduleId: 1,  
           moduleName: "Module 1",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: true, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 2,  
           moduleName: "Module 2",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 3,  
           moduleName: "Module 3",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 4,  
           moduleName: "Module 4",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         },  
         {  
           moduleId: 5,  
           moduleName: "Module 5",  
           chapters: [  
            { chapterId: 1, chapterName: "Chapter 1", videoUrl: "url-to-video-1.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 2, chapterName: "Chapter 2", videoUrl: "url-to-video-2.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 3, chapterName: "Chapter 3", videoUrl: "url-to-video-3.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 4, chapterName: "Chapter 4", videoUrl: "url-to-video-4.mp4", completed: false, unlocked: false, quizShown: false },  
            { chapterId: 5, chapterName: "Chapter 5", videoUrl: "url-to-video-5.mp4", completed: false, unlocked: false, quizShown: false }  
           ]  
         }  
        ],  
        details: "Syntesis is the process of converting design code into logic gates...",  
        content: [  
         "Verification",  
         "Verification components",  
         "Test Plan development",  
         "Test Cases",  
         "Methodology-UVM/OVM",  
         "Coding",  
         "Verification metrics",  
         "Regression & Coverage analysis",  
         "How to debug issues",  
         "Projects"  
        ],  
        prerequisites: [  
         "Basic electronics and Linux basics",  
         "Passion for learning",  
         "Qualification: Diploma (EE, EC, EI, CS, IT), B.Tech/BE/M.Tech/ME, Any degree with Maths and Physics",  
         "Failed students with Passion"  
        ],  
        duration: "4 to 6 Months",  
        timings: "9AM to 5PM",  
        mode: "Offline/Online",  
        contact: {  
         email: "info@iclabs.in",  
         phone: "+91 8050 623065"  
        },  
        BackendCourses:{
          course1:"Physical Design",
          course2:"Power Sign-off",
          course3:"Synthesis and STA",
          course4:"Physical Verification"
        },
        FrontendCourses:{
          course1: "ASIC RTL Design",
          course2: "Design Verification - UVM/OVM"
        },
        trainer: {  
         name: "PRASAD",  
         experience: "18+ Years",  
         skillSet: "RTL to GDS II"  
        }  
       },
]