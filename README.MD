![NPM](https://img.shields.io/npm/l/@dr-fabian/riot_api?style=for-the-badge)   
![npm](https://img.shields.io/npm/v/@dr-fabian/riot_api?style=for-the-badge)   
[![GitHub issues](https://img.shields.io/github/issues/Dr-Fabian/Riot_API?style=for-the-badge)](https://github.com/Dr-Fabian/Riot_API/issues)    
[![Help](https://img.shields.io/badge/Need%20further%20help%3F-Watch%20here!-blue?style=for-the-badge)](https://github.com/Dr-Fabian/Riot_API/tree/master/samples)   
[![contribute](https://img.shields.io/badge/-Contribute-success?style=for-the-badge)](https://github.com/Dr-Fabian/Riot_API)

# @Dr-Fabian/Riot_API

@Dr-Fabian/Riot_API is a Javascript library written in TypeScript, with the purpose of facilitating the use of RIOT's api.

## Installation

Using NPM
```bash
npm i @dr-fabian/riot_api
```

Using yarn
```bash
yarn add @dr-fabian/riot_api
```

## Usage

### Get Summoner
```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot(/* <token goes here> */);

// Returns informations about the summoner's account.
await RiotAPI.leagueOfLegends.getPlayer(username);
```
***
### Get Summoner's last matches

```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot(/* <token goes here> */);

// Returns an array of the summoner's last matches, if not specified, the request begins at index 0 and ends at index 1.
await RiotAPI.leagueOfLegends.getPlayerLastMatches(
    accountId,
    beginIndex,
    endIndex
);
```
***
### Get Match info

```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot(/* <token goes here> */);

// Returns informations about the match.
RiotAPI.leagueOfLegends.getMatchInfo(matchId);
```
***
### Get Champion Mastery

```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot(/* <token goes here> */);
// Returns array of player's champions info.
RiotAPI.leagueOfLegends.getPlayerChampionsInfo(summonerEncryptedId);
```
# Informations
* This library only supports League of Legends for now, but I plan on providing a support for Valorant as well in the future, when the API will be public.
* Anyone can [contribute](https://github.com/Dr-Fabian/Riot_API) to this library. Feel free to do it.