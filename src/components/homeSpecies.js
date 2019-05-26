import React from 'react'
import { connect } from 'react-redux'
import { Header, Input, Segment } from 'semantic-ui-react'

import SpeciesContainer from './speciesContainer'
import { setSpeciesList } from '../actions'
import '../css/home-species.css'

class HomeSpecies extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    })
    this.props.SetSpeciesList(value)
  }

  render () {
    return (
      <div className='home-description-wrapper'>
        <div>
          <Input
            icon='search'
            placeholder='Search in the available species'
            className='input-wrapper'
            value={this.state.search}
            name='search'
            onChange={this.handleChange}
          />
        </div>
        <Header as='h2' dividing>
          All available species/Results
        </Header>
        <Segment basic className='species-wrapper'>
          <SpeciesContainer />
        </Segment>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetSpeciesList: search => {
      dispatch(setSpeciesList(search))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(HomeSpecies)
