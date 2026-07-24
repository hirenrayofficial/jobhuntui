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
    <div className="job-main w-full flex justify-center text-black items-center h-[40vh] ">
      <div className="job-container flex justify-between w-full max-w-[1400px] ">
        <div className="job-l-card flex gap-2 bg-white py-4 px-8 rounded-2xl">
          <div className="j-cnt ">
            <FlagIcon width={100} height={80} />
          </div>
          <div className="j-contnet">
            <h4 className="text-[36px] text-[#3C65F5] font-bold">India</h4>
            <p className="text-gray-500">76 Vacency</p>
          </div>
        </div>
        <div className="job-l-card flex gap-2 bg-white py-4 px-8 rounded-2xl">
          <div className="j-cnt ">
            <FlagIcon width={100} height={80} />
          </div>
          <div className="j-contnet">
            <h4 className="text-[36px] text-[#3C65F5] font-bold">US</h4>
            <p className="text-gray-500">76 Vacency</p>
          </div>
        </div>
        <div className="job-l-card flex gap-2 bg-white py-4 px-8 rounded-2xl">
          <div className="j-cnt ">
            <FlagIcon width={100} height={80} />
          </div>
          <div className="j-contnet">
            <h4 className="text-[36px] text-[#3C65F5] font-bold">Nezealand</h4>
            <p className="text-gray-500">76 Vacency</p>
          </div>
        </div>
        <div className="job-l-card flex gap-2 bg-white py-4 px-8 rounded-2xl">
          <div className="j-cnt ">
            <FlagIcon width={100} height={80} />
          </div>
          <div className="j-contnet">
            <h4 className="text-[36px] text-[#3C65F5] font-bold">Kanada</h4>
            <p className="text-gray-500">76 Vacency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
