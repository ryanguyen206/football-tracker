import { TeamBasicInfo } from "@/interfaces"

export const dummyTeam : TeamBasicInfo = {
    Key: 'NE',
    TeamID: 21,
    PlayerID: 21,
    City: 'New England',
    Name: 'Patriots',
    Conference: 'AFC',
    Division: 'East',
    FullName: 'New England Patriots',
    StadiumID: 4,
    ByeWeek: 11,
    GlobalTeamID: 21,
    HeadCoach: 'Bill Belichick',
    PrimaryColor: '002244',
    SecondaryColor: 'C60C30',
    TertiaryColor: 'B0B7BC',
    QuaternaryColor: 'FFFFFF',
    WikipediaLogoURL: 'https://upload.wikimedia.org/wikipedia/en/b/b9/New_England_Patriots_logo.svg',
    WikipediaWordMarkURL: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/New_England_Patriots_wordmark.svg',
    OffensiveCoordinator: "Bill O'Brien",
    DefensiveCoordinator: null,
    SpecialTeamsCoach: 'Cameron Achord',

}


export const dummyPlayer =
{
  PlayerID: 17923,
  Team: 'NE',
  Number: 15,
  FirstName: 'Ezekiel',
  LastName: 'Elliott',
  Position: 'RB',
  Status: 'Active',
  Height: `6'0"`,
  Weight: 225,
  BirthDate: '1995-07-22T00:00:00',
  College: 'Ohio State',
  Experience: 6,
  FantasyPosition: 'RB',
  Active: true,
  PositionCategory: 'OFF',
  Name: 'Ezekiel Elliott',
  Age: 28,
  ExperienceString: '8th Season',
  BirthDateString: 'July 22, 1995',
  PhotoUrl: 'https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/17923.png',
  ByeWeek: 11,
  UpcomingGameOpponent: 'DEN',
  UpcomingGameWeek: 16,
  ShortName: 'E.Elliott',
  AverageDraftPosition: 103.1,
  DepthPositionCategory: 'Scrambled',
  DepthPosition: 'Scrambled',
  DepthOrder: 1,
  DepthDisplayOrder: 1,
  CurrentTeam: 'NE',
  CollegeDraftTeam: 'DAL',
  CollegeDraftYear: 2016,
  CollegeDraftRound: 1,
  CollegeDraftPick: 3,
  IsUndraftedFreeAgent: false,
  HeightFeet: 6,
  HeightInches: 0,
  UpcomingOpponentRank: 27,
  UpcomingOpponentPositionRank: 27,
  CurrentStatus: 'Scrambled',
  UpcomingSalary: 5023,
  FantasyAlarmPlayerID: 303931,
  SportRadarPlayerID: 'bef8b2b4-78bd-4a4d-bb5d-6b55ada9ef6a',
  RotoworldPlayerID: 11265,
  RotoWirePlayerID: 10736,
  StatsPlayerID: 728338,
  SportsDirectPlayerID: 74287,
  XmlTeamPlayerID: null,
  FanDuelPlayerID: 38791,
  DraftKingsPlayerID: 728338,
  YahooPlayerID: 29238,
  InjuryStatus: 'Scrambled',
  InjuryBodyPart: 'Scrambled',
  InjuryStartDate: null,
  InjuryNotes: 'Scrambled',
  FanDuelName: 'Ezekiel Elliott',
  DraftKingsName: 'Ezekiel Elliott',
  YahooName: 'Ezekiel Elliott',
  FantasyPositionDepthOrder: 1,
  InjuryPractice: 'Scrambled',
  InjuryPracticeDescription: 'Scrambled',
  DeclaredInactive: false,
  UpcomingFanDuelSalary: 5629,
  UpcomingDraftKingsSalary: 5023,
  UpcomingYahooSalary: 17,
  TeamID: 21,
  GlobalTeamID: 21,
  FantasyDraftPlayerID: 728338,
  FantasyDraftName: 'Ezekiel Elliott',
  UsaTodayPlayerID: 8314289,
  UsaTodayHeadshotUrl: 'http://cdn.usatsimg.com/api/download/?imageID=21321756',
  UsaTodayHeadshotNoBackgroundUrl: 'http://cdn.usatsimg.com/api/download/?imageID=21321754',
  UsaTodayHeadshotUpdated: '2023-09-01T14:53:21',
  UsaTodayHeadshotNoBackgroundUpdated: '2023-09-01T14:53:18',
  PlayerSeason: null,
  LatestNews: []
}


