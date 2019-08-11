import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import '../speciesView/css/graphs.css'

export default class Graph extends React.Component {
  render() {
    var data = [
      {
        x: this.props.arList,
        type: 'histogram',
        name: 'circRNA abundance',
        histnorm: 'probability density',
        marker: {
          width: 2
        },
        opacity: 0.75
      }
    ]
    var layout = {
      title: 'circRNA abundance',
      xaxis: {
        title: 'Log2 circRNA abundance ratio'
      },
      yaxis: { title: 'Density' }
    }

    return (
      <Card className="highlight-card">
        <div>
          <Plot
            data={data}
            layout={layout}
            responsive
            className="graph-wrapper sample-graph-wrapper"
          />
        </div>
        <div className="graph-legend">
          <span className="graph-heading">circRNA abundance</span>
          <span className="graph-description">(description)</span>
        </div>
      </Card>
    )
  }
}
