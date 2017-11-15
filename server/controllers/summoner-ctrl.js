const Summoner = require('../models/summoner-model')

module.exports = {
  '/': {
    get: (req, res) => {
      const summonerObj = {}
      Summoner.getId(req.headers.summonername)
        .then(idRes => {
          summonerObj.id = idRes.id
          summonerObj.accountId = idRes.accountId
          summonerObj.name = idRes.name
          summonerObj.profileIconId = idRes.profileIconId
          summonerObj.revisionDate = idRes.revisionDate
          summonerObj.summonerLevel = idRes.summonerLevel
          Summoner.getMatches(idRes.accountId)
            .then(matchesRes => {
              summonerObj.matches = matchesRes.matches
              Summoner.getWins(idRes.id)
                .then(winsRes => {
                  summonerObj.queueType = winsRes.queueType
                  summonerObj.hotStreak = winsRes.hotStreak
                  summonerObj.wins = winsRes.hotStreak
                  summonerObj.veteran = winsRes.hotStreak
                  summonerObj.losses = winsRes.losses
                  summonerObj.playerOrTeamId = winsRes.playerOrTeamId
                  summonerObj.leagueName = winsRes.leagueName
                  summonerObj.playerOrTeamName = winsRes.playerOrTeamName
                  summonerObj.inactive = winsRes.inactive
                  summonerObj.rank = winsRes.rank
                  summonerObj.freshBlood = winsRes.freshBlood
                  summonerObj.leagueId = winsRes.leagueId
                  summonerObj.tier = winsRes.tier
                  summonerObj.leaguePoints = winsRes.leaguePoints
                  res.send(summonerObj)
                })
            })
        })
    },
  },
}
