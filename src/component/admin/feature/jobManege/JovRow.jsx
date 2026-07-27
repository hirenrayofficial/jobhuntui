"use client";

import React, { useState } from "react";
import Switch from "@/hooks/button/admin/Switch";
import { updateStatus } from "@/services/api/admin/jobGet";
import { formatDate } from "ray-date-time-format";
export default function JobRow({ jb, handelDelete ,handelEdit}) {
  const [isOn, setIsOn] = useState(jb.is_active);

  const handleToggle = async () => {
    const nextState = !isOn;
    setIsOn(nextState);
    await updateStatus(jb._id, nextState);
  };


  return (
    <tr className="hover:bg-gray-50/80 transition-colors duration-150">
      <td className="py-4 px-6 font-medium">{jb.job_name}</td>
      <td className="py-4 px-6">{jb.job_designation}</td>
      <td className="py-4 px-6">{jb.salary}</td>
      <td className="py-4 px-6">
        <span className="px-3 py-1 text-xs font-medium rounded-full">
          {jb.job_category}
        </span>
      </td>
      <td className="py-4 px-6">
        <span className="px-3 py-1 text-xs font-medium rounded-full">
          {jb.job_type}
        </span>
      </td>

      <td className="py-4 px-6 text-gray-500">{jb.job_location}</td>

      <td className="py-4 px-6 text-gray-500">
        {formatDate(jb.job_deadline, "dd/mm/yyyy")}
      </td>

      <td className="py-4 px-6">
        <div className="flex items-center justify-center gap-3">
          <button onClick={()=>handelEdit("Edit",jb)} className="font-bold   cursor-pointer hover:bg-gray-200  py-1 px-3 rounded-md">Edit</button>|
          <button
            onClick={() => handelDelete(jb._id)}
            className="font-bold text-red-500 cursor-pointer hover:bg-red-200  py-1 px-3 rounded-md"
          >
            Delete
          </button>
          <Switch isOn={isOn} setIsOn={handleToggle} />
        </div>
      </td>
    </tr>
  );
}
