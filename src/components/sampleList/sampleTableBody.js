import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Loader from '../loader'
import SampleTableRow from './sampleTableRow'

import './css/sample-table-body.css'

class SampleTableBody extends React.Component {
  render() {
    const { samplesList, sampleId, assemblyId, speciesId } = this.props
    const { data, isLoading } = samplesList
    return (
      <div className="sample-body-container">
        {isLoading ? (
          <Loader />
        ) : data.length === 0 ? (
          <div className="species-details-no-data-container">
            <Header as="h3" icon textAlign="center">
              <Icon name="frown outline" />
              Sorry, no data.
            </Header>
          </div>
        ) : !this.props.sampleId ? (
          <Redirect
            to={`/species/${speciesId}/${assemblyId}/sample_list/${
              data[0].sampleId
            }`}
          />
        ) : (
          data.map((sample, index) => {
            return (
              <SampleTableRow
                key={sample.sampleId}
                sample={sample}
                alternate={index % 2 !== 0}
                active={sampleId === String(sample.sampleId)}
                assemblyId={assemblyId}
                speciesId={speciesId}
              />
            )
          })
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    samplesList: state.samplesList
  }
}

export default connect(mapStateToProps)(SampleTableBody)
