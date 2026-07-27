import { ChevronRight } from "lucide-react";
import React from "react";

export default function AdminTabButton({
  label,
  click,
  active,
  icon,
  link,
  className = "",
}) {
  const fullLink = "/admin" + link;
  const isActive = active === fullLink;

  return (
    <div className={`flex ${className}`}>
      <button
        onClick={click}
        className={`w-fit md:py-2 md:px-4 font-bold rounded-md flex items-center md:gap-2 cursor-pointer bg-transparent transition-colors ${
          isActive ? "text-[#3C65F5]" : "text-black hover:text-[#3C65F5]"
        }`}
      >
        <span className="flex-shrink-0">{icon}</span>
        <span className="truncate text-left flex-1 text-sm">{label}</span>
        <ChevronRight height={18} className="flex-shrink-0 " />
      </button>
    </div>
  );
}
