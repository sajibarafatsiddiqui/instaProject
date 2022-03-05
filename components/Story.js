import React from 'react'

export default function Story({ img, username }) {
  return (
    <div>
      <img
        src={img}
        alt='image'
        className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out'
      />
      <p className='text-xs text-center truncate w-14'>{username}</p>
    </div>
  )
}
