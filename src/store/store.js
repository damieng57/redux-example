import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'

// NOTE Etat initial de l'application
export const preloadedState = {
  count: {
    value: 5
  },
  countConfig: {
    increment: 1,
    decrement: 1
  }

}

const store = createStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
