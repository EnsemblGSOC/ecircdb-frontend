import React from 'react'

import { logo } from '../urls'

import '../css/species-description.css'

export default class SpeciesDescription extends React.Component {
  render () {
    const {
      thumbnail,
      scientificName,
      commonName,
      description,
      showDescription
    } = this.props
    return (
      <div className='species-description-wrapper'>
        <div
          className={`species-description-thumbnail-container ${
            !showDescription ? 'species-description-not-visible' : ''
          }`}
        >
          <img
            src={thumbnail || logo()}
            className='species-description-thumbnail'
            alt={scientificName}
          />
        </div>
        <div
          className={`species-description-text-container ${
            !showDescription ? 'species-description-not-visible' : ''
          }`}
        >
          <div className='species-description-scientific-name'>
            {scientificName}
          </div>
          <div className='species-description-common-name'>
            <strong>Common name: </strong>
            {commonName}
          </div>
          {showDescription && (
            <div className='species-description-text'>{description}</div>
          )}
        </div>
      </div>
    )
  }
}
