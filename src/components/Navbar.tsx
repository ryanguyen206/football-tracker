'use client'
import React, {useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import HamburgerMenu from './HamburgerMenu'


const Navbar = () => {
  const {data : session} = useSession();
 
  return (
    <div className='py-6'>
        <div className='flex items-center justify-between'>
            <Link href='/' className='text-xl md:text-2xl xl:text-4xl'>Football Tracker</Link>
            <ul className='hidden text-xl md:flex '>
                {session && 
                <>
                    <li className="text-base md:text-2xl mr-4 py-4 px-4 rounded-full bg-customBlueTwo transition-transform duration-300 cursor-pointer hover:bg-customHover hover:transform hover:translate-y-1"><Link
                    href="/watchlist"> My Watchlist</Link></li> 
                    <li><button
                    onClick={() => {
                      signOut(); 
                    }}
                    className="text-base md:text-2xl mr-4 py-4 px-4 rounded-full bg-customBlueTwo transition-transform duration-300 cursor-pointer hover:bg-customHover hover:transform hover:translate-y-1"
                    >
                    Sign Out
                  </button></li>
                </> }
         
                {!session && <li className='text-xl md:text-2xl mr-8 py-4 px-6 rounded-full bg-customBlueTwo transition-transform duration-300 cursor-pointer hover:bg-customHover hover:transform hover:translate-y-1'><Link href="/sign-in">Sign In</Link></li> }
            </ul> 
            <HamburgerMenu/>
        </div>
    </div>
  )
}

export default Navbar