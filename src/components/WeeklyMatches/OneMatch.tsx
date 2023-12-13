"use client"
import { FC } from "react";
import { oneMatch, standing} from "@/interfaces";
import { getPSTTime } from "@/helperFn/helper";
import { useEffect, useState } from "react";
import useFetchAllTeamsQuery from "@/hooks/useFetchAllTeamsQuery";
import Image from "next/image";

type WeekMatchProps = {
    match: oneMatch
    homeTeam: string,
    awayTeam: string,
    standings: standing[] | undefined,
    allTeams:any
}

const OneMatch: FC<WeekMatchProps> = ({match, homeTeam, awayTeam, standings, allTeams}) => {
    
    

    const currentAwayTeam = standings?.find((team) => team.Team === awayTeam);
    const currentHomeTeam = standings?.find((team) => team.Team === homeTeam);
    const awayLogo = allTeams?.find((team : any) => (team.Key === awayTeam))
    const homeLogo = allTeams?.find((team : any) => (team.Key === homeTeam))

  return (
    <div className="text-center bg-hsla-211-36-46 py-6 rounded-lg transition-transform hover:scale-105 border bg-squarebg">
      <div className='flex text-center text-2xl items-center gap-6 justify-center'>
        <div className=''>
          <p className='text-base mb-2'>HOME</p>
          <Image src={homeLogo?.WikipediaLogoURL} alt='Logo' width={60} height={60}/>
          <br/>
          <Image src={homeLogo?.WikipediaWordMarkURL} alt='Logo' width={60} height={60}/>
          {currentHomeTeam && <p className="mt-2 text-lg">({currentHomeTeam?.Wins} - {currentHomeTeam?.Losses})</p>}
   
        </div>
        <div>
          <p className="text-xl">vs</p>
        </div>
        <div>
            <p className="text-base mb-2">AWAY</p>
            <Image src={awayLogo?.WikipediaLogoURL} alt='Logo' width={60} height={60}/>
            <br/>
            <Image className=''src={awayLogo?.WikipediaWordMarkURL} alt='Logo' width={60} height={60}/>
            {currentAwayTeam && <p className="mt-2 text-lg">({currentAwayTeam?.Wins} - {currentAwayTeam?.Losses})</p>}
        </div>
      </div>
      <p className="text-base mt-8 sm:text-xl">{getPSTTime(match.Date)}</p>
    </div>
  )
}

export default OneMatch;
