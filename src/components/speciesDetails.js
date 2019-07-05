import React from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink as Link, Switch, Route } from 'react-router-dom'
import { Header, Icon, Breadcrumb, Menu } from 'semantic-ui-react'

import Loader from './loader'
import SpeciesDescription from './speciesDescription'
import AssemblySelector from './assemblySelector'
import SpeciesView from './speciesView'
import SampleList from './sampleList'
import LocationView from './locationView'
import { setSpeciesDetails } from '../actions'

import '../css/species-details.css'

class SpeciesDetails extends React.Component {
  state = {
    showDescription: true
  }

  componentDidMount () {
    this.props.SetSpeciesDetails(this.props.match.params.speciesId)
  }

  changeDescriptionVisibility = () => {
    this.setState({
      showDescription: !this.state.showDescription
    })
  }

  render () {
    const { speciesDetails, match } = this.props
    const { data } = speciesDetails
    return (
      <div className='species-details-container'>
        {speciesDetails.isLoading ? (
          <Loader />
        ) : data.taxonId ? (
          <div>
            {match.params.assemblyId || data.assemblies.length === 0 ? (
              <>
                <div className='breadcrumb-wrapper'>
                  <Breadcrumb size='huge'>
                    <Breadcrumb.Section>
                      <Header as='h2' className='active-breadcrumb'>
                        {data.scientificName}
                      </Header>
                    </Breadcrumb.Section>
                    {data.assemblies.find(
                      assembly =>
                        assembly.assemblyId.toString() ===
                        match.params.assemblyId
                    ) && (
                      <>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section className='active-breadcrumb'>
                          <Header as='h2' className='active-breadcrumb'>
                            {
                              data.assemblies.find(
                                assembly =>
                                  assembly.assemblyId.toString() ===
                                  match.params.assemblyId
                              ).assemblyName
                            }
                          </Header>
                        </Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section>
                          <Header as='h2'>Species View</Header>
                        </Breadcrumb.Section>
                      </>
                    )}
                  </Breadcrumb>
                  <strong
                    className='description-visibility-button'
                    onClick={this.changeDescriptionVisibility}
                  >
                    {this.state.showDescription ? 'Hide' : 'Show'} description
                  </strong>
                </div>
                <div className='sample-details-divider' />
                <Menu>
                  <Menu.Item
                    as={Link}
                    to={`/species/${match.params.speciesId}/${
                      match.params.assemblyId
                    }/`}
                    exact
                  >
                    Species View
                  </Menu.Item>
                  <Menu.Item
                    as={Link}
                    to={`/species/${match.params.speciesId}/${
                      match.params.assemblyId
                    }/sample_list/`}
                    exact
                  >
                    Sample List
                  </Menu.Item>
                  <Menu.Item
                    as={Link}
                    to={`/species/${match.params.speciesId}/${
                      match.params.assemblyId
                    }/location_view/`}
                    exact
                  >
                    Location view
                  </Menu.Item>
                </Menu>
                <SpeciesDescription
                  thumbnail={data.thumbnail}
                  scientificName={data.scientificName}
                  commonName={data.commonName}
                  description={data.description}
                  showDescription={this.state.showDescription}
                />
                <AssemblySelector
                  data={data}
                  speciesId={match.params.speciesId}
                  assemblyId={match.params.assemblyId}
                />
                {data.assemblies.length !== 0 &&
                  data.assemblies.find(
                    assembly =>
                      assembly.assemblyId.toString() === match.params.assemblyId
                  ) && (
                  <Switch>
                    <Route
                      path={`/species/${match.params.speciesId}/${
                        match.params.assemblyId
                      }`}
                      exact
                      render={() => (
                        <SpeciesView
                          assemblyId={match.params.assemblyId}
                          speciesId={match.params.speciesId}
                        />
                      )}
                    />
                    <Route
                      path={`/species/${match.params.speciesId}/${
                        match.params.assemblyId
                      }/sample_list`}
                      render={() => (
                        <SampleList
                          assemblyId={match.params.assemblyId}
                          speciesId={match.params.speciesId}
                        />
                      )}
                    />
                    <Route
                      path={`/species/${match.params.speciesId}/${
                        match.params.assemblyId
                      }/location_view`}
                      render={() => (
                        <LocationView
                          assemblyId={match.params.assemblyId}
                          speciesId={match.params.speciesId}
                        />
                      )}
                    />
                  </Switch>
                )}
              </>
            ) : (
              <Redirect
                to={`/species/${match.params.speciesId}/${
                  data.assemblies[0].assemblyId
                }`}
              />
            )}
          </div>
        ) : (
          <div className='species-details-no-data-container'>
            <Header as='h3' icon textAlign='center'>
              <Icon name='frown outline' />
              Sorry, no species with given id.
            </Header>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    speciesDetails: state.speciesDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetSpeciesDetails: id => {
      dispatch(setSpeciesDetails(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeciesDetails)
