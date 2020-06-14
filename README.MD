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
const RiotAPI = new Riot(<riot api token>);

//server has to be one of these (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
await RiotAPI.leagueOfLegends.getPlayerAsync(server, username); // Returns summoner account info
```
***
### Get Summoner Synchronously

```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot(<riot api token>);

//server has to be one of these (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
RiotAPI.leagueOfLegends.getPlayerSync(server, username); // Returns summoner account info
```
***
### Get Summoner's last matches Asynchronously

```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot(<riot api token>);

//server has to be one of these (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
await RiotAPI.leagueOfLegends.getPlayerLastMatchesAsync(
    server,
    accountId,
    beginIndex,
    endIndex
); // Returns summoner's last matches, the request begins at index 0 and ends at index 0 per default.
```
***
### Get Summoner's last matches Synchronously

```javascript
const Riot = require('@dr-fabian/riot_api');
const RiotAPI = new Riot(<riot api token>);

//server has to be one of these (euw1 | eun1 | br1 | jp1 | kr | la1 | la2 | na1 | oc1 | ru | tr1)
RiotAPI.leagueOfLegends.getPlayerLastMatchesSsync(
    server,
    accountId,
    beginIndex,
    endIndex
); // Returns summoner's last matches, the request begins at index 0 and ends at index 0 per default.
```

# Informations
* This library only supports League of Legends for now,but I plan on providing a support for Valorant as well in the future, when it'll be public.

* Anyone can contribute to this library. Feel free to do it.