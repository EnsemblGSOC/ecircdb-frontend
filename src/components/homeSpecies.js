import React from 'react'
import { Header, Input, Segment } from 'semantic-ui-react'

import SpeciesContainer from './speciesContainer'
import '../css/home-species.css'

class HomeSpecies extends React.Component {
  render () {
    return (
      <div className='home-description-wrapper'>
        <div>
          <Input
            icon='search'
            placeholder='Search in the available species'
            className='input-wrapper'
          />
        </div>
        <Header as='h2' dividing>
          All available species/Results
        </Header>
        <Segment basic className='species-wrapper'>
          <SpeciesContainer />
        </Segment>
      </div>
    )
  }
}

export default HomeSpecies
