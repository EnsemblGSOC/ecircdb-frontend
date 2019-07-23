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
      text: this.props.text,
      name: 'Number of exons',
      mode: 'markers',
      marker: {
        size: this.props.size
      }
    }

    var data = [trace1]

    var layout = {
      title: 'No. of circRNA vs No. of linear transcripts per locus',
      font: {
        family: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"
      },
      xaxis: {
        title: 'No. of linear transcripts'
      },
      yaxis: { title: 'No. of circRNAs' }
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
