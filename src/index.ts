const leagueOfLegends = require('./modules/leagueOfLegends');

module.exports = class {

    protected token: string;
    leagueOfLegends: typeof leagueOfLegends;
    /**
     * @param  {string} token - Riot API key
     */
    constructor(token: string) {
        this.token = token;
        this.leagueOfLegends = new leagueOfLegends(this.token)
    }
}