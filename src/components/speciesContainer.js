import React from 'react'
import { connect } from 'react-redux'
import { Card, Header, Icon } from 'semantic-ui-react'

import Loader from './loader'
import SpeciesThumbnail from './speciesThumbnail'
import { setSpeciesList } from '../actions'

class SpeciesContainer extends React.Component {
  componentDidMount() {
    this.props.SetSpeciesList()
  }

  render() {
    const { speciesList } = this.props
    return (
      <div>
        <Card.Group itemsPerRow={4} stackable doubling>
          {speciesList.isLoading ? (
            <Loader />
          ) : speciesList.data.length !== 0 ? (
            speciesList.data.map(species => {
              return (
                <SpeciesThumbnail species={species} key={species.taxon_id} />
              )
            })
          ) : (
            <div>
              <div className="species-no-data-container">
                <Header as="h3" icon textAlign="center">
                  <Icon name="frown outline" />
                  Sorry, no data found.
                </Header>
              </div>
            </div>
          )}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    speciesList: state.speciesList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetSpeciesList: () => {
      dispatch(setSpeciesList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeciesContainer)
