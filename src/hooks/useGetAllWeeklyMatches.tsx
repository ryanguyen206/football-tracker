import { fetchWeeklyMatches } from '@/helperFn/helper'
import React from 'react'
import { useQuery } from 'react-query'

const useGetAllWeeklyMatches = () => {

    const {data : allWeeklyMatches} = useQuery({
        queryKey:['weeklyMatches'], 
        queryFn: () => fetchWeeklyMatches(),
      })
      
      return {allWeeklyMatches}
}

export default useGetAllWeeklyMatches