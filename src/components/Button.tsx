import React, {useMemo, useState, FC} from 'react'
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem, Button} from "@nextui-org/react";
import {Selection} from "@react-types/shared";
import TableStats from './Table/TableStats';

interface ButtonOffOrDefProps {
    selected: Selection
    setSelected: React.Dispatch<React.SetStateAction<Selection>>
    selectedValue: string
}

const ButtonOffOrDef: FC<ButtonOffOrDefProps> = ({selected, setSelected, selectedValue}) => {


  return (
    <div id="teamStats" className='pb-20 text-center'>
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
        className='text-black dark:text-white'
      >
        <DropdownItem key="Offense">Offense</DropdownItem>
        <DropdownItem key="Defense">Defense</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  )
}

export default ButtonOffOrDef