const path = require('path')
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const webpack = require('webpack')

const app = express()
const config = require('../webpack.config')

const compiler = webpack(config)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../dist')))

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  quiet: false,
  noInfo: true,
  stats: {
    colors: true,
  },
}))
app.use(require('webpack-hot-middleware')(compiler))

app.get('/matches', (req, res) => {
  axios({
    url: '/216331742',
    method: 'get',
    baseURL: 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/',
    headers: {
      'X-Riot-Token': 'RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe',
    },
  })
  .then(response => {
    res.send(response.data)
  })
})

app.post('/mostPlayedChampGames', (req, res) => {
  axios({
    url: 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + req.body[0] + '?champion=' + req.body[1],
    method: 'get',
    headers: {
      'X-Riot-Token': 'RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe',
    },
  })
  .then(response => {
    res.send(response.data)
  })
})

app.post('/getMostPlayedChamp', (req, res) => {
  axios({
    url: String(req.body[0]),
    baseURL: 'https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/',
    method: 'get',
    headers: {
      'X-Riot-Token': 'RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe',
    },
  })
  .then(response => {
    res.send(response.data)
  })
})

app.post('/findSummonerID', (req, res) => {
  axios({
    url: req.body[0],
    baseURL: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/',
    method: 'get',
    headers: {
      'X-Riot-Token': 'RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe',
    },
  })
  .then(response => {
    res.send(response.data)
  })
  .catch(err => {
    console.log('error in /findSummonerID request: ', err)
    res.send('no summoner')
  })
})

app.get('/getProfileIcon', (req, res) => {
  axios({
    url: 'https://na1.api.riotgames.com/lol/static-data/v3/profile-icons',
    method: 'get',
    headers: {
      'X-Riot-Token': 'RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe',
    },
  })
  .then(response => {
    res.send(response.data)
  })
})

app.post('/getMostPlayedChampPic', (req, res) => {
  axios({
    url: String(req.body[0]),
    method: 'get',
    baseURL: 'https://na1.api.riotgames.com/lol/static-data/v3/champions/',
    headers: {
      'X-Riot-Token': 'RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe',
    },
  })
  .then(response => {
    res.send(response.data)
  })
})

app.post('/getRank', (req, res) => {
  axios({
    url: 'https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/' + req.body[0],
    method: 'get',
    headers: {
      'X-Riot-Token': 'RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe',
    },
  })
  .then(response => {
    res.send(response.data)
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', '../dist/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('3000 is runnning!')
})
