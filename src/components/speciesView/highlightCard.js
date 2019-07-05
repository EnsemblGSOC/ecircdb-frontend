import React from 'react'
import { Card } from 'semantic-ui-react'

import './css/highlights.css'

export default class HighlightCard extends React.Component {
  render () {
    return (
      <Card className='highlight-card'>
        <Card.Content className='highlight-card-container'>
          <div className='highlight-description'>{this.props.description}</div>
          <div className='highlight-number'>{this.props.number}</div>
        </Card.Content>
      </Card>
    )
  }
}
