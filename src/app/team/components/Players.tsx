'use client'
import React, {FC} from 'react'
import OffensivePlayers from './OffensivePlayers'
import DefensivePlayers from './DefensivePlayers'
import useGetPlayersByTeam from '@/hooks/useGetPlayersByTeam'

interface PlayerProps {
    teamName: string
}

const Players: FC<PlayerProps> = ({teamName}) => {

    const {offense, defense} = useGetPlayersByTeam({teamName})
    // useEffect(() => {
    //   console.log(offense)
    // }, [offense])

    // useEffect(() => {
    //     console.log(defense)
    //   }, [defense])
    

  return (
    <div className='mt-20'>
        <h3 className='text-2xl'>Players</h3>
        <OffensivePlayers offPlayers={offense} />
        <DefensivePlayers defPlayers={defense}/>
    </div>
  )
}

export default Players