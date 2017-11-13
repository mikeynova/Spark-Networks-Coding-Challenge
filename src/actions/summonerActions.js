export const GET_SUMMONER_INFO = 'GET_SUMMONER_INFO';
export const SET_SUMMONER_PROFILE_PIC = 'SET_SUMMONER_PROFILE_PIC';
export const SET_SUMMONER_RANK = 'SET_SUMMONER_RANK';
export const SET_SUMMONER_MOST_PLAYED = 'SET_SUMMONER_MOST_PLAYED';
export const SET_SUMMONER_MOST_PLAYED_PIC = 'SET_SUMMONER_MOST_PLAYED_PIC';

export function getSummonerInfo(data) {
	 return {
    type: GET_SUMMONER_INFO,
    payload: data
  }
}

export function setSummonerProfilePic(data) {
	return {
		type: SET_SUMMONER_PROFILE_PIC,
		payload: data
	}
}

export function setSummonerRank(data) {
	return {
		type: SET_SUMMONER_RANK,
		payload: data
	}
}

export function setSummonerMostPlayedChamps(data) {
	return {
		type: SET_SUMMONER_MOST_PLAYED,
		payload: data
	}
}

export function setSummonerMostPlayedChampPic(data) {
	return {
		type: SET_SUMMONER_MOST_PLAYED_PIC,
		payload: data
	}
}