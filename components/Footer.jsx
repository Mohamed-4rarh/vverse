
import { footer } from '@/constants/footer'
import { Apple, ChevronRight, Facebook, Linkedin, LocateFixed, Mail, Phone, Play, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='p-8 gradient-bg'>
        <div className='p-6'>
            <div className='flex items-start justify-evenly'>

                <div>
                    <Image 
                        src={'./logofooter.svg'}
                        width={205}
                        height={30}
                        alt='logo'
                        className='mr-1'
                    />
                    <p className='text-[#fff] my-8 max-w-[345px]'>Proudly, The 1st of It&#39;s Kind Worldwide, AIO Digital Platform For The Global Community Of The Veterinary Industry</p>
                    <hr className='bg-white max-w-[350px]' />
                    <div className='mt-8'>
                        <h3 className='text-white font-bold text-xl mb-4'>Lets&#39;s talk</h3>
                        <div className='text-white flex items-center gap-2 text-base'><Mail color='white' /> info@myvverse.com </div>
                        <div className='text-white flex items-center gap-2 text-base my-3'><Phone color='white' /> +971 52 9756665 </div>
                        <div className='text-white flex items-center gap-2 text-base mb-8'><LocateFixed color='white' /> Virtually Managed From UAE-Dubai </div>
                    </div>
                    <hr className='bg-white max-w-[350px]' />
                    <div className='my-8 flex items-center gap-5'>
                        <Linkedin color='transparent' fill='white'   /> 
                        <Facebook  color='transparent' fill='white'  /> 
                        <Youtube color='white'  />
                    </div>
                    <hr className='bg-white max-w-[350px]' />
                    <div className='my-8'>
                        <h3 className='text-white font-bold text-xl mb-4'>Coming Soon</h3>
                        <div className='flex gap-4 items-center'>
                            <button className='text-white flex gap-2 items-center'> <Apple /> App Store </button>
                            <button className='text-white flex gap-2 items-center'> <Play /> Google Play Store </button>
                        </div>
                    </div>
                </div>

                {
                    footer.map((col, idx) => (
                        <div key={idx}>
                            <h3 className='text-white font-bold text-2xl mb-5'>{col.title}</h3>
                            {col.links?.map((link, idx) => (
                                <a href='#' key={idx} className='text-[#ececec] flex items-center gap-1 hover:underline hover:text-white pl-5'> <ChevronRight color='#ececec' /> {link.text}</a>
                            ))}
                            {col.groups?.map((group, idx) => (
                                <div key={idx}>
                                    <h3 className='text-white font-bold text-lg my-3 pl-2'>{group.groupTitle}</h3>
                                    {group.links.map((link, idx) => (
                                        <a href='#' key={idx} className='text-[#ececec] flex items-center gap-1 hover:underline hover:text-white pl-5'> <ChevronRight color='#ececec' /> {link.text}</a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))
                }

            </div>
        </div>
    </footer>
  )
}
