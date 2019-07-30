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
      name: 'Number of exons'
    }

    var data = [trace1]

    var layout = {
      title: 'Gene level backsplice vs canonical junctions',
      xaxis: {
        title: 'Backsplice junctions'
      },
      yaxis: {
        title: 'Canonical junctions'
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
