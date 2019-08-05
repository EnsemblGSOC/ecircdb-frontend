import React from 'react'
import { sortBy, map } from 'lodash'
import { Card, Table, Tab } from 'semantic-ui-react'

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
              Strucutre-level abundance
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'coordId' ? direction : null}
              onClick={this.handleSort('coordId')}
            >
              Backsplice junction coordinate
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'stableId' ? direction : null}
              onClick={this.handleSort('stableId')}
            >
              Closet Ensembl transcript
            </Table.HeaderCell>
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
              TPM
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'jpm' ? direction : null}
              onClick={this.handleSort('jpm')}
            >
              JPM
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'abundanceRatio' ? direction : null}
              onClick={this.handleSort('abundanceRatio')}
            >
              Abundance percentage
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'gcPerc' ? direction : null}
              onClick={this.handleSort('gcPerc')}
            >
              GC perc
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'rawCount' ? direction : null}
              onClick={this.handleSort('rawCount')}
            >
              Raw count
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'nMethods' ? direction : null}
              onClick={this.handleSort('nMethods')}
            >
              N methods
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {map(
            data.slice(0, 10),
            (
              {
                coordId,
                stableId,
                geneName,
                tpm,
                jpm,
                abundanceRatio,
                gcPerc,
                rawCount,
                nMethods
              },
              index
            ) => (
              <Table.Row key={index}>
                <Table.Cell>{coordId}</Table.Cell>
                <Table.Cell>{stableId}</Table.Cell>
                <Table.Cell>{geneName}</Table.Cell>
                <Table.Cell>{tpm}</Table.Cell>
                <Table.Cell>{jpm}</Table.Cell>
                <Table.Cell>{abundanceRatio} %</Table.Cell>
                <Table.Cell>{gcPerc}</Table.Cell>
                <Table.Cell>{rawCount}</Table.Cell>
                <Table.Cell>{nMethods}</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    )
  }
}
