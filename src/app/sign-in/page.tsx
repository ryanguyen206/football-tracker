import { FC } from 'react'
import UserAuthForm from '@/components/UserAuthForm'


interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='h-screen'>
        <UserAuthForm/>
    </div>
  )
   
}

export default page