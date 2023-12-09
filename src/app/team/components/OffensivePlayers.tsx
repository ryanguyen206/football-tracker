'use client'
import React, {FC} from 'react'
import { Player } from '@/interfaces'
import Image from 'next/image'


interface OffensivePlayersProps {
    offPlayers: Player[]
}

const OffensivePlayers : FC<OffensivePlayersProps> = ({offPlayers}) => {
  return (
    <div>
        {offPlayers.map((singlePlayer : Player) => 
            <div key={singlePlayer.PlayerID}>
                <Image src={singlePlayer.PhotoUrl} alt='Headshot of player' width={120} height={120}/>
                <p>{singlePlayer.Name}</p>
                {/* <p>{singlePlayer.Experience}</p> */}
                <p>{singlePlayer.Position}</p>
                
            </div>
           
        )}
    </div>
  )
}

export default OffensivePlayers