
import { Bell, Heart, MessageCircleCode, Pill, Plus, ReceiptIcon, Search, ShoppingBag, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <header className='px-10 py-4'>
        <div className='flex items-center justify-between'>
            <Image 
                src={'./logo.svg'}
                width={58}
                height={48}
                alt='vverse'
            />

            <nav>
                <ul className='flex items-center gap-4'>
                    <li className='relative rounded-full gradient-bg w-11 h-11 flex justify-center items-center'> <Search color='#fff' /> </li>
                    <li className='relative rounded-full gradient-bg w-11 h-11 flex justify-center items-center'> <Plus color='#fff' /> </li>
                    <li className='relative rounded-full gradient-bg w-11 h-11 flex justify-center items-center'> <Bell color='#fff' /> </li>
                    <li className='relative rounded-full gradient-bg w-11 h-11 flex justify-center items-center'> <MessageCircleCode color='#fff' /> </li>
                    <li className='relative rounded-full gradient-bg w-11 h-11 flex justify-center items-center'> <Heart color='#fff' /> </li>
                    <li className='relative rounded-full gradient-bg w-11 h-11 flex justify-center items-center'> <ShoppingCart color='#fff' /> </li>
                    <li className='relative rounded-full gradient-bg w-11 h-11 flex justify-center items-center'> <ReceiptIcon color='#fff' /> </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
