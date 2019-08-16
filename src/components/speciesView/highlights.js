import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import HighlightCard from './highlightCard'

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
            number={data.totalCircrnas}
          />
          <HighlightCard
            description="Samples"
            number={data.countTotalSamples}
          />
          <HighlightCard
            description="Tissues"
            number={data.countDistinctTissues}
          />
          <HighlightCard
            description="Total # of circRNA count / sum(library_size)"
            number={data.circrnaPerLibrarySize}
          />
          <HighlightCard
            description="circRNAs per sample"
            number={data.circrnaPerSample}
          />
          <HighlightCard
            description="# of circRNA producing genes"
            number={data.countCircrnaProducingGenes}
          />
        </Card.Group>
      </div>
    )
  }
}
