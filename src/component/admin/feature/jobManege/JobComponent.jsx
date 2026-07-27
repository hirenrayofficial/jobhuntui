"use client";
import Submitbt from "@/hooks/button/admin/Submitbt";
import Switch from "@/hooks/button/admin/Switch";
import { deleteJob } from "@/services/api/admin/jobGet";
import { getJob } from "@/services/api/home/jobGet";
import { updateStatus } from "@/services/api/admin/jobGet";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";

export default function JobComponent() {
  const [isOn, setIsOn] = useState(true);

  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: getJob,
  });
  const handelDelete = async (id) => {
    const res = await deleteJob(id);
    return res;
  };
  const handelStatus = async (id, active) => {
    const res = await updateStatus(id, active);
    setIsOn(false);
    return res;
  };

  return (
    <div className="job-m-main px-8 py-20">
      <div className="job-m-container">
        <div className="job-head flex flex-col gap-4">
          <h1 className="text-2xl font-bold">All Live Jobs</h1>
          <Link
            href="/admin/jobs/add"
            className="py-2 px-4 bg-[#3C65F5] text-white rounded-md w-fit"
          >
            Add/Post a job
          </Link>
        </div>
        <div className="job-m-content-table w-full py-4  overflow-x-auto bg-white  rounded-xl ">
          <table className="w-full border-collapse text-left text-sm text-gray-600">
            <thead className="bg-gray-100 border-b border-gray-100  text-md font-semibold text-gray-500 tracking-wider border border-gray-100">
              <tr>
                <th className="py-4 px-6">Job Title</th>
                <th className="py-4 px-6">Designation</th>
                <th className="py-4 px-6">Salary</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6">Job Type</th>
                <th className="py-4 px-6">Location</th>
                <th className="py-4 px-6">Deadline</th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className=" divide-gray-100">
              {data?.map((jb, index) => (
                <tr
                  key={jb._id || index}
                  className="hover:bg-gray-50/80 transition-colors duration-150"
                >
                  {/* Job Title */}
                  <td className="py-4 px-6 font-medium ">{jb.job_name}</td>

                  {/* Designation */}
                  <td className="py-4 px-6 ">{jb.job_designation}</td>

                  {/* Salary */}
                  <td className="py-4 px-6 ">{jb.salary}</td>

                  {/* Category */}
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 text-xs font-medium  rounded-full">
                      {jb.job_category}
                    </span>
                  </td>

                  {/* Job Type */}
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 text-xs font-medium  rounded-full">
                      {jb.job_type}
                    </span>
                  </td>

                  {/* Location */}
                  <td className="py-4 px-6 text-gray-500">{jb.job_location}</td>

                  {/* Deadline */}
                  <td className="py-4 px-6 text-gray-500">{jb.job_deadline}</td>

                  {/* Actions */}
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-3 ">
                      <button className=" font-bold text-blue-500 ">
                        View
                      </button>
                      |<button className="font-bold">Edit</button>|
                      <button
                        onClick={(e) => handelDelete(jb._id)}
                        className="font-bold text-red-500"
                      >
                        Delete
                      </button>
                      <Switch isOn={jb.is_active} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
