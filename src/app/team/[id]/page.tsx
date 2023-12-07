'use client';
import React, { useEffect, useState } from 'react';
import { fetchOneTeamStats } from '@/helperFn/helper';
import useGetTeamStandings from '@/hooks/useGetTeamStandings';

const SingleTeam = ({ params }: { params: { id: string } }) => {
  
  const [teamData, setTeamData] = useState<any>(null);
  const [teamStandings, setTeamStandings] = useState<any>([])
  const {standings} = useGetTeamStandings()

  const foundTeam = standings?.find((aTeam: any) => aTeam.Team.toLowerCase() === params.id.toLowerCase());
  useEffect(() => {
    const test = async () => {
      const team : any = await fetchOneTeamStats({id : params.id})
      setTeamData(team)   
    }
    test()
  }, []);
  
  return (
    <div>
         {teamData && (
      <div className=''>
        <p className='text-black'>{params.id}</p>
        <p className='text-black'>{teamData[0].TeamName}</p>
        <p>{foundTeam?.Wins} - {foundTeam?.Losses}</p>
      </div>
    )}
    </div>
 
   
    
  );
  }
  
export default SingleTeam;
