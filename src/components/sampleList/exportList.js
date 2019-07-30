import React from 'react'
import axios from 'axios'
import { Dropdown, Icon, Form, Button, Header } from 'semantic-ui-react'

import { urlExportSampleView } from '../../urls.js'

import './css/export-list.css'

export default class ExportList extends React.Component {
  state = {}

  componentDidMount() {
    this.setState({
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
      const { speciesId, assemblyId, sampleId } = this.props
      const { tpm, nMethods, format } = this.state
      axios
        .get(urlExportSampleView(speciesId, assemblyId, sampleId), {
          params: {
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
    return (
      <div className="export-list-wrapper">
        <Header as="h4">Export List:</Header>
        <Form>
          <Form.Group>
            <Form.Input
              label="Minimum TPM:"
              name="tpm"
              placeholder="Minimum TPM"
              type="number"
              step="any"
              min={0}
              value={this.state.tpm}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Minimum N Methods:"
              name="nMethods"
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
