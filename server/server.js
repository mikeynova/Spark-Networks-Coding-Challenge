const path = require('path')
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const webpack = require('webpack')

const app = express()
const config = require('../webpack.config')
const summonerRoutes = require('./routes/summoner-routes')

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

app.use('/summonerInfo', summonerRoutes)

app.post('/mostPlayedChampGames', (req, res) => {
  axios({
    url: 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + req.body[0] + '?champion=' + req.body[1],
    method: 'get',
    headers: {
      'X-Riot-Token': 'RGAPI-2a10a512-9db7-41aa-93f6-f71ff7c52ae0',
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
      'X-Riot-Token': 'RGAPI-2a10a512-9db7-41aa-93f6-f71ff7c52ae0',
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
      'X-Riot-Token': 'RGAPI-2a10a512-9db7-41aa-93f6-f71ff7c52ae0',
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
