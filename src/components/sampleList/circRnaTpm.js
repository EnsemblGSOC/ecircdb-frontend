import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import '../speciesView/css/graphs.css'

export default class Graph extends React.Component {
  render() {
    let x = []
    let y = [2, 3, 4, 9, 13, 38, 35, 35, 36, 23, 11, 11, 4, 2]

    for (let i = 14; i < 28; i++) {
      x.push(i)
    }

    var trace = {
      x: x,
      y: y,
      type: 'scatter'
    }

    var data = [trace]

    var layout = {
      title: 'circRNA TPM density',
      width: 2,
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
      },
      xaxis: {
        title: 'circRNA TPM'
      },
      yaxis: {
        title: 'Density'
      }
    }

    return (
      <Card className="highlight-card">
        <div>
          <Plot
            data={data}
            layout={layout}
            responsive={true}
            className="graph-wrapper"
          />
        </div>
        <div className="graph-legend">
          <span className="graph-heading">Heading</span>
          <span className="graph-description">(description)</span>
        </div>
      </Card>
    )
  }
}
