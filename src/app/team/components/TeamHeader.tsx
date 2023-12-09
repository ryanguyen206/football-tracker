'use client'
import React, { useEffect, useState } from 'react';
import { fetchOneTeamStats } from '@/helperFn/helper';
import useGetTeamStandings from '@/hooks/useGetTeamStandings';
import { standing, teamStats } from '@/interfaces';

const TeamHeader = ({teamName} : {teamName : string}) => {

    const {standings} = useGetTeamStandings()
    const foundTeam = standings?.find((aTeam: standing) => aTeam.Team.toLowerCase() === teamName.toLowerCase());
    const [teamData, setTeamData] = useState<any>(null);
  
    useEffect(() => {
      const getTeam = async () => {
        const team : any = await fetchOneTeamStats({id : teamName})
        setTeamData(team)   
      }
      getTeam()
    }, []);

  return (
    <div>
        <div className='flex flex-col'>
            <h1 className='text-black text-3xl text-center mb-6'>{foundTeam?.Name} <span className='text-xl mb-2'>({foundTeam?.Wins} - {foundTeam?.Losses})</span></h1>
            <div className='flex justify-center flex-col items-center'>
              <p className='text-2xl'>{foundTeam?.Conference} &#x2022; {foundTeam?.Division}</p>
            </div>
        </div>
    </div>
  )
}

export default TeamHeader