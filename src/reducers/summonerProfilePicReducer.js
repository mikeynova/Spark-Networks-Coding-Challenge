import { SET_SUMMONER_PROFILE_PIC } from '../actions/summonerActions.js';

export default (state = 'original state', action) => {
  switch(action.type) {
    case SET_SUMMONER_PROFILE_PIC:
      return action.payload;
  };
  return state;
}