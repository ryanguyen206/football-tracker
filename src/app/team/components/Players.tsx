'use client'
import React, {FC, useEffect, useMemo, useState} from 'react'
import {Selection} from "@react-types/shared";
import useGetPlayersByTeam from '@/hooks/useGetPlayersByTeam'
import ButtonOffOrDef from '@/components/Button'
import PlayerTable from './PlayerTable';

interface PlayerProps {
    teamName: string
}

const Players: FC<PlayerProps> = ({teamName}) => {

    const {offense, defense} = useGetPlayersByTeam({teamName})
    const [selected, setSelected] = useState<Selection>(new Set(["Offense"]));
    const selectedValue = useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected]);
    const tableHeaders = ['Headshot', 'Player','Pos', 'Exp', 'Wt', 'Ht']

    useEffect(() => {
      console.log(offense)
    }, [offense])

    useEffect(() => {
        console.log(defense)
      }, [defense])
    

  return (
    <div className='mt-20'>
        <h3 className='text-2xl mb-20'>Players</h3>
        <ButtonOffOrDef selected={selected} setSelected={setSelected} selectedValue={selectedValue} />
        {
          selectedValue === 'Offense' ? <PlayerTable players={offense} headers={tableHeaders} /> : <PlayerTable players={defense} headers={tableHeaders} />
        }
    </div>
  )
}

export default Players