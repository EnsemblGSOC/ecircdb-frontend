import React from 'react'
import { Card } from 'semantic-ui-react'

import createPlotlyComponent from 'react-plotlyjs'
import Plotly from 'plotly.js/dist/plotly-cartesian'

import '../speciesView/css/graphs.css'

const PlotlyComponent = createPlotlyComponent(Plotly)

export default class Graph extends React.Component {
  render() {
    let x = []
    let y = []
    let text = []

    for (let i = 1; i < 15; i++) {
      text.push(`gene-${i}`)
      y.push(Math.random() * 5 + 5)
      x.push(Math.random() * 2 + 2)
    }

    var trace1 = {
      x: x,
      y: y,
      mode: 'markers',
      type: 'scatter',
      name: '',
      text: text,
      marker: { size: 12 }
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
