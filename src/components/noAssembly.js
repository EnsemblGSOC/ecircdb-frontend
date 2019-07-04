import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

export default class NoAssembly extends React.Component {
  render () {
    return (
      <div className='species-details-no-data-container'>
        <Header as='h3' icon textAlign='center'>
          <Icon name='frown outline' />
          Sorry, no available assembly for given species.
        </Header>
      </div>
    )
  }
}
