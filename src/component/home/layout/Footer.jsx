import Primarybutton from "@/hooks/button/Primarybutton";
import { ArrowRightIcon } from "lucide-react";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const Links = [
    {
      id: 1,
      link_label: "Home",
      link: "/",
    },
    {
      id: 2,
      link_label: "About Us",
      link: "/",
    },
    {
      id: 3,
      link_label: "Find Jobs",
      link: "/",
    },
    {
      id: 4,
      link_label: "Why Us",
      link: "/",
    },
    {
      id: 5,
      link_label: "Testimonial",
      link: "/",
    },
    {
      id: 6,
      link_label: "Contact Us",
      link: "/",
    },
  ];

  const contactInfo = [
    {
      contact_wa: "1234567890",
      contact_no: "1234567890",
      email: "youremail@gmail.com",
      location:
        "Job Hunt Placement, Parras Kunj Building, Ground Floor, Behind Biswadip Cinema Hall, landmark- Darjeeling Tea Traders Siliguri, 734003",
    },
  ];

  return (
    <div className="footer-main w-full py-8 px-4 md:px-8 text-white flex justify-center bg-[#3C65F5] h-fit">
      <div className="footer-container w-full flex flex-col gap-8 items-center max-w-[1400px]">
        <div className="footer-content w-full grid grid-cols-1 lg:grid-cols-3 gap-8 justify-between">
          <div className="footer-left w-full flex flex-col gap-4">
            <div className="brand-sec flex flex-col gap-4">
              <div className="brand-img">
                <Image 
                  src="/assets/brand.png" 
                  width={200} 
                  height={100}
                  className="w-[180px] h-auto object-contain"
                />
              </div>
              <div className="brand-content flex flex-col gap-4">
                <p className="text-sm md:text-base leading-relaxed text-gray-100">
                  Job Hunt Placement is a trusted recruitment agency with over 20
                  years of experience, connecting skilled candidates with top
                  employers in various industries, both in India and abroad,
                  for optimal career success.
                </p>
                <div>
                  <Primarybutton bg={"white"} label={"Apply Now Today"} />
                </div>
              </div>
            </div>
          </div>

          <div className="footer-center grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
            <div className="quicklinks w-full h-full flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Quick Links</h2>
              <div className="flex flex-col gap-1">
                {Links.map((l, index) => (
                  <div key={index} className="links flex items-center py-1 gap-2 hover:text-gray-200 transition-colors">
                    <ArrowRightIcon width={15} className="shrink-0" />
                    <Link href={l.link} className="text-sm md:text-base">{l.link_label}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="quicklinks w-full flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold">Contact Info</h2>
              {contactInfo.map((l, index) => (
                <div key={index} className="links flex flex-col items-start gap-2 text-sm md:text-base text-gray-100">
                  <p>+91 {l.contact_wa}</p>
                  <p>+91 {l.contact_no}</p>
                  <p className="break-all">{l.email}</p>
                  <p className="leading-relaxed"> {l.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-end flex flex-col gap-6">
            <div className="ft-map w-full overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116120.05642769608!2d88.34887104665023!3d26.71925410310384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44114f5441dcd%3A0xdeb5c4702063edff!2sSiliguri%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1784960167206!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-[200px]"
              />
            </div>
            
            <div className="social-sec flex flex-col sm:flex-row sm:items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold">Follow Us</h2>
              <div className="flex items-center gap-4">
                <Link href="/" aria-label="Instagram" className="hover:text-gray-200 transition-colors">
                  <CiInstagram className="text-[35px]" />
                </Link>
                <Link href="/" aria-label="Facebook" className="hover:text-gray-200 transition-colors">
                  <CiFacebook className="text-[35px]" />
                </Link>
                <Link href="/" aria-label="LinkedIn" className="hover:text-gray-200 transition-colors">
                  <CiLinkedin className="text-[35px]" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-rights border-t border-white/20 pt-4 w-full flex justify-center items-center text-sm text-gray-200">
          <p>© Job Hunt- {new Date().getFullYear()}  All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}