import React from 'react'
import { Button, Icon, Header, Card } from 'semantic-ui-react'

import SankeyFlow from './sankeyFlow'
import GeneTpm from './geneTpm'
import CircRnaTpm from './circRnaTpm'
import CircRnaAr from './circRnaAr'
import BackspliceVsCanonical from './backspliceVsCanonical'
import TopXCircRnas from './topXCircRnas'
import TopXGenes from './topXGenes'

export default class SampleStats extends React.Component {
  render() {
    const { data, sample } = this.props
    return (
      <div>
        <div className="sample-stats-header">
          <div className="sample-details-text">
            <div>
              <strong>{sample.accession}</strong> of{' '}
              <strong>{sample.source}</strong>
            </div>
            <div className="sample-details-text-description">
              <div>
                <strong>Description: </strong>
              </div>
              <div>{sample.description}</div>
            </div>
          </div>
          <div className="sample-details-buttons">
            <Button className="sample-details-button">
              <Icon name="file export" />
              Export
            </Button>
            <Button className="sample-details-button">
              <Icon name="file download" />
              Quality Report
            </Button>
          </div>
        </div>
        <Header as="h4">Statistics about the sample</Header>
        <Card.Group itemsPerRow={1}>
          <SankeyFlow sankey={data.sankey} />
        </Card.Group>
        <Header as="h4">Distributions</Header>
        <Card.Group itemsPerRow={2} stackable>
          <GeneTpm data={data} />
          <CircRnaTpm data={data} />
          <BackspliceVsCanonical data={data} />
          <CircRnaAr data={data} />
        </Card.Group>
        <Header as="h4">Top X lists:</Header>
        <Card.Group itemsPerRow={2} stackable>
          <TopXCircRnas data={data} />
          <TopXGenes data={data} />
        </Card.Group>
      </div>
    )
  }
}
