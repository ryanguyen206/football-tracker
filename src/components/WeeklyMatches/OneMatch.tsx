
import { FC } from "react";
import { TeamBasicInfo, oneMatch, standing} from "@/interfaces";
import { getPSTTime } from "@/helperFn/helper";
import { useEffect, useState } from "react";
import useFetchAllTeamsQuery from "@/hooks/useFetchAllTeamsQuery";
import Image from "next/image";
import Link from "next/link";

type WeekMatchProps = {
    match: oneMatch
    homeTeam?: string,
    awayTeam?: string,
    standings?: standing[] | undefined,
    allTeams?:TeamBasicInfo[]
}

const OneMatch: FC<WeekMatchProps> = ({match, homeTeam, awayTeam, standings, allTeams}) => {
    
    const currentAwayTeam = standings?.find((team) => team.Team === awayTeam);
    const currentHomeTeam = standings?.find((team) => team.Team === homeTeam);
    const awayLogo = allTeams?.find((team : TeamBasicInfo) => (team.Key === awayTeam))
    const homeLogo = allTeams?.find((team : TeamBasicInfo) => (team.Key === homeTeam))

  return (
    <div className="text-center bg-hsla-211-36-46 py-6 rounded-lg transition-transform hover:scale-105 border bg-squarebg">
      <div className='flex text-center text-2xl items-center gap-6 justify-center'>
      <div className="relative">
          <div className="w-20 h-10 relative">
              <Link href={`/team/${awayTeam}`}>
                <Image quality={100} className='object-contain' src={awayLogo ? awayLogo?.WikipediaLogoURL : ''} alt='Logo' fill/>
              </Link>
          </div>
            <br/>
            <div className="w-20 h-10 relative bottom-5">
            <Link href={`/team/${awayTeam}`}>
              <Image quality={100} className='' src={awayLogo ? awayLogo?.WikipediaWordMarkURL : ''} alt='Logo' fill/>
              </Link>
            </div>
            {currentAwayTeam && <p className="text-lg">({currentAwayTeam?.Wins} - {currentAwayTeam?.Losses})</p>}
        </div>
        <p className="text-xl">@</p>
        <div className='relative'>
          <div className="w-20 h-10 relative">
          <Link href={`/team/${homeTeam}`}>
            <Image quality={100} className=''src={homeLogo ? homeLogo?.WikipediaLogoURL : ''} alt='Logo' fill/>
            </Link>
          </div>
          <br/>
          <div className="w-20 h-10 relative bottom-5">
          <Link href={`/team/${homeTeam}`}>
          <Image quality={100} src={homeLogo ? homeLogo?.WikipediaWordMarkURL : ''} alt='Logo' fill/>
          </Link>
          </div>
          {currentHomeTeam && <p className="text-lg">({currentHomeTeam?.Wins} - {currentHomeTeam?.Losses})</p>}
        </div>

    
   
      </div>
      <p className="text-base mt-8 sm:text-xl">{getPSTTime(match.Date)}</p>
    </div>
  )
}

export default OneMatch;
