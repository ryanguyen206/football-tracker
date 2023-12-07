import React, {useState} from 'react'
import {Input} from "@nextui-org/react";
import { finalTeamStats } from '@/interfaces';
import useFetchAllTeamsQuery from '@/hooks/useFetchAllTeamsQuery';
import Link from 'next/link'

const Searchbar = () => {
    const {allTeams} = useFetchAllTeamsQuery()
    const [query, setQuery] = useState('')
    const [filteredItems, setFilteredItems] = useState<finalTeamStats[] | undefined>([])

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const userInput = e.target.value
        setQuery(userInput)
        if (userInput.length === 0) {
            setFilteredItems([]);
            return;
        }
        const tempFilteredItems = allTeams?.filter((singleTeam : finalTeamStats) => singleTeam.Team.startsWith(userInput.toUpperCase()))
        setFilteredItems(tempFilteredItems)
    }

  return (
    <div className="relative">
        {
            allTeams && allTeams.length > 0 &&       
            <Input 
                type="email" 
                placeholder="Search Team" 
                value={query}
                onChange= {(e) => handleInputChange(e)}
                className="w-full"
            />
        }
        {
            filteredItems && filteredItems.length > 0 &&   
            <div className='absolute top-14 w-full border rounded-xl flex flex-col shadow-sm'>
                {filteredItems?.map((team) => (
                    <Link href={`/team/${team.Team}`} onClick={() => setFilteredItems([])}>
                        <div  key={team.TeamName} className='p-4 hover:cursor-pointer hover:bg-slate-200 '>
                            <p className='font-semibold'>{team.Team}</p>
                            <p className='font-medium'>{team.TeamName}</p>
                        </div>
                    </Link>
                ))}
          </div>
        }
    
  </div>
  )
}

export default Searchbar