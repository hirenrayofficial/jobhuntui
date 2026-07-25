import Primarybutton from "@/hooks/button/Primarybutton";
import Image from "next/image";
import React from "react";

export default function Placement() {
  return (
    <div className="place-main py-12 w-full min-h-[80vh] rounded-md bg-white flex justify-center items-center relative overflow-hidden  md:px-8">
      <div className="bg-image-content z-[1] absolute inset-0 hidden lg:flex justify-center items-center overflow-hidden pointer-events-none">
        <div className="relative w-[500px] h-[650px] mt-20 ml-60">
          <Image
            src="/assets/hero-content-iamge.png"
            alt="Hero Background"
            fill
            className="object-contain -scale-x-100 opacity-90"
          />
        </div>
      </div>


      <div className="bg-image-content absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/sliderbg.jpg"
          alt="Slider Background"
          fill
          className="object-cover w-full h-full origin-right scale-125 md:scale-250 opacity-20 md:opacity-50"
        />
      </div>


      <div className="place-container px-2  flex flex-col lg:flex-row justify-between w-full max-w-[1400px] relative z-10 bg-transparent items-center gap-10 lg:gap-8">

        <div className="place-left p-0 m-0 w-full lg:max-w-[750px] flex flex-col gap-6 overflow-hidden">
          <div className="place-content leading-tight">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold tracking-tight text-gray-900">
              <span className="text-[#3C65F5]">99%</span> Placement Success Rate{" "}
              - <span className="text-[#3C65F5]">Trust JobHunt&apos;s</span>{" "}
              Proven Network of 1000+ Hiring Partners Across Industries!
            </h2>
          </div>
          <div className="place-b-content overflow-hidden flex">
            <div className="place-desc max-w-full lg:max-w-[650px]">
              <p className="text-sm sm:text-base lg:text-[18px] text-gray-700 leading-relaxed text-justify">
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

        <div className="place-connect w-full max-w-[450px] py-6 px-6 sm:px-8 bg-[#ffffffa6] rounded-md border border-gray-100 flex-shrink-0">
          <div className="connect-form flex flex-col justify-center items-center gap-5">
            <div className="top-content text-2xl sm:text-[32px] text-center">
              <h4 className="font-bold leading-tight text-gray-900">
                Let&apos;s Connect for{" "}
                <span className="text-[#3C65F5]">Success!</span>
              </h4>
            </div>

            <div className="form-inputs w-full flex flex-col gap-4">
              <input
                type="text"
                className="w-full bg-white rounded-md border border-gray-300 focus:border-[#3C65F5] focus:outline-none py-2.5 px-4 text-sm text-gray-800 shadow-sm"
                placeholder="Name"
              />
              <input
                type="tel"
                className="w-full bg-white rounded-md border border-gray-300 focus:border-[#3C65F5] focus:outline-none py-2.5 px-4 text-sm text-gray-800 shadow-sm"
                placeholder="Mobile Number"
              />
              <select
                className="w-full bg-white rounded-md border border-gray-300 focus:border-[#3C65F5] focus:outline-none py-2.5 px-4 text-sm text-gray-800 shadow-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Education
                </option>
                <option value="12th">12th Pass</option>
                <option value="graduate">Graduation</option>
              </select>
              <input
                type="text"
                className="w-full bg-white rounded-md border border-gray-300 focus:border-[#3C65F5] focus:outline-none py-2.5 px-4 text-sm text-gray-800 shadow-sm"
                placeholder="Location"
              />
              <textarea
                rows={3}
                className="w-full bg-white rounded-md border border-gray-300 focus:border-[#3C65F5] focus:outline-none py-2.5 px-4 text-sm text-gray-800 shadow-sm resize-none"
                placeholder="Message"
              />
            </div>

            <div className="w-full">
              <Primarybutton label={"Submit"} className="w-full py-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
