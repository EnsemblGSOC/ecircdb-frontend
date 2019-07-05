import axios from 'axios'

import { urlSpeciesList, urlSpeciesDetails, urlSpeciesStats } from '../urls'

export const setSpeciesList = (search = '') => {
  return dispatch => {
    dispatch({
      type: 'SET_SPECIES_LIST_LOADING',
      data: true
    })
    axios
      .get(urlSpeciesList(), { params: { search } })
      .then(res => {
        dispatch({
          type: 'SET_SPECIES_LIST',
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'SET_SPECIES_LIST_LOADING',
          data: false
        })
      })
  }
}

export const setSpeciesDetails = id => {
  return dispatch => {
    dispatch({
      type: 'SET_SPECIES_DETAILS_LOADING',
      data: true
    })
    axios
      .get(urlSpeciesDetails(id))
      .then(res => {
        dispatch({
          type: 'SET_SPECIES_DETAILS',
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'SET_SPECIES_DETAILS_LOADING',
          data: false
        })
      })
  }
}

export const setSpeciesStats = (speciesId, assemblyId) => {
  return dispatch => {
    dispatch({
      type: 'SET_SPECIES_STATS_LOADING',
      data: true
    })
    axios
      .get(urlSpeciesStats(speciesId, assemblyId))
      .then(res => {
        dispatch({
          type: 'SET_SPECIES_STATS',
          data: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'SET_SPECIES_STATS_LOADING',
          data: false
        })
      })
  }
}
