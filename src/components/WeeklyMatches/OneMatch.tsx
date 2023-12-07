"use client"
import { FC } from "react";
import { oneMatch, standing} from "@/interfaces";
import { getPSTTime } from "@/helperFn/helper";
import { useEffect, useState } from "react";

type WeekMatchProps = {
    match: oneMatch
    homeTeam: string,
    awayTeam: string,
    standings: standing[] | undefined,
    week : string
}

const OneMatch: FC<WeekMatchProps> = ({match, homeTeam, awayTeam, standings, week}) => {

    const [currentHomeTeam, setHomeTeam] = useState<standing>()
    const [currentAwayTeam, setAwayTeam] = useState<standing>()

    useEffect(() => {
      if(standings && week)
      {
        standings?.forEach((element: standing) => {
          if (homeTeam === element.Team) {
            setHomeTeam(element);
          } else if (awayTeam === element.Team) {
            setAwayTeam(element);
          }    
      });
      }
    }, [week]);
    
  return (
    <div className="text-center bg-hsla-211-36-46 py-6 rounded-lg transition-transform hover:scale-105 border bg-squarebg">
      <div className='flex text-center text-2xl items-center gap-6 justify-center'>
        <div className=''>
          <p className='text-base mb-2'>HOME</p>
          <p className="text-xl sm:text-2xl">{match.HomeTeam}</p>
          {currentHomeTeam && <p className="mt-2 text-lg">({currentHomeTeam?.Wins} - {currentHomeTeam?.Losses})</p>}
   
        </div>
        <div>
          <p className="text-xl">vs</p>
        </div>
        <div>
            <p className="text-base mb-2">AWAY</p>
            <p className="text-xl sm:text-2xl">{match.AwayTeam}</p>
            {currentAwayTeam && <p className="mt-2 text-lg">({currentAwayTeam?.Wins} - {currentAwayTeam?.Losses})</p>}
        </div>
      </div>
      <p className="text-base mt-8 sm:text-xl">{getPSTTime(match.Date)}</p>
    </div>
  )
}

export default OneMatch;
