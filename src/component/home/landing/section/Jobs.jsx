"use client";
import TabButtonOutline from "@/hooks/button/TabButtonOutline";
import Jobcard from "@/hooks/card/Jobcard";
import React, { useRef, useState } from "react";

export default function Jobs() {
  const Jobtab = [
    {
      id: 1,
      tab_name: "Management",
      tab_view: "",
    },
    {
      id: 2,
      tab_name: "Marketing & Sales",
      tab_view: "",
    },
    ,
    {
      id: 3,
      tab_name: "Design",
      tab_view: "",
    },
    {
      id: 4,
      tab_name: "Retail & Products",
      tab_view: "",
    },
  ];

  const jobDetails = [
    {
      id: 1,
      job_thub: "/assets/nykaa.png",
      job_name: "Htel Udhan Darjeeling",
      job_description:
        "Thdfdsja sdfdjkasfjksa fajsdfksfjkd ioasdjfksdaf iojfiojsdfa iojdkjfknsdjkfhisdfna offjkashdfjasfasfhasjkgfjkgbasjghjkfbjsdfjasd fisdah fjsdhcisfh sdiasnf sdigfiusdhfsdjk asuidf sduiff uisd",
      job_creator: "Sr. Graphic Designer",
      job_category: "Design Arcitecture",
      job_type: "Full-Time",
      job_tag: [{ tag_name: "Design" }, { tag_name: "Adobe Photoshop" }],
      sallery: "15k",
    },
    {
      id: 2,
      job_thub: "/assets/nykaa.png",
      job_name: "Htel Udhan Darjeeling",
      job_description:
        "Thdfdsja sdfdjkasfjksa fajsdfksfjkd ioasdjfksdaf iojfiojsdfa iojdkjfknsdjkfhisdfna offjkashdfjasfasfhasjkgfjkgbasjghjkfbjsdfjasd fisdah fjsdhcisfh sdiasnf sdigfiusdhfsdjk asuidf sduiff uisd",
      job_creator: "Sr. Graphic Designer",
      job_category: "Design Arcitecture",
      job_type: "Full-Time",
      job_tag: [{ tag_name: "Design" }, { tag_name: "Adobe Photoshop" }],
      sallery: "15k",
    },
    {
      id: 3,
      job_thub: "/assets/nykaa.png",
      job_name: "Htel Udhan Darjeeling",
      job_description:
        "Thdfdsja sdfdjkasfjksa fajsdfksfjkd ioasdjfksdaf iojfiojsdfa iojdkjfknsdjkfhisdfna offjkashdfjasfasfhasjkgfjkgbasjghjkfbjsdfjasd fisdah fjsdhcisfh sdiasnf sdigfiusdhfsdjk asuidf sduiff uisd",
      job_creator: "Sr. Graphic Designer",
      job_category: "Design Arcitecture",
      job_type: "Full-Time",
      job_tag: [{ tag_name: "Design" }, { tag_name: "Adobe Photoshop" }],
      sallery: "15k",
    },
    {
      id: 4,
      job_thub: "/assets/nykaa.png",
      job_name: "Htel Udhan Darjeeling",
      job_description:
        "Thdfdsja sdfdjkasfjksa fajsdfksfjkd ioasdjfksdaf iojfiojsdfa iojdkjfknsdjkfhisdfna offjkashdfjasfasfhasjkgfjkgbasjghjkfbjsdfjasd fisdah fjsdhcisfh sdiasnf sdigfiusdhfsdjk asuidf sduiff uisd",
      job_creator: "Sr. Graphic Designer",
      job_category: "Design Arcitecture",
      job_type: "Full-Time",
      job_tag: [{ tag_name: "Design" }, { tag_name: "Adobe Photoshop" }],
      sallery: "15k",
    },
    {
      id: 5,
      job_thub: "/assets/nykaa.png",
      job_name: "Htel Udhan Darjeeling",
      job_description:
        "Thdfdsja sdfdjkasfjksa fajsdfksfjkd ioasdjfksdaf iojfiojsdfa iojdkjfknsdjkfhisdfna offjkashdfjasfasfhasjkgfjkgbasjghjkfbjsdfjasd fisdah fjsdhcisfh sdiasnf sdigfiusdhfsdjk asuidf sduiff uisd",
      job_creator: "Sr. Graphic Designer",
      job_category: "Design Arcitecture",
      job_type: "Full-Time",
      job_tag: [{ tag_name: "Design" }, { tag_name: "Adobe Photoshop" }],
      sallery: "15k",
    },
    {
      id: 6,
      job_thub: "/assets/nykaa.png",
      job_name: "Htel Udhan Darjeeling",
      job_description:
        "Thdfdsja sdfdjkasfjksa fajsdfksfjkd ioasdjfksdaf iojfiojsdfa iojdkjfknsdjkfhisdfna offjkashdfjasfasfhasjkgfjkgbasjghjkfbjsdfjasd fisdah fjsdhcisfh sdiasnf sdigfiusdhfsdjk asuidf sduiff uisd",
      job_creator: "Sr. Graphic Designer",
      job_category: "Design Arcitecture",
      job_type: "Full-Time",
      job_tag: [{ tag_name: "Design" }, { tag_name: "Adobe Photoshop" }],
      sallery: "15k",
    },
  ];

  const [activetab, setActivetab] = useState("Management");

  const renderError = () => {
    return <>hiiii</>;
  };

  const handeltabclick = (name) => {
    setActivetab(name);
  };
  return (
    <div className="job-main w-full flex justify-center items-center md:px-8">
      <div className="job-container flex flex-col w-full max-w-[1400px]">
        <div className="job-heading">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px]  font-bold leading-tight">
            Explore New <span className="text-[#3C65F5]">Opprtunities</span>
          </h2>
          <p className="text-[18px]">
            Launch your professional future today with top employers hiring on
            JobHunt.
          </p>
        </div>

        <div className="job-tab-content flex flex-wrap  gap-4 py-4 w-full">
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
          {activetab === "Management" ? <Jobcard details={jobDetails} /> : <renderError/>}
        </div>
      </div>
    </div>
  );
}
