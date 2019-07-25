import React from 'react'
import { Card } from 'semantic-ui-react'

import HighlightCard from './highlightCard'

import './css/highlights.css'

export default class Highlights extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <strong className="highlights-heading">Highlights</strong>
        <div className="sample-details-divider" />
        <Card.Group
          itemsPerRow={3}
          stackable
          doubling
          className="highlights-container"
        >
          <HighlightCard
            description="Distinct backspliced events identified from all samples of Homo sapiens"
            number={data.countBackspliceJunctions}
          />
          <HighlightCard
            description="Number of samples screened"
            number={data.countTotalSamples}
          />
          <HighlightCard
            description="Number of distinct tissues screened"
            number={data.countDistinctTissues}
          />
          <HighlightCard
            description="Total number of circRNA count / sum(library_size)"
            number={data.circrnaPerLibrarySize}
          />
          <HighlightCard
            description="Average circRNAs(circRNAs count per sample)"
            number={data.circrnaPerSample}
          />
          <HighlightCard
            description="Number of circRNA producing genes"
            number={data.countCircrnaProducingGenes}
          />
        </Card.Group>
      </div>
    )
  }
}
