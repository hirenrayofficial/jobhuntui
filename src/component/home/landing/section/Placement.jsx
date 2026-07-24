import Primarybutton from "@/hooks/button/Primarybutton";
import Image from "next/image";
import React from "react";

export default function Placement() {
  return (
    <div className="place-main py-12 w-full min-h-[80vh] bg-white flex justify-center items-center relative overflow-hidden">
      {/* Centered Image Container */}
      <div className="bg-image-content z-1 absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
        <div className="relative w-[500px] h-[650px] mt-100 ml-80">
          <Image
            src="/assets/hero-content-iamge.png"
            alt="Hero Background"
            fill
            className="object-contain -scale-x-100"
          />
        </div>
      </div>
      <div className="bg-image-content absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/sliderbg.jpg"
          alt="Slider Background"
          fill
          className="object-cover w-full h-full origin-right scale-250 opacity-50"
        />
      </div>

      {/* Main Content Container */}
      <div className="place-container flex w-full max-w-[1400px] px-6 relative z-10 bg-transparent items-center">
        <div className="place-left p-0 m-0 w-full flex flex-col gap-6 overflow-hidden">
          {/* Header Section */}
          <div className="place-content max-w-[860px] leading-tight">
            <h2 className="text-[36px] lg:text-[40px] font-bold tracking-tight text-gray-900">
              <span className="text-[#3C65F5]">99%</span> Placement Success Rate{" "}
              - <span className="text-[#3C65F5]">Trust JobHunt&apos;s</span>{" "}
              Proven Network of 1000+ Hiring Partners Across Industries!
            </h2>
          </div>

          {/* Description Section */}
          <div className="place-b-content overflow-hidden flex">
            <div className="place-desc max-w-[650px]">
              <p className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed text-justify">
                Job Hunt Placement stands out as a top-tier recruitment agency
                in Siliguri, providing unmatched staffing solutions both in
                India and abroad. With over 20 years of experience, we have
                built a reputation for connecting skilled professionals with
                leading companies across diverse industries, including IT,
                healthcare, engineering, retail, and more. Our expert team
                understands the evolving needs of businesses and job seekers,
                ensuring that every candidate is matched with the right
                opportunity. Whether you are a job seeker looking for your next
                career move or an employer in need of quality talent, Job Hunt
                Placement offers personalized services to cater to your specific
                needs. Our vast network and industry knowledge enable us to
                provide exceptional manpower services, ensuring that businesses
                can find the best talent to drive their growth. At Job Hunt
                Placement, we prioritize excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="place-connect w-full max-w-[400px] py-4 px-8 bg-[#ffffff7f] rounded-md">
          <div className="connect-froorm flex flex-col justify-center items-center gap-4">
            <div className="top-content text-[32px] text-center">
              <h4 className="font-bold leading-tight">Let's Connect for <span className="text-[#3C65F5] ">Succes!</span></h4>
            </div>
            <div className="form-inputs w-full flex flex-col gap-4 ">
              <input
                type="text"
                className="w-full bg-white rounded-md outline outline-gray-400 py-2 px-4"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full bg-white rounded-md outline outline-gray-400 py-2 px-4"
                placeholder="Mobile Number"
              />
              <select
                type="text"
                className="w-full bg-white rounded-md outline outline-gray-400 py-2 px-4"
                placeholder="Select Education"
              >
                <option>Select Education</option>
                <option value="12th"> 12th Pass</option>
                <option value="graducate">Graducation</option>
              </select>
              <input
                type="text"
                className="w-full bg-white rounded-md outline outline-gray-400 py-2 px-4"
                placeholder="Location"
              />
              <input
                type="text"
                className="w-full bg-white rounded-md outline outline-gray-400 py-2 px-4"
                placeholder="Message"
              />
            </div>
            <Primarybutton label={"Submit"} className="w-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}
