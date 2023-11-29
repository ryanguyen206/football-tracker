'use client'
import { FC, useEffect } from 'react'
import {signIn} from 'next-auth/react'
import { useSession } from 'next-auth/react'
import {signOut} from 'next-auth/react'
import GoogleButton from 'react-google-button'


interface UserAuthFormProps {

}



const UserAuthForm: FC<UserAuthFormProps> =  ({}) => {

  
  return (

  
      <div className='bg-squarebg sm:w-6/12 p-10 m-auto text-center flex flex-col justify-center items-center mt-56'>
        <h1 className='mb-10'>Login with any provider</h1>
        <GoogleButton
          type="dark" // can be light or dark
          onClick={() => signIn('google',  { callbackUrl: '/' })}
        />
      </div>
     
   
  )
}

export default UserAuthForm