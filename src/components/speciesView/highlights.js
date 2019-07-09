import React from 'react'
import { Card } from 'semantic-ui-react'

import HighlightCard from './highlightCard'

import './css/highlights.css'

export default class Highlights extends React.Component {
  render () {
    return (
      <div>
        <strong className='highlights-heading'>Highlights</strong>
        <div className='sample-details-divider' />
        <Card.Group
          itemsPerRow={3}
          stackable
          doubling
          className='highlights-container'
        >
          <HighlightCard
            description='Distinct backspliced events identified from all samples of Homo sapiens'
            number={1650}
          />
          <HighlightCard
            description='Number of samples screened'
            number={300}
          />
          <HighlightCard
            description='Number of distinct tissues screened'
            number={12}
          />
          <HighlightCard
            description='Total number of circRNA count / sum(library_size)'
            number={1220}
          />
          <HighlightCard
            description='Average circRNAs/circRNAs count per sample'
            number={1220}
          />
          <HighlightCard
            description='Number of circRNA producing genes'
            number={12}
          />
        </Card.Group>
      </div>
    )
  }
}