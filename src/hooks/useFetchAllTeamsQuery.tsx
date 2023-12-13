import { getAllTeams } from '@/helperFn/helper'
import React from 'react'
import { useQuery } from 'react-query'

const useFetchAllTeamsQuery = () => {
    const {data: allTeams} = useQuery({
        queryKey:['allTeams'],
        queryFn: () => getAllTeams(),
        onSuccess: () => {
            console.log(' me hieter')
        }
      })

    return {allTeams}
}

export default useFetchAllTeamsQuery