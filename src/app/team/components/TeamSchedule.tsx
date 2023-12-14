import React, {FC, useEffect, useState} from 'react'
import { fetchUpcomingTeamMatches, getPSTTime } from '@/helperFn/helper'
import { TeamBasicInfo, oneMatch, standing } from '@/interfaces'
import OneMatch from '@/components/WeeklyMatches/OneMatch'


interface TeamScheduleProps {
    teamName: string
    allTeams:TeamBasicInfo[] | undefined
    allStandings: standing[]
}

const TeamSchedule: FC<TeamScheduleProps> = async ({teamName, allStandings, allTeams}) => {

    const games = await fetchUpcomingTeamMatches(teamName.toLocaleUpperCase())

  return (
    <div>
        <h3 className='text-5xl font-bold text-center mb-10'>Upcoming Schedule</h3>
        <div className='flex flex-col m-auto w-6/12 gap-8 mb-36 '>
            {games?.map((singleGame) => (
               <OneMatch
                    key={singleGame.GameKey}
                    match={singleGame}
                    homeTeam={singleGame.HomeTeam}
                    awayTeam={singleGame.AwayTeam}
                    allTeams={allTeams}
                    standings={allStandings}       
               />
            ))}
        </div>
     
    </div>
  )
}

export default TeamSchedule