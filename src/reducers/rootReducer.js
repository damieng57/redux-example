import { combineReducers } from 'redux'
import countReducer from './countReducer'
import countConfigReducer from './countConfigReducer'

const rootReducer = combineReducers({
  count: countReducer,
  countConfig: countConfigReducer
})

export default rootReducer
