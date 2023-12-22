import React, {FC} from 'react'
import { fetchPlayerGameLogs } from '@/helperFn/helper'

interface GameLogsProps {
    playerId : string
}

const GameLogs: FC<GameLogsProps> = async ({playerId}) => {
    const data = await fetchPlayerGameLogs(playerId)
    console.log(data)

  return (
    <div>
        {data.map((aGame : any) => (
            <>
            <p>{aGame.Week}</p>
            <p>{aGame.ReceivingYards}</p>
            </>
      
        ))}
    </div>
  )
}

export default GameLogs