import React from 'react'
import axios from 'axios'
import { Dropdown, Icon, Form, Button } from 'semantic-ui-react'

import { urlExportSpeciesView } from '../../urls.js'

import './css/export-list.css'

export default class ExportList extends React.Component {
  state = {}

  componentDidMount() {
    this.setState({
      chromosome: [],
      classification: [],
      tissue: [],
      tpm: 0,
      nMethods: 0,
      size: 0,
      format: 'csv',
      downloading: false
    })
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleClick = () => {
    if (!this.state.downloading) {
      this.setState({
        downloading: true
      })
      const { speciesId, assemblyId } = this.props
      const {
        chromosome,
        classification,
        tissue,
        tpm,
        nMethods,
        size,
        format
      } = this.state
      axios
        .get(urlExportSpeciesView(speciesId, assemblyId), {
          params: {
            chromosome,
            classification,
            tissue,
            tpm,
            nMethods,
            size,
            format
          }
        })
        .then(response => {
          const filename = response.headers['content-disposition'].split(
            'filename='
          )[1]
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', filename)
          document.body.appendChild(link)
          link.click()
          this.setState({
            downloading: false
          })
        })
    } else {
      alert('Already exporting')
    }
  }

  render() {
    const { data } = this.props

    return (
      <div className="export-list-wrapper">
        <strong className="graphs-heading">Export List</strong>
        <div className="sample-details-divider" />
        <div className="export-field">
          <strong className="export-field-heading">Chromosomes: </strong>
          <Dropdown
            placeholder="All chromosomes"
            multiple
            fluid
            selection
            search
            clearable
            value={this.state.chromosome}
            onChange={this.handleChange}
            name="chromosome"
            options={data.distinctChromosomes.map(chromosome => {
              return {
                key: chromosome,
                text: chromosome,
                value: chromosome
              }
            })}
          />
        </div>
        <div className="export-field">
          <strong className="export-field-heading">Classifications: </strong>
          <Dropdown
            placeholder="All classifications"
            multiple
            fluid
            selection
            search
            clearable
            value={this.state.classification}
            onChange={this.handleChange}
            name="classification"
            options={data.distinctClassifications.map(classification => {
              return {
                key: classification,
                text: classification,
                value: classification
              }
            })}
          />
        </div>
        <div className="export-field">
          <strong className="export-field-heading">Tissues: </strong>
          <Dropdown
            placeholder="All tissues"
            multiple
            fluid
            selection
            search
            clearable
            value={this.state.tissue}
            onChange={this.handleChange}
            name="tissue"
            options={data.distinctTissues.map(tissue => {
              return {
                key: tissue,
                text: tissue,
                value: tissue
              }
            })}
          />
        </div>
        <div className="export-field">
          <strong className="export-field-heading">Minimum TPM: </strong>
          <Form.Input
            name="tpm"
            placeholder="Minimum TPM"
            type="number"
            min={0}
            value={this.state.tpm}
            onChange={this.handleChange}
          />
        </div>
        <div className="export-field">
          <strong className="export-field-heading">Minimum N Methods: </strong>
          <Form.Input
            name="nMethods"
            placeholder="Minimum N Methods"
            type="number"
            min={0}
            value={this.state.nMethods}
            onChange={this.handleChange}
          />
        </div>
        <div className="export-field">
          <strong className="export-field-heading">Minimum Size: </strong>
          <Form.Input
            name="size"
            placeholder="Minimum Size"
            type="number"
            min={0}
            value={this.state.size}
            onChange={this.handleChange}
          />
        </div>
        <div className="export-field">
          <strong className="export-field-heading">Export Format: </strong>
          <Dropdown
            placeholder="All tissues"
            selection
            search
            value={this.state.format}
            onChange={this.handleChange}
            name="format"
            options={[
              { text: 'CSV', value: 'csv' },
              { text: 'FASTA', value: 'fasta' }
            ]}
          />
        </div>
        <Button className="sample-details-button" onClick={this.handleClick}>
          <Icon name="file download" />
          Download
        </Button>
      </div>
    )
  }
}
