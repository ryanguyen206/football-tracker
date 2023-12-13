import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import Link from "next/link";
import { MdCancel } from "react-icons/md";
import { useSession } from "next-auth/react";
import { signOut } from 'next-auth/react'


const LoggedOutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {data : session} = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
       {!isOpen && <GiHamburgerMenu className='lg:hidden w-12 h-12 hover:cursor-pointer' onClick={toggleMenu}/>}
       {isOpen &&
        <div data-aos='fade-left' className="flex justify-center items-center h-40 m-0 p-0 w-full bg-squarebg z-10 absolute top-0 left-0 text-center lg:hidden">
           <MdCancel className='absolute top-2 right-2 hover:cursor-pointer' onClick={() => setIsOpen(false)}/>
           <div className="flex flex-col gap-4">
            <Link href='/' className="text-black" onClick={() => setIsOpen(false)}>Home</Link>
            {session &&  <Link href='/watchlist' className="text-black" onClick={() => setIsOpen(false)}>Watchlist</Link> }
            {session ?  <button onClick={() => {signOut()}} className="list-none" >Sign Out</button> : <Link href='/sign-in' className="text-black" onClick={() => setIsOpen(false)}>Sign In</Link>}
           </div>
       </div>
       } 
    </>
  );
};

export default LoggedOutMenu;