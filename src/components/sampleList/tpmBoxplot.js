import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import '../speciesView/css/graphs.css'
import './css/sample-graphs.css'

export default class Graph extends React.Component {
  render() {
    var layout = {
      title: 'Gene expression',
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
        size: 14
      },
      yaxis: {
        title: ' Log2 expression estimate (TPM)'
      },
      showlegend: false
    }

    return (
      <Card className="highlight-card">
        <div>
          <Plot
            data={this.props.data}
            layout={layout}
            responsive
            className="graph-wrapper sample-graph-wrapper"
          />
        </div>
        <div className="graph-legend">
          <span className="graph-heading">Gene expression</span>
          <span className="graph-description">
            Distribution of gene expression estimates in transcript per million
            (TPM) grouped by status: circRNA producing and non-producing genes
          </span>
        </div>
      </Card>
    )
  }
}
