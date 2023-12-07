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
    return data;
  };


export const fetchStandings = async () => {
    const response : standings = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
    return response.data
}

export const fetchAllTeamStats = async () => {
  const response = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/2023?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
  return response.data
}

export const fetchOneTeamStats = async ({id} : { id: string } ) => {
  const allTeamStats = await fetchAllTeamStats()
  const specificTeam = allTeamStats.filter((singleTeam : any ) => singleTeam.Team === id);
  return specificTeam;
};


export const fetchCurrentWeek = async () => {
  const response = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
  return response.data;
}

export const getPlayersByTeam = async (teamName: string) => {
  const response = await axios.get(` https://api.sportsdata.io/v3/nfl/scores/json/PlayersBasic/${teamName}?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
  const filterByOffAndDef = response.data.filter((singlePlayer : Player) =>  singlePlayer.Status === 'Active')
  return filterByOffAndDef
}