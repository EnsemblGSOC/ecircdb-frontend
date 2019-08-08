import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import '../speciesView/css/graphs.css'
import './css/sample-graphs.css'

export default class Graph extends React.Component {
  render() {
    var layout = {
      title: 'Splice junction expression',
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
        size: 14
      },
      xaxis: {
        title: 'Junction'
      },
      yaxis: {
        title: ' Log2 expression estimate (JPM)'
      },
      showlegend: false
    }

    return (
      <Card className="highlight-card sample-highlight">
        <div>
          <Plot
            data={this.props.data}
            layout={layout}
            responsive
            className="graph-wrapper sample-graph-wrapper"
          />
        </div>
        <div className="graph-legend">
          <span className="graph-heading">Splice junction expression</span>
          <span className="graph-description">(description)</span>
        </div>
      </Card>
    )
  }
}
