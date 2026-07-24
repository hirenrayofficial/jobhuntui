import React from "react";
import Header from "./layout/Header";
import Landing from "./landing/Landing";
import Partner from "./landing/Partner";
import Trust from "./landing/section/Trust";
import Jobs from "./landing/section/Jobs";
import Process from "./landing/section/Process";
import Stories from "./landing/section/Stories";
import SuccesTestimonial from "./landing/section/SuccesTestimonial";
import Placement from "./landing/section/Placement";
import JobLocation from "./landing/section/JobLocation";

export default function Hero() {
  return (
    <div className="bg-[#F1F5FA] ">
      <div className="w-full">
        <header><Header/></header>

        <main>
          {/* <Landing/>
          <Partner/>
          <Trust />
          <Jobs />
          <Process/>
          <Stories/>
          <SuccesTestimonial/> */}
          <Placement/>
          <JobLocation/>
        </main>
      </div>
    </div>
  );
}
