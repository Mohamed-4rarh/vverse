'use client'
import Endorsement from '@/components/Endorsement'
import React from 'react'

export default function Endorsments() {
  return (
    <div className='p-6 max-w-[1450px] mx-auto border shadow-sm rounded-lg flex flex-col gap-5'>
        <div className='flex items-center gap-5 p-2'>
            <h1 className='font-bold text-5xl gradient-text'>Endorsments</h1>
            <hr className='bg-black w-full gradient-bg h-0.5' />
        </div>
        <div className="flex flex-col gap-5">
          <Endorsement />
          <Endorsement />
          <Endorsement />
          <Endorsement />
          <Endorsement />
        </div>
    </div>
  )
}
