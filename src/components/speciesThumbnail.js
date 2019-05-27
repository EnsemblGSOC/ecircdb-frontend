import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Header } from 'semantic-ui-react'

import { logo } from '../urls'
import '../css/species-thumbnail.css'

class SpeciesThumbnail extends React.Component {
  render () {
    const { species } = this.props
    return (
      <Card as={Link} to={`/${species.taxon_id}`}>
        <Card.Content className='thumbnail-wrapper'>
          <div className='thumbnail-container'>
            <div className='thumbnail-image-container'>
              <img
                src={species.thumbnail ? species.thumbnail : logo()}
                className='thumbnail-image'
                alt={species.name}
              />
            </div>
            <div className='thumbnail-text'>
              <Header as='h4'>{species.name}</Header>
            </div>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default SpeciesThumbnail
