import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default class WrongAssembly extends React.Component {
  render () {
    return (
      <div className='species-details-no-data-container'>
        <Header as='h3' icon textAlign='center'>
          <Icon name='frown outline' />
          Sorry, no matching assembly for given species with this id.
        </Header>
      </div>
    )
  }
}
