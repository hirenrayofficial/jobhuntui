"use client";
import Submitbt from "@/hooks/button/admin/Submitbt";
import { imgUploader, postJob } from "@/services/api/admin/jobGet";
import React, { useState } from "react";
import { toast } from "sonner";

export default function AddJob() {
  const [name, setName] = useState(true);
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState([]);
  const [date, setDate] = useState();
  const [location, setlocation] = useState("");
  const [skill, setSkill] = useState("");
  const [img, setImg] = useState();
  const [details, setdetails] = useState("");

  const handelSubmit = async () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("salary", salary);
    formData.append("type", type);
    formData.append("location", location);
    formData.append("skill", skill);
    formData.append("details", details);
    formData.append("image", img);

    if (date) {
      formData.append("date", date);
    }

    formData.append("category", category);

    const jobSbPromis = async () => {
      const res = await postJob(formData);
      if (!res.sb) {
        throw new Error(res?.message) || "Job upload error";
      }
      return res;
    };
    toast.promise(jobSbPromis, {
      loading: "Job Posting...",
      success: (data) => {
        return "Job Submited";
      },
      error: (err) => {
        return err.message || "Job Upload error";
      },
    });
  };
  const getImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    const uploadPromise = async () => {
      const imgUp = await imgUploader(formData);

      if (!imgUp.upload) {
        throw new Error(imgUp?.message || "Upload failed");
      }
      return imgUp;
    };

    toast.promise(uploadPromise(), {
      loading: "Uploading...",
      success: (data) => {
        setImg(data.imageUrl);
        return "Upload Successful";
      },
      error: (err) => {
        return err.message || "Upload Failed";
      },
    });
    // const imgUp =await  imgUploader(formData)
    // setImg(imgUp.imageUrl)
  };
  return (
    <div className="job-add-main py-20 px-8">
      <div className="job-ad-container">
        <div className="job-ad-top flex justify-between">
          <div className="left text-2xl font-bold">
            <h1>Add Job Details</h1>
          </div>
          <div className="right">
            <Submitbt click={handelSubmit} disabled={!img} label={"Submit"} />
          </div>
        </div>
        <div className="job-btt py-4 flex flex-col gap-4">
          <div className="jb-ad-input-f-sc flex justify-between flex-wrap gap-4">
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Job Title (Like Hotel Udaan Designer Team)"
            />
          </div>
          <div className="jb-ad-inpou-s-sc flex justify-between flex-wrap gap-4 grid grid-cols-1 w-full md:grid-cols-2">
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full "
              type="text"
              onChange={(e) => setDesignation(e.target.value)}
              placeholder="Designation (Like Sr. Graphic Designer)"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full "
              type="text"
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Salary (Like 15k)"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="text"
              onChange={(e) => setType(e.target.value)}
              placeholder="Job Type (Like Full Time)"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full "
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category (like Design & Arcitecture)"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full "
              type="date"
              onChange={(e) => setDate(e.target.value)}
              placeholder="Dealline (Like 22decembar 2025)"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full "
              type="text"
              onChange={(e) => setlocation(e.target.value)}
              placeholder="Location (Like Darjeeling India)"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full "
              type="file"
              accept="image/*"
              onChange={getImage}
              placeholder=""
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full "
              type="text"
              onChange={(e) => setSkill(e.target.value)}
              placeholder="Skill Nmae (Like React,CSS,HTMl)"
            />
          </div>
          <div className="job-add-td-texra">
            <textarea
              name=""
              rows={8}
              onChange={(e) => setdetails(e.target.value)}
              placeholder="Full job details...                                       "
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              id=""
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
