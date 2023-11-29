import axios from "axios";

interface watchlist {
    data :{
     watchlist: {
         watchlist: String[]
     }
    }
  }  

export const removeTeam = async ( {team, userId} : { team: string; userId: string } ) => {
    const response = await axios.patch(`/api/watchlist`, { team, userId });
    return response.data
  };
  
  export const addTeam = async ({team, userId} : { team: string; userId: string } ) => {
    const response = await axios.post(`/api/watchlist`, { team, userId });
    return response.data
};


export const fetchWatchlist = async () => {
    const response : watchlist = await axios.get('/api/watchlist')
    return response.data.watchlist.watchlist
}