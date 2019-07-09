import React from 'react'
import { connect } from 'react-redux'

import { setSamplesList } from '../../actions'
import SampleTableHeading from './sampleTableHeading'
import SampleTableBody from './sampleTableBody'

import './css/index.css'

class SampleList extends React.Component {
  componentDidMount() {
    const { speciesId, assemblyId } = this.props.match.params

    this.props.SetSamplesList(speciesId, assemblyId)
  }

  componentDidUpdate(prevProps) {
    const { speciesId, assemblyId } = this.props.match.params

    if (
      prevProps.match.params.assemblyId !== assemblyId &&
      prevProps.match.params.speciesId !== speciesId
    ) {
      this.props.SetSamplesList(speciesId, assemblyId)
    }
  }
  render() {
    const { sampleId, speciesId, assemblyId } = this.props.match.params
    return (
      <div className="sample-list-wrapper">
        <strong className="highlights-heading">Samples List</strong>
        <div className="sample-details-divider" />
        <SampleTableHeading speciesId={speciesId} assemblyId={assemblyId} />
        <SampleTableBody
          speciesId={speciesId}
          assemblyId={assemblyId}
          sampleId={sampleId}
        />
        <div className="sample-details-container">
          <strong className="highlights-heading">Samples Details</strong>
          <div className="sample-details-divider" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    samplesList: state.samplesList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetSamplesList: (speciesId, assemblyId, accession, source, description) => {
      dispatch(
        setSamplesList(speciesId, assemblyId, accession, source, description)
      )
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleList)
