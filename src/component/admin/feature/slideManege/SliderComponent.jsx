"use client";
import Submitbt from "@/hooks/button/admin/Submitbt";
import React, { useState } from "react";
import SliderCard from "./SliderCard";
import { useQuery } from "@tanstack/react-query";
import { getSlider, postSlider } from "@/services/api/admin/sliderGet";
import { imgUploader } from "@/services/api/admin/jobGet";
import axios from "axios";
import { toast } from "sonner";

export default function SliderComponent() {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const sliderDetails = [
    {
      id: 1,
      slider_name: "New Year Slider",
      slider_image: "/assets/videoreferance.png",
      slider_status: true,
    },
    {
      id: 2,
      slider_name: "New Year Slider",
      slider_image: "/assets/videoreferance.png",
      slider_status: false,
    },
    {
      id: 3,
      slider_name: "New Year Slider",
      slider_image: "/assets/videoreferance.png",
      slider_status: true,
    },
    {
      id: 4,
      slider_name: "New Year Slider",
      slider_image: "/assets/videoreferance.png",
      slider_status: false,
    },
    {
      id: 5,
      slider_name: "New Year Slider",
      slider_image: "/assets/videoreferance.png",
      slider_status: true,
    },
  ];

  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: getSlider,
  });

  const [img, setImg] = useState();
  const [name, setname] = useState("");

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
  };

  const handelSlidesb = async () => {
    const postPromis = async () => {
      const res = await postSlider(name, img);
      if (!res.save) {
        throw new Error(res?.message) || "Upload error";
      }
      return res;
    };
    toast.promise(postPromis,{
      loading: "Slider Upload",
      success: (data)=>{
        return "Slider Uploaded"
      },
      error: (err)=>{
        return err?.message || "Faild to upload Slider"
      }
    })
  };
  return (
    <div className="slider-main w-full px-8 py-20">
      <div className="slider-container ">
        <div className="slider-up-sc">
          <div className="cnt text-2xl font-bold">
            <h1>Slider</h1>
          </div>
          <div className="input-or-bt grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-6">
            <div className="inpts flex gap-8">
              <input
                type="text"
                onChange={(e) => setname(e.target.value)}
                className="py-2 px-4 border w-full border-gray-300 rounded-md focus:outline-none"
                placeholder="Slider name"
              />
              <input
                type="file"
                accept="image/*"
                // value={img}
                onChange={getImage}
                className="py-2 px-4 border w-full border-gray-300 rounded-md"
              />
            </div>
            <div className="bt flex gap-4">
              <Submitbt bg={"Black"} click={handelSlidesb} disabled={!img} label={"Submit"} />
              <button
                className={`cursor-pointer py-2 px-8  text-white bg-[#020625] rounded-md`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="slider-card-sc">
          <SliderCard details={data} />
        </div>
      </div>
    </div>
  );
}
