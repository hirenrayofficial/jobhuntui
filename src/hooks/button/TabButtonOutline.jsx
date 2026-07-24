import React from 'react'

export default function TabButtonOutline({label,click,active}) {
  return (
    <div className='w-full '>
      <button onClick={click} className={active === label ? "text-[#3C65F5] border-[#3C65F5] py-2 px-6 cursor-pointer  rounded-md flex items-center bg-transparent border  ":`py-2 px-6 cursor-pointer text-black hover:text-[#3C65F5] rounded-md flex items-center bg-transparent border hover:border-[#3C65F5] `}>{label}</button>
    </div>
  )
}
