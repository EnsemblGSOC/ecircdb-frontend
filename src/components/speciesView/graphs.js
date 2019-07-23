import React from 'react'
import { Card } from 'semantic-ui-react'

import CircRNAPerLocus from './circRNAPerLocus'
import CircRNAVSLTPerLocus from './ncrnaVsNltPerLocus'
import NumberOfExons from './numberOfExons'
import SizeOfExons from './sizeOfExons'
import AverageTPM from './averageTpm'

import './css/graphs.css'

export default class Graphs extends React.Component {
  render() {
    const { data } = this.props
    var trace = {
      type: 'box',
      boxmean: 'sd',
    }
    return (
      <div className="graphs-container">
        <strong className="graphs-heading">Statistics</strong>
        <div className="sample-details-divider" />
        <Card.Group
          itemsPerRow={3}
          stackable
          doubling
          className="highlights-container"
        >
          {/* <CircRNAPerLocus
            x={data.circRNAPerLocus.locusId}
            y={data.circRNAPerLocus.count}
          />
          <CircRNAVSLTPerLocus
            x={data.circrnaVsLtPerLocus.countCj}
            y={data.circrnaVsLtPerLocus.countBj}
            text={data.circrnaVsLtPerLocus.text}
            size={data.circrnaVsLtPerLocus.nexons}
          /> */}
          <AverageTPM
            data={data.tpmTissueBoxplot.tissueList.map(tissue => {
              return {
                ...trace,
                y: data.tpmTissueBoxplot.tpmGrouped[tissue],
                name: tissue
              }
            })}
          />
          {/* <NumberOfExons />
          <SizeOfExons />
          <AverageTPM />
          <NumberOfExons />
          <SizeOfExons />
          <AverageTPM /> */}
        </Card.Group>
      </div>
    )
  }
}
