export const ADD_CLASS_LIST = 'ADD_CLASS_LIST';

export function addClassList(data) {
	 return {
    type: ADD_CLASS_LIST,
    payload: data
  }
}