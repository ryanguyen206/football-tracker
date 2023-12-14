import TeamHeader from '../components/TeamHeader';
import { fetchStandings, getAllTeams } from '@/helperFn/helper';
import TeamSchedule from '../components/TeamSchedule';
import React, { Suspense } from 'react';
import PlayerTable from '../components/PlayerTable';

const SingleTeam =  async ({ params }: { params: { id: string } }) => {

  const allTeams = await getAllTeams()
  const allStandings = await fetchStandings()

  return (
    <div className='mt-48 '>
        <TeamHeader 
          teamName={params.id}
          allTeams={allTeams}
          allStandings={allStandings} 
        />
        <TeamSchedule 
          teamName={params.id}        
          allTeams={allTeams}
          allStandings={allStandings} 
        />
        <PlayerTable teamName={params.id}/>
        
    </div> 
  );
  }
  
export default SingleTeam;



