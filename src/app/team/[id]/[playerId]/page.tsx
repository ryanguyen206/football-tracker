import React from 'react' 
import {fetchPlayerStats, getAllTeams, getPlayersByTeam} from '@/helperFn/helper'
import { Player, TeamBasicInfo } from '@/interfaces'
import Image from 'next/image'
import PlayerCard from './components/PlayerCard'
import { dummyPlayer as filteredPlayer, dummyTeam as teamLogo, specificStats } from './teamData'
import PlayerCareer from './components/PlayerCareer'
import GameLogs from './components/GameLogs'


const playerStats = async ({params}: {params : {playerId: string}}) => { 
          //  const data = await fetchPlayerStats(params.playerId);

          // const players = await getPlayersByTeam(params.id);
          // const allTeams = await getAllTeams() 
          // const filteredPlayer : Player = players.find(
          //   (p: Player) => p.PlayerID === parseInt(params.playerId)
          // );    
          // const teamLogo: TeamBasicInfo | undefined = allTeams ? allTeams.find((team: TeamBasicInfo) => team.Key === params.id.toLocaleUpperCase()) : undefined;   
          //   console.log(teamLogo)
          //   console.log(filteredPlayer)
  return (
    <div className=''>
     
     
        {filteredPlayer  && 
        <>
           <PlayerCard 
            filteredPlayer={filteredPlayer}
            teamLogo={teamLogo}
         
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