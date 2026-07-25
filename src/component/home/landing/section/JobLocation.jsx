import { Flag, FlagIcon } from "lucide-react";
import React from "react";

export default function JobLocation() {
  const vacenvy = [
    {
      id: 1,
      country_image: <Flag />,
      copuntry: "India",
      vacency: "76",
    },
    {
      id: 2,
      country_image: <Flag />,
      copuntry: "USA",
      vacency: "20",
    },
    {
      id: 3,
      country_image: <Flag />,
      copuntry: "New Zealand",
      vacency: "16",
    },
    {
      id: 4,
      country_image: <Flag />,
      copuntry: "Canada",
      vacency: "34",
    },
  ];

  return (
    <div className="job-main w-full flex justify-center text-black items-center  py-8 md:px-8">
      <div className="job-container flex flex-col gap-8 w-full max-w-[1400px]">

        <div className="job-v-content text-center md:text-left flex flex-col gap-2">
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight">
            Jobs by <span className="text-[#3C65F5]">Location</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Find your favourite jobs and get the benefits for yourself
          </p>
        </div>

        <div className="job-v w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vacenvy.map((v, index) => (
            <div
              key={v.id || index}
              className="job-l-card w-full flex items-center gap-4 bg-white shadow-sm border border-gray-100 py-5 px-6 rounded-2xl hover:shadow-md transition-shadow"
            >
              <div className="j-cnt shrink-0">
                <FlagIcon width={70} height={50} className="object-contain" />
              </div>
              <div className="j-content w-full leading-tight flex flex-col gap-1">
                <h4 className="text-2xl md:text-[32px] text-[#3C65F5] font-bold">
                  {v.copuntry}
                </h4>
                <p className="text-gray-500 text-sm md:text-base">
                  {v.vacency} Vacancy
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
