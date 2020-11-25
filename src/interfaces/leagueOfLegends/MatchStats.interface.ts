import Team from "./Team.interface";
import Participant from "./Participant.interface";
import ParticipantIdentities from "./ParticipantIdentities.interface";

export default interface MatchStats{
    gameId: number,
    platformId: string,
    gameCreation: number,
    gameDuration: number,
    queueId: number,
    mapId: number,
    seasonId: number,
    gameVersion: string,
    gameMode: string,
    gameType: string,
    teams: Array<Team>,
    participants: Array<Participant>,
    participantIdentities: Array<ParticipantIdentities>
}