import React, {FC} from 'react'
import Image from 'next/image'
import { Player, TeamBasicInfo } from '@/interfaces'
import Link from 'next/link'

interface PlayerCardProps {
    basicTeamInfo : TeamBasicInfo | undefined
    basicPlayerDetails : Player
}

const PlayerCard: FC<PlayerCardProps> = ({basicTeamInfo, basicPlayerDetails}) => {
  return (
    <div className='border w-full sm:w-2/3 md:w-1/2 lg:w-1/3 relative  m-auto text-center shadow-md rounded-md pb-10 hover:shadow-xl'>
    <div className='relative '>
      <Link href={`/team/${basicTeamInfo?.Key}`}>
        <Image className='absolute  ' src={basicTeamInfo?.WikipediaLogoURL || ''} alt={`${basicTeamInfo?.Name} Logo`}  height={100} width={100} />
      </Link>
    </div>
    <div className='h-32' style={{backgroundImage: `linear-gradient(to right, #${basicTeamInfo?.PrimaryColor}, #${basicTeamInfo?.SecondaryColor})` }} />
    <div className='relative'>
      <Image className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-3/4' src={basicPlayerDetails.PhotoUrl} height={100} width={100} alt={`${basicPlayerDetails.Name} headshot`} />
    </div>

    <div className='mt-12'>
      <h1 className='font-bold '>{basicPlayerDetails.Name}</h1>
      <div className='grid grid-cols-2 mt-6 gap-y-6'>
        <div>
          <p className='font-semibold'>{basicPlayerDetails.Experience}</p>
          <p className='text-sm font-thin '>Exp</p>
        </div>
        <div>
          <p className='font-semibold'>{basicPlayerDetails.PositionCategory}</p>
          <p className='text-sm font-thin '>Side</p>
        </div>
        <div>
          <p className='font-semibold'>{basicPlayerDetails.FantasyPosition}</p>
          <p className='text-sm font-thin '>Pos</p>
        </div>
        <div>
          <p className='font-semibold'>{basicPlayerDetails.Age}</p>
          <p className='text-sm font-thin '>Age</p>
        </div>
        <div>
          <p className='font-semibold'>{basicPlayerDetails.Weight}</p>
          <p className='text-sm font-thin '>Weight</p>
        </div>
        <div>
          <p className='font-semibold'>{basicPlayerDetails.Height}</p>
          <p className='text-sm font-thin '>Height</p>
        </div>
      </div>
    </div>
</div> 
  )
}

export default PlayerCard