import React from 'react'
import { Card } from 'semantic-ui-react'

import createPlotlyComponent from 'react-plotlyjs'
import Plotly from 'plotly.js/dist/plotly-cartesian'

import '../speciesView/css/graphs.css'

const PlotlyComponent = createPlotlyComponent(Plotly)

export default class Graph extends React.Component {
  render() {
    var trace1 = {
      y: [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3, 0.6],
      x: [
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene'
      ],
      name: 'gene-1',
      type: 'box',
      boxmean: false
    }

    var trace2 = {
      y: [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
      x: [
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene'
      ],
      name: 'gene-2',
      type: 'box',
      boxmean: false
    }

    var trace3 = {
      y: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],
      x: [
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene',
        'circ RNA gene'
      ],
      name: 'gene-3',
      type: 'box',
      boxmean: false
    }

    var trace4 = {
      y: [0.2, 0.2, 0.6, 1.0, 0.5, 0.4, 0.2, 0.7, 0.9, 0.1, 0.5, 0.3],
      x: [
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene'
      ],
      name: 'gene-4',
      type: 'box',
      boxmean: false
    }

    var trace5 = {
      y: [0.6, 0.7, 0.3, 0.6, 0.0, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.2],
      x: [
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene'
      ],
      name: 'gene-5',
      type: 'box',
      boxmean: false
    }

    var trace6 = {
      y: [0.1, 0.3, 0.1, 0.9, 0.6, 0.6, 0.9, 1.0, 0.3, 0.6, 0.8, 0.5],
      x: [
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene',
        'non circ RNA gene'
      ],
      name: 'gene-6',
      type: 'box',
      boxmean: false
    }

    var data = [trace1, trace2, trace3, trace4, trace5, trace6]

    var layout = {
      title: 'Gene TPM box plot',
      xaxis: {
        title: 'Genes'
      },
      yaxis: {
        title: 'TPM'
      },
      boxmode: 'group'
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
