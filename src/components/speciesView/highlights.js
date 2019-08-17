import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import HighlightCard from './highlightCard'
import { numberWithCommas } from '../../utils'

import './css/highlights.css'

export default class Highlights extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <strong className="highlights-heading">
          <Icon name="info circle" />
          Highlights
        </strong>
        <div className="sample-details-divider" />
        <Card.Group
          itemsPerRow={3}
          stackable
          doubling
          className="highlights-container"
        >
          <HighlightCard
            description="# of circRNAs"
            number={numberWithCommas(data.totalCircrnas)}
          />
          <HighlightCard
            description="Samples"
            number={numberWithCommas(data.countTotalSamples)}
          />
          <HighlightCard
            description="Tissues"
            number={numberWithCommas(data.countDistinctTissues)}
          />
          <HighlightCard
            description="Average library size"
            number={numberWithCommas(data.averageLibrarySize)}
          />
          <HighlightCard
            description="circRNAs per sample"
            number={numberWithCommas(data.circrnaPerSample)}
          />
          <HighlightCard
            description="# of circRNA producing genes"
            number={numberWithCommas(data.countCircrnaProducingGenes)}
          />
        </Card.Group>
      </div>
    )
  }
}
