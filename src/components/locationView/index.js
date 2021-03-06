import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Input } from 'semantic-ui-react'

import Loader from '../loader'
import GenomeBrowser from './geomeBrowser'
import { findGetParameter } from '../../utils.js'
import { setLocationStats } from '../../actions'

import './css/index.css'

class LocationView extends React.Component {
  state = {
    searchQuery: ''
  }

  componentDidMount() {
    this.props.SetLocationStats(
      this.props.speciesId,
      this.props.assemblyId,
      data => {
        this.setState({
          chromosome: findGetParameter('chromosome'),
          searchQuery: findGetParameter('chromosome'),
          start: findGetParameter('start'),
          end: findGetParameter('end')
        })
        // Callback to set the default chromosome
      }
    )
  }

  componentDidUpdate(prevProps) {
    if (prevProps.assemblyId !== this.props.assemblyId) {
      this.props.SetLocationStats(
        this.props.speciesId,
        this.props.assemblyId,
        data => {
          // Callback to set the default state
          this.setState({
            chromosome: findGetParameter('chromosome'),
            start: findGetParameter('start'),
            end: findGetParameter('end')
          })
        }
      )
    }
  }

  handleGeneChange = (e, { value }) => {
    if (value) {
      this.setState({
        gene: value,
        chromosome: value.split(':')[0],
        start: value.split(':')[1].split('-')[0],
        end: value.split(':')[1].split('-')[1]
      })
    } else {
      this.setState({
        gene: ''
      })
    }
  }

  handleInputChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    })
  }

  handleChromosomeChange = (e, { searchQuery, value }) =>
    this.setState({ searchQuery, chromosome: value })

  handleChromosomeSearchChange = (e, { searchQuery }) =>
    this.setState({ searchQuery, chromosome: searchQuery })

  render() {
    const { locationStats, speciesId, assemblyId } = this.props
    const { data, isLoading } = locationStats
    const { chromosomes, genes } = data
    return isLoading ? (
      <Loader />
    ) : (
      <div className="location_view_wrapper">
        <strong className="location_view_heading">Gene: </strong>
        <Dropdown
          clearable
          selection
          options={
            genes
              ? genes.map((gene, index) => {
                  return {
                    key: index,
                    text: gene.geneName,
                    value: `${gene.seqRegionName}:${gene.seqRegionStart}-${
                      gene.seqRegionEnd
                    }`
                  }
                })
              : []
          }
          placeholder="Select a circRNA producing gene"
          value={this.state.gene}
          onChange={this.handleGeneChange}
        />
        <strong className="location_view_heading_or">or</strong>
        <strong className="location_view_heading">Location: </strong>
        <Dropdown
          noResultsMessage={null}
          clearable
          search
          selection
          options={
            chromosomes
              ? chromosomes.map((chromosome, index) => ({
                  key: index,
                  text: chromosome,
                  value: chromosome
                }))
              : []
          }
          placeholder="Enter chromosome name or choose from top X"
          value={this.state.chromosome}
          searchQuery={this.state.searchQuery}
          onChange={this.handleChromosomeChange}
          onSearchChange={this.handleChromosomeSearchChange}
        />
        <strong className="location_view_heading location_view_symbol">
          :
        </strong>
        <Input
          name="start"
          type="number"
          value={this.state.start}
          placeholder="start"
          onChange={this.handleInputChange}
        />
        <strong className="location_view_heading location_view_symbol">
          -
        </strong>
        <Input
          name="end"
          type="number"
          value={this.state.end}
          placeholder="end"
          onChange={this.handleInputChange}
        />
        <div className="browser-iframe-container">
          <GenomeBrowser
            speciesId={speciesId}
            assemblyId={assemblyId}
            chromosome={this.state.chromosome}
            start={this.state.start}
            end={this.state.end}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    locationStats: state.locationStats
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetLocationStats: (speciesId, assemblyId, onLoad) => {
      dispatch(setLocationStats(speciesId, assemblyId, onLoad))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationView)
