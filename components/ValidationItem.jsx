
import React from 'react'

export default function ValidationItem({ icon, validation }) {
  return (
    <div className='flex gap-3 items-center'>
        {icon}
        <p>{validation}</p> 
    </div>
  )
}
