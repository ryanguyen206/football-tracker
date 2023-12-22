import React, {FC} from 'react'
import Image from 'next/image'
import { Player, TeamBasicInfo } from '@/interfaces'

interface PlayerCardProps {
    teamLogo : TeamBasicInfo
    filteredPlayer : Player
    specificStats: any


}

const PlayerCard: FC<PlayerCardProps> = ({teamLogo, filteredPlayer, specificStats}) => {
  return (
    <div className='border w-1/4 relative  m-auto text-center shadow-md rounded-md'>
    <div className='relative '>
      <Image className='absolute ' src={teamLogo?.WikipediaLogoURL || ''} alt={`${teamLogo?.Name} Logo`}  height={100} width={100} />
    </div>
    <div style={{ height: '6em', backgroundImage: `linear-gradient(to right, #${teamLogo?.PrimaryColor}, #${teamLogo?.SecondaryColor})` }} />
    <div className='relative'>
      <Image className='absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={filteredPlayer.PhotoUrl} height={100} width={100} alt={`${filteredPlayer.Name} headshot`} />
    </div>

    <div className='mt-20'>
      <h1 className='font-bold '>{filteredPlayer.Name}</h1>
      <div className='grid grid-cols-2 mt-6 gap-y-6'>
        <div>
          <p className='font-semibold'>{filteredPlayer.Experience}</p>
          <p className='text-sm font-thin '>Exp</p>
        </div>
        <div>
          <p className='font-semibold'>{filteredPlayer.PositionCategory}</p>
          <p className='text-sm font-thin '>Side</p>
        </div>
        <div>
          <p className='font-semibold'>{filteredPlayer.FantasyPosition}</p>
          <p className='text-sm font-thin '>Pos</p>
        </div>
        <div>
          <p className='font-semibold'>{filteredPlayer.Age}</p>
          <p className='text-sm font-thin '>Age</p>
        </div>
        <div>
          <p className='font-semibold'>{filteredPlayer.Weight}</p>
          <p className='text-sm font-thin '>Weight</p>
        </div>
        <div>
          <p className='font-semibold'>{filteredPlayer.Height}</p>
          <p className='text-sm font-thin '>Height</p>
        </div>


      </div>

    </div>

</div> 
  )
}

export default PlayerCard