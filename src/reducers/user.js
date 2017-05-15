import { CHANGE_NAME } from '../constants/User'


const initialState = {
  name: 'Василий',
  surname: 'Реактов',
  age: 27
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload }
    default:
      return state;
  }
}