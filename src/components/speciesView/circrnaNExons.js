import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import './css/graphs.css'

export default class Graph extends React.Component {
  render() {
    var data = [
      {
        histfunc: 'sum',
        y: this.props.y,
        x: this.props.x,
        type: 'histogram',
        name: 'circRNA exons',
        xbins: {
          size: 1
        },
        marker: {
          width: 50,
          color: 'rgba(100, 200, 102, 0.7)',
          line: {
            color: 'rgba(100, 200, 102, 1)',
            width: 1
          }
        },
        opacity: 0.75
      }
    ]
    var layout = {
      bargap: 0.05,
      bargroupgap: 0.2,
      title: 'circRNA exons',
      xaxis: {
        title: '# of predicted exons',
        tickangle: '-90',
        tickvals: this.props.x,
        ticktext: this.props.labels
      },
      yaxis: { title: 'circRNAs' }
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
          <span className="graph-heading">circRNA exons</span>
          <span className="graph-description">
            Distribution of # of predicted exons per circRNA
          </span>
        </div>
      </Card>
    )
  }
}
