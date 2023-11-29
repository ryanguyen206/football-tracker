export const options = {
    headers: {
      'X-RapidAPI-Key': 'cbdec378c8mshfe41795a7bdc811p1ae758jsn9534bad29014',
      'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
};


export const getPSTTime = (timestamp: string) => {
  const utcDate = new Date(timestamp);
  const pstTime = utcDate.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  return pstTime;
};







