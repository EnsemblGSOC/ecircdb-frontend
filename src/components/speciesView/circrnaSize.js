import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import './css/graphs.css'

export default class Graph extends React.Component {
  render() {
    var layout = {
      hovermode: 'closest',
      title: 'CircRNA sizes grouped by tissue',
      violinmode: 'group',
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
      },
      legend: {
        tracegroupgap: 0
      },
      violingap: 0,
      violingroupgap: 0,
      xaxis: {
        title: 'Tissues',
        showgrid: true
      },
      yaxis: {
        title: 'Log2 circRNA size'
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
          <span className="graph-heading">CircRNA sizes grouped by tissue</span>
          <span className="graph-description">
            Distributions of genomic span (unspliced sizes) and spliced sizes of
            identified circRNAs per tissue
          </span>
        </div>
      </Card>
    )
  }
}
