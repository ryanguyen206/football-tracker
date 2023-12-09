'use client'
import React, {FC} from 'react'
import { Player } from '@/interfaces'

interface DefensivePlayersProps {
    defPlayers: Player[]
}

const DefensivePlayers: FC<DefensivePlayersProps> = ({defPlayers}) => {
  return (
    <div>DefensivePlayers</div>
  )
}

export default DefensivePlayers