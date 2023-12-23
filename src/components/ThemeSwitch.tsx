'use client'
import { FiSun,} from "react-icons/fi"
import { FaRegMoon } from "react-icons/fa";
import { useState, useEffect, FC } from 'react'

interface ThemeProps {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeSwitch : FC<ThemeProps> = ({darkMode, setDarkMode}) => {

  return (
    <div className="absolute right-20 top-15">
      {darkMode ? 
        <FiSun className='text-white hover:cursor-pointer hidden lg:block' size={32} onClick={() => setDarkMode(false)}/> :   
        <FaRegMoon className='text-black hover:cursor-pointer hidden lg:block' size={32} onClick={() => setDarkMode(true)}/>}
    </div>
  )
}

export default ThemeSwitch