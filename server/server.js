const express = require('express');
const app = express();
const path = require('path');
const axios =require('axios');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var sassMiddleware = require('node-sass-middleware');
const _ = require('lodash');

app.use(bodyParser.json());

app.use(sassMiddleware({
  src: __dirname + '/../client/style',
  dest: __dirname + '/../client/dist',
  debug: true,
  outputStyle: 'compressed',
  prefix: '/dist'
}));

app.use(express.static(__dirname + '/../client'));

app.get('/matches', (req, res) => {
	axios({
		url: '/216331742',
	  method: 'get',
	  baseURL: 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/',
	  headers: {
	    "X-Riot-Token": "RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe"
		},
	})
	.then((response) => {
		res.send(response.data)
	})
})

app.post('/mostPlayedChampGames', (req, res) => {
	axios({
		url: 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/' + req.body[0] + '?champion=' + req.body[1],
		method: 'get',
		headers: {
	    "X-Riot-Token": "RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe"
		}
	})
	.then((response) => {
		res.send(response.data)
	})
})

app.post('/getMostPlayedChamp', (req, res) => {
	axios({
		url: req.body[0] +'',
		baseURL: 'https://na1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/',
		method: 'get',
		headers: {
	    "X-Riot-Token": "RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe"
		}
	})
	.then((response) => {
		res.send(response.data)
	})
})

app.post('/findSummonerID', (req, res) => {
	axios({
		url: req.body[0],
		baseURL: 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/',
		method: 'get',
		headers: {
	    "X-Riot-Token": "RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe"
		}
	})
	.then((response) => {
		res.send(response.data)
	})
	.catch((err) => {
		console.log('error in /findSummonerID request: ', err);
		res.send('no summoner');
	})
})

app.get('/getProfileIcon', (req, res) => {
	axios({
		url: 'https://na1.api.riotgames.com/lol/static-data/v3/profile-icons',
		method: 'get',
		headers: {
		  "X-Riot-Token": "RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe"
		}
	})
	.then((response) => {
		res.send(response.data)
	})
})

app.post('/getMostPlayedChampPic', (req, res) => {
	axios({
		url: req.body[0] + '',
		method: 'get',
		baseURL: 'https://na1.api.riotgames.com/lol/static-data/v3/champions/',
		headers: {
		  "X-Riot-Token": "RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe"
		}
	})
	.then((response) => {
		res.send(response.data)
	})
})

app.post('/getRank', (req, res) => {
	axios({
		url: 'https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/' + req.body[0],
		method: 'get',
		headers: {
		  "X-Riot-Token": "RGAPI-ea6bffc4-ebea-42f7-a0b6-5a65f4c6f2fe"
		}
	})
	.then((response) => {
		res.send(response.data)
	})
})

app.get('*', (req,res) => {
  res.sendFile(path.resolve('client', 'index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('3000 is runnning!');
})