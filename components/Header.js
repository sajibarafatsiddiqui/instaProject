import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  HomeIcon,
  PlusCircleIcon,
  MailIcon,
  UserIcon,
  MenuIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

export default function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white border-b shadow-sm'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        <div className='relative hidden w-24 cursor-pointer lg:inline-grid'>
          <Image src='/insta.png' layout='fill' objectFit='contain' priority />
        </div>
        <div className='relative flex-shrink-0 w-10 h-10 cursor-pointer lg:hidden '>
          <Image src='/camera.png' layout='fill' objectFit='contain' priority />
        </div>
        <div className='hidden max-w-xs lg:inline-flex'>
          <div className='relative mt-3 ml-3 rounded-md'>
            <div className='absolute flex items-center pl-3 mt-3 '>
              <SearchIcon className='w-5 h-5 text-gray-500 pointer-events-none' />
            </div>
            <input
              className='block w-full pl-10 rounded-md border-gray-50 bg-gray-50 focus:ring-black focus:border-black'
              type='text'
              placeholder='Search'
            />
          </div>
        </div>
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />
          <MenuIcon className='cursor-pointer h6 md:hidden' />
          <PaperAirplaneIcon className='rotate-45 navBtn' />
          <PlusCircleIcon className='navBtn' />
          <MailIcon className='navBtn' />
          <UserIcon className='navBtn' />
          <img
            src='/sajib.jpg'
            alt='profile pic'
            className='h-10 rounded-full cursor-pointer navBtn'
          />
        </div>
      </div>
    </div>
  )
}
