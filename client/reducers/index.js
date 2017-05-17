import { combineReducers } from 'redux';
import summonerInfo from './summonerReducer.js';
import summonerProfilePic from './summonerProfilePicReducer.js';
import summonerRank from './summonerRankReducer.js';
import summonerMostPlayedChamps from './summonerMostPlayedChampsReducer.js';
import summonerMostPlayedChampPic from './summonerMostPlayedChampPicReducer.js';

const rootReducer = combineReducers({
	summonerInfo: summonerInfo,
	summonerProfilePic: summonerProfilePic,
	summonerRank: summonerRank,
	summonerMostPlayedChamps: summonerMostPlayedChamps,
	summonerMostPlayedChampPic: summonerMostPlayedChampPic
})

export default rootReducer;