import React from 'react'
import ReactDOM from 'react-dom'
import Iframe from 'react-iframe'

import './css/index.css'

export default class GenomeBrowser extends React.Component {
  constructor() {
    super()
    this.state = {
      iFrameHeight: '600px'
    }
  }

  render() {
    return (
      <Iframe
        style={{
          height: this.state.iFrameHeight,
          overflow: 'visible'
        }}
        url={`/genome.html?assemblyId=${this.props.assemblyId}&speciesId=${
          this.props.speciesId
        }${
          this.props.chromosome && this.props.start && this.props.end
            ? `&r=${this.props.chromosome}:${this.props.start}-${
                this.props.end
              }`
            : ''
        }`}
        width="100%"
        height={this.state.iFrameHeight}
        scrolling="no"
        className="browser-iframe"
        ref="iframe"
      />
    )
  }
}
