import * as CONSTANTS from '../constants/action-types'

// NOTE Ceci est un action creator
export function increment (type, payload) {
  return { type: CONSTANTS.INCREMENT,
    payload: payload
  }
}

// NOTE Ceci est un action creator
export function decrement (type, payload) {
  return { type: CONSTANTS.DECREMENT,
    payload: payload
  }
}

// NOTE Ceci est une action
export const setIncrement = { type: CONSTANTS.SET_INCREMENT, payload: 0 }
export const setDecrement = { type: CONSTANTS.SET_DECREMENT, payload: 0 }
