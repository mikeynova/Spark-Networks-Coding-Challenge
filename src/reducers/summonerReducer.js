import { GET_SUMMONER_INFO } from '../actions/summonerActions.js';

export default (state = 'original state', action) => {
  switch(action.type) {
    case GET_SUMMONER_INFO:
      return action.payload;
  };
  return state;
}