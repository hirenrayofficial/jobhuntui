"use client";
import AdminTabButon from "@/hooks/button/admin/AdminTabButon";

import {
  Bell,
  GalleryHorizontal,
  HardDrive,
  MessageSquareDashed,
  NotepadText,
  Search,
  UserCircle,
} from "lucide-react";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AdminHeader() {
  const nevigationSec = [
    {
      nav_name: "Slider",
      link: "/slider",
      icon: <GalleryHorizontal height={18} />,
    },
    {
      nav_name: "Job Manegement",
      link: "/jobs",
      icon: <NotepadText height={18} />,
    },
    {
      nav_name: "Media",
      link: "/media",
      icon: <HardDrive height={18} />,
    },
  ];

  const [activeTab, setActiveTab] = useState("/slider");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  const handelClickActive = (link) => {
    router.push("/admin/" + link);
  };
  return (
    <div className="admin-h-main w-full flex justify-center py-2 bg-white shadow-sm fixed">
      <div className="admin-h-container w-full flex items-center px-8 ">
        <div className="h-left grid md:flex w-full items-center gap-4">
          <div className="brnad-content w-[150px]">
            <Image src="/assets/brand.png" width={400} height={200} />
          </div>
          <div className="navigation-section w-fit flex items-center">
            {nevigationSec.map((tab, index) => (
              <AdminTabButon
                key={tab.id || index}
                label={tab.nav_name}
                icon={tab.icon}
                link={tab.link}
                active={activeTab}
                click={() => handelClickActive(tab.link)}
                className="w-full"
              />
            ))}
          </div>
        </div>
        <div className="h-right w-full flex justify-end gap-4 hidden md:flex">
          <div className="input-section flex w-full max-w-[500px] justify-between py-2 px-4 rounded-4xl outline-1 outline-gray-300">
            <input
              className="outline-transparent w-full focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <Search />
          </div>
          <div className="other-section flex items-center gap-4">
            <MessageSquareDashed />
            <Bell />
            <UserCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
