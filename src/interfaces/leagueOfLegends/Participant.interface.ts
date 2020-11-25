import ParticipantStats from "./ParticipantStats.interface";
import TimeLine from "./timeline/TimeLine.interface";

export default interface Participant{
    participantId: number,
    teamId: number,
    championId: number,
    spell1Id: number,
    spell2Id: number,
    stats: ParticipantStats,
    timeline: TimeLine
}