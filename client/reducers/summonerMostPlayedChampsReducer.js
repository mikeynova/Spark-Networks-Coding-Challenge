import { SET_SUMMONER_MOST_PLAYED } from '../actions/summonerActions.js';

export default (state = 'original state', action) => {
  switch(action.type) {
    case SET_SUMMONER_MOST_PLAYED:
      return action.payload;
  };
  return state;
}