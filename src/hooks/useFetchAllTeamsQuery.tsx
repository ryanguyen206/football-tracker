import { getAllTeams } from '@/helperFn/helper'
import React from 'react'
import { useQuery } from 'react-query'

const useFetchAllTeamsQuery = () => {
    const {data: allTeams} = useQuery({
        queryKey:['allTeams'],
        queryFn: () => getAllTeams(),
      })

    return {allTeams}
}

export default useFetchAllTeamsQuery