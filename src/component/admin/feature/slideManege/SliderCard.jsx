import Switch from "@/hooks/button/admin/Switch";
import Image from "next/image";
import React from "react";

export default function SliderCard({ details }) {

  
  return (
    <div className="slider-main flex justify-center">
      <div className="slider-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5">
        {details?.map((dt, index) => (
          <div className="s-card font-semibold bg-gray-100 rounded-lg overflow-hidden w-fit border border-gray-200">
            <div className="slide-img w-[350px] h-[200px] overflow-au-hidden">
              <Image
                src={dt.sld_img_source}
                className="object-cover w-full h-full"
                width={500}
                height={400}
              />
            </div>
            <div className="slider-contnent px-6 py-4 border-t-2 border-t-gray-300">
              <p className="flex gap-4">
                <span>Name</span> <span>{dt.slider_name}</span>
              </p>
              <div className="s flex gap-4">
                <p>Status</p>
                <Switch isOn={dt.is_active} />
              </div>
              <div className="s-action flex gap-4">
                <p>Action</p>
                <div className="action flex gap-2">
                  <button className=" border-none bg-transparent text-red-950 cursor-pointer">
                    View
                  </button>{" "}
                  ||
                  <button className=" border-none bg-transparent text-blue-950 cursor-pointer">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
