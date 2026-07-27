"use client";

import Submitbt from "@/hooks/button/admin/Submitbt";
import { deleteJob } from "@/services/api/admin/jobGet";
import { getJob } from "@/services/api/admin/jobGet";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useState } from "react";
import JobRow from "./JovRow";
import { toast } from "sonner";
import EditJob from "./EditJob";

export default function JobComponent() {
  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: getJob,
  });
  const [acComponent, setAccomponent] = useState("Row");
  const [selectdata, setSelectData] = useState();
  const handelCpchange = async (cp, jb) => {
    // console.log(jb); // Use this for immediate debugging
    setSelectData(jb); // Updates state for your components
    setAccomponent(cp); // Switches the view
  };

  const handelDelete = async (id) => {
    const deletePromis = async () => {
      const res = await deleteJob(id);
      if (!res.dt) {
        throw new Error(res?.message) || "Delete Error";
      }
      return res;
    };
    toast.promise(deletePromis, {
      loading: "wait for delete",
      success: (data) => {
        return "delete success";
      },
      error: (err) => {
        return err.message || "delete error";
      },
    });
  };

  return (
    <>
      {acComponent === "Row" && (
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
            <div className="job-m-content-table w-full py-4 overflow-x-auto bg-white rounded-xl">
              <table className="w-full border-collapse text-left text-sm text-gray-600">
                <thead className="bg-gray-100 border-b border-gray-100 text-md font-semibold text-gray-500 tracking-wider border border-gray-100">
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
                <tbody className="divide-gray-100">
                  {data?.map((jb, index) => (
                    <JobRow
                      key={jb._id || index}
                      jb={jb}
                      handelDelete={handelDelete}
                      handelEdit={handelCpchange}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {acComponent === "Edit" && (
        <>
          <EditJob jobData={selectdata} />
        </>
      )}
    </>
  );
}
