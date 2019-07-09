import React from 'react'
import { Card } from 'semantic-ui-react'

import createPlotlyComponent from 'react-plotlyjs'
import Plotly from 'plotly.js/dist/plotly'

import '../speciesView/css/graphs.css'

const PlotlyComponent = createPlotlyComponent(Plotly)

export default class Graph extends React.Component {
  render() {
    var data = {
      type: 'sankey',
      orientation: 'h',
      node: {
        pad: 15,
        thickness: 30,
        line: {
          color: 'black',
          width: 0.5
        },
        label: [
          'Library size (3kb)',
          'Mapped reads (2kb)',
          'Spliced reads (1.2kb)',
          'Canonical spliced reads (0.5kb) ',
          'Backspliced reads (0.2kb)',
          'Unmapped reads (1kb)'
        ]
      },

      link: {
        source: [0, 1, 2, 2, 0],
        target: [1, 2, 3, 4, 5],
        value: [2, 1.2, 0.5, 0.2, 1]
      }
    }

    data = [data]

    var layout = {
      title: 'Statistics about the sample',
      font: {
        size: 10
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
      </Card>
    )
  }
}
