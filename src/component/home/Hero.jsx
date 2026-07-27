"use client"
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
import Footer from "./layout/Footer";
import { useQuery } from "@tanstack/react-query";
import { getJob } from "@/services/api/home/jobGet";

export default function Hero() {

  const {data} = useQuery({
    queryKey: ["job"],
    queryFn :getJob
  })
  console.log(data)
  return (
    <div className="bg-[#F1F5FA]  ">
      <div className="w-full ">
        <header>
          <Header />
        </header>

        <main className="px-2">
          <Landing />
          <Partner />
          <Trust />
          <Jobs job={data}/>
          <Process />
          <Stories />
          <SuccesTestimonial />
          <Placement />
          <JobLocation />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
