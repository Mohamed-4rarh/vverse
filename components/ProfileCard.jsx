
import Image from 'next/image'
import React from 'react'
import Credit from './Credit'
import { ArrowUpNarrowWide, BadgeDollarSign, Clock, Contact, Dessert, DoorOpen, Earth, HandHeart, Hash, ListChecks, Loader, Mail, PersonStanding, Phone, Podcast, Radio, Send, Share2, SigmaSquare, SmilePlus, Subscript, ThumbsUp, User, UserCheck, WholeWord } from 'lucide-react'
import { getUserData } from '@/libs/utils'
import ValidationItem from './ValidationItem'

export default async function ProfileCard() {
    const url = 'https://test-api.myvverse.com/api/general/users/auth?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Rlc3QtYXBpLm15dnZlcnNlLmNvbS9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTcwOTg0NzI5NSwiZXhwIjoxNzA5OTMzNjk1LCJuYmYiOjE3MDk4NDcyOTUsImp0aSI6Ing2bGN5bzBvbWU2bTNKYXUiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.iByM066f8wqPRzhNoqhRgQ3pCsUjFFeBaE910w_ICkg'
    const options = {
        method: "GET",
        headers: {
            authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Rlc3QtYXBpLm15dnZlcnNlLmNvbS9hcGkvYXV0aC9sb2dpbiIsImlhdCI6MTcwOTg0NzI5NSwiZXhwIjoxNzA5OTMzNjk1LCJuYmYiOjE3MDk4NDcyOTUsImp0aSI6Ing2bGN5bzBvbWU2bTNKYXUiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.iByM066f8wqPRzhNoqhRgQ3pCsUjFFeBaE910w_ICkg",
            Accept: "application/json",
        }
    }
    //getUserData => a function made to be reusable to fetch data around the application
    //if we will use any state managment systems like redux-toolkit we won't need this function, we will use the thunkAPI
    const userData = await getUserData(url, options)
    console.log('user data', userData)

    const profile = userData.data.profile
    const validation = userData.data
    const counters = userData.data.counts

  return (
    <div className='bg-white p-8 rounded-lg'>
        <div className='profile-holder flex gap-9 items-center'>
            <div className='profile-image'>
                <div className='w-80 h-80 relative border-4 border-slate-600 rounded-full overflow-hidden mb-5'>
                    <Image 
                        src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        fill
                        alt='profile image'
                        className='object-cover'
                    />
                </div>
                <div className='contact-info flex gap-3 justify-center items-center'>
                    <Mail color='#0a6dea' />
                    <Phone color='#0a6dea' />
                    <Contact color='#0a6dea' />
                    <ListChecks color='#0a6dea' />
                </div>
            </div>

            <div className='details-holder w-full'>
                <div className='profile-details pb-4 border-b-2'>
                    <div className='member-details'>
                        <h1 className='font-extrabold text-5xl bg-gradient-to-tr from-[#016DEA] to-[#FA0101] text-transparent bg-clip-text'>
                            {profile.public_name}
                        </h1>
                        <p className='text-xl bg-gradient-to-r from-[#000000] to-[#666666] text-transparent bg-clip-text'>
                            {profile.profile_message}
                        </p>
                        <div className='flex gap-5 items-center mt-5'>
                            <div className='flex justify-center items-center gap-2'>
                                <Loader width={24} height={24} />
                                <span className='text-[#666666] text-md'>25K</span>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <ThumbsUp width={24} height={24} />
                                <span className='text-[#666666] text-md'>27K</span>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <Share2 width={24} height={24} />
                                <span className='text-[#666666] text-md'>13.9K</span>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <Radio width={24} height={24} />
                                <span className='text-[#666666] text-md'>14.5K</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile-credits flex justify-between flex-1 w-full items-center'>
                    <div className='mt-4 flex flex-wrap gap-4'>
                        <Credit icon={<HandHeart />} title={'Asset'} credit={counters.no_of_assets} />
                        <Credit icon={<HandHeart />} title={'Sales'} credit={counters.sales_sum} />
                        <Credit icon={<BadgeDollarSign />} title={'Earnings'} credit={counters.earned_sum} />
                        <Credit icon={<ArrowUpNarrowWide />} title={'Investments'} credit={counters.invested_sum} />
                        <Credit icon={<SmilePlus />} title={'Reactions'} credit={counters.reviews_count} />
                        <Credit icon={<Share2 />} title={'Shares'} credit={counters.shares_count} />
                        <Credit icon={<SigmaSquare />} title={'Rating'} credit={counters.rating_count} />
                        <Credit icon={<Send />} title={'Connections'} credit={counters.connections_count} />
                        <Credit icon={<UserCheck />} title={'Followers'} credit={counters.followers_count} />
                        <Credit icon={<User />} title={'Members'} credit={counters.members_count} />
                        <Credit icon={<Podcast />} title={'Subscribers'} credit={counters.subscribers_count} />
                        <Credit icon={<Dessert />} title={'Customers'} credit={counters.customers_count} />
                        
                    </div> 
                    <div className='member-validation-info w-96 py-4 px-8 border-l flex flex-col gap-4 my-5 ml-24'>
                        <ValidationItem icon={<Earth />} validation={validation.country} />
                        <ValidationItem icon={<PersonStanding />} validation={validation.gender} />
                        <ValidationItem icon={<Clock />} validation={validation.time_zone} />
                        <ValidationItem icon={<DoorOpen />} validation={validation.joining_date} />
                    </div>
                </div>
            </div>
        </div>

        <div className='buttons py-4 mt-4 border-y'>
            buttons group
        </div>

        <div>
            buttons
        </div>
    </div>
  )
}
