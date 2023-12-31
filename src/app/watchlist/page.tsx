'use client'

import { useSession } from 'next-auth/react';
import Link from 'next/link'
import useFetchAllTeamsQuery from '@/hooks/useFetchAllTeamsStatsQuery';
import useAddOrRemoveTeamQuery from '@/hooks/useAddOrRemoveTeamQuery'
import useGetUserWatchlist from '@/hooks/useGetUserWatchlist';




const Watchlist = () => {
  const {data : session} = useSession();
  const {watchlist, isLoading} = useGetUserWatchlist();
  const {removeTeamMutation} = useAddOrRemoveTeamQuery()

  if (isLoading)
  {
    return <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl'>Loading...</p>
  }

  return (
    <div className='h-screen text-center'>
      {watchlist?.length === 0 ? (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <p className='text-3xl dark:text-slate-400 mb-10'>No teams on watchlist. Add some on the homepage!</p>
        <div className='transition-transform duration-300 cursor-pointer hover:transform hover:-translate-y-1'> 
          <Link href="../" className='px-8 py-4 md:px-10 rounded-lg text-xl font-light  bg-secondary dark:text-black'>Go to Teams</Link>
        </div> 
        </div>
      ) : (
        <div className='bg-squarebg md:w-10/12 lg:w-7/12 p-6 px-10 m-auto mt-20 dark:bg-slate-700'>
          <h1 className='text-3xl dark:text-slate-400'>Your Watchlist</h1>
          {watchlist?.map((singleTeam: any, index: number) => [
            <div key={singleTeam.Team} className='flex flex-col md:flex-row justify-between items-center my-10'>
              <p className='text-2xl mb-6 dark:text-slate-400'>{singleTeam}</p>
              <div className='flex  gap-6 md:flex-col'>
                <Link href={`../team/${singleTeam}`} className='p-4 md:px-10 rounded-sm  bg-secondary dark:text-black'>View {singleTeam}</Link>
                <button
                  className='bg-primary p-4 rounded-sm'
                  onClick={() => removeTeamMutation.mutate({ team: singleTeam, userId: session?.user.id || '' })}
                >
                  Delete Team
                </button>
              </div>
            </div>,
            <hr key={`hr-${singleTeam}`} className='border-t-2 border-gray-700'></hr>,
          ])}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
