import React from 'react'
import { sortBy, map } from 'lodash'
import { Table } from 'semantic-ui-react'

import '../speciesView/css/graphs.css'

export default class Graph extends React.Component {
  state = {
    data: sortBy(this.props.data, 'tpm').reverse(),
    direction: 'descending',
    column: 'tpm'
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: sortBy(data, [clickedColumn]).reverse(),
        direction: 'descending'
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending'
    })
  }

  render() {
    const { column, data, direction } = this.state
    return (
      <Table sortable celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              Gene-level abundance
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'geneName' ? direction : null}
              onClick={this.handleSort('geneName')}
            >
              Gene name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'stableId' ? direction : null}
              onClick={this.handleSort('stableId')}
            >
              Stable Id
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'biotype' ? direction : null}
              onClick={this.handleSort('biotype')}
            >
              Biotype
            </Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'tpm' ? direction : null}
              onClick={this.handleSort('tpm')}
            >
              Max TPM
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'abundanceRatio' ? direction : null}
              onClick={this.handleSort('abundanceRatio')}
            >
              circRNA abundance (%)
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'coordId' ? direction : null}
              onClick={this.handleSort('coordId')}
            >
              circRNA count
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(
            data.slice(0, 10),
            (
              {
                coordId,
                geneName,
                stableId,
                biotype,
                description,
                tpm,
                abundanceRatio
              },
              index
            ) => (
              <Table.Row key={index}>
                <Table.Cell>{geneName}</Table.Cell>
                <Table.Cell>{stableId}</Table.Cell>
                <Table.Cell>{biotype}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{tpm.toFixed(3)}</Table.Cell>
                <Table.Cell>{abundanceRatio.toFixed(3)}</Table.Cell>
                <Table.Cell>{coordId}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    )
  }
}
