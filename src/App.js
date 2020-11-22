import React, { Component } from 'react'
import UserContainer from '../src/containers/UserContainer' // изменили импорт
import PageContainer from '../src/containers/PageContainer' // изменили импорт

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageContainer />
        <UserContainer />
      </div>
    )
  }
}

export default App