import React, {FC} from 'react'
import { fetchPlayerGameLogs } from '@/helperFn/helper'
import { PlayerGameLogs } from '@/interfaces'

interface GameLogsProps {
    playerId : string
}

const GameLogs: FC<GameLogsProps> = async ({playerId}) => {
    const data : PlayerGameLogs[] = await fetchPlayerGameLogs(playerId)
    console.log(data)

    const renderColumns = () => {
      switch (data[0].Position) {
        case 'WR':
        case 'RB':
          return (
            <>
              <th className='py-4'>Week</th>
              <th>Opp</th>
              <th>REC</th>
              <th>YDS</th>
              <th>AVG</th>
              <th>TD</th>
              <th>ATT</th>
              <th>YDS</th>
              <th>AVG</th>
              <th>TD</th>
            </>
          );
        case 'Defense':
          return (
            <>
              <th>Tackles</th>
              <th>Interceptions</th>
            </>
          );
        default:
          return null;
      }
    };

    
  return (
    <div className='mt-20 w-full'>
        <table className="w-full text-center m-auto border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
         
              {renderColumns()}
            
          </tr>
        </thead>
        <tbody>
          {data?.map((weeklyGame : PlayerGameLogs) => (         
            <tr className='text-center hover:bg-slate-200 ' key={weeklyGame.GameKey}>   
              <td className='py-4 font-semibold'>{weeklyGame.Week}</td>
              <td className='py-4 font-light'>{weeklyGame.HomeOrAway === 'AWAY' ? <>@{weeklyGame.Opponent}</> : weeklyGame.Opponent}</td>
              <td className='py-4 font-light'>{weeklyGame.Receptions}</td>
              <td className='py-4 font-light'>{weeklyGame.ReceivingYards}</td>
              <td className='py-4 font-light'>{weeklyGame.ReceivingYardsPerReception}</td>
              <td className='py-4 font-light'>{weeklyGame.ReceivingTouchdowns}</td>
              <td className='py-4 font-light'>{weeklyGame.RushingAttempts}</td>
              <td className='py-4 font-light'>{weeklyGame.RushingYards}</td>
              <td className='py-4 font-light'>{weeklyGame.RushingYardsPerAttempt}</td>
              <td className='py-4 font-light'>{weeklyGame.RushingTouchdowns}</td> 
            </tr>   
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default GameLogs