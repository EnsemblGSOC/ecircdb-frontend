import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import './css/graphs.css'

export default class Graph extends React.Component {
  render() {
    var data = [
      {
        values: this.props.values,
        labels: this.props.labels,
        domain: { column: 0 },
        name: 'circRNA classification',
        hoverinfo: 'label+percent+name',
        hole: 0.4,
        type: 'pie'
      }
    ]

    var layout = {
      title: 'circRNA classification',
      grid: { rows: 1, columns: 1 }
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
          <span className="graph-heading">circRNA classificaion</span>
          <span className="graph-description">
            Proportion of exonic and intronic circRNAs identified
          </span>
        </div>
      </Card>
    )
  }
}
