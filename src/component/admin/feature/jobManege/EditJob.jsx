"use client";
import Submitbt from "@/hooks/button/admin/Submitbt";
import { imgUploader, jobUpdate } from "@/services/api/admin/jobGet";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

export default function EditJob({ jobData }) {
  
  const [formDataState, setFormDataState] = useState({
    name: jobData?.job_name || "",
    designation: jobData?.job_designation || "",
    salary: jobData?.salary || "",
    type: jobData?.job_type || "",
    category: jobData?.job_category || "",
    date: jobData?.job_deadline || "",
    location: jobData?.job_location || "",
    skill: jobData?.job_skills || "",
    img: jobData?.job_feature_img || "",
    details: jobData?.job_details || "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = async () => {
    const dataToSend = new FormData();

    
    dataToSend.append("name", formDataState.name);
    dataToSend.append("designation", formDataState.designation);
    dataToSend.append("salary", formDataState.salary);
    dataToSend.append("type", formDataState.type);
    dataToSend.append("location", formDataState.location);
    dataToSend.append("skill", formDataState.skill);
    dataToSend.append("details", formDataState.details);
    dataToSend.append("image", formDataState.img);

    if (formDataState.date) {
      dataToSend.append("date", formDataState.date);
    }

    dataToSend.append("category", formDataState.category);

    const jobSbPromis = async () => {
      const res = await jobUpdate(dataToSend, jobData?._id);
      if (!res.sb) {
        throw new Error(res?.message || "Job update error");
      }
      return res;
    };

    toast.promise(jobSbPromis, {
      loading: "Updating Job...",
      success: () => "Job Updated Successfully",
      error: (err) => err.message || "Job Update error",
    });
  };

  const getImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imgFormData = new FormData();
    imgFormData.append("image", file);

    const uploadPromise = async () => {
      const imgUp = await imgUploader(imgFormData);
      if (!imgUp.upload) {
        throw new Error(imgUp?.message || "Upload failed");
      }
      return imgUp;
    };

    toast.promise(uploadPromise(), {
      loading: "Uploading...",
      success: (data) => {
        setFormDataState((prev) => ({ ...prev, img: data.imageUrl }));
        return "Upload Successful";
      },
      error: (err) => err.message || "Upload Failed",
    });
  };

  return (
    <div className="job-add-main py-20 px-8">
      <div className="job-ad-container">
        <div className="job-ad-top flex justify-between">
          <div className="left text-2xl font-bold">
            <h1>Edit Job Details</h1>
          </div>
          <div className="right">
            <Submitbt
              click={handelSubmit}
              disabled={!formDataState.img}
              label={"Update Job"}
            />
          </div>
        </div>
        <div className="job-btt py-4 flex flex-col gap-4">
          <div className="jb-ad-input-f-sc flex justify-between flex-wrap gap-4">
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="text"
              name="name"
              value={formDataState.name}
              onChange={handleChange}
              placeholder="Enter Job Title"
            />
          </div>
          <div className="jb-ad-inpou-s-sc flex justify-between flex-wrap gap-4 grid grid-cols-1 w-full md:grid-cols-2">
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="text"
              name="designation"
              value={formDataState.designation}
              onChange={handleChange}
              placeholder="Designation"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="text"
              name="salary"
              value={formDataState.salary}
              onChange={handleChange}
              placeholder="Salary"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="text"
              name="type"
              value={formDataState.type}
              onChange={handleChange}
              placeholder="Job Type"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="text"
              name="category"
              value={formDataState.category}
              onChange={handleChange}
              placeholder="Category"
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="date"
              name="date"
              value={formDataState.date}
              onChange={handleChange}
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="text"
              name="location"
              value={formDataState.location}
              onChange={handleChange}
              placeholder="Location"
            />
            {formDataState.img && (
              <div>
                <Image
                  src={formDataState.img}
                  width={50}
                  height={50}
                  alt="Job Feature"
                />
              </div>
            )}
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="file"
              accept="image/*"
              onChange={getImage}
            />
            <input
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
              type="text"
              name="skill"
              value={formDataState.skill}
              onChange={handleChange}
              placeholder="Skills"
            />
          </div>
          <div className="job-add-td-texra">
            <textarea
              rows={8}
              name="details"
              value={formDataState.details}
              onChange={handleChange}
              placeholder="Full job details..."
              className="py-2 px-6 border border-gray-400 rounded-md w-full"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
