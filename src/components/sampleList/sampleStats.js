import React from 'react'
import { Button, Icon, Header, Card } from 'semantic-ui-react'

import config from '../../config.json'
import SankeyFlow from './sankeyFlow'
import GeneLevelAR from './geneLevelAr'
import JpmBoxplot from './jpmBoxplot'
import TpmBoxplot from './tpmBoxplot'
import BackspliceVsCanonicalJpm from './backspliceVsCanonicalJpm'
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
            <a
              download
              href={`${config.backendServer}${data.fastqcPath}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="sample-details-button">
                <Icon name="file download" />
                Quality Report
              </Button>
            </a>
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
          <TpmBoxplot
            data={[
              {
                ...trace,
                y: data.locusBjTpmData.circRNAHost,
                name: 'circRNA genes'
              },
              {
                ...trace,
                y: data.locusBjTpmData.notCircRNAHost,
                name: 'non-circRNA gene'
              }
            ]}
          />
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
          <BackspliceVsCanonicalJpm
            x={data.geneLevelBjCjJpm.jpmCj}
            y={data.geneLevelBjCjJpm.jpmBj}
            text={data.geneLevelBjCjJpm.text}
          />
          <GeneLevelAR arList={data.geneLevelArSum} />
        </Card.Group>
        <Header as="h4">Top X lists:</Header>
        <TopXCircRnas data={data.topXStructureData} />
        <TopXGenes data={data.topXGeneLevelAbundance} />
      </div>
    )
  }
}
