
import React from 'react'
import CustomRoundedButton from './CustomRoundedButton'
import { Clipboard, Dock, DockIcon, LucideNetwork, Megaphone, MonitorPlay, Network, ShoppingBag, Signal, SignalHigh, User, UserRoundCogIcon, Wand } from 'lucide-react'

export default function ButtonsContainer() {
  return (
    <div className='flex justify-between items-center py-4 mt-4 border-y'>
        <div className='flex justify-start items-center '>
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<UserRoundCogIcon color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<MonitorPlay color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<Clipboard color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<ShoppingBag color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<Dock color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<Network color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<Wand color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<SignalHigh color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<Megaphone color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<DockIcon color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<LucideNetwork color='#fff' />} />
        </div>

        <div className='flex items-center gap-3'>
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} text={'VP'} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} text={'SC'} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} text={'SS'} />
            <CustomRoundedButton color={'from-[#016DEA] to-[#003B7E]'} icon={<User color='#fff' />} text={'SA'} />
        </div>
    </div>
  )
}
