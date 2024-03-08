
import React from 'react'

export default function ValidationItem({ icon, validation }) {
  return (
    <div className='flex gap-2 items-center'>
        {icon}
        <span>{validation}</span> 
    </div>
  )
}
