'use client'
import {finalTeamStats} from '@/weeklyMatches'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import useAddOrRemoveTeamQuery from '@/hooks/useAddOrRemoveTeamQuery'
import useGetUserWatchlist from '@/hooks/useGetUserWatchlist'
import useFetchAllTeamsQuery from '@/hooks/useFetchAllTeamsQuery'

type TableStatsProps = {
    headers:string[]
    which: string
}



const TableStats : FC<TableStatsProps> = ({which, headers}) => {
    const [sortAscending, setSortAscending] = useState(true);
    const {data : session} = useSession();
    const {removeTeamMutation, addTeamMutation} = useAddOrRemoveTeamQuery();
    const {watchlist, isLoading} = useGetUserWatchlist()

    const headerAliases: { [key: string]: string } = {
        Interceptions: 'OpponentPassingInterceptions',
        'Passing':'PassingYards',
        'Rushing':'RushingYards'
    };
    
    const {allTeams, setAllTeams} = useFetchAllTeamsQuery()


    const handleSortByAscOrDesc = (header: string) => {
      const sortedData = [...allTeams];
      const actualHeader = headerAliases[header] || header;
    
      if (header.toLowerCase() === 'team') {
        sortedData.sort((a, b) => {
          if (sortAscending) {
            return a.Team.localeCompare(b.Team);
          } else {
            return b.Team.localeCompare(a.Team);
          }
        });
      } else {
        // Sorting by Offense or Defense based on the header
        if (which === 'offense') {
          sortedData.sort((a, b) => {
            if (sortAscending) {
              return a.Offense[actualHeader] - b.Offense[actualHeader];
            } else {
              return b.Offense[actualHeader] - a.Offense[actualHeader];
            }
          });
        } else {
          sortedData.sort((a, b) => {
            if (sortAscending) {
              return a.Defense[actualHeader] - b.Defense[actualHeader];
            } else {
              return b.Defense[actualHeader] - a.Defense[actualHeader];
            }
          });
        }
      }
    
      setAllTeams(sortedData);
      setSortAscending(!sortAscending);
    };
    

      
    return (
    <div data-aos='fade-up'>
           <table className="table-auto w-full text-center">
            <thead className="border-2 bg-squarebg">
                <tr className=''>
                    {headers.map(header => (
                        <th className='text-md py-4 hover:cursor-pointer md:text-2xl font-bold' onClick={() => handleSortByAscOrDesc(header)} key={header}>
                            {header}
                        </th>
                    ))}
                    {session &&     
                    <th className='text-md py-4 hover:cursor-pointer md:text-2xl font-bold'>
                      Add Team
                    </th>}
                  
                </tr>       
            </thead>
            <tbody className='border w-full '>
                {allTeams?.map((oneTeam : finalTeamStats) => (
                    <tr className="border-b bg-squarebg" key={oneTeam.Team}>
                        <td className='text-md lg:text-2xl'> <Link href={`/team/${oneTeam.Team}`}>{oneTeam.Team}</Link></td>
                        {which === 'offense' ?
                             Object.entries(oneTeam.Offense).map(([stat,value], index) => (
                                <td className='py-4 text-md lg:text-2xl'key={stat}>{value}</td>)) : 
                            Object.entries(oneTeam.Defense).map(([stat,value]) => (
                                <td  className='py-4 text-md lg:text-2xl' key={stat}>{value}</td>))
                        }
                        {session &&   <td>
                          {watchlist?.includes(oneTeam.Team) ? <Button className='mt-2 bg-secondary' onClick={() => removeTeamMutation.mutate({team:oneTeam.Team, userId:session?.user.id})}>Remove</Button>: <Button className='mt-2 bg-primary' onClick={() => addTeamMutation.mutate({team: oneTeam.Team, userId:session?.user.id})}>Add</Button>}
                        </td> }
                    </tr>
                ))}
            </tbody>
            </table>
    </div>
  )
}
export default TableStats