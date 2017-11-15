import { SET_SUMMONER_MOST_PLAYED_PIC } from '../actions/summoner-actions'

export default (state = 'original state', action) => {
  switch (action.type) {
    case SET_SUMMONER_MOST_PLAYED_PIC:
      return action.payload
    default:
      return state
  }
}
