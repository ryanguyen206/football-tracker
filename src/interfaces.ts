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

export type TeamBasicInfo = {
Key: string,
TeamID: number,
PlayerID: number,
City: string,
Name: string,
Conference: string,
Division: string,
FullName: string,
StadiumID: number,
ByeWeek: number,
GlobalTeamID: number,
HeadCoach: string,
PrimaryColor: string,
SecondaryColor: string,
TertiaryColor: string,
QuaternaryColor: string,
WikipediaLogoURL: string,
WikipediaWordMarkURL: string,
OffensiveCoordinator: string,
DefensiveCoordinator: string | null,
SpecialTeamsCoach: string
}

export type specificPlayerStats = {
    PlayerID: number,
    Team: string,
    Number: number,
    PositionCategory: string,
    PassingAttempts: number,
    PassingCompletions: number,
    PassingYards:number,
    PassingTouchdowns:number,
    RushingYards:number,
    RushingTouchdowns: number, 
}