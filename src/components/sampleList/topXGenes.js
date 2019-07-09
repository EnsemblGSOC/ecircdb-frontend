import React from 'react'
import { Card } from 'semantic-ui-react'

import createPlotlyComponent from 'react-plotlyjs'
import Plotly from 'plotly.js/dist/plotly-cartesian'

import '../speciesView/css/graphs.css'

const PlotlyComponent = createPlotlyComponent(Plotly)

export default class Graph extends React.Component {
  render() {
    var x = []
    var y = []

    for (var i = 0; i < 10; i++) {
      x[i] = Math.random() * 10
      y[i] = `circRNA-${10 - i}`
    }

    x.sort()

    var trace = {
      x: x,
      y: y,
      type: 'bar',
      orientation: 'h'
    }

    var data = [trace]

    var layout = {
      title: 'Top X circRNA based on abundance',
      xaxis: {
        title: 'Abundance'
      },
      yaxis: {
        title: 'circRNA'
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
