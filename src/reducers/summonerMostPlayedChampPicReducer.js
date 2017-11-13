import { SET_SUMMONER_MOST_PLAYED_PIC } from '../actions/summonerActions.js';

export default (state = 'original state', action) => {
  switch(action.type) {
    case SET_SUMMONER_MOST_PLAYED_PIC:
      return action.payload;
  };
  return state;
}