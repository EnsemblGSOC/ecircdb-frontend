import React from 'react'
import { Card } from 'semantic-ui-react'

import createPlotlyComponent from 'react-plotlyjs'
import Plotly from 'plotly.js/dist/plotly-cartesian'

import './css/graphs.css'

const PlotlyComponent = createPlotlyComponent(Plotly)

export default class Graph extends React.Component {
  render() {
    var trace1 = {
      x: this.props.x,
      y: this.props.y,
      text: this.props.x,
      textposition: 'auto',
      hoverinfo: 'none',
      name: 'Number of circRNAs per locus',
      type: 'bar',
      marker: {
        color: '#2185d0'
      }
    }

    var data = [trace1]

    var layout = {
      title: 'Number of circRNAs per locus',
      width: 2,
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
      },
      xaxis: {
        title: 'Locus id'
      },
      yaxis: {
        title: 'Number of circRNAs'
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
          <span className="graph-heading">Number of circRNAs per locus</span>
          <span className="graph-description">(description)</span>
        </div>
      </Card>
    )
  }
}
