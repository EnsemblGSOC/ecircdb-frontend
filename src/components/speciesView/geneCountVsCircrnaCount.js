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
        name: 'Gene count vs circRNA count',
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
      title: 'Gene count vs circRNA count',
      xaxis: {
        title: '# of circRNAs',
        tickangle: '-90',
        tickvals: this.props.x,
        ticktext: this.props.labels
      },
      yaxis: { title: '# of genes' }
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
          <span className="graph-heading">Gene count vs circRNA count</span>
          <span className="graph-description">(description)</span>
        </div>
      </Card>
    )
  }
}
