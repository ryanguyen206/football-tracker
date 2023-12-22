import { Player, oneMatch, standings, weeklyMatches } from "@/interfaces";
import axios from "axios";


export const getPSTTime = (timestamp: string) => {
  const utcDate = new Date(timestamp);
  const pstTime = utcDate.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  return pstTime;
};


export const fetchWeeklyMatches = async () => {
    const response : weeklyMatches = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/SchedulesBasic/2023?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
    const data = response.data.filter((element: oneMatch) => element.AwayTeam !== "BYE");
    console.log('a')
    return data;
    
  
  };


export const fetchUpcomingTeamMatches= async (teamName: string) => {
  const response : weeklyMatches = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/SchedulesBasic/2023?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
  const currentWeek = await fetchCurrentWeek()
  const data = response.data.filter((oneMatch) => oneMatch.Week >= currentWeek && (oneMatch.AwayTeam === teamName || oneMatch.HomeTeam === teamName) )
  console.log('b')
  return data
  };



export const fetchStandings = async () => {
    const response : standings = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
    console.log('c')
    return response.data
}

export const fetchAllTeamStats = async () => {
  const response = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/2023?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
  console.log('d')
  return response.data
}

export const fetchOneTeamStats = async ({id} : { id: string } ) => {
  const allTeamStats = await fetchAllTeamStats()
  const specificTeam = allTeamStats.filter((singleTeam : any ) => singleTeam.Team === id);
  console.log('e')
  return specificTeam;
};


export const fetchCurrentWeek = async () => {
  const response = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
  console.log('d')
  return response.data;
}

export const getPlayersByTeam = async (teamName: string) => {
  const response = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/Players/${teamName}?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
  const filterByOffAndDef = response.data.filter((singlePlayer : Player) =>  singlePlayer.Status === 'Active')
  console.log('asd')
  return filterByOffAndDef
}

export const getAllTeams = async () => {
  const response = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/TeamsBasic?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`)
  console.log('sdfdsf')
  return response.data
}

export const fetchPlayerStats = async (playerId: string) => {
  try {
    console.log('ay')
    const response = await axios.get(`https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStats/2023?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`)
    const specificPlayerStats = response.data.filter((player : any) => parseInt(playerId) === player.PlayerID )
    console.log(specificPlayerStats)
    return specificPlayerStats
  } catch (error) {
    console.log(error)
  }

}

export const fetchPlayerGameLogs = async (playerId:string) => {
  const response = await axios.get(`https://api.sportsdata.io/v3/nfl/stats/json/PlayerGameStatsBySeason/2023/${playerId}/all?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`)
  console.log(response)
  return response.data


}