import React, { FC } from 'react';
import { Player } from '@/interfaces';
import Image from 'next/image';
import { getPlayersByTeam } from '@/helperFn/helper';
import Link from 'next/link';



const PlayerTable = async ({teamName} : {teamName: string}) => {


  const players =  await getPlayersByTeam(teamName)

  return (
    <div className=''>
      <h3 className='text-5xl font-bold text-center mb-10 dark:text-white'>Active Roster</h3>
      <table className="w-full text-center m-auto border border-gray-300 dark:border-slate-600">
        <thead className=" dark:bg-slate-900 border-b dark:text-slate-400 font-semibold text-xl  dark:border-slate-600 dark:border-b-2">
          <tr className='dark:text-slate-400' >
            <th className='py-8'>Headshot</th>
            <th className=''>Player</th>
            <th className=''>Pos</th>
            <th className=''>Exp</th>
            <th  className='hidden md:table-cell'>Wt</th>
            <th className='hidden md:table-cell'>Ht</th>      
       </tr>
        </thead>
        <tbody className='dark:bg-slate-900'>
          {players?.map((player : Player) => (         
            <tr className='text-center hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700' key={player.PlayerID}>      
                <td className='px-4 py-2'>
                  <div className='flex justify-center hover:cursor-pointer'>
                    <Link href={`/team/${teamName}/${player.PlayerID}`}><Image src={player.PhotoUrl} height={75} width={75} alt={`${player.Name} headshot`} /></Link>
                  </div>
                </td>
                <td className='px-4 py-2  hover:cursor-pointer'><Link href={`/team/${teamName}/${player.PlayerID}`}>{player.Name}</Link></td>
                <td className='px-4 py-2 '>{player.Position}</td>
                <td className='px-4 py-2'>{player.Experience}</td>
                <td className='hidden px-4 py-2  md:table-cell'>{player.Weight}</td>
                <td className='hidden px-4 py-2  md:table-cell'>{player.Height}</td>                     
            </tr>   
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
