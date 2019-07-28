import React from 'react'
import { connect } from 'react-redux'

import Loader from '../loader'
import { setSampleDetails } from '../../actions'
import SampleStats from './sampleStats'

import './css/sample-details.css'

class SampleDetails extends React.Component {
  componentDidMount() {
    const { speciesId, assemblyId, sampleId } = this.props

    this.props.SetSampleDetails(speciesId, assemblyId, sampleId)
  }

  componentDidUpdate(prevProps) {
    const { speciesId, assemblyId, sampleId } = this.props

    if (
      prevProps.sampleId !== sampleId ||
      prevProps.assemblyId !== assemblyId ||
      prevProps.speciesId !== speciesId
    ) {
      this.props.SetSampleDetails(speciesId, assemblyId, sampleId)
    }
  }
  render() {
    const { sampleDetails, assemblyId, speciesId, sampleId } = this.props
    const { isLoading, data, sample } = sampleDetails
    return (
      <div className="sample-details-wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          data.species && (
            <SampleStats
              data={data}
              sample={sample}
              speciesId={speciesId}
              assemblyId={assemblyId}
              sampleId={sampleId}
            />
          )
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sampleDetails: state.sampleDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetSampleDetails: (speciesId, assemblyId, sampleId) => {
      dispatch(setSampleDetails(speciesId, assemblyId, sampleId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleDetails)
