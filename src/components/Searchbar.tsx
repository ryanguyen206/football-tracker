import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import { finalTeamStats } from '@/interfaces';
import useFetchAllTeamsQuery from '@/hooks/useFetchAllTeamsStatsQuery';
import Link from 'next/link';
import useClickOutside from '@/hooks/useClickOutside';

const Searchbar = () => {
  const { allTeams } = useFetchAllTeamsQuery();
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<finalTeamStats[] | undefined>([]);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);

  const searchbarRef = useClickOutside(() => {
    setIsSearchbarOpen(false);
    setFilteredItems([]);
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    setQuery(userInput);
    if (userInput.length === 0) {
      setFilteredItems([]);
      return;
    }
    const tempFilteredItems = allTeams?.filter((singleTeam: finalTeamStats) =>
      singleTeam.Team.startsWith(userInput.toUpperCase())
    );
    setFilteredItems(tempFilteredItems);
  };

  return (
    <div className="relative" ref={searchbarRef}>
      {allTeams && allTeams.length > 0 && (
        <div className="flex items-center">
          <Input
            type="email"
            placeholder="Search Team"
            value={query}
            onChange={(e) => handleInputChange(e)}
            className="w-full"
            onFocus={() => setIsSearchbarOpen(true)}
          />
        </div>
      )}

      {isSearchbarOpen && filteredItems && filteredItems.length > 0 && (
        <div className="absolute top-14 w-full border dark:border-slate-600 rounded-xl flex flex-col shadow-lg bg-white dark:bg-slate-800 z-10">
          {filteredItems?.map((team) => (
            <Link href={`/team/${team.Team}`} key={team.TeamName}>
              <div className="p-4 hover:cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700">
                <p className="font-semibold">{team.Team}</p>
                <p className="font-medium">{team.TeamName}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
