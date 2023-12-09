import useClickOutside from '@/hooks/useClickOutside';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { FC, useEffect, useRef, useState } from 'react';
import { CiViewList } from "react-icons/ci"
import { IoIosLogOut } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

interface UserMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserMenu: FC<UserMenuProps> = ({ isOpen, setIsOpen }) => {
  const menuRef = useClickOutside(() => setIsOpen(false));

  return (
    <>
      {isOpen && (
        <div ref={menuRef} className="flex flex-col gap-4 border absolute bg-white p-4 rounded-md shadow-md">
          <Link href="/" className="hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md md:hidden" onClick={() => setIsOpen(false)}>
            <div className='flex items-center'>
              <IoHomeOutline size={24} />
              <p className='pl-2 text-gray-800'>Home</p>
            </div>
          </Link>
          <Link href="/watchlist" className="hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={() => setIsOpen(false)}>
            <div className='flex items-center'>
              <CiViewList className="text-blue-500" size={24} />
              <p className='pl-2 text-gray-800'>Watchlist</p>
            </div>
          </Link>
          <button className="hover:cursor-pointer hover:bg-gray-100 p-2 rounded-md" onClick={() => signOut()}>
            <div className='flex items-center'>
              <IoIosLogOut className="text-red-500" size={24} />
              <p className='pl-2 text-gray-800'>Sign Out</p>
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default UserMenu;
