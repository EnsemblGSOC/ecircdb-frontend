import React from 'react'
import { Card } from 'semantic-ui-react'

import createPlotlyComponent from 'react-plotlyjs'
import Plotly from 'plotly.js/dist/plotly-cartesian'

import './css/graphs.css'

const PlotlyComponent = createPlotlyComponent(Plotly)

export default class Graph extends React.Component {
  render () {
    var trace1 = {
      x: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      y: [325, 700, 350, 490, 350, 250, 190, 140, 160, 120],
      text: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'],
      textposition: 'auto',
      hoverinfo: 'none',
      name: 'Number of exons',
      type: 'bar',
      marker: {
        color: '#2185d0'
      }
    }

    var data = [trace1]

    var layout = {
      title: 'Number of exons',
      width: 2,
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
      },
      xaxis: {
        title: 'Number of exons in circRNA'
      },
      yaxis: {
        title: 'Number of circRNAs'
      }
    }

    return (
      <Card className='highlight-card'>
        <div>
          <PlotlyComponent
            data={data}
            layout={layout}
            className='graph-wrapper'
          />
        </div>
        <div className='graph-legend'>
          <span className='graph-heading'>Heading</span>
          <span className='graph-description'>(description)</span>
        </div>
      </Card>
    )
  }
}
