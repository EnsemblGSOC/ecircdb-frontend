import React from 'react'
import { Card } from 'semantic-ui-react'
import Plot from 'react-plotly.js'

import '../speciesView/css/graphs.css'

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
        label: this.props.sankey.sankeyLabels
      },

      link: {
        source: [0, 1, 0, 1, 5, 0],
        target: [1, 2, 4, 5, 3, 6],
        value: this.props.sankey.sankeyValues
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
          <Plot
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
