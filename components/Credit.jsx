
import React from 'react'

export default function Credit({ icon, credit, title }) {
  return (
    <div className='rounded-3xl overflow-hidden p-0.5 gradient-bg w-36 col-span-1 row-span-2'>
        <div className='flex justify-center py-2 px-5 bg-white rounded-t-[21px] '>{icon}</div>

        <div className='h-0.5 w-full gradient-bg'></div>

        <div className='flex justify-center py-2 bg-white'><p className='gradient-text font-bold'>{credit}</p></div>

        <div className='h-0.5 w-full gradient-bg'></div>

        <div className='flex justify-center py-2 px-5 bg-white rounded-b-[21px]'><p className='gradient-text font-bold'>{title}</p></div>
    </div>
  )
}
