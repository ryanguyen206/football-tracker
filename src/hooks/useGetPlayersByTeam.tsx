import { getPlayersByTeam } from '@/helperFn/helper'
import { Player } from '@/interfaces'
import React, {FC, useEffect, useState} from 'react'
import { useQuery } from 'react-query'


const useGetPlayersByTeam = ({teamName} : {teamName : string}) => {
    const [offense, setOffense] = useState<Player[]>([])
    const [defense, setDefense] = useState<Player[]>([])


    const {data : playersOnATeam} = useQuery({
        queryKey:['team', teamName],
        queryFn: () => getPlayersByTeam(teamName),
        onSuccess(data) {
            setOffense(data.filter((singlePlayer : Player) => singlePlayer.PositionCategory === 'OFF'))
            setDefense(data.filter((singlePlayer : Player) => singlePlayer.PositionCategory === 'DEF'))
        },
    })

    return {offense, defense}



}

export default useGetPlayersByTeam