import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import './css/graphs.css'

export default class Graph extends React.Component {
  render() {
    var data = [
      {
        x: this.props.values,
        name: 'circRNA NExons',
        type: 'histogram',
        autobinx: true,
        marker: {
          width: 50,
          color: 'rgba(100, 200, 102, 0.7)',
          line: {
            color: 'rgba(100, 200, 102, 1)',
            width: 50
          }
        }
      }
    ]

    var layout = {
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
        size: 14
      },
      title: 'circRNA NExons',
      xaxis: { title: 'NExons' },
      yaxis: { title: 'Count' }
    }

    return (
      <Card className="highlight-card">
        <div>
          <Plot
            data={data}
            layout={layout}
            responsive
            className="graph-wrapper"
          />
        </div>
        <div className="graph-legend">
          <span className="graph-heading">circRNA NExons</span>
          <span className="graph-description">(description)</span>
        </div>
      </Card>
    )
  }
}
