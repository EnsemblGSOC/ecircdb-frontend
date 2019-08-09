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
              sorted={column === 'tpm' ? direction : null}
              onClick={this.handleSort('tpm')}
            >
              Max TPM
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'circrnaAbundanceRatio' ? direction : null}
              onClick={this.handleSort('circrnaAbundanceRatio')}
            >
              circRNA abundance percentage
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
            ({ coordId, geneName, tpm, circrnaAbundanceRatio }, index) => (
              <Table.Row key={index}>
                <Table.Cell>{geneName}</Table.Cell>
                <Table.Cell>{tpm}</Table.Cell>
                <Table.Cell>{circrnaAbundanceRatio} %</Table.Cell>
                <Table.Cell>{coordId}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    )
  }
}
