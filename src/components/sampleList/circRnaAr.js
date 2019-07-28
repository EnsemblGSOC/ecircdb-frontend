import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import '../speciesView/css/graphs.css'

export default class Graph extends React.Component {
  render() {
    let x = []
    let y = []

    for (let i = 1; i < 15; i++) {
      x.push(`gene-${i}`)
      y.push(Math.random())
    }
    var trace1 = {
      x: x,
      y: y,
      mode: 'markers',
      type: 'scatter'
    }

    var data = [trace1]

    var layout = {
      title: 'Gene level circRNA abundance ratio distribution',
      xaxis: {
        title: 'Genes'
      },
      yaxis: {
        title: 'circRNA Abundance ratio'
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
