import React from 'react'

export default function Outlinebutton({label}) {
  return (
    <div className='w-fit  bg-transparent border border-1 border-[#3C65F5] hover:bg-[#3C65F5] hover:text-white text-[#3C65F5] rounded-md text-lg py-1 px-6'>
      <button className='cursor-pointer'>{label}</button>
    </div>
  )
}
