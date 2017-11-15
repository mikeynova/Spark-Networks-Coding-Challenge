import { SET_SUMMONER_RANK } from '../actions/summoner-actions'

export default (state = 'original state', action) => {
  switch (action.type) {
    case SET_SUMMONER_RANK:
      return action.payload
    default:
      return state
  }
}
