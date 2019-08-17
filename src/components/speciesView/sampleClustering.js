import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import './css/graphs.css'

export default class Graph extends React.Component {
  render() {
    var data = this.props.tissueList.map(tissue => {
      return {
        y: this.props.data[tissue].y,
        x: this.props.data[tissue].x,
        mode: 'markers',
        type: 'scatter',
        name: tissue,
        text: this.props.data[tissue].text,
        textposition: 'bottom center'
      }
    })
    var layout = {
      title: 'Sample clustering',
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
        size: 14
      },
      xaxis: {
        title: 'PC1'
      },
      yaxis: {
        title: 'PC2'
      }
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
          <span className="graph-heading">Sample clustering</span>
          <span className="graph-description">
            Sample clustering by PCA using circRNA expression estimates (TPM)
          </span>
        </div>
      </Card>
    )
  }
}
