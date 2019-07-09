import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Header, Icon, Breadcrumb } from 'semantic-ui-react'

import Loader from './loader'
import { setSpeciesDetails } from '../actions'

import '../css/species-details.css'

class SpeciesDetails extends React.Component {
  componentDidMount () {
    this.props.SetSpeciesDetails(this.props.match.params.speciesId)
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
            {data.assemblies.length !== 0 ? (
              match.params.assemblyId ? (
                <>
                  <Breadcrumb size='huge'>
                    <Breadcrumb.Section>
                      <Header as='h2' className='active-breadcrumb'>
                        {data.scientificName}
                      </Header>
                    </Breadcrumb.Section>
                    <Breadcrumb.Divider icon='right chevron' />
                    {data.assemblies.find(
                      assembly =>
                        assembly.assemblyId.toString() ===
                        match.params.assemblyId
                    ) ? (
                      <>
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
                      ) : (
                        'Not Found'
                      )}
                  </Breadcrumb>
                  <div className='sample-details-divider' />
                </>
              ) : (
                <Redirect
                  to={`/species/${match.params.speciesId}/${
                    data.assemblies[0].assemblyId
                  }`}
                />
              )
            ) : (
              <div>hello</div>
            )}
          </div>
        ) : (
          <div className='species-details-no-data-container'>
            <Header as='h3' icon textAlign='center'>
              <Icon name='frown outline' />
              Sorry, no data found.
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
