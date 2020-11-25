import ChampionMastery from 'src/interfaces/leagueOfLegends/ChampionMastery.interface';
import Matches from 'src/interfaces/leagueOfLegends/Matches.interface';
import MatchStats from 'src/interfaces/leagueOfLegends/MatchStats.interface';
import Summoner from '../interfaces/leagueOfLegends/Summoner.interface';
const fetch = require('node-fetch');

class LeagueOfLegends {

  public token: string;
  public servers: Array<string> = new Array<string>();

  constructor(token: string) {
    this.token = token;
    this.servers = [
      'euw1',
      'eun1',
      'br1',
      'jp1',
      'kr',
      'la1',
      'la2',
      'na1',
      'oc1',
      'ru',
      'tr1'
    ];
  };

  /**
   * 
   * @param username username of the desired player.
   */
  async getPlayer(username: string): Promise<Summoner | any> {
    if(username.trim() == '') return new Error('`encryptedSummonerId` cannot be empty or null!');
    for (let i: number = 0; i < this.servers.length; i++) {
      try {
        // Tries to fetch data from endpoint.
        let data = await fetch(`https://${this.servers[i]}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${this.token}`, { method: 'GET' });
        // Tries to parse it into json.
        data = await data.json();
        // If request was successful then return the data.
        if (data.id != null) {
          return data as Summoner;
        };
      } catch (error) {
        new Error('Something went wrong fetching data from "/v4/summoners/".');
      };
    };
  };

  /**
   * 
   * @param accountId 
   * @param startIndex 
   * @param endIndex 
   */
  async getPlayerLastMatches(accountId: string, startIndex: number = 0, endIndex: number = 1): Promise<Matches | any> {
    if(accountId.trim() == '') return new Error('`accountId` cannot be empty or null!');
    // Try for each server
    for (let i: number = 0; i < this.servers.length; i++) {
      try {
        // Tries to fetch data from endpoint.
        let data = await fetch(`https://${this.servers[i]}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=${endIndex}&beginIndex=${startIndex}&api_key=${this.token}`);
        // Tries to parse data into json.
        data = await data.json();
        // If request was successful then return the data.
        if (data.matches != null) {
          return data as Matches;
        };
      } catch (error) {
        new Error('Something went wrong fetching data from "/v4/summoners/".');
      };
    };
  };

  /**
   * 
   * @param gameId 
   */
  async getMatchInfo(gameId: string): Promise<MatchStats | any> {
    if(gameId.trim() == '') return new Error('`gameId` cannot be empty or null!');
    for (let i: number = 0; i < this.servers.length; i++) {
      try {
        // Tries to fetch data from endpoint.
        let data = await fetch(`https://${this.servers[i]}.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${this.token}`);
        // Tries to parse data into json.
        data = await data.json();
        // If request was successful then return the data.
        if (data.gameId != null) {
          return data as MatchStats;
        };
      } catch (error) {
        new Error('Something went wrong fetching data from "/v4/summoners/".');
      };
    };
  };

  /**
   * 
   * @param encryptedSummonerId 
   */
  async getPlayerChampionsInfo(encryptedSummonerId: string ): Promise<ChampionMastery | any> {
    if(encryptedSummonerId.trim() == '') return new Error('`encryptedSummonerId` cannot be empty or null!');
    for (let i: number = 0; i < this.servers.length; i++) {
      try {
        // Tries to fetch data from endpoint.
        let data = await fetch(`https://${this.servers[i]}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}?api_key=${this.token}`);
        // Tries to parse data into json.
        data = await data.json();
        // If request was successful then return the data.
        if (!data.status) {
          return data as ChampionMastery;
        };
      } catch (error) {
        new Error('Something went wrong fetching data from "/v4/summoners/".');
      };
    };
  };
};

export { LeagueOfLegends };