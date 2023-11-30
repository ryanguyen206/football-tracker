'use client'

import { useSession } from 'next-auth/react';
import Link from 'next/link'
import useFetchAllTeamsQuery from '@/hooks/useFetchAllTeamsQuery';
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
      <h1 className='font-bold text-3xl mt-20 mb-20'>Your Watchlist</h1>
      {watchlist?.length === 0 ? (
        <p className='text-3xl'>No teams on watchlist. Add some!</p>
      ) : (
        <div className='bg-squarebg md:w-3/4 p-6 px-10 m-auto'>
          {watchlist?.map((singleTeam: any, index: number) => [
            <div key={singleTeam.Team} className='flex flex-col md:flex-row justify-between items-center my-10'>
              <p className='text-2xl mb-6'>{singleTeam}</p>
              <div className='flex gap-3 md:flex-col'>
                <button className='bg-secondary p-4 rounded-md'>
                  <Link href={`../team/${singleTeam}`}>Go to Team</Link>
                </button>
                <button
                  className='bg-primary p-4 rounded-sm'
                  onClick={() => removeTeamMutation.mutate({ team: singleTeam, userId: session?.user.id || '' })}
                >
                  Delete Team
                </button>
              </div>
            </div>,
            <hr key={`hr-${singleTeam.Team}`} className='border-t-2 border-gray-700'></hr>,
          ])}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
