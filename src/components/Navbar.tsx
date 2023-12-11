'use client'
import React, {useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import Searchbar from './Searchbar'
import Image from 'next/image'
import UserMenu from './UserMenu'
import LoggedOutMenu from './LoggedOutMenu'


const Navbar = () => {
  const {data : session} = useSession();
  const [isOpen, setIsOpen] = useState(false); 
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };
 
  return (
    <div className='py-6'>
        <div className='flex items-center justify-between'>
            <Link href='/' className='text-xl md:text-2xl xl:text-4xl hidden lg:block'>Football Tracker</Link>
            <Searchbar/>
            {session ? 
              <div className='relative'>
               <Image onClick={toggleMenu} className='rounded-full hover:cursor-pointer' src={session.user.image ?? ''} alt='User profile picture' height={75} width={75}></Image> 
                {isOpen && <UserMenu isOpen={isOpen} setIsOpen={setIsOpen}/>}
              </div>
              : <Link className='hidden text-xl md:text-2xl mr-8 py-4 px-6 rounded-full bg-customBlueTwo transition-transform duration-300 cursor-pointer hover:bg-customHover hover:transform hover:translate-y-1 lg:block' href="/sign-in">Sign In</Link>}
             {!session && <LoggedOutMenu/>}
        </div>
      
            


    </div>
  )
}

export default Navbar

                // '>