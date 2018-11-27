import React from 'react'
import store from '../store/store'
import { increment, decrement } from '../actions/actions'
import * as CONSTANTS from '../constants/action-types'

// NOTE Avec Redux, l'état n'est pas géré dans le composant.
// Tous les états sont au niveau du store
export default class Count extends React.Component {
  constructor (props) {
    super(props)
    // NOTE Action effectuée lors d'un changement du state
    // La fonction fléchée permet d'évaluer la nouvelle valeur du compteur
    store.subscribe(this._updateCounter)
  }

  _updateCounter () {
    // NOTE Mise à jour de la valeur du compteur depuis l'état courant
    document.getElementById('counter').innerText = 'Compteur : ' + store.getState().count.value
  }

  increment () {
    // console.log('/count.js/increment()')
    // console.log(store.getState())
    // NOTE Envoi de l'évenement avec dispatch. Prend en arguement une fonction contenant
    // le nom d'une action et la valeur du payload (objet ou valuer simple)
    store.dispatch(increment(CONSTANTS.INCREMENT, store.getState().countConfig.increment))
  }

  decrement () {
    // console.log('/count.js/decrement()')
    // console.log(store.getState())
    store.dispatch(decrement(CONSTANTS.DECREMENT, store.getState().countConfig.decrement))
  }

  render () {
    return (
      <div className='counter_group'>
        <h1 id='counter'>Compteur : {store.getState().count.value}</h1>
        <button id='up' className='button' onClick={() => this.increment()}>+</button>
        <button id='down' className='button' onClick={() => this.decrement()}>-</button>
      </div>
    )
  }
}
