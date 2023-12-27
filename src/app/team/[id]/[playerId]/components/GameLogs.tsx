import React, {FC} from 'react'
import { fetchPlayerGameLogs } from '@/helperFn/helper'
import { PlayerGameLogs } from '@/interfaces'

interface GameLogsProps {
    playerId : string
}

const GameLogs: FC<GameLogsProps> = async ({playerId}) => {
    const data : PlayerGameLogs[] = await fetchPlayerGameLogs(playerId)
    
    const renderColumns = () => {
      switch (data[0].Position) {
        case 'WR':
        case 'RB':
        case 'TE':
          return (
            <>
              <th >REC</th>
              <th >YDS</th>
              <th >AVG</th>
              <th>TD</th>
              <th >ATT</th>
              <th >YDS</th>
              <th >AVG</th>
              <th >TD</th>
            </>
          );
        case 'QB':
          return (
            <>
              <th >COMP</th>
              <th >ATT</th>
              <th>YDS</th>
              <th>AVG</th>
              <th>TD</th>
              <th>INT</th>
              <th>SACK</th>
              <th>RATE</th>
              </>
          );
        case 'DL':
        case 'CB':
        case 'DE':
        case 'DB':
        case 'LB':
        case 'S':
        case 'LS':
        case 'DT':
        case 'FS':
        case 'SS':
        case 'OLB':
        case 'NT':
          return (
            <>
            <th>TKL</th>
            <th>AST</th>
            <th>SOLO</th>
            <th>SCK</th>
            <th>INT</th>
            <th>SFTY</th>
            <th>FF</th>
            </>
          )
        case 'P':
          return (
    
          <>
              <th>PUNTS</th>
              <th>YDS</th>
              <th>LNG</th>
              <th>AVG</th>
              <th>FC</th>
              <th>In 20</th>
          </>
      
          )
        case 'K':
          return (
    
          <>
              <th>LNG</th>
              <th>FGA</th>
              <th>FGM</th>
              <th>PCT</th>
              <th>XPA</th>
              <th>XPM</th>
          </>
    
          )
       
        default:
          return null;
      }
    };


    const renderRowData = () => {
      switch (data[0].Position) {
        case 'WR':
        case 'RB':
        case 'TE':
          return (
            <>
          {data?.map((weeklyGame : PlayerGameLogs) => (         
            <tr className='text-center hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-slate-400' key={weeklyGame.GameKey}>   
              <td className='py-6 font-semibold'>{weeklyGame.Week}</td>
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
  
            </>
          );
        case 'QB':
          return (
            <>
        {data?.map((weeklyGame : PlayerGameLogs) => (         
            <tr className='text-center hover:bg-slate-200  dark:hover:bg-slate-600 dark:text-slate-400' key={weeklyGame.GameKey}>   
              <td className='py-4 font-semibold'>{weeklyGame.Week}</td>
              <td className='py-4 font-light'>{weeklyGame.HomeOrAway === 'AWAY' ? <>@{weeklyGame.Opponent}</> : weeklyGame.Opponent}</td>
              <td className='py-4 font-light'>{weeklyGame.PassingCompletions}</td>
              <td className='py-4 font-light'>{weeklyGame.PassingAttempts}</td>
              <td className='py-4 font-light'>{weeklyGame.PassingYards}</td>
              <td className='py-4 font-light'>{weeklyGame.PassingYardsPerAttempt}</td>
              <td className='py-4 font-light'>{weeklyGame.PassingTouchdowns}</td>
              <td className='py-4 font-light'>{weeklyGame.Sacks}</td>
              <td className='py-4 font-light'>{weeklyGame.PassingInterceptions}</td>
              <td className='py-4 font-light'>{weeklyGame.PassingRating}</td> 
            </tr>   
          ))}
            </>
          );
          case 'DL':
          case 'CB':
          case 'DE':
          case 'DB':
          case 'LB':
          case 'S':
          case 'FS':
          case 'DT':
          case 'SS':
          case 'OLB':
          case 'NT':
          case 'LS':
            return (
              <>
            {data?.map((weeklyGame : PlayerGameLogs) => (         
              <tr className='text-center hover:bg-slate-200  dark:hover:bg-slate-600 dark:text-slate-400' key={weeklyGame.GameKey}>   
                <td className='py-4 font-semibold'>{weeklyGame.Week}</td>
                <td className='py-4 font-light'>{weeklyGame.HomeOrAway === 'AWAY' ? <>@{weeklyGame.Opponent}</> : weeklyGame.Opponent}</td>
                <td className='py-4 font-light'>{weeklyGame.Tackles}</td>
                <td className='py-4 font-light'>{weeklyGame.AssistedTackles}</td>
                <td className='py-4 font-light'>{weeklyGame.SoloTackles}</td>
                <td className='py-4 font-light'>{weeklyGame.Sacks}</td>
                <td className='py-4 font-light'>{weeklyGame.Interceptions}</td>
                <td className='py-4 font-light'>{weeklyGame.Safeties}</td>
                <td className='py-4 font-light'>{weeklyGame.FumblesForced}</td>       
              </tr>   
            ))}
                </>)
          case 'P':
            return (
              <>
              {data?.map((weeklyGame : PlayerGameLogs) => (         
                <tr className='text-center hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-slate-400 ' key={weeklyGame.GameKey}>   
                  <td className='py-4 font-semibold'>{weeklyGame.Week}</td>
                  <td className='py-4 font-light'>{weeklyGame.HomeOrAway === 'AWAY' ? <>@{weeklyGame.Opponent}</> : weeklyGame.Opponent}</td>
                  <td className='py-4 font-light'>{weeklyGame.Punts}</td>
                  <td className='py-4 font-light'>{weeklyGame.PuntYards}</td>
                  <td className='py-4 font-light'>{weeklyGame.PuntLong}</td>
                  <td className='py-4 font-light'>{weeklyGame.PuntAverage}</td>
                  <td className='py-4 font-light'>{weeklyGame.PuntReturnFairCatches}</td>
                  <td className='py-4 font-light'>{weeklyGame.PuntInside20}</td>   
                </tr>   
              ))}
              </>
            )
          case 'K':
            return (
              <>
                    {data?.map((weeklyGame : PlayerGameLogs) => (         
                <tr className='text-center hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-slate-400 ' key={weeklyGame.GameKey}>   
                  <td className='py-4 font-semibold'>{weeklyGame.Week}</td>
                  <td className='py-4 font-light'>{weeklyGame.HomeOrAway === 'AWAY' ? <>@{weeklyGame.Opponent}</> : weeklyGame.Opponent}</td>
                  <td className='py-4 font-light'>{weeklyGame.FieldGoalsLongestMade}</td>
                  <td className='py-4 font-light'>{weeklyGame.FieldGoalsAttempted}</td>
                  <td className='py-4 font-light'>{weeklyGame.FieldGoalsMade}</td>
                  <td className='py-4 font-light'>{weeklyGame.FieldGoalPercentage}</td>
                  <td className='py-4 font-light'>{weeklyGame.ExtraPointsAttempted}</td>
                  <td className='py-4 font-light'>{weeklyGame.ExtraPointsMade}</td>   
                </tr>   
              ))}
              </>
        
            )
          case 'G':
          case 'OT':
          case 'C':
            return (
              <>
                 {data?.map((weeklyGame : PlayerGameLogs) => (         
                <tr className='text-center hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-slate-400 ' key={weeklyGame.GameKey}>   
                  <td className='py-4 font-semibold'>{weeklyGame.Week}</td>
                  <td className='py-4 font-light'>{weeklyGame.HomeOrAway === 'AWAY' ? <>@{weeklyGame.Opponent}</> : weeklyGame.Opponent}</td>  
                </tr> 
                 ))}
              </>
            )
        default:
          return null;
      }
    };

    
  return (
    <div className='mt-20 w-full'>
        <table className="w-full text-center m-auto border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-200 dark:bg-slate-900 border-b dark:border-slate-600 dark:text-slate-400">
          <tr>   
              <th className='py-6'>Week</th>
              <th>Opp</th>  
              {renderColumns()}           
          </tr>
        </thead>
        <tbody>
            {renderRowData()}
        </tbody>
      </table>
      
    </div>
  )
}

export default GameLogs