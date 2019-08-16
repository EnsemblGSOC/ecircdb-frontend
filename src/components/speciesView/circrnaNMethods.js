import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'
import squarify from 'squarify'

import './css/graphs.css'

export default class Graph extends React.Component {
  render() {
    // declaring arrays
    var shapes = []
    var annotations = []
    var counter = 0

    // For Hover Text
    var x_trace = []
    var y_trace = []
    var text = []

    //colors
    const colors = [
      'rgb(166,206,227)',
      'rgb(31,120,180)',
      'rgb(178,223,138)',
      'rgb(51,160,44)',
      'rgb(251,154,153)',
      'rgb(227,26,28)',
      'rgb(253,191,111)',
      'rgb(255,127,0)',
      'rgb(202,178,214)',
      'rgb(106,61,154)',
      'rgb(255,255,153)',
      'rgb(177,89,40)'
    ]

    const valueObject = this.props.values.map((x, index) => {
      return {
        value: x,
        name: this.props.labels[index],
        color: colors[index % colors.length]
      }
    })

    // Generate Rectangles using Treemap-Squared
    const rectangles = squarify(valueObject, {
      x0: 0,
      y0: 0,
      x1: 100,
      y1: 100
    })

    console.log(rectangles)

    for (var i in rectangles) {
      var shape = {
        type: 'rect',
        x0: rectangles[i]['x0'],
        y0: rectangles[i]['y0'],
        x1: rectangles[i]['x1'],
        y1: rectangles[i]['y1'],
        fillcolor: rectangles[i]['color'],
        line: {
          width: 2
        }
      }
      shapes.push(shape)
      var annotation = {
        x: (rectangles[i]['x0'] + rectangles[i]['x1']) / 2,
        y: (rectangles[i]['y0'] + rectangles[i]['y1']) / 2,
        text: `${String(this.props.values[counter])};NMethods: ${String(
          this.props.labels[counter]
        )}`,
        showarrow: false
      }
      annotations.push(annotation)

      // For Hover Text
      x_trace.push((rectangles[i]['x0'] + rectangles[i]['x1']) / 2)
      y_trace.push((rectangles[i]['y0'] + rectangles[i]['y1']) / 2)
      text.push(`NMethods: ${String(this.props.labels[counter])}`)

      // Incrementing Counter
      counter++
    }

    // Generating Trace for Hover Text
    var trace = {
      x: x_trace,
      y: y_trace,
      text: text,
      mode: 'text',
      type: 'scatter'
    }

    var data = [trace]

    var layout = {
      title: 'circRNA n_methods',
      shapes: shapes,
      hovermode: 'closest',
      annotations: annotations,
      xaxis: {
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        showgrid: false,
        zeroline: false
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
          <span className="graph-heading">circRNA n_methods</span>
          <span className="graph-description">
            Number of identified circRNAs grouped by number of published methods
            confirming each backsplice event
          </span>
        </div>
      </Card>
    )
  }
}
