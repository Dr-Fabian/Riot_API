import { RiotClientOptions } from "./interfaces/RiotClientOptions.interface";
import { LeagueOfLegends } from "./modules/LeagueOfLegends";

class RiotClient {

  public token: string;
  public leagueOfLegends: LeagueOfLegends;

  /**
   * 
   * @param options {RiotClientOptions}
   */
  constructor(options: RiotClientOptions) {
    this.token = options.token;
    this.leagueOfLegends = new LeagueOfLegends(this.token);
  }
}

export { RiotClient };