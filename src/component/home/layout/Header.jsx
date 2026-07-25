"use client";
import Primarybutton from "@/hooks/button/Primarybutton";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Header() {
  //nav link
  const pathname = usePathname();

  const navlink = [
    {
      link_name: "Home",
      link_location: "/",
    },
    {
      link_name: "Find Jobs",
      link_location: "/home/job",
    },
    {
      link_name: "About Us",
      link_location: "/home/about",
    },
    {
      link_name: "Why Us",
      link_location: "/home/whyus",
    },
    {
      link_name: "Media",
      link_location: "/home/media",
    },
    {
      link_name: "Contact Us",
      link_location: "/home/contact",
    },
  ];

  return (
    <div className="header-main fixed z-2 flex  w-full justify-center items-center bg-transparent z-99">
      <div className="bg-image-content absolute inset-0 w-full h-full z-0 overflow-hidden">
        <Image
          src="/assets/sliderbg.jpg"
          alt="Slider Background"
          fill
          className="object-cover w-full h-full origin-right scale-250"
        />
      </div>
      <div className="header-container z-1 p-5 flex w-full max-w-[1400px] justify-between items-center ">
        <div className="header-left ">
          <div className="brand w-[175px]">
            <Image src="/assets/brand.png" width={150} height={42} />
          </div>
        </div>
        <div className="header-center hidden md:flex w-full justify-center items-center gap-[28px]">
          {navlink.map((m, index) => (
            <div className="nev-link  text-lg" key={index}>
              <Link
                className={
                  pathname === m.link_location
                    ? "text-[#3C65F5]"
                    : " text-black"
                }
                href={m.link_location}
              >
                {m.link_name}
              </Link>
            </div>
          ))}
        </div>
        <div className="header-right w-full max-w-[140px] md:max-w-[150px] ">
          <div className="b text-lg w-full">
            <Primarybutton label={"Apply Now"} />
          </div>
        </div>
      </div>
    </div>
  );
}
