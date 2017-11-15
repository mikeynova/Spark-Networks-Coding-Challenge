import { SET_SUMMONER_PROFILE_PIC } from '../actions/summoner-actions'

export default (state = 'original state', action) => {
  switch (action.type) {
    case SET_SUMMONER_PROFILE_PIC:
      return action.payload
    default:
      return state
  }
}
