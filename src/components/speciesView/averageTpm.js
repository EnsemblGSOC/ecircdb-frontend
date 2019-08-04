import React from 'react'
import { Card } from 'semantic-ui-react'

import Plot from 'react-plotly.js'
// import createPlotlyComponent from 'react-plotlyjs'
// import Plotly from 'plotly.js/dist/plotly'

import './css/graphs.css'

// const PlotlyComponent = createPlotlyComponent(Plotly)

export default class Graph extends React.Component {
  render () {
    var layout = {
      title: 'Average circRNA expression (TPM)',
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
        size: '24px'
      },
      xaxis: {
        title: 'Tissues'
      },
      yaxis: {
        title: 'Log2 expression estimate'
      }
    }

    return (
      <Card className='highlight-card'>
        <div>
          <Plot
            data={this.props.data}
            layout={layout}
            responsive
            className='graph-wrapper'
          />
        </div>
        <div className='graph-legend'>
          <span className='graph-heading'>
            Average circRNA expression (TPM)
          </span>
          <span className='graph-description'>(description)</span>
        </div>
      </Card>
    )
  }
}