export const specificStats = {
    PlayerID: 17923,
    SeasonType: 1,
    Season: 2023,
    Team: 'NE',
    Number: 15,
    Name: 'E.Elliott',
    Position: 'RB',
    PositionCategory: 'OFF',
    Activated: 14,
    Played: 14,
    Started: 2,
    PassingAttempts: 0,
    PassingCompletions: 0,
    PassingYards: 0,
    PassingCompletionPercentage: 0,
    PassingYardsPerAttempt: 0,
    PassingYardsPerCompletion: 0,
    PassingTouchdowns: 0,
    PassingInterceptions: 0,
    PassingRating: 0,
    PassingLong: 0,
    PassingSacks: 0,
    PassingSackYards: 0,
    RushingAttempts: 90,
    RushingYards: 324.2,
    RushingYardsPerAttempt: 1.4,
    RushingTouchdowns: 0.8,
    RushingLong: 10.6,
    ReceivingTargets: 27.9,
    Receptions: 22.4,
    ReceivingYards: 153.4,
    ReceivingYardsPerReception: 2.7,
    ReceivingTouchdowns: 0.4,
    ReceivingLong: 14.3,
    Fumbles: 0.8,
    FumblesLost: 0.4,
    PuntReturns: 0,
    PuntReturnYards: 0,
    PuntReturnYardsPerAttempt: 0,
    PuntReturnTouchdowns: 0,
    PuntReturnLong: 0,
    KickReturns: 0,
    KickReturnYards: 0,
    KickReturnYardsPerAttempt: 0,
    KickReturnTouchdowns: 0,
    KickReturnLong: 0,
    SoloTackles: 0.4,
    AssistedTackles: 0,
    TacklesForLoss: 0,
    Sacks: 0,
    SackYards: 0,
    QuarterbackHits: 0,
    PassesDefended: 0,
    FumblesForced: 0,
    FumblesRecovered: 0,
    FumbleReturnYards: 0,
    FumbleReturnTouchdowns: 0,
    Interceptions: 0,
    InterceptionReturnYards: 0,
    InterceptionReturnTouchdowns: 0,
    BlockedKicks: 0,
    SpecialTeamsSoloTackles: 0,
    SpecialTeamsAssistedTackles: 0,
    MiscSoloTackles: 0,
    MiscAssistedTackles: 0,
    Punts: 0,
    PuntYards: 0,
    PuntAverage: 0,
    FieldGoalsAttempted: 0,
    FieldGoalsMade: 0,
    FieldGoalsLongestMade: 0,
    ExtraPointsMade: 0,
    TwoPointConversionPasses: 0,
    TwoPointConversionRuns: 0,
    TwoPointConversionReceptions: 0,
    FantasyPoints: 57.7,
    FantasyPointsPPR: 80,
    ReceptionPercentage: 49.7,
    ReceivingYardsPerTarget: 2.1,
    Tackles: 0.4,
    OffensiveTouchdowns: 1.2,
    DefensiveTouchdowns: 0,
    SpecialTeamsTouchdowns: 0,
    Touchdowns: 1.2,
    FantasyPosition: 'RB',
    FieldGoalPercentage: 0,
    PlayerSeasonID: 990984681,
    FumblesOwnRecoveries: 0,
    FumblesOutOfBounds: 0,
    KickReturnFairCatches: 0,
    PuntReturnFairCatches: 0,
    PuntTouchbacks: 0,
    PuntInside20: 0,
    PuntNetAverage: 0,
    ExtraPointsAttempted: 0,
    BlockedKickReturnTouchdowns: 0,
    FieldGoalReturnTouchdowns: 0,
    Safeties: 0,
    FieldGoalsHadBlocked: 0,
    PuntsHadBlocked: 0,
    ExtraPointsHadBlocked: 0,
    PuntLong: 0,
    BlockedKickReturnYards: 0,
    FieldGoalReturnYards: 0,
    PuntNetYards: 0,
    SpecialTeamsFumblesForced: 0,
    SpecialTeamsFumblesRecovered: 0,
    MiscFumblesForced: 0,
    MiscFumblesRecovered: 0,
    ShortName: 'E.Elliott',
    SafetiesAllowed: 0,
    Temperature: 36,
    Humidity: 44,
    WindSpeed: 3,
    OffensiveSnapsPlayed: 245,
    DefensiveSnapsPlayed: 0,
    SpecialTeamsSnapsPlayed: 0,
    OffensiveTeamSnaps: 548,
    DefensiveTeamSnaps: 581,
    SpecialTeamsTeamSnaps: 229,
    AuctionValue: null,
    AuctionValuePPR: null,
    TwoPointConversionReturns: 0,
    FantasyPointsFanDuel: 68.9,
    FieldGoalsMade0to19: 0,
    FieldGoalsMade20to29: 0,
    FieldGoalsMade30to39: 0,
    FieldGoalsMade40to49: 0,
    FieldGoalsMade50Plus: 0,
    FantasyPointsDraftKings: 80.7,
    FantasyPointsYahoo: 68.9,
    AverageDraftPosition: null,
    AverageDraftPositionPPR: null,
    TeamID: 21,
    GlobalTeamID: 21,
    FantasyPointsFantasyDraft: 80.7,
    AverageDraftPositionRookie: null,
    AverageDraftPositionDynasty: null,
    AverageDraftPosition2QB: null,
    OffensiveFumbleRecoveryTouchdowns: null,
}