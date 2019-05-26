import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppHeader from './components/appHeader'
import AppFooter from './components/appFooter'
import Home from './components/home'
import './css/app.css'

class App extends React.Component {
  render () {
    return (
      <div className='app-wrapper'>
        <Router>
          <AppHeader />
          <Route path='/' exact component={Home} />
          <AppFooter />
        </Router>
      </div>
    )
  }
}

export default App
