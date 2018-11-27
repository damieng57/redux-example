import React, { Component } from 'react'
import './App.css'
import Count from './components/Count'
import CountConfigurator from './components/CountConfig'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Count />
        <CountConfigurator />
      </div>
    )
  }
}

export default App
