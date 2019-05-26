import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Header } from 'semantic-ui-react'

import '../css/species-thumbnail.css'

class SpeciesThumbnail extends React.Component {
  render () {
    return (
      <Card as={Link} to='/'>
        <Card.Content className='thumbnail-wrapper'>
          <div className='thumbnail-container'>
            <div className='thumbnail-image-container'>
              <img
                src='http://asia.ensembl.org/i/species/Homo_sapiens.png'
                className='thumbnail-image'
              />
            </div>
            <div className='thumbnail-text'>
              <Header as='h3'>Human</Header>
            </div>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default SpeciesThumbnail
