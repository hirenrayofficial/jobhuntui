import { FormIcon, Search, UserPlus, UserRoundKey } from "lucide-react";
import React from "react";

export default function Process() {
  const Process = [
    {
      id: 1,
      procces_title: "Create Your Profile",
      process_desc:
        " Sign up on JobHunt build an impressive profesional profile, and showcase your skill. A strong profile boosts your chances of leading interviews faster than ever!",
      process_icon: <UserPlus width={50}  />,
      process_bg: false,
      process_text: false,
    },
    {
      id: 2,
      procces_title: "Search Best Jobs",
      process_desc:
        " Use JobHunt's advanced filters to expiare thousands of opportunies. Find jobs that perfectly match your skill, experience, and career goals without wasting precious time",
      process_icon: <Search width={50} />,
      process_bg: true,
      process_text: true,
    },
    {
      id: 3,
      procces_title: "Apply In Seconds",
      process_desc:
        " Submit applications effortlessly through our streamlined system.Upload your resume add a personalized message and get your application to top employers within minuties!",
      process_icon: <FormIcon width={50} />,
      process_bg: false,
      process_text: false,
    },
    {
      id: 4,
      procces_title: "Get Hired Fast",
      process_desc:
        " Receive interview requests. negotiate offers, and start your new journey. JobHunt makes the hiring process fast, esay and reqarding for every ambitious professional.",
      process_icon: <UserRoundKey width={50}  />,
      process_bg: true,
      process_text: true,
    },
  ];
  return (
    <div className="process-main w-full flex justify-center items-center py-8">
      <div className="proccess-container flex flex-col gap-8 w-full  max-w-[1400px]">
        <div className="process-top leading-tight">
          <h3 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px]  font-bold ">
            Follow Esay <span className="text-[#3C65F5] ">4 Steps</span>
          </h3>
          <p className="text-gray-500">
            Submit application quickly through JobHunt's user friendly,
            streamlined platform
          </p>
        </div>
        <div className="process-content flex flex-wrap justify-center gap-4">
          {Process.map((p, index) => (
            <div
              key={index.id}
              className={p.process_bg ? "bg-[#3C65F5] text-white  w-full max-w-[338px] rounded-md  p-6 flex justify-center items-center text-center": "process-content w-full max-w-[338px] rounded-md bg-white  p-6 flex justify-center items-center text-center"}
            >
              <div className="process-card ">
                <div className="card-content  w-full flex flex-col justify-center items-center ">
                  <div className={p.process_bg ? "bg-white flex items-center justify-center text-[#3C65F5] py-5 px-2 rounded-md w-fit" : "top-content flex items-center justify-center bg-[#3C65F5] text-white py-5 px-2 rounded-md w-fit"}>
                    {p.process_icon}
                  </div>
                  <div className="card-desc py-2">
                    <h4 className="text-[24px] font-bold">{p.procces_title}</h4>
                    <span>{p.process_desc}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
