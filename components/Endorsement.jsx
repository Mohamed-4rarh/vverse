
import { AlertCircle, CheckCircle2, MoreVertical, Trash2, User2 } from 'lucide-react'
import React from 'react'

export default function Endorsement() {
  return (
    <div className='p-5 rounded-xl border shadow-md'>
        <header className='flex justify-between items-center border-b pt-4 pb-8'>
            <div className='flex gap-5 items-center'>
                <div className='gradient-bg rounded-full'>
                    <User2 className='gradient-bg rounded-full' width={45} height={45} color='#fff' />
                </div>
                <div>
                    <h3 className='font-bold text-md'>User Name</h3>
                    <p className='font-medium text-sm text-[#666666]'>User title</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <p className='pr-3 border-r-2 border-[#e5e5e5]'>10-Oct-2022 02:45 PM</p> 
                <div className='flex items-center gap-3'>
                    <AlertCircle />
                    <Trash2 className='border-[2px] rounded-full border-black p-1'  />
                    <CheckCircle2  />
                    <MoreVertical className='border-[2px] rounded-full border-black p-1'  />
                </div>
            </div>
        </header>
        <div className='p-1 font-medium text-sm my-5 text-[#666666]'>
            Viverra gravida proin sit integer non. Mattis amet ultricies id tempor. Lectus tortor, et viverra amet enim. Libero, a orci tincidunt pellentesque nulla dolor non. At lorem lacus lobortis est etc. Vitae etiam congue dui imperdiet sit. Pellentesque ultricies ultrices nec urna. Odio convallis et sed risus iaculis a adipiscing justo vel. Sed quis adipiscing ullamcorper risus Sed quis adipiscing ullamcorper.
        </div>
    </div>
  )
}
