import React from 'react'
import { connect } from 'react-redux'

import Loader from '../loader'
import Highlights from './highlights'
import Graphs from './graphs'
import ExportList from './exportList'
import { setSpeciesStats } from '../../actions'

import './css/index.css'

class SpeciesView extends React.Component {
  componentDidMount() {
    this.props.SetSpeciesStats(this.props.speciesId, this.props.assemblyId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.assemblyId !== this.props.assemblyId) {
      this.props.SetSpeciesStats(this.props.speciesId, this.props.assemblyId)
    }
  }

  render() {
    const { speciesStats } = this.props
    const { data, isLoading } = speciesStats
    return (
      <div className="species-view-wrapper">
        {isLoading ? (
          <Loader />
        ) : Object.keys(data).length === 0 && data.constructor === Object ? (
          <h1>No Data</h1>
        ) : (
          <>
            <Highlights data={data} />
            <Graphs data={data} />
            <ExportList
              data={data}
              speciesId={this.props.speciesId}
              assemblyId={this.props.assemblyId}
            />
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    speciesStats: state.speciesStats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetSpeciesStats: (speciesId, assemblyId) => {
      dispatch(setSpeciesStats(speciesId, assemblyId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeciesView)
