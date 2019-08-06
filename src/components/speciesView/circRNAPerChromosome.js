import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import './css/graphs.css'

export default class Graph extends React.Component {
  render() {
    var trace1 = {
      x: this.props.x,
      y: this.props.y,
      text: this.props.x,
      textposition: 'auto',
      hoverinfo: 'none',
      name: 'Number of distinct circRNAs per chromosomes',
      type: 'bar',
      marker: {
        color: '#2185d0'
      }
    }

    var data = [trace1]

    var layout = {
      title: 'Number of distinct circRNAs per chromosomes',
      width: 2,
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
      },
      xaxis: {
        title: 'Chromosome',
        tickangle: -45
      },
      yaxis: {
        title: 'Number of circRNAs'
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
          <span className="graph-heading">
            Number of distinct circRNAs per chromosomes
          </span>
          <span className="graph-description">(description)</span>
        </div>
      </Card>
    )
  }
}
