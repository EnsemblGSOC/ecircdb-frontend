import React from 'react'
import { Grid } from 'semantic-ui-react'

import HomeDescription from './homeDescription'
import HomeSpecies from './homeSpecies'
import '../css/home.css'

class Home extends React.Component {
  render () {
    return (
      <div className='home-wrapper'>
        <Grid>
          <Grid.Column width={10}>
            <HomeSpecies />
          </Grid.Column>
          <Grid.Column width={6}>
            <HomeDescription />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default Home
