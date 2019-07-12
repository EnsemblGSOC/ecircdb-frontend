import React from 'react'
import ReactDOM from 'react-dom'
import Iframe from 'react-iframe'

import './css/index.css'

export default class GenomeBrowser extends React.Component {
  constructor() {
    super()
    this.state = {
      iFrameHeight: '0px'
    }
  }

  render() {
    return (
      <Iframe
        style={{
          height: this.state.iFrameHeight,
          overflow: 'visible'
        }}
        url={`/genome.html?genome=${this.props.genome}${
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
        onLoad={() => {
          const obj = ReactDOM.findDOMNode(this)
          this.setState({
            iFrameHeight:
              obj.contentWindow.document.body.scrollHeight + 100 + 'px'
          })
        }}
        ref="iframe"
      />
    )
  }
}
