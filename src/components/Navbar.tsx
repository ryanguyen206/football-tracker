'use client'
import React, {useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Searchbar from './Searchbar'
import Image from 'next/image'
import UserMenu from './UserMenu'
import LoggedOutMenu from './LoggedOutMenu'
import ThemeSwitch from './ThemeSwitch'


const Navbar = () => {
  const {data : session} = useSession();
  const [isOpen, setIsOpen] = useState(false); 
  
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", 'light')
    }
  }, [darkMode])
 
  return (
    <div className='py-6 dark:text-white'>
        <div className='flex items-center justify-between'>
            <Link href='/' className='text-xl md:text-2xl font-semibold xl:text-4xl hidden lg:block dark:text-slate-400'>Football Tracker</Link>
            <ThemeSwitch
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
            <Searchbar/>
            {session ? 
              <div className='relative'>
               <Image onClick={toggleMenu} className='rounded-full hover:cursor-pointer' src={session.user.image ?? ''} alt='User profile picture' height={75} width={75}></Image> 
                {isOpen && <UserMenu isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode} setDarkMode={setDarkMode}/>}
              </div>
              : <Link className='hidden text-xl md:text-2xl mr-8 py-4 px-6 rounded-full bg-customBlueTwo transition-transform duration-300 font-semibold cursor-pointer hover:bg-customHover hover:transform hover:translate-y-1 lg:block dark:text-slate-400' href="/sign-in">Sign In</Link>}
             {!session && <LoggedOutMenu darkMode={darkMode} setDarkMode={setDarkMode}/>}
        </div>
    </div>
  )
}
export default Navbar