import React from 'react'

export default function Primarybutton({label,bg}) {
  return (
    <div className={bg ? "bg-white w-full font-bold p-2 px-6 text-[#3C65F5] rounded-md ":'w-full bg-[#3C65F5]  p-2 px-6 text-white rounded-md '}>
      <button className='w-[100%] cursor-pointer'>{label}</button>
    </div>
  )
}
