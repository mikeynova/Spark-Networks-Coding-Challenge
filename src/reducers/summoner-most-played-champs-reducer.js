import { SET_SUMMONER_MOST_PLAYED } from '../actions/summoner-actions'

export default (state = 'original state', action) => {
  switch (action.type) {
    case SET_SUMMONER_MOST_PLAYED:
      return action.payload
    default:
      return state
  }
}
