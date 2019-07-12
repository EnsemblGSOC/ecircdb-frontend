import React from 'react'
import { connect } from 'react-redux'
import { Button, Dropdown, Icon, Input } from 'semantic-ui-react'

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
        console.log(data)
        this.setState({
          chromosome: findGetParameter('chromosome'),
          searchQuery: findGetParameter('chromosome'),
          start: findGetParameter('start'),
          end: findGetParameter('end'),
          genome: data.genome
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
          console.log(data)
          // Callback to set the default state
          this.setState({
            chromosome: findGetParameter('chromosome'),
            start: findGetParameter('start'),
            end: findGetParameter('end'),
            genome: data.genome
          })
        }
      )
    }
  }

  handleGeneChange = (e, { value }) => {
    this.setState({
      gene: value
    })
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

  copyUrl = () => {
    let range = document.createRange()
    range.selectNodeContents(this.textarea)
    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    document.execCommand('copy')
    sel.removeAllRanges()
  }

  render() {
    const { locationStats } = this.props
    const { data, isLoading } = locationStats
    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 }
    ]
    return isLoading ? (
      <Loader />
    ) : (
      <div className="location_view_wrapper">
        <strong className="location_view_heading">Gene: </strong>
        <Dropdown
          clearable
          selection
          options={options}
          placeholder="Select a circRNA producing gene"
          value={this.state.gene}
          onChange={this.handleGeneChange}
        />
        <strong className="location_view_heading_or">or</strong>
        <strong className="location_view_heading">Location(manually): </strong>
        <Dropdown
          noResultsMessage={null}
          search
          selection
          options={options}
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
          value={this.state.start}
          placeholder="start"
          onChange={this.handleInputChange}
        />
        <strong className="location_view_heading location_view_symbol">
          -
        </strong>
        <Input
          name="end"
          value={this.state.end}
          placeholder="end"
          onChange={this.handleInputChange}
        />
        <div className="location_view_url">
          <strong
            className="location_view_heading_or"
            ref={textarea => (this.textarea = textarea)}
          >
            http://{window.location.host}
            {window.location.pathname}?chromosome={this.state.chromosome}&start=
            {this.state.start}&end={this.state.end}
          </strong>
          <Button className="sample-details-button" onClick={this.copyUrl}>
            <Icon name="copy" />
            Copy
          </Button>
        </div>
        <div className="browser-iframe-container">
          {/* <Iframe
            url={`https://ensemblgsoc.github.io/ecircdb-genoverse/?genome=${
              this.state.genome
            }${
              this.state.chromosome && this.state.start && this.state.end
                ? `&r=${this.state.chromosome}:${this.state.start}-${
                    this.state.end
                  }`
                : ''
            }`}
            width="100%"
            scrolling="no"
            frameborder="0"
            className="browser-iframe"
            onLoad={e => {
              console.log('hihiho', e.contentWindow.document.body.scrollHeight)
            }}
          /> */}
          <GenomeBrowser
            genome={this.state.genome}
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
