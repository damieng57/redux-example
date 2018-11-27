import * as CONSTANTS from '../constants/action-types'

const defaultState = {
  countConfig: {
    increment: 1,
    decrement: 1
  }
}

const countConfigReducer = (state = defaultState, action) => {
  // NOTE action.type et action.payload sont définis dans actions.js
  switch (action.type) {
    case CONSTANTS.SET_INCREMENT:
      return {
        ...state,
        increment: action.payload
      }
    case CONSTANTS.SET_DECREMENT:
      return {
        ...state,
        decrement: action.payload
      }
    default:
      return state
  }
}

export default countConfigReducer
