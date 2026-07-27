"use client";

import React from "react";

export default function Switch({isOn,setIsOn}) {
 

  return (
    <div className="flex items-center gap-3 font-sans">
      {/* Switch Track */}
      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-8 h-4 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ${
          isOn ? "bg-green-600" : "bg-gray-300"
        }`}
      >
        {/* Switch Thumb */}
        <div
          className={`w-2 h-2 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
            isOn ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
}