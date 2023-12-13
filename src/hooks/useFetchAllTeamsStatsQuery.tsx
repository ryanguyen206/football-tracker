import { fetchAllTeamStats } from '@/helperFn/helper';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import {offense, defense, finalTeamStats} from '@/interfaces'

const useFetchAllTeamsStatsQuery = () => {


    const [allTeams, setAllTeams] = useState<finalTeamStats[]>([])


    const {} = useQuery({
        queryKey: ['allTeamStats'],
        queryFn: () => fetchAllTeamStats(),
        onSuccess: (data) => {
          const transformedData : finalTeamStats[] = data.map((team: any) => {
            const { Team, TeamName, Touchdowns, PassingYards, RushingYards, Takeaways, Sacks, OpponentPassingInterceptions } = team;
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
              TeamName,
              Offense: offense,
              Defense: defense,
            };
          });
          setAllTeams(transformedData);
        }
      })
  

  return {allTeams, setAllTeams}
}

export default useFetchAllTeamsStatsQuery