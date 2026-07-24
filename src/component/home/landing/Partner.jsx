import Image from "next/image";
import React from "react";
const partnerImage = [
  {
    partner_name: "nykaa",
    image: "/assets/nykaa.png",
  },
  {
    partner_name: "book my show",
    image: "/assets/book-my-show.png",
  },
  {
    partner_name: "apollowmunich",
    image: "/assets/apollomunich.png",
  },
  {
    partner_name: "unacademy",
    image: "/assets/unacademy.png",
  },
  {
    partner_name: "swiggy",
    image: "/assets/swiggy.png",
  },
  {
    partner_name: "paisabazar",
    image: "/assets/paisabazar.png",
  },
  {
    partner_name: "cleartax",
    image: "/assets/cleartax.png",
  },
];
export default function Partner() {
  return (
    <div>
      <div className="brand-partner flex justify-center">
        {partnerImage.map((partnerImage, index) => (
          <div className="parter-content w-full max-w-[200px]" key={index}>
            <Image
              src={partnerImage.image}
              alt={partnerImage.partner_name}
              width={200}
              height={50}
              className="object-cover h-[60px] w-[200px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
