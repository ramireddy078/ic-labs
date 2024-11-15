import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer({courses}) {
  return (
    <div className="pt-20 pb-12 bg-black">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white/20">
        <div className="space-y-3">
          <Link href={"/"}>
            <h1 className="text-white text-4xl">IcLabs.in</h1>
          </Link>
          {/* <Image src={"/images/logo.png"} alt='logo' height={100} width={100} /> */}
          <p className="text-white/50 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            provident.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF className="w-6 h-6 text-blue-600" />
            <FaTwitter className="w-6 h-6 text-sky-500" />
            <FaYoutube className="w-6 h-6 text-red-700" />
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </div>
        </div>
        <div>
          <h1 className="text-lg text-white font-bold mb-4">Popular</h1>
          {
            courses.map((courseTitle)=> (
              <Link href={`/courses/${courseTitle.id}`} key={courseTitle.id}>
                
                <p className="text-sm text-white hover:text-blue-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                  {courseTitle.title}
                </p>
              </Link>
            ))
          }
        </div>
        <div>
          <h1 className="text-lg text-white font-bold mb-4">Quick Links</h1>
          <Link href={"/"}>
            <p className="text-sm text-white hover:text-blue-700 cursor-pointer text-opacity-60 mb-3 w-fit">
              Home
            </p>
          </Link>
          <Link href={"/about"}>
            <p className="text-sm text-white hover:text-blue-700 cursor-pointer text-opacity-60 mb-3 w-fit">
              About
            </p>
          </Link>
          <Link href={"/courses"}>
            <p className="text-sm text-white hover:text-blue-700 cursor-pointer text-opacity-60 mb-3 w-fit">
              Courses
            </p>
          </Link>
          <Link href={"blog"}>
            <p className="text-sm text-white hover:text-blue-700 cursor-pointer text-opacity-60 mb-3 w-fit">
              Blog
            </p>
          </Link>
          <Link href={"services"}>
            <p className="text-sm text-white hover:text-blue-700 cursor-pointer text-opacity-60 mb-3 w-fit">
              Services
            </p>
          </Link>
          <Link href={""}>
            <p className="text-sm text-white hover:text-blue-700 cursor-pointer text-opacity-60 mb-3 w-fit">
              Contact
            </p>
          </Link>
        </div>
        <div>
          <h1 className="text-lg text-white font-bold mb-4">
            Subscribe Our Newsletter
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="px-6 py-5 text-lg rounded-lg outline-none bg-gray-700 w-full text-white"
          />
          <button className="px-6 py-2 text-lg mt-4 rounded-lg outline-none bg-rose-700 w-full text-white">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-center mt-4 text-base text-white/70">
        Copyright 2024 by{" "}
        <Link href={""} className="text-blue-600 underline">
          IcLabs.in
        </Link>
      </p>
    </div>
  );
}

export default Footer;
