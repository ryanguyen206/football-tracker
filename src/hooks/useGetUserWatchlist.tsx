import { fetchWatchlist } from '@/helperFn/watchlist/helper';
import React from 'react'
import { useQuery } from 'react-query';

const useGetUserWatchlist = () => {

    const { data: watchlist, isLoading } = useQuery({
        queryKey: ['watchlist'],
        queryFn: () => fetchWatchlist(),
      });

      return {watchlist, isLoading}

}

export default useGetUserWatchlist