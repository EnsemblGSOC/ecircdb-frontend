import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import '../speciesView/css/graphs.css'

export default class Graph extends React.Component {
  render() {
    var trace1 = {
      x: this.props.x,
      y: this.props.y,
      text: this.props.text,
      mode: 'markers',
      type: 'scattergl',
      name: 'Gene splice junction expression'
    }

    var data = [trace1]

    var layout = {
      title: 'Gene splice junction expression',
      xaxis: {
        title: 'Log2 total canonical junction JPM'
      },
      yaxis: {
        title: 'Log2 total backsplice junction JPM'
      }
    }

    return (
      <Card className="highlight-card">
        <div>
          <Plot
            data={data}
            layout={layout}
            responsive={true}
            className="graph-wrapper sample-graph-wrapper"
          />
        </div>
        <div className="graph-legend">
          <span className="graph-heading">Gene splice junction expression</span>
          <span className="graph-description">
            Comparisons of total canonical and backsplice junction expression in
            circRNA producing genes
          </span>
        </div>
      </Card>
    )
  }
}
