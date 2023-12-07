import React from 'react'
import { useQuery } from 'react-query'
import { fetchStandings } from '@/helperFn/helper'

const useGetTeamStandings = () => {
    const {data: standings} = useQuery({
        queryKey:['standings'],
        queryFn: () => fetchStandings(),
      })
  return {standings}
}
export default useGetTeamStandings