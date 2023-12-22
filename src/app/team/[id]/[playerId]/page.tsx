import React from 'react' 
import {fetchPlayerStats, getAllTeams, getPlayersByTeam} from '@/helperFn/helper'
import { Player, TeamBasicInfo } from '@/interfaces'
import Image from 'next/image'
import PlayerCard from './components/PlayerCard'
// import { dummyPlayer as filteredPlayer, dummyTeam as teamLogo, specificStats } from './teamData'
import PlayerCareer from './components/PlayerCareer'
import GameLogs from './components/GameLogs'


const playerStats = async ({params}: {params : {id: string, playerId: string}}) => { 

          const players = await getPlayersByTeam(params.id);
          const basicPlayerDetails : Player = players.find(
            (p: Player) => p.PlayerID === parseInt(params.playerId)
          );    

          const allTeams = await getAllTeams() 
          const basicTeamInfo: TeamBasicInfo | undefined = allTeams ? allTeams.find((team: TeamBasicInfo) => team.Key === params.id.toLocaleUpperCase()) : undefined;   

  return (
    <div>
    {
      basicPlayerDetails &&
        <>
           <PlayerCard 
            basicPlayerDetails={basicPlayerDetails}
            basicTeamInfo={basicTeamInfo} 
          />
          <GameLogs
            playerId={params.playerId}
          />  
        </>  
    }        
    </div>
  )
}

export default playerStats