export type weeklyMatches = {
    data: oneMatch[]
}

export type oneMatch = {
    AwayTeam: string,
    HomeTeam:string,
    Week: number,  
    Date:string, 
    GameKey: string
}

export type standings = {
    data:standing[]
}

export type standing = {
    Team: string,
    TeamName: string
    Wins: number,
    Losses: number, 
    Conference:string,
    Division: string
    Name:string,
}

// /GET for all posts
export type allTeamStats = {
    data:teamStats[]
}

export type teamStats = {
    Team:string,
    TeamName:string,
    Touchdowns:number,
    RushingYards:number,
    PassingYards:number, 
    Takeaways:number,
    Sacks:number,
    OpponentPassingInterceptions:number,
}


//converting it to what I like
export type offense = {
    Touchdowns:number,
    RushingYards:number,
    PassingYards:number, 
    [key: string]: any;
}

export type defense = {
    Takeaways:number,
    Sacks:number,
    OpponentPassingInterceptions:number,
    [key: string]: any;
}

export type finalTeamStats = {
    Team: string,
    TeamName: string
    Offense: offense,
    Defense: defense
}


export type Player = {
    PlayerID: number,
    Team: string,
    Number: number,
    FirstName: string,
    LastName: string,
    Position: string,
    Status: string,
    Height: string,
    Weight: number,
    College: string,
    Experience: number,
    FantasyPosition: string,
    Active: boolean,
    PositionCategory: string,
    Name: string,
    Age: number,
    ExperienceString: string,
    BirthDateString: string,
    PhotoUrl: string,
    UpcomingGameOpponent: string,
    CurrentTeam:string,
    HeightFeet: number,
    HeightInches: number,
    TeamID: number,

}