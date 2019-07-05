import React from 'react'

export default class LOcationView extends React.Component {
  state = {}

  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.assemblyId !== prevState.assemblyId) {
      return { assemblyId: nextProps.assemblyId }
    } else return null
  }

  render () {
    return (
      <h1>
        LocationView Speicies = {this.props.speciesId} Assembly ={' '}
        {this.state.assemblyId}
      </h1>
    )
  }
}
