import VideoPlayer from "@/hooks/card/VideoPlayer";
import { FormIcon, Search, UserPlus, UserRoundKey } from "lucide-react";
import React from "react";

export default function Stories() {
  const Stories = [
    {
      id: 1,
      procces_title: "Create Your Profile",
      process_desc:
        " Sign up on JobHunt build an impressive profesional profile, and showcase your skill. A strong profile boosts your chances of leading interviews faster than ever!",
      process_icon: <UserPlus width={50} className="text-white " />,
    },
    {
      id: 2,
      procces_title: "Search Best Jobs",
      process_desc:
        " Use JobHunt's advanced filters to expiare thousands of opportunies. Find jobs that perfectly match your skill, experience, and career goals without wasting precious time",
      process_icon: <Search width={50} className="text-white " />,
    },
    {
      id: 3,
      procces_title: "Apply In Seconds",
      process_desc:
        " Submit applications effortlessly through our streamlined system.Upload your resume add a personalized message and get your application to top employers within minuties!",
      process_icon: <FormIcon width={50} className="text-white " />,
    },
    {
      id: 4,
      procces_title: "Get Hired Fast",
      process_desc:
        " Receive interview requests. negotiate offers, and start your new journey. JobHunt makes the hiring process fast, esay and reqarding for every ambitious professional.",
      process_icon: <UserRoundKey width={50} className="text-white " />,
    },
  ];
  return (
    <div className="stories-main w-full flex justify-center items-center py-4">
      <div className="stories-container flex flex-col gap-8 w-full  max-w-[1400px]">
        <div className="stories-top leading-tight">
          <h3 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold ">
            Proven <span className="text-[#3C65F5] ">Success</span> Stories
          </h3>
          <p className="text-gray-500">
            Thousands hired through our trusted, high-speed placement system.
          </p>
        </div>
        <div className="stories-content flex flex-wrap justify-center sm:justify-between md:justify-between gap-4">
          {Stories.map((p, index) => (
            <div
              key={index.id}
              className="stories-content w-[338px] h-[400px] "
            >
              <div className="stories-card ">
                <VideoPlayer/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
