import React, {FC} from 'react';
import { TeamBasicInfo, standing, teamStats } from '@/interfaces';
import Image from 'next/image';


interface TeamHeaderProps {
  teamName: string
  allTeams:TeamBasicInfo[] | undefined
  allStandings: standing[]
}

const TeamHeader: FC<TeamHeaderProps> = async ({teamName, allTeams, allStandings}) => {


  const teamLogo: TeamBasicInfo | undefined = allTeams ? allTeams.find((team: TeamBasicInfo) => team.Key === teamName.toLocaleUpperCase()) : undefined;
  const team = allStandings?.find((aTeam: standing) => aTeam.Team.toLowerCase() === teamName.toLowerCase());

  return (
    <div>
        <div className='flex flex-col'>
          <div className='relative w-20 h-20 m-auto mb-2'>  
              <Image src={teamLogo?.WikipediaLogoURL || ''} alt={`${teamLogo?.Name} Logo`} fill />
          </div> 
     
             <h1 className='text-black text-3xl text-center mb-6'>{team?.Name} <span className='text-xl mb-2'>({team?.Wins} - {team?.Losses})</span></h1>
            <div className='flex justify-center flex-col items-center'>
              <p className='text-2xl mb-32'>{team?.Conference} &#x2022; {team?.Division}</p>
            </div> 
        </div>
    </div>
  )
}

export default TeamHeader