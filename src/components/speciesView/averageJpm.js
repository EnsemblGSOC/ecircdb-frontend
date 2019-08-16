import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import './css/graphs.css'

export default class Graph extends React.Component {
  render() {
    var layout = {
      title: 'Average circRNA expression (JPM)',
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
        size: 14
      },
      xaxis: {
        title: 'Tissues'
      },
      yaxis: {
        title: 'z-score Log2(expression estimate)'
      }
    }

    return (
      <Card className="highlight-card">
        <div>
          <Plot
            data={this.props.data}
            layout={layout}
            responsive
            className="graph-wrapper"
          />
        </div>
        <div className="graph-legend">
          <span className="graph-heading">
            Average circRNA expression (JPM)
          </span>
          <span className="graph-description">
            Mean circRNA expression estimates in junctions per million (JPM) per
            tissue
          </span>
        </div>
      </Card>
    )
  }
}
