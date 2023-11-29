'use client'
import { useMutation, useQuery, useQueryClient} from 'react-query';
import {fetchWatchlist, removeTeam } from '@/lib/watchlist/helper';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link'




const Watchlist = () => {
  const queryClient = useQueryClient();

  const {data : session} = useSession();

 


  const { data: watchlist } = useQuery({
    queryKey: ['watchlist'],
    queryFn: () => fetchWatchlist(),
    onSuccess: (data) => {
      console.log(data)
    }
  });

  const removeTeamMutation = useMutation({
    mutationFn: (variables: { team: string; userId: string }) => removeTeam(variables),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['watchlist'] })
    }
  })

  return (
    <div className='h-screen text-center'>
      <h1 className='font-bold text-3xl mt-20 mb-20'>Your Watchlist</h1>
      {watchlist?.length == 0 ? <p className='text-3xl'>No teams on watchlist. Add some!</p> : (
               <div className='bg-squarebg md:w-3/4 p-6 px-10 m-auto'>
               {watchlist?.map((singleTeam: any, index: number) => (
                   <>
                     <div key={index} className='flex flex-col md:flex-row justify-between items-center my-10'>
                       <p className='text-2xl mb-6'>{singleTeam}</p>
                       <div className='flex gap-3 md:flex-col'>
                 
                        <button className='bg-secondary p-4 rounded-md'>
                          <Link href={`../team/${singleTeam}`}>
                            Go to Team
                          </Link>
                        </button>
                  
                         <button
                           className='bg-primary p-4 rounded-sm'
                           onClick={() => removeTeamMutation.mutate({ team: singleTeam, userId: session?.user.id || '' })}
                         >
                           Delete Team
                         </button>
                       </div>
                     </div>
                     <hr className='border-t-2 border-gray-700'></hr>
                   </>
                 ))}
       
               </div>
      )}
   
    
    </div>
  );
};

export default Watchlist;
