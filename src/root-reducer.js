import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import summonerProfilePic from './reducers/summoner-profile-pic-reducer'
import summonerRank from './reducers/summoner-rank-reducer'
import summonerMostPlayedChamps from './reducers/summoner-most-played-champs-reducer'
import summonerMostPlayedChampPic from './reducers/summoner-most-played-champ-pic-reducer'

export default combineReducers({
  routerReducer,
  summonerProfilePic,
  summonerRank,
  summonerMostPlayedChamps,
  summonerMostPlayedChampPic,
})
