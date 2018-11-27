import * as CONSTANTS from '../constants/action-types'

const defaultState = { value: 1 }

const countReducer = (state = defaultState, action) => {
  // NOTE action.type et action.payload sont définis dans actions.js
  switch (action.type) {
    case CONSTANTS.INCREMENT:
      return {
        ...state,
        value: state.value + action.payload
      }

    case CONSTANTS.DECREMENT:
      return {
        ...state,
        value: state.value - action.payload
      }
    default:
      return state
  }
}

export default countReducer
