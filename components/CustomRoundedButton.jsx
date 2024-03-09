
import React from 'react'

export default function CustomRoundedButton({ icon, color, text}) {
  return (
    <div className='group p-2 flex items-center gap-3 hover:cursor-pointer w-fit'>
        <div className={`w-9 h-9 bg-gradient-to-r ${ color ? color : 'from-[#9d01cb] to-[#5d0076]'} group-hover:from-[#016DEA] group-hover:to-[#FA0101] flex justify-center items-center rounded-full`}>{ icon }</div>
        { text && <span className='font-bold text-[#666666] text-lg group-hover:bg-gradient-to-r group-hover:from-[#016DEA] group-hover:to-[#FA0101] group-hover:text-transparent group-hover:bg-clip-text capitalize'>{ text }</span>}
    </div>
  )
}
