"use client"
import React, {useEffect, useMemo, useState } from 'react'
import WeekMatch from './OneMatch'
import {Selection} from "@react-types/shared";
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button} from "@nextui-org/react";
import { dummyData } from '@/app/matches'
import { useQuery } from 'react-query';
import { fetchWeeklyMatches, fetchStandings, fetchCurrentWeek } from '@/helperFn/helper';
import { oneMatch } from '@/weeklyMatches';


const Weekly = () => {
  const [matches, setMatches] = useState<oneMatch[] | null>()
  const [selected, setSelected] = useState<Selection>(new Set([]));
  const selectedValue = useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected],
  );

  const [weeks, setWeeks] = useState<number[]>([])

  //LOCAL ENV
  // useEffect(() => {
  //   const getWeeklyMatches = async () => {
  //     try {
  //       const currentWeeklyMatches = dummyData.data.filter(match => parseInt(selectedValue.slice(5)) === match.Week);
  //       setMatches(currentWeeklyMatches)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getWeeklyMatches();
  // }, [selectedValue])

  //DEV-PROD ENV

  const {data : allWeeklyMatches} = useQuery({
    queryKey:['weeklyMatches'], 
    queryFn: () => fetchWeeklyMatches(),
  })

  const weeklyMatches = useMemo(() => {
    if (!allWeeklyMatches) return [];
    return allWeeklyMatches.filter((match: oneMatch) => match.Week === parseInt(selectedValue.slice(5)));
  }, [allWeeklyMatches, selectedValue]);



  const {data: standings} = useQuery({
    queryKey:['standings'],
    queryFn: () => fetchStandings(),
  })

  const {data} = useQuery({
    queryKey:['currentWeek'],
    queryFn: () => fetchCurrentWeek(),
    onSuccess: (data  ) => {
        const temp = [];
        for(let i=0; i<4; i++)
        {
          temp.push(data + i);
        }
        setWeeks(temp);
        if (typeof data === 'number') {
          setSelected(new Set([`Week ${data}`]));
        }
    }
  })

  return (
    <div className="pb-20 text-center" data-aos="fade-up" data-aos-once="true">
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
        {weeklyMatches?.map((oneMatch, index) => (
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


