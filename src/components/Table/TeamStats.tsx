"use client"
import React, {useEffect, useMemo, useState } from 'react'
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button} from "@nextui-org/react";
import {Selection} from "@react-types/shared";
import TableStats from './TableStats';
import ButtonOffOrDef from '../Button';


const TeamStats = () => {

    const [selected, setSelected] = useState<Selection>(new Set(["Offense"]));
    const selectedValue = useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected]);
  
  return (
    <div id="teamStats" className='pb-20 text-center mt-28'>
      <h2 className='text-5xl font-bold mb-10 dark:text-white'>Stats</h2>
      <ButtonOffOrDef selected={selected} setSelected={setSelected} selectedValue={selectedValue} />
        {selectedValue === 'Offense' ? 
            <TableStats 
                headers={['Team', 'Touchdowns', 'Passing', 'Rushing']}
                which = "offense"
            /> :
            <TableStats 
                headers={['Team', 'Takeaways', 'Sacks', 'Interceptions']}
                which = "defense"
        /> 
        }
    </div>
  )
}

export default TeamStats