import React from 'react'
import axios from 'axios'
import { Dropdown, Icon, Form, Button } from 'semantic-ui-react'

import { urlExportSpeciesView } from '../../urls.js'

import './css/export-list.css'

export default class ExportList extends React.Component {
  state = {}

  componentDidMount() {
    this.setState({
      tissue: [],
      tpm: 0,
      nMethods: 3,
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
      const { tissue, tpm, nMethods, format } = this.state
      axios
        .get(urlExportSpeciesView(speciesId, assemblyId), {
          params: {
            tissue,
            tpm,
            nMethods,
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
        <strong className="graphs-heading">
          <Icon name="download" />
          Export List
        </strong>
        <div className="sample-details-divider" />
        <Form>
          <Form.Dropdown
            as={Form.Field}
            label="Tissues"
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
          <Form.Group>
            <Form.Input
              name="tpm"
              label="Minimum TPM:"
              placeholder="Minimum TPM"
              type="number"
              step="any"
              min={0}
              value={this.state.tpm}
              onChange={this.handleChange}
            />
            <Form.Input
              name="nMethods"
              label="Minimum N Methods:"
              placeholder="Minimum N Methods"
              type="number"
              step="any"
              min={0}
              value={this.state.nMethods}
              onChange={this.handleChange}
            />
            <Form.Dropdown
              as={Form.Field}
              label="Export Format:"
              placeholder="Required format"
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
          </Form.Group>
        </Form>
        <Button className="sample-details-button" onClick={this.handleClick}>
          <Icon name="file download" />
          Download
        </Button>
      </div>
    )
  }
}
