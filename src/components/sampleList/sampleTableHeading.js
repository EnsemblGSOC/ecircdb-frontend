import React from 'react'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { setSamplesList } from '../../actions'

import './css/sample-table-heading.css'

class SampleTableHeading extends React.Component {
  state = {}

  handleInputChange = (e, { value }) => {
    this.setState(
      {
        [e.target.name]: value
      },
      () => {
        this.props.SetSamplesList(
          this.props.speciesId,
          this.props.assemblyId,
          this.state.sampleAccession,
          this.state.source,
          this.state.description
        )
      }
    )
  }

  render() {
    return (
      <div className="sample-table-container">
        <div className="sample-table-heading-cell">
          <Input
            onChange={this.handleInputChange}
            fluid
            icon="search"
            placeholder="Sample accession"
            name="sampleAccession"
          />
        </div>
        <div className="sample-table-heading-cell">
          <Input
            onChange={this.handleInputChange}
            fluid
            icon="search"
            placeholder="Tisuue"
            name="source"
          />
        </div>
        <div className="sample-table-heading-cell">
          <strong className="color-white">Library size</strong>
        </div>
        <div className="sample-table-heading-cell sample-table-heading-description">
          <Input
            onChange={this.handleInputChange}
            fluid
            icon="search"
            placeholder="Description"
            name="description"
          />
        </div>
      </div>
    )
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
  null,
  mapDispatchToProps
)(SampleTableHeading)
