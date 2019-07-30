import React from 'react'
import axios from 'axios'
import { Icon, Dropdown, Button } from 'semantic-ui-react'

import { urlExportSampleView } from '../../urls.js'

import './css/export-list.css'

export default class ExportList extends React.Component {
  state = {}

  componentDidMount() {
    this.setState({
      downloading: false
    })
  }

  handleChange = (e, { name, value }) => {
    if (!this.state.downloading) {
      this.setState({
        downloading: true
      })
      const { speciesId, assemblyId, sampleId } = this.props
      axios
        .get(urlExportSampleView(speciesId, assemblyId, sampleId), {
          params: {
            format: value
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
      <>
        <Dropdown
          onChange={this.handleChange}
          name="format"
          options={[
            { text: 'CSV', value: 'csv' },
            { text: 'BED', value: 'bed' }
          ]}
          labeled
          button
          className="sample-details-button  icon"
          icon="file download"
          text="Export List"
        />
      </>
    )
  }
}
