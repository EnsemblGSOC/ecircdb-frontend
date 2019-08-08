import React from 'react'
import { Button, Icon, Header, Card } from 'semantic-ui-react'

import SankeyFlow from './sankeyFlow'
import JpmBoxplot from './jpmBoxplot'
import CircRnaAr from './circRnaAr'
import BackspliceVsCanonical from './backspliceVsCanonical'
import TopXCircRnas from './topXCircRnas'
import TopXGenes from './topXGenes'
import ExportList from './exportList'

export default class SampleStats extends React.Component {
  render() {
    const { data, sample, speciesId, assemblyId, sampleId } = this.props
    var trace = {
      type: 'box',
      boxmean: 'sd',
      boxpoints: 'Outliers'
    }
    return (
      <div>
        <div className="sample-stats-header">
          <div className="sample-details-text">
            <div>
              <strong>Sample accession: </strong>
              {sample.accession}
              <br />
              <strong>Tissue: </strong>
              {sample.source}
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
              <Icon name="file download" />
              Quality Report
            </Button>
            <ExportList
              speciesId={speciesId}
              assemblyId={assemblyId}
              sampleId={sampleId}
            />
          </div>
        </div>
        <Header as="h4">Statistics about the sample</Header>
        <Card.Group itemsPerRow={1}>
          <SankeyFlow sankey={data.sankey} />
        </Card.Group>
        <Header as="h4">Distributions</Header>
        <Card.Group itemsPerRow={2} stackable>
          <JpmBoxplot
            data={[
              {
                ...trace,
                y: data.jpmBoxplot.bjJpmList,
                name: 'backsplice'
              },
              {
                ...trace,
                y: data.jpmBoxplot.cjJpmList,
                name: 'canonical'
              }
            ]}
          />
          <BackspliceVsCanonical
            x={data.geneLevelBjVsCj.countCj}
            y={data.geneLevelBjVsCj.countBj}
            text={data.geneLevelBjVsCj.text}
            size={data.geneLevelBjVsCj.nexons}
          />
          <CircRnaAr
            x={data.geneVsCircrnaAbundanceRatio.genes}
            y={data.geneVsCircrnaAbundanceRatio.circrnaAbundanceRatio}
          />
        </Card.Group>
        <Header as="h4">Top X lists:</Header>
        <TopXCircRnas data={data.topXStructureData} />
        {/* <TopXGenes topXCircrnas={data.topXCircrna} /> */}
      </div>
    )
  }
}
