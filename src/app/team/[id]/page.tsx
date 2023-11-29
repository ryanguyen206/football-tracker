'use client'
import React, { useEffect } from 'react'
import {fetchOneTeamStats} from '../../../lib/fetchData'


const SingleTeam = ({ params }: { params: { id: string } }) => {

    useEffect(() => {
      
      //function
    }, [])
    

  return (
    <div className='bg-squarebg'>
       <p className='text-black'> {params.id}</p>

    </div>
  )
}

export default SingleTeam