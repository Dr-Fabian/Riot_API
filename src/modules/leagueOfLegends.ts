import Summoner from "../interfaces/leagueOfLegends/Summoner.interface";
import Matches from "../interfaces/leagueOfLegends/Matches.interface";

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
     * @param  {number=0} endIndex - End index of the request (default is 1)
     * @returns Promise<Match[]>
     */
    async getPlayerLastMatches(server: string, accountId: string, beginIndex: number = 0, endIndex: number = 1): Promise<Matches> {
        let matches = [];
        let result = await fetch(`https://${server}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=${endIndex}&beginIndex=${beginIndex}&api_key=${this.token}`);
        result = await result.json();
        return result as Matches;
    }
}