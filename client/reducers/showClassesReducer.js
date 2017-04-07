import { ADD_CLASS_LIST } from '../actions/addClassListAction.js';

export default (state = 'original state', action) => {
  switch(action.type) {
    case ADD_CLASS_LIST:
      return action.payload;
  };
  return state;
}