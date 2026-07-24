import React from 'react'

export default function Primarybutton({label}) {
  return (
    <div className='w-full bg-[#3C65F5] p-2 px-6 text-white rounded-md '>
      <button className='w-[100%] cursor-pointer'>{label}</button>
    </div>
  )
}
