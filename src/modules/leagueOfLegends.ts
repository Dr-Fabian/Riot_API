import Summoner from "../interfaces/leagueOfLegends/Summoner.interface";
import Matches from "../interfaces/leagueOfLegends/Matches.interface";
import MatchStats from "../interfaces/leagueOfLegends/MatchStats.interface";
import ChampionMastery from "../interfaces/leagueOfLegends/ChampionMastery.interface";

const fetch = require('node-fetch');

module.exports = class {

    private token: string;

    constructor(token: string) {
        this.token = token;
    };
    /**
     * @param  {string} server - Riot servers (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
     * @param  {string} username - Username of the summoner
     * @returns Promise<Summoner>
     */
    async getPlayer(server: string, username: string): Promise<Summoner> {
        let result: Summoner | any;
        try {
            result = await fetch(`https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${this.token}`);
            result = await result.json();
        } catch (error) {
            console.error(error);
        }
        return result;
    }
    /**
     * @param  {string} server - Riot servers (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
     * @param  {string} accountId - Summoner's account id
     * @param  {number=0} beginIndex - Begin index of the request (default is 0)
     * @param  {number=1} endIndex - End index of the request (default is 1)
     * @returns Promise<Match[]>
     */
    async getPlayerLastMatches(server: string, accountId: string, beginIndex: number = 0, endIndex: number = 1): Promise<Matches> {
        let result = await fetch(`https://${server}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=${endIndex}&beginIndex=${beginIndex}&api_key=${this.token}`);
        result = await result.json();
        return result.matches as Matches;
    }
    /**
     * @param  {string} server - Riot servers (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
     * @param  {string} gameId - Game's account id
     * @returns Promise<MatchStats>
     */
    async getMatchInfo(server: string, gameId: string): Promise<MatchStats>{
        let result = await fetch(`https://${server}.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${this.token}`);
        result = await result.json();
        return result as MatchStats;
    };
    
    /**
     * @param  {string} server - Riot servers (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
     * @param  {string} encryptedSummonerId - Game's account id
     * @returns Promise<Mastery[]>
     */
    async getPlayerChampionsInfo(server: string, encryptedSummonerId: string): Promise<ChampionMastery>{
        let result = await fetch(`https://${server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}?api_key=${this.token}`);
        result = result.json();
        return result as ChampionMastery;
    }
}