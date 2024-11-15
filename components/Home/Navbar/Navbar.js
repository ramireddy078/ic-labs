"use client";
import Link from "next/link";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";


function Navbar({openNav}) {

    const [navBg,setNavBg] = useState(false);
    useEffect(()=>{
        const handler = () => {
            if(window.scrollY >= 90){
                setNavBg(true)
            }
            else if(window.scrollY < 90){
                setNavBg(false)
            }
        }
        window.addEventListener('scroll', handler);
        return () => removeEventListener("scroll", handler); 
    })
  return (
    <>
      <div className={`fixed ${navBg ? 'bg-indigo-800' : 'fixed'} w-full transition-all duration-200 h-[12vh] z-[1000] bg-indigo-950 bg-blue-00`}>
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        <Link href={"/"}>
        <h1 className="text-4xl text-white">Iclabs.in</h1>
          {/* <Image src="/images/logo.png" alt="Logo" width={120} height={120}/> */}
        </Link>
        <div className="hidden lg:flex items-center space-x-10">
          {/* {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className='relative text-xl w-fit block after:block after:content-[""] font-semibold after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right'>
                  {link.label}
                </p>
              </Link>
            );
          })} */}
          <Link href={"/"}>
            <p className="relative z-10 text-xl w-fit block after:block after:content-[''] font-semibold after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right cursor-pointer">Home</p>
          </Link>
          <Link href={"/about"}>
            <p className="relative z-10 text-xl w-fit block after:block after:content-[''] font-semibold after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right cursor-pointer">About</p>
          </Link>
          <Link href={"/courses"}>
            <p className="relative z-10 text-xl w-fit block after:block after:content-[''] font-semibold after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right cursor-pointer">Courses</p>
          </Link>
          <Link href={"/services"}>
            <p className="relative z-10 text-xl w-fit block after:block after:content-[''] font-semibold after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right cursor-pointer">Services</p>
          </Link>
          {/* <Link href={"/"}>
            <p className="relative text-xl w-fit block after:block after:content-[''] font-semibold after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right cursor-pointer">Testimonial</p>
          </Link> */}
          <Link href={"/blog"}>
            <p className="relative z-10 text-xl w-fit block after:block after:content-[''] font-semibold after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right cursor-pointer">Blog</p>
          </Link>
          {/* <Link href={""}>
            <p className="relative text-xl w-fit block after:block after:content-[''] font-semibold after:absolute after:h-[3px] after:bg-yellow-400 text-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right cursor-pointer">Contact</p>
          </Link> */}
          
        </div>
        <div className="flex items-center space-x-10">
          <Link href={"/account/register"}>
          <button className="md:px-10 md:py-2 px-8 py-1.5 z-20 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg">SignUp / Login</button>
          </Link>
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navbar;
