"use client"
import React from 'react'
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'
import { useEffect } from 'react';


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      delay: 0, 
    });
  }, []);

  return (
        <>
        <div className='mt-48' data-aos="fade-right">
            <h1 className='text-3xl text-center font-bold tracking-wider leading-tight mb-4 sm:text-5xl xl:text-left' >WELCOME</h1>
            <hr className='mb-12 xl:w-1/4'></hr>
                <p className='text-center text-xl mb-20 leading-relaxed font-light xl:mb-20 xl:text-left xl:w-5/12'>Our platform offers comprehensive insights, from weekly match-ups to in-depth team statistics, helping you make informed decisions and stay ahead of the competition.</p>
                <div className='flex flex-col justify-center items-center gap-y-12 tablet:flex-row tablet:gap-y-0 tablet:gap-x-9 xl:justify-start'>
                  <div className='transition-transform duration-300 cursor-pointer hover:transform hover:-translate-y-1'>
                    <Link href="/#weeklyMatches" className="px-8 py-4 md:px-10 rounded-lg text-xl font-light bg-primary  " >Matches</Link>
                  </div>
                  <div className='transition-transform duration-300 cursor-pointer hover:transform hover:-translate-y-1'> 
                    <Link href="/#teamStats" className='px-8 py-4 md:px-10 rounded-lg text-xl font-light  bg-secondary'>Team Stats</Link>
                  </div> 
                </div>          
        </div>


              <div className='my-40 sm:my-64' data-aos="fade-up" data-aos-once='true'>
                <h2 className='text-center font-bold text-5xl mb-28'>Features</h2>
                <div className='flex justify-evenly gap-10 flex-col  xl:flex-row' data-aos="fade-up">
                  <div className='flex-1 bg-squarebg py-14 '>
                    <h3 className='text-center text-3xl mb-6'>Watchlist</h3>
                    <p className='px-4 text-center sm:px-10 sm:tracking-wide leading-8 sm:text-center '>Transform the way you engage with football by curating your personalized watchlist, where you can effortlessly track your favorite teams and players </p>
                  </div>
                  <div className='bg-squarebg flex-1 py-14 '>
                    <h3 className='text-center text-3xl mb-6 ' >Weekly Matches</h3>
                    <p className='px-4 text-center sm:px-10 sm:tracking-wide leading-8 sm:text-center'>Experience the thrill of every match with our dynamic weekly schedules feature, ensuring you never miss a kickoff or exciting game moment  </p>
                  </div>
                  <div className='bg-squarebg flex-1 py-14 '>
                    <h3 className='text-center text-3xl mb-6'>Team Stats</h3>
                    <p className='px-4 text-center sm:px-10 sm:tracking-wide leading-8 sm:text-center'>Elevate your team spirit with team stats at your fingertips, empowering you with insights into player performances, standings, and strategic trends </p>
                  </div>
                </div>
            </div>

          </>


  )
}

export default Hero