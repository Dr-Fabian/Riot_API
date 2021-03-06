import Ban from "./Ban.interface";

export default interface Team{
    teamId: number,
    win: string,
    firstBlood: boolean,
    firstTower: boolean,
    firstInhibitor: boolean,
    firstBaron: boolean,
    firstDragon: boolean,
    firstRiftHerald: boolean,
    towerKills: number,
    inhibitorKills: number,
    baronKills: number,
    dragonKills: number,
    vilemawKills: number,
    riftHeraldKills: number,
    dominionVictoryScore: number,
    bans: Array<Ban>
}