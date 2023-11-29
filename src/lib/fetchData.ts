import { oneMatch, standings, weeklyMatches } from "@/weeklyMatches";
import axios from "axios";



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
  const response : standings = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/Standings/2023?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
  return response.data
}

export const fetchOneTeamStats = async ({team} : { team: string } ) => {
  const response = await axios.get(`/api/watchlist`);
  const data =  response.data;
  const specificTeam = data.filter((singleTeam : any ) => singleTeam.Name === team);
  console.log(specificTeam);
  return specificTeam;
};


export const fetchCurrentWeek = async () => {
  const response = await axios.get(`https://api.sportsdata.io/v3/nfl/scores/json/CurrentWeek?key=${process.env.NEXT_PUBLIC_FOOTBALL_SECRET}`);
  return response.data;
}