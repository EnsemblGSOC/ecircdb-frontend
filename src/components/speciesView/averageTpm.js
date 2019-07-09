import React from 'react'
import { Card } from 'semantic-ui-react'

import createPlotlyComponent from 'react-plotlyjs'
import Plotly from 'plotly.js/dist/plotly'

import './css/graphs.css'

const PlotlyComponent = createPlotlyComponent(Plotly)

export default class Graph extends React.Component {
  render() {
    var trace1 = {
      y: [0.2, 0.15, 0.18, 0.6, 0.21, 0.3, 0.4],
      type: 'box',
      name: 'Cortex',
      boxmean: 'sd',
      boxpoints: 'all'
    }

    var trace2 = {
      y: [0.2, 0.25, 0.18, 0.6, 0.21, 0.3, 0.4, 0.55, 0.5],
      type: 'box',
      name: 'Hipp.',
      boxmean: 'sd',
      boxpoints: 'all'
    }

    var trace3 = {
      y: [0.4, 0.45, 0.48, 0.6, 0.21, 0.3, 0.4, 0.55, 0.5],
      type: 'box',
      name: 'Heart',
      boxmean: 'sd',
      boxpoints: 'all'
    }

    var data = [trace1, trace2, trace3]

    var layout = {
      title: 'Average (TPM)',
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
      },
      xaxis: {
        title: 'Tissues'
      },
      yaxis: {
        title: 'TPM'
      }
    }

    return (
      <Card className="highlight-card">
        <div>
          <PlotlyComponent
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
