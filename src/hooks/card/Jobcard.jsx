"use client";
import Image from "next/image";
import React from "react";
import { ClockFading, BriefcaseBusiness } from "lucide-react";
import Outlinebutton from "../button/Outlinebutton";
export default function Jobcard({ details }) {
  console.log(details);
  return (
    <div className="job-main w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {details?.map((job, index) => (
        <div className="job-container bg-white rounded-md p-6 w-full max-w-[461px] h-full max-h-[400px]">
          <div className="job-card w-full h-full" key={job._id}>
            <div className="job-top flex gap-4">
              <Image
                className="bg-black rounded-md object-contain"
                src={job.job_feature_img}
                width={80}
                height={50}
                alt={job.job_name}
              />
              <div className="j-n">
                <h3 className="text-[24px] leading-tight">{job.job_name}</h3>
                <p className="text-gray-700">{job.job_designation}</p>
              </div>
            </div>
            <div className="job-cen py-4 text-gray-700 ">
              <div className="job-tpes w-full flex gap-8   ">
                <div className="flex items-center gap-1">
                  <ClockFading className="text-blue-500" />
                  {job.job_category}
                </div>
                <div className="flex items-center gap-1">
                  <BriefcaseBusiness className="text-blue-500" />
                  {job.job_type}
                </div>
              </div>
              <div className="py-3">
                <p className="text-sm text-gray-600 line-clamp-5 leading-relaxed">
                  {job.job_details}
                </p>
              </div>
              <div className="job-tag ">
                <div className="tag flex gap-2">
                  {job.job_category.map((tag, index) => (
                    <div className="bg-[#91a8fc46] px-4 rounded-md text-[14px]">
                      {tag.tag_name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="job-bottom w-full">
              <div className="bottom-contnet flex justify-between items-center">
                <Outlinebutton label={"Apply Now"} />
                <div className="sallery-dt text-[16px]">
                  Sallery Up to {job.salary}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
