import { CHANGE_NAME } from '../constants/User'

export function changeName(name) {

  return {
    type: CHANGE_NAME,
    payload: name
  }

}