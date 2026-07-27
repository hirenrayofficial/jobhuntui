import Switch from "@/hooks/button/admin/Switch";
import { Check, SwitchCamera } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function MediaVideo({ details }) {
  return (
    <div className="media-main">
      <div className="media-container flex flex-wrap justify-between gap-5">
        {details.map((dt, index) => (
          <div className="s-card font-semibold bg-gray-100 rounded-lg overflow-hidden w-fit border border-gray-200">
            <div className="slide-img w-[280px] h-[300px] overflow-au-hidden">
              <Image
                src={dt.media_image}
                className="object-cover w-full h-full"
                width={500}
                height={400}
              />
            </div>
            <div className="media-contnent px-6 py-4 border-t-2 border-t-gray-300">
              <p className="flex gap-4">
                <span className="text-gray-500">Name</span>{" "}
                <span>{dt.media_name}</span>
              </p>
              <div className="s-action flex gap-4">
                <p className="text-gray-500">Action</p>
                <div className="action flex gap-2">
                  <button className=" border-none bg-transparent text-red-950 cursor-pointer">
                    Replace
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
