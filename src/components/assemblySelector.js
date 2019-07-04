import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

import NoAssembly from './noAssembly'
import WrongAssembly from './wrongAssembly'

export default class AssemblySelector extends React.Component {
  render () {
    const { data, assemblyId, speciesId } = this.props
    const speciesViewUrl = `/species/${speciesId}/${assemblyId}/`

    return data.assemblies.length === 0 ? (
      <NoAssembly />
    ) : !data.assemblies.find(
      assembly => assembly.assemblyId.toString() === assemblyId
    ) ? (
      <WrongAssembly />
      ) : (
      <>
        <strong style={{ fontSize: '1.25rem' }}>Genome assembly: </strong>
        {window.location.pathname === speciesViewUrl ||
        window.location.pathname + '/' === speciesViewUrl ? (
          <Dropdown
              selection
              text={
                data.assemblies.find(
                  assembly => assembly.assemblyId.toString() === assemblyId
                ).assemblyName
              }
            >
              <Dropdown.Menu>
              {data.assemblies.map(assembly => {
                  return (
                    <Dropdown.Item
                      as={Link}
                      to={`/species/${speciesId}/${assembly.assemblyId}`}
                      key={assembly.assemblyId}
                      text={assembly.assemblyName}
                    />
                  )
                })}
            </Dropdown.Menu>
            </Dropdown>
          ) : (
            <span style={{ fontSize: '1.2rem', paddingRight: '0.5rem' }}>
              {
                data.assemblies.find(
                  assembly => assembly.assemblyId.toString() === assemblyId
                ).assemblyName
              }
            </span>
          )}
      </>
      )
  }
}
