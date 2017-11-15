const axios = require('axios')

const Summoner = module.exports

Summoner.getId = summonerName => (
  axios({
    url: summonerName,
    baseURL: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/',
    method: 'get',
    headers: {
      'X-Riot-Token': 'RGAPI-83b237b4-f41e-4c03-b05b-ab8c3f45c911',
    },
  }).then(res => res.data)
)

Summoner.getMatches = accountId => (
  axios({
    url: `${accountId}`,
    method: 'get',
    baseURL: 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/',
    headers: {
      'X-Riot-Token': 'RGAPI-83b237b4-f41e-4c03-b05b-ab8c3f45c911',
    },
  }).then(res => res.data)
)

Summoner.getWins = summonerId => (
  axios({
    url: `${summonerId}`,
    method: 'get',
    baseURL: 'https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/',
    headers: {
      'X-Riot-Token': 'RGAPI-83b237b4-f41e-4c03-b05b-ab8c3f45c911',
    },
  }).then(res => res.data[0])
)
