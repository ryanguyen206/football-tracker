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

export type PlayerGameLogs = {
GameKey: number
PlayerID: number,
Season: number,
GameDate: string,
Week: number,
Team: string,
Opponent: string,
HomeOrAway: string,
Number: number,
Name: string,
Position: string,
PositionCategory: string,
PassingAttempts: number,
PassingCompletions: number,
PassingYards: number,
PassingCompletionPercentage: number,
PassingYardsPerAttempt: number,
PassingTouchdowns: number,
PassingInterceptions: number,
PassingRating: number,
RushingAttempts: number,
RushingYards: number,
RushingYardsPerAttempt: number,
RushingTouchdowns: number,
Receptions: number,
ReceivingYards: number,
ReceivingYardsPerReception: number,
ReceivingTouchdowns: number,
ReceivingLong: number,
Fumbles: number,
FumblesLost: number,
PuntReturns: number,
PuntReturnYards: number,
PuntReturnYardsPerAttempt: number,
PuntReturnTouchdowns: number,
PuntReturnLong: number,
KickReturns:number,
KickReturnYards: number,
KickReturnYardsPerAttempt: number,
KickReturnTouchdowns: number,
KickReturnLong: number,
SoloTackles: number,
AssistedTackles: number,
TacklesForLoss: number,
Sacks: number,
SackYards: number,
QuarterbackHits: number,
PassesDefended: number,
FumblesForced: number,
FumblesRecovered: number,
Interceptions: number,
BlockedKicks: number,
SpecialTeamsSoloTackles: number,
SpecialTeamsAssistedTackles: number,
MiscSoloTackles: number,
MiscAssistedTackles: number,
Punts: number,
PuntYards: number,
PuntAverage: number,
FieldGoalsAttempted: number,
FieldGoalsMade: number,
FieldGoalsLongestMade: number,
ExtraPointsMade: number,
TwoPointConversionPasses: number,
TwoPointConversionRuns: number,
TwoPointConversionReceptions: number,
ReceivingYardsPerTarget: number,
Tackles: number,
OffensiveTouchdowns: number,
DefensiveTouchdowns: number,
SpecialTeamsTouchdowns: number,
Touchdowns: number,
FantasyPosition: string,
FieldGoalPercentage: number,
PuntTouchbacks: number,
PuntInside20: number,
PuntNetAverage: number,
PuntLong: number,
ShortName: string,
FieldGoalsMade0to19: number,
FieldGoalsMade20to29: number,
FieldGoalsMade30to39: number,
FieldGoalsMade40to49: number,
FieldGoalsMade50Plus: number,
}