import React from 'react'
import store from '../store/store'
import { setIncrement, setDecrement } from '../actions/actions'

// NOTE Avec Redux, l'état n'est pas géré dans le composant.
// Tous les états sont au niveau du store
export default class CountConfig extends React.Component {
  setIncrement () {
    // NOTE On copie l'action et l'on modifie la valeur du payload avant de la dispatcher
    store.dispatch({ ...setIncrement, payload: parseInt(document.getElementById('set_increment').value) })
  }

  setDecrement () {
    store.dispatch({ ...setDecrement, payload: parseInt(document.getElementById('set_decrement').value) })
  }

  render () {
    return (
      <div className='button_group'>
        <input id='set_increment' className='input' onChange={() => this.setIncrement()} />
        <input id='set_decrement' className='input' onChange={() => this.setDecrement()} />
      </div>
    )
  }
}
