import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppHeader from './components/appHeader'
import AppFooter from './components/appFooter'
import Home from './components/home'
import SpeciesDetails from './components/speciesDetails'
import './css/app.css'

class App extends React.Component {
  render () {
    return (
      <div className='app-wrapper'>
        <Router>
          <AppHeader />
          <Route path='/' exact component={Home} />
          <Route path='/species/:speciesId/' exact component={SpeciesDetails} />
          <Route
            path='/species/:speciesId/:assemblyId/'
            component={SpeciesDetails}
          />
          <AppFooter />
        </Router>
      </div>
    )
  }
}

export default App
