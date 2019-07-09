import React from 'react'
import { Card } from 'semantic-ui-react'

import createPlotlyComponent from 'react-plotlyjs'
import Plotly from 'plotly.js/dist/plotly-cartesian'

import './css/graphs.css'

const PlotlyComponent = createPlotlyComponent(Plotly)

export default class Graph extends React.Component {
  render() {
    var trace1 = {
      x: [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        1000,
        1100,
        1200,
        1300,
        1400,
        1500,
        1600,
        1700,
        1800,
        1900,
        2000
      ],
      y: [
        200,
        2000,
        3000,
        2500,
        2200,
        1900,
        1300,
        1200,
        900,
        800,
        750,
        735,
        700,
        680,
        620,
        550,
        500,
        450,
        400,
        300,
        200
      ],
      textposition: 'auto',
      hoverinfo: 'none',
      name: 'size of exons',
      type: 'bar',
      marker: {
        color: '#2185d0'
      }
    }

    var data = [trace1]

    var layout = {
      title: 'Size of exons',
      width: 2,
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
      },
      xaxis: {
        title: 'Length of exons',
        tickangle: -45
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
          <span className="graph-heading">Heading</span>
          <span className="graph-description">(description)</span>
        </div>
      </Card>
    )
  }
}
