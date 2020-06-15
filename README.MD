# @Dr-Fabian/Riot_API

@Dr-Fabian/Riot_API is a Javascript library written in TypeScript, with the purpose of facilitating the use of RIOT's api.

## Installation

Using NPM
```bash
npm install save @dr-fabian/riot_api
```
Using yarn
```bash
yarn add @dr-fabian/riot_api
```

## Usage

### Get Summoner Asynchronously
```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot("riot api token");

//server has to be one of these (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
await RiotAPI.leagueOfLegends.getPlayer(server, username); // Returns summoner account info
```
***
### Get Summoner's last matches Asynchronously
;
```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot("riot api token");

//server has to be one of these (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
await RiotAPI.leagueOfLegends.getPlayerLastMatches(
    server,
    accountId,
    beginIndex,
    endIndex
); // Returns summoner's last matches, the request begins at index 0 and ends at index 1 per default.
```
***
### Get Match info

```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot("riot api token");

//server has to be one of these (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
// Returns summoner's last matches, the request begins at index 0 and ends at index 1 per default.
const matches = await RiotAPI.leagueOfLegends.getPlayerLastMatches(...args);
RiotAPI.leagueOfLegends.getMatchInfo(
    server,
    matches[0].gameId
); // Returns relative info to the match.

```
***
### Get Champion Mastery

```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot("riot api token");

const summoner = await RiotAPI.leagueOfLegends.getPlayer(...args);
//server has to be one of these (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
RiotAPI.leagueOfLegends.getPlayerChampionsInfo(
    server,
    summonerEncryptedId
); // Returns array of player's champions info.

```
# Informations
* This library only supports League of Legends for now,but I plan on providing a support for Valorant as well in the future, when it'll be public.

* Anyone can contribute to this library. Feel free to do it.