import React, {useState} from 'react'
import {Input} from "@nextui-org/react";
import { useQueryClient } from 'react-query';
import { finalTeamStats } from '@/weeklyMatches';
import useFetchAllTeamsQuery from '@/hooks/useFetchAllTeamsQuery';

const Searchbar = () => {

    const {allTeams} = useFetchAllTeamsQuery()
    const [query, setQuery] = useState('')
    const [filteredItems, setFilteredItems] = useState<finalTeamStats[] | undefined>([])

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
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
                onChange= {(e) => handleChange(e)}
                className="w-full"
            />
        }
        {
            filteredItems && filteredItems.length > 0 &&   
            <div className='absolute top-14 w-full border rounded-xl flex flex-col shadow-sm'>
                {filteredItems?.map((team) => (
                <div className='p-4 font-semibold hover:font-extrabold hover:cursor-pointer hover:bg-slate-200 ' key={team.Team}>
                    <p className=''>{team.Team}</p>
                </div>
                ))}
          </div>
        }
    
  </div>
  )
}

export default Searchbar