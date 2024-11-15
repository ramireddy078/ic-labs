import React from "react";
import { FaArrowRight, FaAward } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function About() {
  return (
    <div className="py-24 bg-white">
        <h1 className="text-blac text-[#0c2e8a] text-center pb-20 text-5xl font-semibold">About Us</h1>
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              <FaAward className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-black font-semibold">
              Guaranteed and Certified
            </h1>
          </div>
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">
            Welcome to Research Oriented Learning
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Our vision is to create highly skilled and enthusiastic VLSI Design
            engineers for the future semiconductor industry needs.
          </p>
          <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white">
            <span>Learn more</span>
            <FaArrowRight />
          </button>
        </div>
        <div>
          <div>
            {/* <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-10">01</h1> */}
            <div className="-mt-10 flex flex-col gap-5">
              <div>
                <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-semi-bold flex ">
                  <span>
                    <TiTick />
                  </span>
                  Research Oriented Approach.
                </h1>
                <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-semi-bold flex">
                  <span>
                    <TiTick />
                  </span>
                  Conceptual Learning.
                </h1>
                <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-semi-bold flex">
                  <span>
                    <TiTick />
                  </span>
                  Involve to Evolve.
                </h1>
                <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-semi-bold flex">
                  <span>
                    <TiTick />
                  </span>
                  High quality VLSI Training with 3-6 Months of Internship.
                </h1>
              </div>
              <div>
                <p className="w-[90%] lg:w-[70%] text-2xl text-black text-opacity-60 font-bold">
                  Gain theoretical knowledge along with its practical relevance,
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-lg text-black">
                  <strong className="text-green-400">Research Oriented </strong>
                  teaching helps students involve deeper into concepts and
                  enhance their learning competence and develop an appetite for
                  critical thinking which is very much required for todays's job
                  seakers.
                </h1>
                <p className="text-lg text-black">
                  Face every interview with confidence. Does any company reject
                  when you have all the skills required for the job???
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-8">
                <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-10">02</h1>
                <div className="-mt-10">
                    <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">
                        Pocket Friendly
                    </h1>
                    <p className="w-[90%] lg:w-[70%] text-base text-black text-opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facilis!</p>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
