'use client'
import {signIn} from 'next-auth/react'
import GoogleButton from 'react-google-button'

const UserAuthForm =  ({}) => {
  return (
      <div className='bg-squarebg sm:w-6/12 p-10 m-auto text-center flex flex-col justify-center items-center mt-56 dark:bg-slate-700'>
        <h1 className='mb-10 dark:text-slate-400'>Login with any provider</h1>
        <GoogleButton
          type="dark" // can be light or dark
          onClick={() => signIn('google',  { callbackUrl: '/watchlist' })}
        />
      </div>
  )
}

export default UserAuthForm