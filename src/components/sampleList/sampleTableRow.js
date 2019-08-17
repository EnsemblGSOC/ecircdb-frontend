import React from 'react'
import { Link } from 'react-router-dom'

import { numberWithCommas } from '../../utils'

import './css/sample-table-row.css'

export default class SampleTableRow extends React.Component {
  render() {
    const { sample, alternate, active, assemblyId, speciesId } = this.props
    return (
      <Link
        to={`/species/${speciesId}/${assemblyId}/sample_list/${
          sample.sampleId
        }`}
        as="div"
        className={`sample-row-container ${
          active
            ? 'sample-row-active'
            : alternate
            ? 'sample-row-alternate'
            : null
        }`}
      >
        <div className="sample-row-cell">{sample.accession}</div>
        <div className="sample-row-cell">{sample.source}</div>
        <div className="sample-row-cell">
          {numberWithCommas(sample.librarySize)}
        </div>
        <div className="sample-row-cell sample-row-description">
          {sample.description}
        </div>
      </Link>
    )
  }
}
