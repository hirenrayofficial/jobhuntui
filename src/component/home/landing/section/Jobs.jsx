"use client";
import TabButtonOutline from "@/hooks/button/TabButtonOutline";
import Jobcard from "@/hooks/card/Jobcard";
import React, { useState } from "react";

export default function Jobs({ job = [] }) {
  const Jobtab = [
    {
      id: 1,
      tab_name: "All",
      tab_view: "",
    },
    {
      id: 2,
      tab_name: "IT",
      tab_view: "",
    },
    {
      id: 3,
      tab_name: "Digital Marketing",
      tab_view: "",
    },
    {
      id: 4,
      tab_name: "Acountent",
      tab_view: "",
    },
  ];

  const [activetab, setActivetab] = useState("All");

  const handeltabclick = (name) => {
    setActivetab(name);
  };

  const filteredJobs =
    activetab === "All"
      ? job
      : job.filter((item) =>
          Array.isArray(item.job_category)
            ? item.job_category.includes(activetab)
            : item.job_category === activetab,
        );

  return (
    <div className="job-main w-full flex justify-center items-center md:px-8">
      <div className="job-container flex flex-col w-full max-w-[1400px]">
        <div className="job-heading">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold leading-tight">
            Explore New <span className="text-[#3C65F5]">Opprtunities</span>
          </h2>
          <p className="text-[18px]">
            Launch your professional future today with top employers hiring on
            JobHunt.
          </p>
        </div>

        <div className="job-tab-content flex flex-wrap gap-4 py-4 w-full">
          {Jobtab.map((t) => (
            <div className="tab-sectio" key={t.id}>
              <TabButtonOutline
                label={t.tab_name}
                click={() => handeltabclick(t.tab_name)}
                active={activetab}
              />
            </div>
          ))}
        </div>

        <div className="job-view-component h-fit w-full flex flex-col justify-center items-center">
          {filteredJobs.length > 0 ? (
            <Jobcard details={filteredJobs} />
          ) : (
            <div className="py-12 flex text-center text-gray-500 h-100 items-center">No job find This Category</div>
          )}
        </div>
      </div>
    </div>
  );
}
