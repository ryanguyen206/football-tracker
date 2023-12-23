import useClickOutside from '@/hooks/useClickOutside';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { FC, useEffect, useRef, useState } from 'react';
import { CiViewList } from "react-icons/ci"
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FiSun,} from "react-icons/fi"
import { FaRegMoon } from "react-icons/fa";

interface UserMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const UserMenu: FC<UserMenuProps> = ({ isOpen, setIsOpen, darkMode, setDarkMode }) => {
  const menuRef = useClickOutside(() => setIsOpen(false));

  return (
    <>
      {isOpen && (
        <div ref={menuRef} className="flex flex-col gap-4 border dark:border-slate-600 absolute left-1/2 transform -translate-x-1/2  bg-white p-4 rounded-md shadow-md dark:shadow-2xl dark:bg-slate-800 dark:text-white">
            
          
          <Link href="/" className="hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md lg:hidden dark:hover:bg-slate-700" onClick={() => setIsOpen(false)}>
            <div className='flex items-center'>
              <IoHomeOutline size={24} />
              <p className='pl-2 text-gray-800 dark:text-white'>Home</p>
            </div>
          </Link>
   
          <Link href="/watchlist" className="hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md dark:hover:bg-slate-700" onClick={() => setIsOpen(false)}>
            <div className='flex items-center'>
              <CiViewList className="text-blue-500" size={24} />
              <p className='pl-2 text-gray-800 dark:text-white'>Watchlist</p>
            </div>
          </Link>
          <button className="hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md dark:hover:bg-slate-700" onClick={() => signOut()}>
            <div className='flex items-center'>
              <IoIosLogOut className="text-red-500" size={24} />
              <p className='pl-2 text-gray-800 dark:text-white'>Sign Out</p>
            </div>
          </button>
          <div className='hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md dark:hover:bg-slate-700 lg:hidden' onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 
            <div className='flex items-center'>
                <FiSun className='text-white ' size={24} />
                <p className='pl-2 '>Light</p>
            </div> :    
             <div className='flex items-center '>
            <FaRegMoon className=' ' size={24}/>
            <p className='pl-2 '>Dark</p> 
            </div>}
          </div>
          
        </div>
      )}
    </>
  );
};

export default UserMenu;
