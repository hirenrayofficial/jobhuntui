import { FormIcon, Search, UserCircle, UserPlus, UserRoundKey } from "lucide-react";
import React from "react";

export default function SuccesTestimonial() {
  const succes = [
    {
      id: 1,
      procces_title: "Ananya Roy",
      succes_desc:
        " Job Hun Placement helped me land my dream job within weeks. The team was professional atttentive and guide me at every step, Highly recommended! ",
      succes_icon: <UserCircle width={50}  />,
      succes_bg: true,
      succes_text: true,
    },
    {
      id: 2,
      procces_title: "Pradeep Gurang",
      succes_desc:
        " Excellent Service Job Hunt Placement's team provided valuable guidance throughout the hiring process. they connected me with a great company. thank you!",
      succes_icon: <UserCircle width={50} />,
      succes_bg: false,
      succes_text: false,
    },
    {
      id: 3,
      procces_title: "Madhusree Chaterjee",
      succes_desc:
        " Job Hun Placement helped me land my dream job within weeks. The team was professional atttentive and guide me at every step, Highly recommended!",
      succes_icon: <UserCircle width={50} />,
      succes_bg: true,
      succes_text: true,
    },
    {
      id: 4,
      procces_title: "Madhusree Chaterjee",
      succes_desc:
        "Job Hun Placement helped me land my dream job within weeks. The team was professional atttentive and guide me at every step, Highly recommended!",
      succes_icon: <UserCircle width={50}  />,
      succes_bg: false,
      succes_text: false,
    },
  ];
  return (
    <div className="succes-main w-full flex justify-center items-center py-8">
      <div className="proccess-container flex flex-col gap-8 w-full  max-w-[1400px]">
        <div className="succes-top leading-tight">
          <h3 className="text-[48px] font-bold ">
            Success <span className="text-[#3C65F5] ">Stories</span> Galore
          </h3>
          <p className="text-gray-500">
          JobHunt transfomed dreams into really with perfect career matches
          </p>
        </div>
        <div className="succes-content flex flex-wrap justify-center gap-4">
          {succes.map((p, index) => (
            <div
              key={index.id}
              className={p.succes_bg ? "bg-[#3C65F5] text-white  w-full max-w-[338px] rounded-md  p-6 flex justify-center items-center text-center": "succes-content w-full max-w-[338px] rounded-md bg-white  p-6 flex justify-center items-center text-center"}
            >
              <div className="succes-card ">
                <div className="card-content  w-full flex flex-col justify-center items-center ">
                  <div className={p.succes_bg ? "bg-white flex items-center justify-center text-[#3C65F5] py-5 px-2 rounded-md w-fit" : "top-content flex items-center justify-center bg-[#3C65F5] text-white py-5 px-2 rounded-md w-fit"}>
                    {p.succes_icon}
                  </div>
                  <div className="card-desc py-2">
                    <h4 className="text-[24px] font-bold">{p.procces_title}</h4>
                    <span>{p.succes_desc}</span>
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
