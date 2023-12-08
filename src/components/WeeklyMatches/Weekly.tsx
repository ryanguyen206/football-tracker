"use client"
import React, {useEffect, useMemo, useState } from 'react'
import WeekMatch from './OneMatch'
import useGetCurrentWeek from '@/hooks/useGetCurrentWeek';
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button} from "@nextui-org/react";
import { oneMatch } from '@/interfaces';
import useGetTeamStandings from '@/hooks/useGetTeamStandings';
import useGetAllWeeklyMatches from '@/hooks/useGetAllWeeklyMatches';


const Weekly = () => {

  const {standings} = useGetTeamStandings();
  const {weeks, selected, selectedValue, setSelected} =  useGetCurrentWeek()
  const {allWeeklyMatches} = useGetAllWeeklyMatches() 

  const weeklyMatches = useMemo(() => {
    if (!allWeeklyMatches) return [];
    return allWeeklyMatches.filter((match: oneMatch) => match.Week === parseInt(selectedValue.slice(5)));
  }, [allWeeklyMatches, selectedValue]);




  return (
    <div id="weeklyMatches" className="pb-20 text-center" data-aos="fade-up" data-aos-once="true">
      <h1 className='text-5xl font-bold mb-10'>Matches</h1>
      <Dropdown>
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
        {weeks?.map((week : number)  => (
            <DropdownItem key={`Week ${week}`}>Week {week}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>

    <div className='flex flex-col gap-20 xl:grid xl:grid-cols-2'>
        {weeklyMatches?.map((oneMatch : oneMatch, index: number) => (
          <div key={index} className=''>
              <WeekMatch 
                match = {oneMatch} 
                week = {selectedValue}
                standings = {standings}
                homeTeam = {oneMatch.HomeTeam} 
                awayTeam = {oneMatch.AwayTeam}/>
          </div>))}
         
    </div>
    </div>
  )
}

export default Weekly


