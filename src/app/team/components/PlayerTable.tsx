import React, { FC } from 'react';
import { Player } from '@/interfaces';
import Image from 'next/image';

interface PlayerTableProps {
  headers: string[];
  players: Player[];
}

const PlayerTable: FC<PlayerTableProps> = ({ headers, players }) => {
  return (
    <div className='border-spacing'>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border px-4 py-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index} className='text-center'>
              <td className='px-4 py-2 border-b'>
                <div className='flex justify-center'>
                  <Image src={player.PhotoUrl} height={75} width={75} alt={`${player.Name} headshot`} />
                </div>
              </td>
              <td className='px-4 py-2 border-b'>{player.Name}</td>
              <td className='px-4 py-2 border-b'>{player.Position}</td>
              <td className='px-4 py-2 border-b'>{player.Experience}</td>
              <td className='px-4 py-2 border-b'>{player.Weight}</td>
              <td className='px-4 py-2 border-b'>{player.Height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
