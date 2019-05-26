import React from 'react'
import { Card } from 'semantic-ui-react'

import SpeciesThumbnail from './speciesThumbnail'

class SpeciesContainer extends React.Component {
  render () {
    return (
      <div>
        <Card.Group itemsPerRow={4} stackable doubling>
          <SpeciesThumbnail />
          <SpeciesThumbnail />
          <SpeciesThumbnail />
          <SpeciesThumbnail />
          <SpeciesThumbnail />
          <SpeciesThumbnail />
          <SpeciesThumbnail />
          <SpeciesThumbnail />
          <SpeciesThumbnail />
          <SpeciesThumbnail />
          <SpeciesThumbnail />
        </Card.Group>
      </div>
    )
  }
}

export default SpeciesContainer
