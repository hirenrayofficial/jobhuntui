import Image from "next/image";
import React from "react";

export default function Trust() {
  return (
    <div className="trust-main   flex justify-center  items-center py-20">
      <div className="trust-container grid lg:flex justify-between max-w-[1400px]  gap-8 p-2 md:p-0 ">
        <div className="trus-left ">
          <div className="trust-t-content ">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold leading-tight ">
              Join Thousands Who Found Success Through <span className="text-[#3C65F5]">JobHunt’s</span> Trusted
              Platform.
            </h2>
            <p className="text-sm md:text-[20px] py-4 text-justify">
              Job Hunt Placement is a premier recruitment agency based in
              Siliguri, West Bengal, with over 20 years of experience in
              providing comprehensive manpower solutions. We specialize in
              connecting skilled professionals with leading companies both in
              India and abroad, across a diverse range of industries. Our
              expertise spans sectors such as IT, healthcare, hospitality,
              retail, engineering, BPO, and more, ensuring that we meet the
              unique staffing needs of every client. Our mission is to make the
              recruitment process seamless and efficient for both employers and
              job seekers. We understand that finding the right job or the right
              candidate can be challenging, and that’s where our personalized
              services come into play. Our team of experienced consultants works
              closely with businesses to understand their requirements and with
              job seekers to match them with opportunities that align with their
              skills and aspirations. At Job Hunt Placement, we are committed to
              fostering long-term relationships based on trust, reliability, and
              professionalism. Our extensive network and industry knowledge help
              us deliver high-quality placements that contribute to the growth
              and success of both individuals and organizations. As a trusted
              partner in the recruitment industry, we continue to build on our
              legacy of success, ensuring that our clients and candidates
              achieve their goals. Join us today and experience the Job Hunt
              Placement difference!
            </p>
          </div>
        </div>
        <div className="trust-right flex flex-col justify-center items-center gap-8 ">
          <div className="t-r-t w-fit md:w-[600px] ">
            <div className="t-image-contnet h-[400px] ">
              <Image
                src="/assets/s-frame-content.png"
                width={500}
                height={200}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="t-r-b grid  md:flex gap-4 text-white text-center ">
            <div className="t-page-left-content p-8 flex rounded-md flex-col items-center justify-center bg-[#3C65F5]">
              <h3 className="text-4xl font-bold">2k+</h3>
              <h4 className="text-3xl ">Happy Candidates</h4>
              <p>
                Successfully placed 2,000 candidates in rewarding career
                opportunities.
              </p>
            </div>
            <div className="t-page-right-content p-8 rounded-md flex flex-col items-center justify-center bg-[#05264E]">
              <h3 className="text-4xl font-bold">2k+</h3>
              <h4 className="text-3xl ">Complete Placement</h4>
              <p>
                Successfully achieved 1,500 job placements with trusted
                expertise.
              </p>
            </div>
            {/* <div className="t-page-right-content bg-[#05264E]">
              <h3>1.5k+</h3>
              <h4>Complete Placement</h4>
              <p>
                Successfully achieved 1,500 job placements with trusted
                expertise.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
