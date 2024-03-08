
import React from 'react'

export default function Credit({ icon, credit, title }) {
  return (
    <div className='rounded-lg border-2 w-36 col-span-1 row-span-2'>
        <div className='flex justify-center py-2 px-5 border-b-2'>{icon}</div>
        <div className='flex justify-center py-2'>{credit}</div>
        <div className='flex justify-center py-2 px-5 border-t-2'>{title}</div>
    </div>
  )
}
