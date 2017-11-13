import { SET_SUMMONER_RANK } from '../actions/summonerActions.js';

export default (state = 'original state', action) => {
  switch(action.type) {
    case SET_SUMMONER_RANK:
      return action.payload;
  };
  return state;
}