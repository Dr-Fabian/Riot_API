import CreepsPerMinDeltas from "./CreepsPerMinDeltas.interface";
import XpPerMinDeltas from "./XpPerMinDeltas.interface";
import GoldPerMinDeltas from "./GoldPerMinDeltas.interface";
import CsDiffPerMinDeltas from "./CsDiffPerMinDeltas.interface";
import XpDiffPerMinDeltas from "./XpDiffPerMinDeltas.interface";
import DamageTakenPerMinDeltas from "./DamageTakenPerMinDeltas.interface";
import DamageTakenDiffPerMinDeltas from "./DamageTakenDiffPerMinDeltas.interface";

export default interface TimeLine{
    participantId: number,
    creepsPerMinDeltas: CreepsPerMinDeltas,
    xpPerMinDeltas: XpPerMinDeltas,
    goldPerMinDeltas: GoldPerMinDeltas,
    csDiffPerMinDeltas: CsDiffPerMinDeltas,
    xpDiffPerMinDeltas: XpDiffPerMinDeltas,
    damageTakenPerMinDeltas: DamageTakenPerMinDeltas,
    damageTakenDiffPerMinDeltas: DamageTakenDiffPerMinDeltas,
    role: string,
    lane: string
}