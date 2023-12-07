"use client"
import React, {useEffect, useMemo, useState } from 'react'
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button} from "@nextui-org/react";
import {Selection} from "@react-types/shared";
import TableStats from './TableStats';


const TeamStats = () => {

    const [selected, setSelected] = useState<Selection>(new Set(["Offense"]));
    const selectedValue = useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected]);
  
  return (
    <div id="teamStats" className='pb-20 text-center mt-28'>
      <h2 className='text-5xl font-bold mb-10'>Stats</h2>
    <Dropdown className='mb-20'>
      <DropdownTrigger>
        <Button 
          className="capitalize p-6 text-xl mb-20"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label='Choose football week'
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        className='text-black'
      >
        <DropdownItem key="Offense">Offense</DropdownItem>
        <DropdownItem key="Defense">Defense</DropdownItem>
      </DropdownMenu>
    </Dropdown>
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