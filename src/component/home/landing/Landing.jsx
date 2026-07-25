import Outlinebutton from "@/hooks/button/Outlinebutton";
import Image from "next/image";
import React from "react";

export default function Landing() {
  return (
    <div className="landing-main relative w-full flex justify-center items-center h-fit py-30">
      <div className="bg-image-cotent hidden md:flex absolute w-[100%] z-0">
        <Image
          src="/assets/sliderbg.jpg"
          width={500}
          height={100}
          className="w-full object-contain"
        />
      </div>
      <div className="landing-container z-1 w-full flex flex-wrap justify-center items-center">
        <div className="landing-left w-full max-w-[800px]">
          <div className="landing-content text-2xl sm:text-3xl md:text-[36px] lg:text-[64px] font-bold leading-tight flex flex-col gap-8">
            <h1>
              {" "}
              Your <span className="text-[#3C65F5]">Career</span>Journey Starts
              Here - Explore{" "}
              <span className="text-[#3C65F5]">JobHunt Now!</span>
            </h1>
            <Outlinebutton label={"Find Jobs Today"} />
          </div>
        </div>
        <div className="ladning-left hidden md:flex h-full max-h-[200px] md:max-h-[500px] overflow-hidden ">
          <div className="content-image">
            <Image
              src="/assets/hero-content-iamge.png"
              width={500}
              height={100}
              className=" w-[400px] h-[300px] md:h-[600px] -scale-x-100 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
