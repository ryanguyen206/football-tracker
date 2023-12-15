import React, { FC } from 'react';
import { Player } from '@/interfaces';
import Image from 'next/image';
import { getPlayersByTeam } from '@/helperFn/helper';



const PlayerTable = async ({teamName} : {teamName: string}) => {

  const headers : string[] = ['Headshot', 'Player','Pos', 'Exp', 'Wt', 'Ht']
  const players =  await getPlayersByTeam(teamName)

  return (
    <div className=''>
      <h3 className='text-5xl font-bold text-center mb-10'>Active Roster</h3>
      <table className="w-full text-center m-auto border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th>Headshot</th>
            <th>Player</th>
            <th>Pos</th>
            <th>Exp</th>
            <th className='hidden md:table-cell'>Wt</th>
            <th className='hidden md:table-cell'>Ht</th>      
       </tr>
        </thead>
        <tbody>
          {players?.map((player : Player, index: number) => (
            <tr key={index} className='text-center'>
              <td className='px-4 py-2 border-b'>
                <div className='flex justify-center'>
                  <Image src={player.PhotoUrl} height={75} width={75} alt={`${player.Name} headshot`} />
                </div>
              </td>
              <td className='px-4 py-2 border-b'>{player.Name}</td>
              <td className='px-4 py-2 border-b'>{player.Position}</td>
              <td className='px-4 py-2 border-b'>{player.Experience}</td>
              <td className='hidden px-4 py-2 border-b md:table-cell'>{player.Weight}</td>
              <td className='hidden px-4 py-2 border-b md:table-cell'>{player.Height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
