"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { defense, finalTeamStats, offense, teamStats } from '@/weeklyMatches'
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownSection,DropdownItem,Button
} from "@nextui-org/react";
import {Selection} from "@react-types/shared";
import TableStats from './TableStats';
import { dummyData } from '@/app/teamStats';


const TeamStats = () => {

    const [selected, setSelected] = useState<Selection>(new Set(["Offense"]));
    const selectedValue = useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected]);
    const [allTeams, setAllTeams] = useState<finalTeamStats[]>([]);

useEffect(() => {
  const transformedData = dummyData.data.map((team: any) => {
    const { Team, Touchdowns, PassingYards, RushingYards, Takeaways, Sacks, OpponentPassingInterceptions } = team;
    const offense: offense = {
      Touchdowns,
      PassingYards,
      RushingYards,
    };
    const defense: defense = {
      Takeaways,
      Sacks,
      OpponentPassingInterceptions,
    };

    return {
      Team,
      Offense: offense,
      Defense: defense,
    };
  });

  setAllTeams(transformedData);
}, []);

  return (
    <div className='pb-20 text-center mt-28'>
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
                dummyData={allTeams}
                which = "offense"
            /> :
            <TableStats 
                headers={['Team', 'Takeaways', 'Sacks', 'Interceptions']}
                dummyData={allTeams}
                which = "defense"
        /> 
        }
    </div>
  )
}

export default TeamStats