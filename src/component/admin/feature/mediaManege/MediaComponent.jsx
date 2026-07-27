"use client";
import Submitbt from "@/hooks/button/admin/Submitbt";
import React, { useState } from "react";
import MediaCard from "./MediaCard";
import MediaVideo from "./MediaVideo";

export default function MediaComponent() {
  const mediaDetails = [
    {
      id: 1,
      media_name: "New Year media",
      media_image: "/assets/videoreferance.png",
      media_status: true,
    },
    {
      id: 2,
      media_name: "New Year media",
      media_image: "/assets/videoreferance.png",
      media_status: false,
    },
    {
      id: 3,
      media_name: "New Year media",
      media_image: "/assets/videoreferance.png",
      media_status: true,
    },
    {
      id: 4,
      media_name: "New Year media",
      media_image: "/assets/videoreferance.png",
      media_status: false,
    },
    {
      id: 5,
      media_name: "New Year media",
      media_image: "/assets/videoreferance.png",
      media_status: true,
    },
  ];
  const [select, setSelect] = useState("Image");
  return (
    <div className="media-main w-full px-8 py-20">
      <div className="media-container ">
        <div className="media-up-sc">
          <div className="cnt text-2xl font-bold">
            <h1>Image</h1>
          </div>
          <div className="input-or-bt flex items-center gap-8 py-6 grid  grid-cols-1 md:grid-cols-2">
            <div className="inpts flex gap-8 grid sm:grid-cols-2 md:grid-cols-4">
              <div className="py-2 w-full px-8 border w-full border-gray-300 rounded-md focus:outline-none">
                <select
                  type="text"
                  className="w-full bg-transparent w-full"
                  placeholder="media name"
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option className="bg-transparent" value="Image">
                    Image
                  </option>
                  <option className="bg-transparent" value="Video">
                    Video
                  </option>
                </select>
              </div>

              <input
                type="text"
                className="py-2 w-full px-4 border border-gray-300 rounded-md focus:outline-none"
                placeholder={select === "Video" ? "Video name" : "Image Nmae"}
              />
              {select === "Image" ? (
                <input
                  type="file"
                  className="py-2 w-full px-4 border border-gray-300 rounded-md"
                />
              ) : (
                <></>
              )}

              <input
                type="text"
                className="py-2 px-4 w-full border border-gray-300 rounded-md focus:outline-none"
                placeholder="Video link"
              />
            </div>
            <div className="bt flex gap-4">
              <Submitbt bg={"Black"} label={"Submit"} />
              <button
                className={`cursor-pointer py-2 px-8  text-white bg-[#020625] rounded-md`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="media-card-sc">
          <MediaCard details={mediaDetails} />
        </div>
        <div className="media-card-sc py-4">
          <h1 className="text-2xl font-bold py-4">Video</h1>
          <MediaVideo details={mediaDetails} />
        </div>
      </div>
    </div>
  );
}
