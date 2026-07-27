import React from "react";

export default function Submitbt({ label, click, disabled }) {
  return (
    <div>
      <button
        onClick={click}
        disabled={disabled}
        className={`cursor-pointer py-2 px-8  text-white bg-blue-800 rounded-md ${
          disabled
            ? "bg-gray-400 cursor-not-allowed opacity-60"
            : "bg-blue-800 cursor-pointer hover:bg-blue-700"
        }`}
      >
        {label}
      </button>
    </div>
  );
}
