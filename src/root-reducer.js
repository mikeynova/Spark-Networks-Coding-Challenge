import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import summonerInfo from './reducers/summonerReducer'
import summonerProfilePic from './reducers/summonerProfilePicReducer'
import summonerRank from './reducers/summonerRankReducer'
import summonerMostPlayedChamps from './reducers/summonerMostPlayedChampsReducer'
import summonerMostPlayedChampPic from './reducers/summonerMostPlayedChampPicReducer'

export default combineReducers({
  routerReducer,
  summonerInfo,
  summonerProfilePic,
  summonerRank,
  summonerMostPlayedChamps,
  summonerMostPlayedChampPic,
})
