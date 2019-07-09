import React from 'react'
import { Card } from 'semantic-ui-react'

import NumberOfExons from './numberOfExons'
import SizeOfExons from './sizeOfExons'
import AverageTPM from './averageTpm'

import './css/graphs.css'

export default class Graphs extends React.Component {
  render() {
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
          <NumberOfExons />
          <SizeOfExons />
          <AverageTPM />
          <NumberOfExons />
          <SizeOfExons />
          <AverageTPM />
        </Card.Group>
      </div>
    )
  }
}
