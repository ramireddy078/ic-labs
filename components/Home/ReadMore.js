import Image from "next/image";
import React from "react";

const ReadMore = ({ course }) => {
  // console.log(course)
  if (!course) {
    return <h1>course is not found</h1>;
  }
  return (
    <main className="main bg-gray-100">
      <div className="container mx-auto p-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left side - 2/3 */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <section id="blog-details" className="blog-details">
              <article className="article">
                <div className="post-img">
                  <Image
                    src={course.image}
                    alt={course.title}
                    height={1000}
                    width={1500}
                    className="object-cover rounded-md"
                  />
                </div>

                <h2 className="text-2xl font-semibold mt-6 text-[#0c2e8a]">DETAILS</h2>
                <p className="text-gray-600 mt-4">{course.details}</p>

                <div className="content mt-6">
                  <h3 className="text-xl font-semibold text-[#0c2e8a]">Content</h3>
                  <ul className="list-disc list-inside mt-3 text-gray-700">
                    {course.content.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 text-[#0c2e8a]">Prerequisites</h3>
                  <ul className="list-disc list-inside mt-3 text-gray-700">
                    {course.prerequisites.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 text-[#0c2e8a]">Selection Process</h3>
                  <ul className="list-disc list-inside mt-3 text-gray-700">
                    <li>Analytical Test</li>
                    <li>Interview</li>
                  </ul>
                </div>
              </article>
            </section>
          </div>

          {/* Right side - 1/3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="widgets-container">
              <div className="categories-widget mb-8">
                <h3 className="text-xl font-semibold text-[#0c2e8a]">Course Information</h3>
                <hr className="my-2" />
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li><strong>Category:</strong> {course.category}</li>
                  <li><strong>Duration:</strong> {course.duration}</li>
                  <li><strong>Timings:</strong> {course.timings}</li>
                  <li><strong>Mode:</strong> {course.mode}</li>
                </ul>
              </div>

              <div className="categories-widget mb-8">
                <h3 className="text-xl font-semibold text-[#0c2e8a]">Backend Courses</h3>
                <hr className="my-2" />
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>{course.BackendCourses.course1}</li>
                  <li>{course.BackendCourses.course2}</li>
                  <li>{course.BackendCourses.course3}</li>
                  <li>{course.BackendCourses.course4}</li>
                </ul>
              </div>
              <div className="categories-widget mb-8">
                <h3 className="text-xl font-semibold text-[#0c2e8a]">Frontend Courses</h3>
                <hr className="my-2" />
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>{course.FrontendCourses.course1}</li>
                  <li>{course.FrontendCourses.course2}</li>
                </ul>
              </div>

              <div className="categories-widget mb-8">
                <h3 className="text-xl font-semibold text-[#0c2e8a]">Contact Info</h3>
                <hr className="my-2" />
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li><strong>Email:</strong> {course.contact.email}</li>
                  <li><strong>Phone/WhatsApp:</strong> {course.contact.phone}</li>
                </ul>
              </div>

              <div className="categories-widget mb-8">
                <h3 className="text-xl font-semibold text-[#0c2e8a]">Trainer</h3>
                <hr className="my-2" />
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>{course.trainer.name} (Chief Trainer)</li>
                  <li><strong>Experience:</strong> {course.trainer.experience}</li>
                  <li><strong>Skill Set:</strong> {course.trainer.skillSet}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    // <main>
    //   <div className="bg-white rounded-lg overflow-hidden text-center shadow-xl">
    //     <div>
    //       <Image
    //         src={course.image}
    //         alt={course.title}
    //         width={400}
    //         height={400}
    //         className="w-full h-full"
    //       />
    //     </div>
    //     <div className="text-black text-2xl">{course.title}</div>
    //     <div className="text-black text-lg">{course.description}</div>
    //     <div className="flex justify-center gap-5 p-5">
    //       <button className="text-white bg-blue-700 text-[18px] py-2 px-5 md:text-[18px] lg:text-[15px] lg:py-2 rounded-lg">
    //         Buy a course
    //       </button>
    //       <button className="text-white bg-blue-700 text-[18px] py-2 px-5 md:text-[18px] lg:text-[15px] lg:py-2 rounded-lg">
    //         Readmore
    //       </button>
    //     </div>
    //   </div>
    // </main>
  );
};

export default ReadMore;
