import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import GeneCountVsCircrnaCount from './geneCountVsCircrnaCount'
import CircrnaPerChromosome from './circRNAPerChromosome'
import CircRNANExons from './circrnaNExons'
import CircrnaClassification from './circrnaClassification'
import CircrnaNMethods from './circrnaNMethods'
import AverageTPM from './averageTpm'
import AverageJPM from './averageJpm'
import AverageAR from './averageAr'
import CircrnaSize from './circrnaSize'

import './css/graphs.css'

export default class Graphs extends React.Component {
  render() {
    const { data } = this.props
    var trace = {
      type: 'box',
      boxmean: 'sd',
      boxpoints: 'Outliers'
    }
    var sizeTrace = {
      type: 'violin',
      points: 'none',
      box: {
        visible: true
      },
      meanline: {
        visible: true
      }
    }
    return (
      <div className="graphs-container">
        <strong className="graphs-heading">
          <Icon name="area graph" />
          Statistics
        </strong>
        <div className="sample-details-divider" />
        <Card.Group
          itemsPerRow={3}
          stackable
          doubling
          className="highlights-container"
        >
          <CircrnaPerChromosome
            x={data.chromosomesCircrnaCount.chromosomes}
            y={data.chromosomesCircrnaCount.circrnas}
          />
          <CircrnaNMethods
            values={data.circrnaNMethods.values}
            labels={data.circrnaNMethods.labels}
          />
          <CircrnaClassification
            values={data.circrnaClassification.values}
            labels={data.circrnaClassification.labels}
          />
          <GeneCountVsCircrnaCount
            x={data.geneCountPerCircrnaCount.circrnaCount}
            y={data.geneCountPerCircrnaCount.genesFrequency}
            labels={data.geneCountPerCircrnaCount.labels}
          />
          <CircRNANExons
            x={data.circrnaNExons.x}
            y={data.circrnaNExons.y}
            labels={data.circrnaNExons.labels}
          />
          <CircrnaSize
            data={[
              {
                ...sizeTrace,
                x: data.sizeTissueBoxplot.tissueList,
                y: data.sizeTissueBoxplot.genomicSizes,
                legendgroup: 'Genomic size',
                scalegroup: 'Genomic size',
                name: 'Genomic size'
              },
              {
                ...sizeTrace,
                x: data.sizeTissueBoxplot.tissueList,
                y: data.sizeTissueBoxplot.splicedSizes,
                legendgroup: 'Spliced size',
                scalegroup: 'Spliced size',
                name: 'Spliced size'
              }
            ]}
          />
          <AverageTPM
            data={data.tpmTissueBoxplot.tissueList.map(tissue => {
              return {
                ...trace,
                y: data.tpmTissueBoxplot.tpmGrouped[tissue],
                name: tissue
              }
            })}
          />
          <AverageJPM
            data={data.jpmTissueBoxplot.tissueList.map(tissue => {
              return {
                ...trace,
                y: data.jpmTissueBoxplot.jpmGrouped[tissue],
                name: tissue
              }
            })}
          />
          <AverageAR
            data={data.arTissueBoxplot.tissueList.map(tissue => {
              return {
                ...trace,
                y: data.arTissueBoxplot.arGrouped[tissue],
                name: tissue
              }
            })}
          />
        </Card.Group>
      </div>
    )
  }
}
