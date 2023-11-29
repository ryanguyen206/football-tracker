export const getPSTTime = (timestamp: string) => {
  const utcDate = new Date(timestamp);
  const pstTime = utcDate.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  return pstTime;
};







