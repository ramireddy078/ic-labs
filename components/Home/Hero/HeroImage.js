"use client"
import Image from "next/image";
import React from "react";

function HeroImage() {
  return (
    
      <div className="hidden lg:block overflow-hidden">
        <Image src="/images/hero.png" width={800} height={600} alt="Hero"/>
      </div>
    
  );
}

export default HeroImage;
