import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState, FC } from 'react';
import Link from "next/link";
import { MdCancel } from "react-icons/md";
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react'
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { FiSun,} from "react-icons/fi"
import { FaRegMoon } from "react-icons/fa";


interface ThemeProps {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const LoggedOutMenu : FC<ThemeProps> = ({darkMode, setDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const {data : session} = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
       {!isOpen && darkMode ? <RxHamburgerMenu className='lg:hidden w-12 h-12 hover:cursor-pointer' onClick={toggleMenu}/> : <GiHamburgerMenu className='lg:hidden w-12 h-12 hover:cursor-pointer' onClick={toggleMenu}/>}
       {isOpen &&
        <div data-aos='fade-left' className="flex justify-center items-center h-40 m-0 p-0 w-full bg-squarebg z-10 absolute top-0 left-0 text-center lg:hidden dark:bg-slate-800">
        {darkMode ? <GiCancel className='absolute top-2 right-2 hover:cursor-pointer' onClick={() => setIsOpen(false)}/> :<MdCancel className='absolute top-2 right-2 hover:cursor-pointer' onClick={() => setIsOpen(false)}/> }    
           <div className="flex flex-col gap-4">
            <div className="mx-auto">
            {darkMode ? 
              <FiSun className='text-white hover:cursor-pointer  lg:block' size={24} onClick={() => setDarkMode(false)}/> :   
              <FaRegMoon className='text-black hover:cursor-pointer  lg:block' size={24} onClick={() => setDarkMode(true)}/>}
            </div>
            <Link href='/' className="text-black  dark:text-slate-400 dark:hover:text-slate-300" onClick={() => setIsOpen(false)}>Home</Link>
            {session &&  <Link href='/watchlist' className="text-black  dark:text-slate-400 dark:hover:text-slate-300" onClick={() => setIsOpen(false)}>Watchlist</Link> }
            {session ?  <button onClick={() => {signOut()}} className="list-none  dark:text-slate-400 dark:hover:text-slate-300" >Sign Out</button> : <Link href='/sign-in' className="text-black dark:hover:text-slate-300  dark:text-slate-400" onClick={() => setIsOpen(false)}>Sign In</Link>}
           </div>
       </div>
       } 
    </>
  );
};

export default LoggedOutMenu;